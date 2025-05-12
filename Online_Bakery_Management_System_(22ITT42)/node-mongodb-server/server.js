const http = require('http');
const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'bakehub_db';
let db;

MongoClient.connect(url, { useUnifiedTopology: true })
    .then(client => {
        db = client.db(dbName);
        console.log('Connected to MongoDB');
    })
    .catch(error => console.error('MongoDB connection error:', error));

const server = http.createServer(async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        return res.end();
    }

    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();

        if (body.length > 1e6) req.connection.destroy();
    });

    req.on('end', async () => {
        try {
            if (req.method === 'POST' && req.url === '/addFeedback') {
                let data = JSON.parse(body);
                let result = await db.collection('feedbacks').insertOne(data);
                res.end(JSON.stringify({ message: 'Feedback added', id: result.insertedId }));
            }

            else if (req.method === 'GET' && req.url === '/feedbacks') {
                let items = await db.collection('feedbacks').find().toArray();
                res.end(JSON.stringify(items));
            }

            else if (req.method === 'PUT' && req.url.startsWith('/updateFeedback/')) {
                let id = req.url.split('/')[2];
                let data = JSON.parse(body);

                let result = await db.collection('feedbacks').updateOne(
                    { _id: new ObjectId(id) },
                    { $set: { name: data.name, age: data.age, feedback: data.feedback } }  // ✅ Fixed: now updating age too!
                );

                res.end(JSON.stringify({ message: result.modifiedCount ? 'Feedback updated' : 'No changes made' }));
            }

            else if (req.method === 'DELETE' && req.url.startsWith('/deleteFeedback/')) {
                let id = req.url.split('/')[2];
                await db.collection('feedbacks').deleteOne({ _id: new ObjectId(id) });
                res.end(JSON.stringify({ message: 'Feedback deleted' }));
            }

            else {
                res.writeHead(404);
                res.end(JSON.stringify({ message: 'Not Found' }));
            }
        } catch (error) {
            console.error('Server error:', error);
            res.writeHead(500);
            res.end(JSON.stringify({ message: 'Internal Server Error' }));
        }
    });
});

server.listen(3000, () => console.log('Server running on port 3000'));

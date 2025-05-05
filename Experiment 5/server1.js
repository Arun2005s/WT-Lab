const http = require("http");
const url = require("url");
const qs = require("querystring");

const validUser = {
    name: "Arun",
    password: "arun"
};
function onRequest(request, response) {
    var path = url.parse(request.url).pathname;
    console.log("Request for " + path + " received");

    if (path === "/login") {
        var query = url.parse(request.url).query;
        var params = qs.parse(query);

        var name = params["name"];
        var password = params["password"];

        response.writeHead(200, { "Content-Type": "text/plain" });

        if (name === validUser.name && password === validUser.password) {
            response.write("Login Successful! Welcome, " + name);
        } else {
            response.write("Invalid Name or Password!");
        }

        response.end();
    } else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not Found");
        response.end();
    }
}
http.createServer(onRequest).listen(3333);
console.log("Server has started on port 3333");
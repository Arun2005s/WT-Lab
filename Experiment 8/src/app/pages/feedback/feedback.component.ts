import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbacks: any[] = [];
  newName: string = '';
  newAge: number | null = null;
  newFeedback: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchFeedbacks();
  }

  fetchFeedbacks() {
    this.http.get<any[]>('http://localhost:3000/feedbacks').subscribe(data => {
      this.feedbacks = data;
    }, error => {
      console.error('Error fetching feedbacks:', error);
    });
  }

  addFeedback() {
    if (!this.newName.trim() || !this.newFeedback.trim() || this.newAge === null) {
      alert("Please enter name, age, and feedback.");
      return;
    }

    const payload = { name: this.newName, age: this.newAge, feedback: this.newFeedback };
    this.http.post('http://localhost:3000/addFeedback', payload).subscribe(response => {
      console.log(response);
      this.fetchFeedbacks();  
      this.newName = '';
      this.newAge = null;
      this.newFeedback = '';
    }, error => {
      console.error('Error adding feedback:', error);
    });
  }

  updateFeedback(fb: any) {
    const payload = { name: fb.name, age: fb.age, feedback: fb.feedback };
    this.http.put(`http://localhost:3000/updateFeedback/${fb._id}`, payload).subscribe((res: any) => {
      alert(res.message);
      this.fetchFeedbacks();
    }, error => {
      console.error('Error updating feedback:', error);
    });
  }

  deleteFeedback(id: string) {
    if (!confirm("Are you sure you want to delete this feedback?")) return;

    this.http.delete(`http://localhost:3000/deleteFeedback/${id}`).subscribe((res: any) => {
      alert(res.message);
      this.fetchFeedbacks();
    }, error => {
      console.error('Error deleting feedback:', error);
    });
  }
}

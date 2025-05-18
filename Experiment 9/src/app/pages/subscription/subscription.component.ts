import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  subscriptionForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.subscriptionForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      plan: ['', Validators.required],
    });
  }
  get f() {
    return this.subscriptionForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.subscriptionForm.invalid) {
      return;
    }

    console.log('Form submitted successfully!', this.subscriptionForm.value);
    alert('Subscription successful!');
    this.subscriptionForm.reset();
    this.submitted = false;
  }
}

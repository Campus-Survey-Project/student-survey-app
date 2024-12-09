import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Survey } from '../models/survey.model';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
  imports: [CommonModule, FormsModule, RouterModule],
})
export class SurveyFormComponent {
  survey: Survey = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    email: '',
    feedback: '',
    gradMonth: '',
    gradYear: 0,
    likedCampus: [],
    recommendLevel: '',
    visitDate: '',
    interestedIn: '' // Add this field and bind it to the form
  };
  

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.survey.visitDate) {
      const formattedDate = new Date(this.survey.visitDate).toISOString().split('T')[0];
      this.survey.visitDate = formattedDate;
    }
  
    console.log('Survey Payload:', this.survey); // Log the payload
    this.http.post<Survey>('http://localhost:8080/api/surveys', this.survey).subscribe({
      next: (response) => {
        console.log('Survey submitted successfully:', response);
        alert('Survey submitted successfully!');
        this.resetSurvey();
      },
      error: (error) => {
        console.error('Error submitting survey:', error);
        alert('Failed to submit survey.');
      },
    });
  }
  
  
  

  resetSurvey() {
    this.survey = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      email: '',
      feedback: '',
      visitDate: '',
      gradMonth: '',
      gradYear: '',
      likedCampus: [],
      recommendLevel: '',
      interestedIn: ''
    };
  }
}

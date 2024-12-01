import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-survey-form',
  standalone: true,
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
  imports: [CommonModule, FormsModule],
})
export class SurveyFormComponent {
  survey = {
    name: '',
    email: '',
    feedback: '',
    visitDate: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:8080/api/surveys', this.survey).subscribe(
      (response) => {
        alert('Survey submitted successfully!');
        console.log(response);
      },
      (error) => {
        alert('Error submitting survey. Please try again.');
        console.error(error);
      }
    );
  }
}


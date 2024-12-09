import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Survey } from '../models/survey.model';
@Component({
  selector: 'app-survey-list',
  standalone: true,
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
  imports: [CommonModule, RouterModule],
})
export class SurveyListComponent implements OnInit {
  surveys: Survey[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadSurveys();
  }

  loadSurveys() {
    this.http.get<Survey[]>('http://localhost:8080/api/surveys').subscribe({
      next: (response) => {
        this.surveys = response;
        console.log('Surveys loaded successfully:', this.surveys);
      },
      error: (error) => {
        console.error('Error fetching surveys:', error);
        alert('Failed to fetch surveys.');
      }
    });
  }
}


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-survey-list',
  standalone: true,
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
  imports: [CommonModule],
})
export class SurveyListComponent implements OnInit {
  surveys: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/api/surveys').subscribe(
      (data: any) => {
        this.surveys = data;
        console.log('Surveys fetched:', data);
      },
      (error) => {
        alert('Error fetching surveys. Please try again.');
        console.error(error);
      }
    );
  }
}


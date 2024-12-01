import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyListComponent } from './survey-list/survey-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'survey-form', component: SurveyFormComponent },
  { path: 'survey-list', component: SurveyListComponent },
];

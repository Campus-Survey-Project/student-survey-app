import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { SurveyFormComponent } from './app/survey-form/survey-form.component';
import { SurveyListComponent } from './app/survey-list/survey-list.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'survey-form', component: SurveyFormComponent },
      { path: 'survey-list', component: SurveyListComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
    importProvidersFrom(HttpClientModule), // Provide HttpClientModule globally
  ],
}).catch((err) => console.error(err));

import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, Event, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule], // Add RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed typo: styleUrls
})
export class AppComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        console.log('NavigationStart:', event.url); // Triggered when navigation starts
      } else if (event instanceof NavigationEnd) {
        console.log('NavigationEnd:', event.url); // Triggered when navigation ends successfully
      } else if (event instanceof NavigationError) {
        console.error('NavigationError:', event.error); // Triggered when navigation fails
      } else if (event instanceof NavigationCancel) {
        console.warn('NavigationCancel:', event.reason); // Triggered when navigation is canceled
      }
    });
  }
}

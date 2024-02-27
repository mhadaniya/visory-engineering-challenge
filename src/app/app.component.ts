import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventsGridComponent } from './components/events-grid/events-grid.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    EventsGridComponent,
    EventCardComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'visory-engineering-challenge';
  keyword: string = '';
  city: string = '';
  startDate: string = '';
  endDate: string = '';

}

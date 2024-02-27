import { Component, Input } from '@angular/core';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() event: Event | undefined;

  get firstImageUrl(): string {
    if (this.event && this.event.images && this.event.images.length > 0) {
      return this.event.images[3].url;
    }

    return 'https://images.unsplash.com/photo-1549451371-64aa98a6f660?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1280&amp;q=144';
  }

  get date(): string {
    if (this.event && this.event.dates.start && this.event.dates.start.localDate) {
      return this.event.dates.start.localDate;
    }

    return 'n/a';
  }

}

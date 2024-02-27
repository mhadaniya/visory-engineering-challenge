import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { Event } from '../../models/event';
import { EventsService } from '../../services/events.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-events-grid',
  standalone: true,
  imports: [EventCardComponent, NgFor, NgIf],
  templateUrl: './events-grid.component.html',
  styleUrl: './events-grid.component.css'
})
export class EventsGridComponent implements OnInit, OnChanges {
  events: Event[] = [];

  @Input()
  keyword: string = '';
  @Input()
  city: string = '';
  @Input()
  startDate: string = '';
  @Input()
  endDate: string = '';

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.loadEvents();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['keyword'] && !changes['keyword'].firstChange) {
      this.loadEvents();
    }
    if (changes['city'] && !changes['city'].firstChange) {
      this.loadEvents();
    }
  }

  loadEvents() {
    this.eventsService.getEvents(this.keyword, this.city).subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }
}

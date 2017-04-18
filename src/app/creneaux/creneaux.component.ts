import {ChangeDetectionStrategy, Component, OnChanges, OnInit} from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { isSameMonth, isSameDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, startOfDay, endOfDay, format } from 'date-fns';

@Component({
  selector: 'app-creneaux',
  templateUrl: './creneaux.component.html',
  styleUrls: ['./creneaux.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class CreneauxComponent implements OnInit {
  viewDate: Date = new Date();
  events = [];

  view = 'month';

  getStart: any = {
    month: startOfMonth,
    week: startOfWeek,
    day: startOfDay
  }[this.view];

  getEnd: any = {
    month: endOfMonth,
    week: endOfWeek,
    day: endOfDay
  }[this.view];


  constructor() {
  }

  ngOnInit(): void {
    this.fetchRdv();
  }

  fetchRdv() {}

}

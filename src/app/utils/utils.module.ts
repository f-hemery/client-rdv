import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {DateTimePickerComponent} from "../date-time-picker/date-time-picker.component";
import {CalendarModule} from "angular-calendar";
import {NgbDatepickerModule, NgbTimepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    CalendarModule,
  ],
  declarations: [
    HeaderComponent,
    DateTimePickerComponent,
  ],
  exports: [
    HeaderComponent,
    DateTimePickerComponent,
  ]
})
export class UtilsModule {
}

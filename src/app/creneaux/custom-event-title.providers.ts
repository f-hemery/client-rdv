/**
 * Created by hemery on 19/04/2017.
 */
import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';

export class CustomEventTitle extends CalendarEventTitleFormatter {

    // you can override any of the methods defined in the parent class

    monthTooltip(event: CalendarEvent): string {
        return;
    }

    weekTooltip(event: CalendarEvent): string {
        return;
    }

    dayTooltip(event: CalendarEvent): string {
        return;
    }

}
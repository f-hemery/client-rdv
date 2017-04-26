import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {CalendarEvent} from "angular-calendar";
import {
    endOfDay,
    endOfMonth,
    endOfWeek,
    format,
    isSameDay,
    isSameMonth,
    startOfDay,
    startOfMonth,
    startOfWeek
} from "date-fns";
import {Creneau, CreneauService} from "../creneau.service";
import {Observable} from "rxjs/Observable";
import {colors} from "../colors";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import {CreneauDialogComponent} from "../creneau-dialog/creneau-dialog.component";
import {Candidat, CandidatService} from "../candidat.service";
import {CreneauEditDialogComponent} from "../creneau-edit-dialog/creneau-edit-dialog.component";
import {Subject} from "rxjs/Subject";


interface CreneauEvent extends CalendarEvent {
    creneau: Creneau;
}

@Component({
    selector: 'app-creneaux',
    templateUrl: './creneaux.component.html',
    styleUrls: ['./creneaux.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    /*
     providers: [{
     provide: CalendarEventTitleFormatter,
     useClass: CustomEventTitle
     }]
     */
})
export class CreneauxComponent implements OnInit {
    viewDate: Date = new Date();
    refresh: Subject<any> = new Subject();

    activeDayIsOpen: boolean = false;
    rdv$: Observable<CreneauEvent[]>;
    candidats$: Observable<Candidat[]>;

    dialogRef: MdDialogRef<CreneauDialogComponent>;
    editDialogRef: MdDialogRef<CreneauEditDialogComponent>;

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


    constructor(private candidatService: CandidatService, private creneauService: CreneauService, public dialog: MdDialog) {
    }

    ngOnInit(): void {
        this.fetchRdv();
    }

    openDialog(id: number) {
        let config: MdDialogConfig = {
            disableClose: false,
            width: '500px',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            },
            data: {
                creneauId: id
            }
        }
        this.dialogRef = this.dialog.open(CreneauDialogComponent, config);
        this.dialogRef.afterClosed().subscribe(result => {
            if (result === "Modifier") {
                this.openEditDialog(id);
            }
        });

    }

    openEditDialog(creneauId: number) {
        let config: MdDialogConfig = {
            disableClose: false,
            width: '500px',
            height: '',
            position: {
                top: '',
                bottom: '',
                left: '',
                right: ''
            },
            data: {
                creneauId: creneauId,
            }
        }
        this.editDialogRef = this.dialog.open(CreneauEditDialogComponent, config);
        this.editDialogRef.afterClosed().subscribe(result => {
            console.log("fin de modification");
            this.rdv$ = null;
            this.refreshView();
            this.fetchRdv();
            /*
             this.creneauService.getCreneauxFromTo(
             format(this.getStart(this.viewDate), 'YYYY-MM-DD HH:mm'),
             format(this.getEnd(this.viewDate), 'YYYY-MM-DD HH:mm'))
             .map((results: Creneau[]) => {
             return results.map(r => this.toCreneauEvent(r))
             }).subscribe(res => {

             });
             */
        });

    }

    fetchRdv(): void {
        this.rdv$ = this.creneauService.getCreneauxFromTo(
            format(this.getStart(this.viewDate), 'YYYY-MM-DD HH:mm'),
            format(this.getEnd(this.viewDate), 'YYYY-MM-DD HH:mm'))
            .map((results: Creneau[]) => {
                return results.map(r => this.toCreneauEvent(r))
            });
        // this.refreshView();
    }

    refreshView(): void {
        this.refresh.next();
    }

    toCreneauEvent = (r: Creneau): CreneauEvent => {
        let dispo: number = r.nbPlacesDispo;
        let titre = format(r.dateCreneau, 'HH:mm') + ' ' + r.codeFormation + ' ' + r.lieu + ' (' + (dispo) + ' places dispo.)';
        const creneauEvent = <CreneauEvent>({
            title: titre,
            start: new Date(r.dateCreneau),
            color: (dispo > 3 ? colors.green : (dispo == 0 ? colors.black : (dispo < 2 ? colors.red : colors.yellow))),
            creneau: r
        });
        return creneauEvent;
    }

    dayClicked({date, events}: { date: Date, events: CalendarEvent[] }): void {

        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    }

    eventClicked(event: CreneauEvent): void {
        this.openDialog(event.creneau.id);
    }
}

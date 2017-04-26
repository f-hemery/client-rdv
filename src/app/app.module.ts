import {BrowserModule} from "@angular/platform-browser";
import {LOCALE_ID, NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {CandidatService} from "./candidat.service";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {SearchComponent} from "./search/search.component";
import {RouterModule} from "@angular/router";
import {CandidatComponent} from "./candidat/candidat.component";
import {CreneauComponent} from "./creneau/creneau.component";
import {FormationService} from "./formation.service";
import {CreneauService} from "./creneau.service";
import {DateTimePickerModule} from "ng-pick-datetime";
import "hammerjs";
import {CandidatsComponent} from "./candidats/candidats.component";
import {HomeComponent} from "./home/home.component";
import {APP_ROUTES} from "./route";
import {MaterialModule, MdCardModule} from "@angular/material";
import {CreneauxComponent} from "./creneaux/creneaux.component";
import {CalendarDateFormatter, CalendarModule} from "angular-calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UtilsModule} from "./utils/utils.module";
import {CreneauDialogComponent} from "./creneau-dialog/creneau-dialog.component";
import {CreneauEditDialogComponent} from "./creneau-edit-dialog/creneau-edit-dialog.component";
import {CreneauAddCandidatDialogComponent} from "./creneau-add-candidat-dialog/creneau-add-candidat-dialog.component";
import {CandidatsTabComponent} from "./candidats-tab/candidats-tab.component";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UploadCandidatsComponent } from './upload-candidats/upload-candidats.component';
import {NgUploaderModule} from "ngx-uploader";
import { CreneauDeleteCandidatDialogComponent } from './creneau-delete-candidat-dialog/creneau-delete-candidat-dialog.component';
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        SearchComponent,
        CandidatComponent,
        CreneauComponent,
        CandidatsComponent,
        HomeComponent,
        CreneauxComponent,
        CreneauDialogComponent,
        CreneauEditDialogComponent,
        CreneauAddCandidatDialogComponent,
        CandidatsTabComponent,
        UploadCandidatsComponent,
        CreneauDeleteCandidatDialogComponent
    ],

    entryComponents: [
        CreneauDialogComponent,
        CreneauEditDialogComponent,
        CreneauAddCandidatDialogComponent,
        CreneauDeleteCandidatDialogComponent
    ],
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        HttpModule,
        UtilsModule,
        DateTimePickerModule,
        BrowserAnimationsModule,
        CalendarModule.forRoot(),
        MaterialModule, MdCardModule,
        RouterModule.forRoot(APP_ROUTES),
        NgxDatatableModule,NgUploaderModule
    ],

    providers: [CandidatService, FormationService, {
        provide: LOCALE_ID,
        useValue: "fr-FR"
    }, CreneauService, CalendarDateFormatter],
    bootstrap: [AppComponent]
})
export class AppModule {
}

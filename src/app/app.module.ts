import {BrowserModule} from "@angular/platform-browser";
import {NgModule, LOCALE_ID} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ServCandidatsService} from "./serv-candidats.service";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import {SearchComponent} from "./search/search.component";
import {RouterModule} from "@angular/router";
import {CandidatComponent} from "./candidat/candidat.component";
import {CreneauComponent} from "./creneau/creneau.component";
import {FormationService} from "./formation.service";
import {CreneauService} from "./creneau.service";
import {DateTimePickerModule} from "ng-pick-datetime";
import 'hammerjs';
import {CandidatsComponent} from './candidats/candidats.component';
import {HomeComponent} from './home/home.component';
import {APP_ROUTES} from "./route";
import {
  MaterialModule, MdCardModule,
} from '@angular/material';
import { CreneauxComponent } from './creneaux/creneaux.component';
import {CalendarDateFormatter, CalendarModule} from "angular-calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {UtilsModule} from "./utils/utils.module";
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
    CreneauxComponent
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
  ],

  providers: [ServCandidatsService, FormationService, {provide: LOCALE_ID, useValue: "fr-FR"}, CreneauService, CalendarDateFormatter],
  bootstrap: [AppComponent]
})
export class AppModule {
}

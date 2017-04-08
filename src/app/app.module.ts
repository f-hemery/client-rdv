import {BrowserModule} from "@angular/platform-browser";
import {NgModule, LOCALE_ID} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {EtudiantsComponent} from "./etudiants/etudiants.component";
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
import {Ng2SliderComponent} from "ng2-slider-component/ng2-slider.component";
import {Ng2StyledDirective} from "ng2-styled-directive/ng2-styled.directive";
import {SlideAbleDirective} from "ng2-slideable-directive/slideable.directive";

@NgModule({
    declarations: [
        AppComponent,
        EtudiantsComponent,
        NavbarComponent,
        FooterComponent,
        SearchComponent,
        CandidatComponent,
        CreneauComponent,
        SlideAbleDirective,
        Ng2StyledDirective,
        Ng2SliderComponent    ],
    imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        HttpModule,
        DateTimePickerModule,
        RouterModule.forRoot(([
            {path: '', component: SearchComponent},
            {path: 'candidats', component: EtudiantsComponent},
            {path: 'creneaux', component: CreneauComponent}
        ]))
    ],
    exports: [
        Ng2SliderComponent,
        Ng2StyledDirective
    ],
    providers: [ServCandidatsService, FormationService, {provide: LOCALE_ID, useValue: "fr-FR"}, CreneauService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

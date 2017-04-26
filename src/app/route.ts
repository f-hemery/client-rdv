/**
 * Created by hemery on 14/04/2017.
 */
import {Routes} from '@angular/router';
import {CandidatsComponent} from './candidats/candidats.component';
import {HomeComponent} from './home/home.component';
import {CreneauComponent} from './creneau/creneau.component';
import {CreneauxComponent} from "./creneaux/creneaux.component";
import {CandidatsTabComponent} from "./candidats-tab/candidats-tab.component";
import {UploadCandidatsComponent} from "./upload-candidats/upload-candidats.component";
export const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'candidats', component: CandidatsComponent},
  {path: 'candidatsTab', component: CandidatsTabComponent},
  {path: 'creneaux', component: CreneauxComponent},
  {path: 'creneau', component: CreneauComponent},
  {path: 'upload', component: UploadCandidatsComponent},
];

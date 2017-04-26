import {Component, OnInit} from "@angular/core";
import {Candidat, CandidatService} from "../candidat.service";
import {Formation, FormationService} from "../formation.service";
import {FormControl} from "@angular/forms";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {Observable} from "rxjs/Observable";
@Component({
    selector: 'app-candidats-tab',
    templateUrl: './candidats-tab.component.html',
    styleUrls: ['./candidats-tab.component.scss']
})
export class CandidatsTabComponent implements OnInit {
    rows = [];
    colonnes = [{prop:'civilite',name:'Civilité'},{prop:'prenom',name:'Prénom'},{prop:'nom',name:'Nom'},{prop:'dernierDip',name:'Diplôme'}];
    count: number = 0;
    offset: number = 0;
    limit: number = 10;
    formationControl: FormControl = new FormControl();
    formationId: number;
    formations: Formation[] = [];
    candidats$: Observable<Candidat[]>;

    constructor(private candidatService: CandidatService, private formationService: FormationService) {
        this.formationControl.valueChanges
            .subscribe(c => {
                this.formationId = this.formations[c].id;
                this.count =this.formations[c].nbCandidats;
                this.offset = 0;
                this.limit = 10;
                this.fetchCandidat();
            });

    }

    ngOnInit() {
        this.formationService.getFormations().subscribe(data => {
            this.formations = data
        })
    }
    onPage(event) {
        this.offset = event.offset;
        this.limit = event.limit;
        this.fetchCandidat();
    }

    fetchCandidat() {
        console.log("ici");
        this.candidats$ = null;
        this.candidatService.getCandidatsFormation(this.formationId, this.offset, this.limit).subscribe(candidats => {
            const start = this.offset * this.limit;
            const end = start + this.limit;
            let rows = [...this.rows];
            for (let i = start; i < end; i++) {
                rows[i] = candidats[i-start];
            }
            this.rows = rows;
        });
        console.log("là");
        /*
        this.candidatService.getCandidatsFormation(this.formationId, this.offset, this.limit).map(r => this.toArrayColonne(r)).subscribe(candidats => {
            this.rows = candidats;
            console.log("les lignes : ", this.rows);
        })
*/
    }

    toArrayColonne = (r : Candidat[]) : any[] => {
        let colonnes = r.map(t => {
            return {
                civilite : t.civilite,
                prenom: t.prenom,
                nom: t.nom,
                diplome: t.dernierDip
            }
        });
        return colonnes;
    }
}

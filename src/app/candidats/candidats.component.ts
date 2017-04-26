import {Component, OnInit} from "@angular/core";
import {Candidat, CandidatService} from "../candidat.service";
import {FormControl} from "@angular/forms";
import {Formation, FormationService} from "../formation.service";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-candidats',
    templateUrl: './candidats.component.html',
    styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {

    formationControl: FormControl = new FormControl();
    formationId: number;
    candidats$: Observable<Candidat[]>;
    formations: Formation[] = [];

    constructor(private candidatService: CandidatService, private formationService: FormationService) {
        this.formationControl.valueChanges
            .subscribe(c => {
                this.formationId = c;
                this.fetchCandidats();
            });

    }

    ngOnInit() {
        this.formationService.getFormations().subscribe(data => {
            this.formations = data
        })
    }

    fetchCandidats(): void {
        this.candidats$ = this.candidatService.getCandidatsFormation(this.formationId);
    }
}

import {Component, Inject, OnInit} from "@angular/core";
import {Candidat, CandidatService} from "../candidat.service";
import {Observable} from "rxjs/Observable";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";

@Component({
    selector: 'app-creneau-dialog',
    templateUrl: './creneau-dialog.component.html',
    styleUrls: ['./creneau-dialog.component.scss']
})
export class CreneauDialogComponent implements OnInit {

    creneauId: number;
    candidats$: Observable<Candidat[]>;

    constructor(public dialogRef: MdDialogRef<CreneauDialogComponent>,
                public candidatService: CandidatService,
                @Inject(MD_DIALOG_DATA) public data: any) {
        this.creneauId = data.creneauId;
    }

    ngOnInit() {
        console.log("Dialog info", this.creneauId);
        this.fetchCandidats();
    }

    fetchCandidats(): void {
        this.candidats$ = this.candidatService.getCandidatsOfCreneau(this.creneauId);
    }

}

import {Component, Inject, OnInit} from "@angular/core";
import {Candidat, CandidatService} from "../candidat.service";
import {Observable} from "rxjs/Observable";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from "@angular/material";

@Component({
    selector: 'app-creneau-add-candidat-dialog',
    templateUrl: './creneau-add-candidat-dialog.component.html',
    styleUrls: ['./creneau-add-candidat-dialog.component.scss']
})
export class CreneauAddCandidatDialogComponent implements OnInit {
    candidats$: Observable<Candidat[]>;
    // formModel: FormGroup;
    candidatControl: FormControl= new FormControl();
    candidat: number;
    creneauId: number;
    formationId: number;

    constructor(public dialogRef: MdDialogRef<CreneauAddCandidatDialogComponent>,private candidatService: CandidatService,
                @Inject(MD_DIALOG_DATA) public data: any) {
        this.creneauId = data.creneauId;
        this.formationId = data.formationId;
        this.candidatControl.valueChanges
            .subscribe(c => this.candidat = c);
    }

    ngOnInit() {
        this.candidats$ = this.candidatService.getCandidatsFormationWithoutRdv(this.formationId);
    }

    onSubmit(msg: string) {
        this.dialogRef.close(this.candidat);
    }

}

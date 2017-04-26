import {Component, Inject, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Candidat, CandidatService} from "../candidat.service";
import {MD_DIALOG_DATA, MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";
import {CreneauAddCandidatDialogComponent} from "../creneau-add-candidat-dialog/creneau-add-candidat-dialog.component";
import {Creneau, CreneauService} from "../creneau.service";
import {CreneauDeleteCandidatDialogComponent} from "../creneau-delete-candidat-dialog/creneau-delete-candidat-dialog.component";

@Component({
    selector: 'app-creneau-edit-dialog',
    templateUrl: './creneau-edit-dialog.component.html',
    styleUrls: ['./creneau-edit-dialog.component.scss']
})
export class CreneauEditDialogComponent implements OnInit {
    notFull: boolean;
    creneau: Creneau;
    creneauId: number;
    formationId: number;
    candidats$: Observable<Candidat[]>;
    candidatId: number;

    constructor(public dialogRef: MdDialogRef<CreneauEditDialogComponent>,
                public dialog: MdDialog,
                public candidatService: CandidatService,
                public creneauService: CreneauService,
                @Inject(MD_DIALOG_DATA) public data: any) {
        this.creneauId = data.creneauId;
    }

    ngOnInit() {
        console.log("Dialog info", this.creneauId);
        this.creneauService.getCreneau(this.creneauId).subscribe(res => {
            this.creneau = res;
            this.notFull = this.creneau.nbPlacesDispo != 0;
            this.formationId = this.creneau.idFormation;
            this.fetchCandidats();
        });
    }

    fetchCandidats(): void {
        this.candidats$ = this.candidatService.getCandidatsOfCreneau(this.creneauId);
    }

    openValideDeleteDialog(id: number) {
        console.log("On veut retirer le candidat " + id + " du rdv");
        this.candidatService.getCandidat(id)
            .subscribe(candidat => this.openDeleteDialog(candidat));
    }

    openDeleteDialog(candidat: Candidat) {
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
                message: 'Retire un candidat du créneau',
                candidat: candidat
            }
        }
        let deleteDialogRef = this.dialog.open(CreneauDeleteCandidatDialogComponent, config);
        deleteDialogRef.afterClosed().subscribe((result: number) => {
            console.log("candidat id: ", result);
            this.candidatId = result;
            if (result) {
                let result = this.creneauService.deleteCandidatToCreneau(this.candidatId, this.creneauId);
                result.subscribe(r => {
                    console.log("Résultat de la création: ", r);
                    this.ngOnInit();
                });
            }
        });
    }

    openAddDialog() {
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
                message: 'Ajout d\'un nouveau candidat',
                creneauId: this.creneauId,
                formationId: this.formationId
            }
        }
         let addDialogRef = this.dialog.open(CreneauAddCandidatDialogComponent, config);
        addDialogRef.afterClosed().subscribe((result: number) => {
            this.candidatId = result;
            console.log("candidat id: ", this.candidatId);
            if (this.candidatId) {
                this.creneauService.addCandidatToCreneau(this.candidatId, this.creneauId)
                .subscribe(r => {
                    console.log("Résultat de la création: ", r);
                   this.ngOnInit();
                });

            }
            addDialogRef = null;
        });
    }
}



import {Component, Inject, OnInit} from "@angular/core";
import {MD_DIALOG_DATA, MdDialogRef} from "@angular/material";
import {Candidat} from "../candidat.service";

@Component({
    selector: 'app-creneau-delete-candidat-dialog',
    templateUrl: './creneau-delete-candidat-dialog.component.html',
    styleUrls: ['./creneau-delete-candidat-dialog.component.scss']
})
export class CreneauDeleteCandidatDialogComponent implements OnInit {
    candidat: Candidat;

    constructor(public dialogRef: MdDialogRef<CreneauDeleteCandidatDialogComponent>,
                @Inject(MD_DIALOG_DATA) public data: any) {
        this.candidat = data.candidat;
    }
    ngOnInit() {
    }
    onSubmit(msg: string) {
        console.log("msg: ", msg);
        if (msg == 'OK')
            this.dialogRef.close(this.candidat.id);
        else
            this.dialogRef.close(null);
    }

}

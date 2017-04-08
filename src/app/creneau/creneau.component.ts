import {Component, OnInit} from "@angular/core";
import {CreneauService} from "../creneau.service";
import {FormationService, Formation} from "../formation.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-creneau',
    templateUrl: './creneau.component.html',
    styleUrls: ['./creneau.component.css']
})
export class CreneauComponent implements OnInit {
    public formations: Formation[] = [];
    formModel: FormGroup;
    private moment: Date;

    private input1Moment: any;

    constructor(private creneauService: CreneauService, private formationService: FormationService) {
        formationService.getFormations().subscribe(fs => {
            this.formations = fs;
            console.log("constructeur Creneau:",this.formations, " fs: ", fs);
        });
        this.initForm();
    }

    initForm() {
        this.formModel = new FormGroup({
            'formation': new FormControl('',Validators.required),
            'lieu': new FormControl('',Validators.required),
            'dateHeure':  new FormControl(),
            'nbCreneaux': new FormControl(),
            'nbPlaces': new FormControl(),
            'intervalle': new FormControl(),
        });

    }

    ngOnInit() {
    }

    onSubmit() {
        console.log(this.formModel.value);
    }

}

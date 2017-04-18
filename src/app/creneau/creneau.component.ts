import {Component, OnInit} from "@angular/core";
import {Creneau, CreneauService} from "../creneau.service";
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

  private dateCreneau: Date = new Date();
  private nbPlacesIn = 1;
  private nbCreneauxIn= 1;
  private intervalleIn= 0;

  constructor(private creneauService: CreneauService, private formationService: FormationService) {
    formationService.getFormations().subscribe(fs => {
      this.formations = fs;
      console.log('constructeur Creneau:', this.formations, ' fs: ', fs);
    });
    this.initForm();
  }

  initForm() {
    this.formModel = new FormGroup({
      'formation': new FormControl('', Validators.required),
      'lieu': new FormControl('', Validators.required),
      'dateHeure': new FormControl(),
      'nbCreneaux': new FormControl(),
      'dureeCreneau': new FormControl(),
      'nbPlaces': new FormControl(),
      'intervalle': new FormControl(),
      'visible': new FormControl(),
    });
  }

  onNbPlacesChange() {
    this.nbPlacesIn = this.formModel.value.nbPlaces;
  }

  onNbCreneauxChange() {
    this.nbCreneauxIn = this.formModel.value.nbCreneaux;
  }

  onInervalleChange() {
    this.intervalleIn = this.formModel.value.intervalle;
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value);
    console.log(this.formModel.value.dateHeure);
    console.log(this.dateCreneau);
    const creneau = <Creneau>({
      id: 0,
      lieu: this.formModel.value.lieu || '',
      codeFormation: this.formModel.value.formation || '',
      dateCreneau: this.dateCreneau,
      nbCreneaux: this.formModel.value.nbCreneaux || 1,
      dureeCreneau: this.formModel.value.dureeCreneau || 1,
      nbPlaces: this.formModel.value.nbPlaces || 1,
      intervalle: this.formModel.value.intervalle || 0,
      visible: this.formModel.value.visible || false
    });

    this.creneauService.createCreneau(creneau).subscribe(r => console.log("retour création::", r));
  }

}

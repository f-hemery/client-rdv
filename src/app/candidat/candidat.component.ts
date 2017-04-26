import {Component, OnInit, Input} from '@angular/core';
import {Candidat} from "../candidat.service";

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.css']
})
export class CandidatComponent implements OnInit {
  @Input() candidat: Candidat;

  constructor() {
  }

  isHomme(): boolean {
    return this.candidat.civilite === 'Monsieur';
  }

  ngOnInit() {
  }

}

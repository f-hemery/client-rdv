import { Component, OnInit } from '@angular/core';
import {Candidat, ServCandidatsService} from "../serv-candidats.service";

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.css']
})
export class EtudiantsComponent implements OnInit {
  candidats: Candidat[] = [];
  constructor(private candidatService: ServCandidatsService) { }

  ngOnInit() {
    this.candidatService.getCandidats().subscribe(data => {
      console.log("ngOnInit: ",data);
      this.candidats = data;
    });
  }

}

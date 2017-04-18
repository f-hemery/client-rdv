import {Component, OnInit} from '@angular/core';
import {Candidat, ServCandidatsService} from "../serv-candidats.service";

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {

  candidats: Candidat[] = [];

  constructor(private candidatService: ServCandidatsService) {
  }

  ngOnInit() {
    this.candidatService.getCandidats().subscribe(data => {
      console.log("ngOnInit: ", data);
      this.candidats = data;
    });
  }
}

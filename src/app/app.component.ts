import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lastDialogResult: string;
  navItems = [
    {name: 'Candidats', route: 'candidats'},
    {name: 'Creneaux', route: 'creneaux'},
    {name: 'Creneau', route: 'creneau'},
  ];
}

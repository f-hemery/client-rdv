# RdvApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Qu'est-ce que l'on avait avec Ciell2 ?
* Une liste de dossier avec la possibilité de les convoquer à un entretien
* Après validation de la liste des candidats convoqués à un entretien, création et envoi automatique  d'un message mail vers les candidats pour les inviter à choisir un créneau de rendez-vous
* Création de créneaux pour les entretiens
  * lieu
  * licence professionnelle de candidature
  * date du créneau
  * nombre de créneaux
  * heure de début
  * nombre de rendez-vous par créneau
  * intervalle de temps entre deux créneaux
  * créneaux visible/non-visible
* Chaque candidat convoqué, après identification, choisit un créneau parmi l'ensemble des créneaux proposés
  * l'étudiant voit la liste des créneaux disponibles
  * le nombre de places encore disponibles
  * Consultation et modification d'un créneau d'entretiens par le responsable
* Edition d'une liste d'émargement des candidats pour un créneau
  
## Qu'est-ce que l'on veut ?

A partir des données récupérées via l'application e-candidat2, le dossier de candidature des étudiants, il faut 
* Obtenir l'accès aux identifiants des candidats (procédure de connexion), on ne va pas demander aux candidats de recréer un compte pour faire un choix de créneau pour un entretien.
* Obtenir l'accès aux identifiants des respoonsables.
* Reproduire les différents scénarii disponibles avec Ciell2
  * Créer des créneaux d'entretiens
  * Convoquer certains étudiants à un entretien
  * Choix par un candidat d'un créneau d'entretien
  * Consultation (avec modification possible) par le responsable des rendez-vous pris (quand et par qui)
  * Edition d'une liste d'émargement pour un créneau d'entretiens

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

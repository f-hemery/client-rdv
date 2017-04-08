import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";

/*
 private long id;
 private String lieu;
 @ManyToOne
 @JoinColumn(nullable = false, name = "formation_id")
 private Formation Formation;
 private Date dateCreneau;
 private int nbCreneaux;
 private Date heureCreneau;
 private int intervalle;
 private boolean visible;
 */

export class Creneau {
    constructor(public id: number,
                public lieu: string,
                public formation: string,
                public dateCreneau: number,
                public nbCreneaux: number,
                public nbPlaces: number,
                public heureCreneau: number,
                public intervalle: number,
                public visible: boolean) {
    }
}
@Injectable()
export class CreneauService {

    constructor(public http: Http) {
    }
    getCreneaux(): Observable<Array<Creneau>> {
        let url = "https://rdv-candidat.herokuapp.com/candidats";
        console.log("URL = " + url);
        return this.http.get(url).map(res => {
            console.log("resultat: ",res);
            return this.toCreneaux(res.json());
        }).catch(this.handleError);
    }

    toCreneaux = (r: any): Array<Creneau> => {
        let candidats: Creneau[] = [];
        console.log("toCandidats: ",r);
        candidats = r.map(t => this.toCreneau(t));
        return candidats;
    }

    toCreneau = (r: any): Creneau => {
        console.log("toCandidat: ",r);
        let candidat = <Creneau>({
            id: r.id,
            lieu: r.lieu,
            formation: r.formation,
            dateCreneau: r.dateCreneau,
            nbCreneaux: r.nbCreneaux,
            nbPlaces: r.nbPlaces,
            heureCreneau: r.heureCreneau,
            intervalle: r.intervalle,
            visible: r.valide
        });
        return candidat;
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error("Message d'erreur: " + errMsg);
        return Observable.throw(errMsg);
    }

}

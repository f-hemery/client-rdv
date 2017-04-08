import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";


export class Candidat {
    constructor(public id: number,
                public noDossier: string,
                public civilite: string,
                public nom: string,
                public prenom: string,
                public codePostal: number,
                public ville: string) {
    }
}

@Injectable()
export class ServCandidatsService {

    constructor(public http: Http) {
    }

    getCandidats(): Observable<Array<Candidat>> {
        let url = "https://rdv-candidat.herokuapp.com/candidats";
        console.log("URL = " + url);
        return this.http.get(url).map(res => {
            console.log("resultat: ",res);
            return this.toCandidats(res.json());
        }).catch(this.handleError);
    }

    toCandidats = (r: any): Array<Candidat> => {
        let candidats: Candidat[] = [];
        console.log("toCandidats: ",r);
        candidats = r.map(t => this.toCandidat(t));
        return candidats;
}

     toCandidat = (r: any): Candidat => {
         console.log("toCandidat: ",r);
         let candidat = <Candidat>({
            id: r.id,
            noDossier: r.noDossier,
            civilite: r.civilite,
            nom: r.nom,
            prenom: r.prenom,
            codePostal: r.codePostal,
            ville: r.commune
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

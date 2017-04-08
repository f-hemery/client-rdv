import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

export class Formation {
    constructor(public id: number,
                public codeFormation: string,
                public libelleFormation: string) {
    }
}

@Injectable()
export class FormationService {

    constructor(public http: Http) {
    }

    getFormations(): Observable<Array<Formation>> {
        let url = "https://rdv-candidat.herokuapp.com/formations";
        console.log("URL = " + url);
        return this.http.get(url).map(res => {
            console.log("resultat: ", res);
            return this.toFormations(res.json());
        }).catch(this.handleError);
    }

    toFormations = (r: any): Array<Formation> => {
        let candidats: Formation[] = [];
        console.log("toFormations: ", r);
        candidats = r.map(t => this.toFormation(t));
        return candidats;
    }

    toFormation = (r: any): Formation => {
        console.log("toFormation: ", r);
        let formation = <Formation>({
            id: r.id,
            codeFormation: r.codeFormation,
            libelleFormation: r.libelleFormation
        });
        return formation;
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

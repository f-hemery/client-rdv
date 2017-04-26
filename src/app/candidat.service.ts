import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";


export interface Candidat {
    id: number,
    noDossier: string,
    civilite: string,
    nom: string,
    prenom: string,
    codePostal: number,
    ville: string,
    dernierDip: string,
    dernierEtab: string
}

@Injectable()
export class CandidatService {

    constructor(public http: Http) {
    }

    getCandidats(): Observable<Array<Candidat>> {
        // let url = "https://rdv-candidat.herokuapp.com/candidats";
        let url = "http://localhost:4567/candidats";
        console.log("URL = " + url);
        return this.http.get(url).map(res => {
            console.log("resultat: ", res);
            return this.toCandidats(res.json());
        }).catch(this.handleError);
    }

    getCandidat(id:number): Observable<Candidat> {
        // let url = "https://rdv-candidat.herokuapp.com/candidats";
        let url = "http://localhost:4567/candidat/"+id;
        console.log("URL = " + url);
        return this.http.get(url).map(res => {
            console.log("resultat: ", res);
            return this.toCandidat(res.json());
        }).catch(this.handleError);
    }
    getCandidatsFormation(formationId:number, offset:number = 0, limit :number = 0): Observable<Array<Candidat>> {
        // let url = "https://rdv-candidat.herokuapp.com/candidats";
        let url = "http://localhost:4567/candidatsPage/"+formationId+'/'+offset+'/'+limit;
        console.log("URL = " + url);
        return this.http.get(url).map(res => {
            console.log("resultat: ", res);
            return this.toCandidats(res.json());
        }).catch(this.handleError);
    }

    getNbCandidatsFormation(formationId:number) {
        let url = "http://localhost:4567/nbCandidatsFormation/"+formationId;
        return this.http.get(url).map(res => {
            console.log("resultat: ", res);
            return (res.json());
        }).catch(this.handleError);
    }

    getCandidatsFormationWithoutRdv(formationId:number) {
        let url = "http://localhost:4567/candidatsWithoutRdv/"+formationId;
        return this.http.get(url).map(res => {
            console.log("resultat: ", res);
            return (res.json());
        }).catch(this.handleError);
    }

    // Request protected by server, only manager can view list of candidats
    // Candidat may view his name if he reserves this creneau
    getCandidatsOfCreneau(id: number): Observable<Candidat[]> {
        const url = 'http://localhost:4567/candidatsCreneau/' + id;
        console.log('URL = ' + url);
        return this.http.get(url).map(res => {
            console.log('resultat: ', res);
            return this.toCandidats(res.json());
        }).catch(this.handleError);

    }

    toCandidats = (r: any): Array<Candidat> => {
        let candidats: Candidat[] = [];
        console.log("toCandidats: ", r);
        candidats = r.map(t => this.toCandidat(t));
        return candidats;
    }

    toCandidat = (r: any): Candidat => {
        console.log("toCandidat: ", r);
        const candidat = <Candidat>({
            id: r.id,
            noDossier: r.noDossier,
            civilite: r.civilite,
            nom: r.nom,
            prenom: r.prenom,
            codePostal: r.codePostal,
            ville: r.commune,
            dernierEtab: r.dernierEtab,
            dernierDip: r.dernierDip,
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

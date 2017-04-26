import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Headers, Http, RequestOptions, Response} from "@angular/http";
import {Candidat} from "./candidat.service";


export interface Creneau {
    id: number,
    lieu: string,
    idFormation: number,
    codeFormation: string,
    dateCreneau: Date,
    nbCreneaux: number,
    dureeCreneau: number,
    nbPlaces: number,
    nbPlacesDispo: number,
    intervalle: number,
    visible: boolean
}

export interface InfoCreneau {
    candidats: Candidat[],
}

@Injectable()
export class CreneauService {

    constructor(public http: Http) {
    }

    getCreneaux(): Observable<Array<Creneau>> {
        // const url = 'https://rdv-candidat.herokuapp.com/creneaux';
        const url = 'http://localhost:4567/creneaux';
        console.log('URL = ' + url);
        return this.http.get(url).map(res => {
            console.log('resultat: ', res);
            return this.toCreneaux(res.json());
        }).catch(this.handleError);
    }

    getCreneauxFromTo(from, to): Observable<Creneau[]> {
        // const url = 'https://rdv-candidat.herokuapp.com/creneaux';
        // const search: URLSearchParams = new URLSearchParams();
        // search.set('from', from);
        // search.set('to', to);
        const url = 'http://localhost:4567/creneaux/' + from + '/' + to;
        console.log('URL = ' + url);
        // console.log('search = ' + search);
        return this.http.get(url).map(res => {
            console.log('resultat: ', res);
            return this.toCreneaux(res.json());
        }).catch(this.handleError);
    }

    toCreneaux = (r: any): Array<Creneau> => {
        let candidats: Creneau[] = [];
        console.log('toCreneaux: ', r);
        candidats = r.map(t => this.toCreneau(t));
        return candidats;
    }

    toCreneau = (r: any): Creneau => {
        console.log('toCreneau: ', r);
        const creneau = <Creneau>({
            id: r.id,
            lieu: r.lieu,
            idFormation: r.formation.id,
            codeFormation: r.formation.codeFormation,
            dateCreneau: r.dateCreneau,
            nbCreneaux: r.nbCreneaux,
            dureeCreneau: r.dureeCreneau,
            nbPlaces: r.nbPlaces,
            nbPlacesDispo: r.nbPlacesDispo,
            intervalle: r.intervalle,
            visible: r.visible
        });
        return creneau;
    };

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error('Message d\'erreur: ' + errMsg);
        return Observable.throw(errMsg);
    }

    createCreneau(creneau: Creneau) {
        console.log("demande création creneau: ", creneau);
        const headers = new Headers({'Content-Type': 'application/json'});
//    const options = new RequestOptions({headers: headers});
        const body = JSON.stringify(creneau);
        console.log("json ", body);
        return this.http.post('http://localhost:4567/creneau', body, headers).map((res: Response) => res.json()).catch(this.handleError);
    }

    addCandidatToCreneau(candidatId: number, creneauId: number) {
        console.log("add candidat: " + candidatId + " to creneau: ", creneauId);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        const data = {
            "candidatId": candidatId,
            "creneauId": creneauId
        };
        const body = JSON.stringify(data);
        console.log("json ", body);
        let url = 'http://localhost:4567/candidatToCreneau/' + creneauId + '/' + candidatId;
        console.log("url: ", url);
        return this.http.post(url, body, headers)
            .map((res: Response) => res.json()).catch(this.handleError);
    }

    deleteCandidatToCreneau(candidatId: number, creneauId: number) {
        console.log("delete candidat: " + candidatId + " to creneau: ", creneauId);
        const headers = new Headers({'Content-Type': 'application/json'});
        const options = new RequestOptions({headers: headers});
        let url = 'http://localhost:4567/candidatToCreneau/' + creneauId + '/' + candidatId;
        console.log("url: ", url);
        return this.http.delete(url, options)
            .map((res: Response) => res.json());
    }

    getCreneau(id: number): Observable<Creneau> {
        const url = 'http://localhost:4567/creneau/'+id;
        console.log('URL = ' + url);
        return this.http.get(url).map(res => {
            console.log('resultat: ', res);
            return this.toCreneau(res.json());
        }).catch(this.handleError);
    }
}

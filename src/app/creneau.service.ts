import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, RequestOptions, Response} from '@angular/http';


export class Creneau {
  constructor(public id: number,
              public lieu: string,
              public codeFormation: string,
              public dateCreneau: Date,
              public nbCreneaux: number,
              public dureeCreneau: number,
              public nbPlaces: number,
              public intervalle: number,
              public visible: boolean) {
  }
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
      codeFormation: r.codeFormation,
      dateCreneau: r.dateCreneau,
      nbCreneaux: r.nbCreneaux,
      dureeCreneau: r.dureeCreneau,
      nbPlaces: r.nbPlaces,
      intervalle: r.intervalle,
      visible: r.visible
    });
    return creneau;
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
    console.error('Message d\'erreur: ' + errMsg);
    return Observable.throw(errMsg);
  }

  createCreneau(creneau: Creneau) {
    console.log("demande création creneau: ", creneau);
    const headers = new Headers({'Content-Type': 'application/json'});
//    const options = new RequestOptions({headers: headers});
    const body = JSON.stringify(creneau);
    console.log("json ", body);
    return this.http.post('http://localhost:4567/creneau', body, headers).map((res: Response) => res.json());
  }

}

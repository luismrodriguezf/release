import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CasosService {
    public url: string;
    public key = "Y2VyY2Fkb2Nhcmxvc0BnbWFpbC5jb206Y2VudGF1cm8u"
  
  constructor(public http: HttpClient) {
      this.url = 'https://gis-entorno-benjamin-s-e.c9users.io:8080/casos';
  }

  post(caso): Observable<any>{

        let headers = new HttpHeaders()
                                    .set('Content-Type','application/json')
                                    .set('Authorization', 'basic '+this.key);
        return this.http.post(this.url, caso, {headers: headers,  observe: 'response'});
    }

    get(id): Observable<any>{

        let headers = new HttpHeaders()
                                    .set('Authorization', 'basic '+this.key);
        return this.http.get(this.url+"/"+id , {headers: headers,  observe: 'response'});
    }

    update(caso, id): Observable<any>{

        let headers = new HttpHeaders()
                                    .set('Content-Type','application/json')
                                    .set('Authorization', 'basic '+this.key);
        return this.http.put(this.url+"/"+id, caso, {headers: headers,  observe: 'response'});
    }

    change_state(id): Observable<any>{

        let headers = new HttpHeaders()
                                    .set('Content-Type','application/json')
                                    .set('Authorization', 'basic '+this.key);
        return this.http.put(this.url+"/"+id+"/visible", {headers: headers,  observe: 'response'});
    }

    all(): Observable<any>{
        let headers = new HttpHeaders()
                                    .set('Authorization', 'basic '+this.key);
        return this.http.get(this.url, {headers: headers,  observe: 'response' });
    }



}
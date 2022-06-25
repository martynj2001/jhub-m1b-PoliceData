import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Force } from '../forces/force.model';
import { PoliceForcesService } from '../forces/police-forces.service';



@Injectable({
  providedIn: 'root'
})

export class PoliceApiCall {

  private url = "https://data.police.uk/api/";
  
  
  constructor( private http: HttpClient) {}

  fetchAPI(url: string, params = []){
    
    const apiUrl = this.url + url;

    return this.http.get<any>(apiUrl)
      .pipe(map(
        (response) => {
          const forces: Force[] = [];

          for (let force of response){
            let newForce = new Force(force.id, force.name, '','',[],'');
            forces.push(newForce);
          }
          return forces;
        }
      )
    );
  }

  fetchForceDetail(id: string){
    const apiUrl = this.url + "forces" + "/" + id;
    return this.http.get(apiUrl);
  }

}
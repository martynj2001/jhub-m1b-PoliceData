import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { map } from 'rxjs/operators';
import { Force } from '../forces/force.model';
import { PoliceForcesService } from '../forces/police-forces.service';
import { Socials } from '../forces/socials.model';
import { CrimeCatagory, CrimeData } from '../police-info/crime-data.model';



@Injectable({
  providedIn: 'root'
})

export class PoliceApiCall {

  private url = "https://data.police.uk/api/";
  private urlCrimes = "https://data.police.uk/api/crimes-street/";
  private urlCatagories = "https://data.police.uk/api/crime-categories"
  //rivate testUrl = "https://data.police.uk/api/crimes-street/all-crime?poly=51.5226195,-2.5783928:51.4589171,-2.7061088:51.3852706,-2.5639732:51.4559222,-2.419091&date=2022-1"
  
  
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
    return this.http.get<Force>(apiUrl).pipe(
      map(
        (response) => {
          let force: Force = new Force(
            response.id,
            response.name,
            response.description,
            response.url,
            response.engagement_methods,
            response.telephone
          )
          return force;
        }
      )
    )
  }

  fetchCrimeInformation(crimeCat: string, area: string, date: string){

    const apiUrl = this.urlCrimes + crimeCat;
    let crimeParams = new HttpParams();
    crimeParams = crimeParams.append('poly',area);
    crimeParams = crimeParams.append('date', date);

    return this.http.get<CrimeData[]>(apiUrl, {
      params: crimeParams
    });
  }

  fetchCrimeCatagories(date: string){
    let crimesParams = new HttpParams();
    crimesParams = crimesParams.append('date', date);
    return this.http.get<CrimeCatagory[]>(this.urlCatagories, {
      params: crimesParams
    });
  }
}
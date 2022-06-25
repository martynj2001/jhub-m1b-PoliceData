import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PoliceApiCall {

  private url = "https://data.police.uk/api/";
  
  constructor( private http: HttpClient) {}

  fetchAPI(url: string, params = []){
    const apiUrl = this.url + url;
    return this.http.get<any>(apiUrl);
  }

}

  // extractForces(response: any){

  //   const forces: Force[] = [];

  //   for (let force of response){
  //     let newForce = new Force(force.id, force.name, '','',[],'');
  //     forces.push(newForce);
  //   }
  //   this.policeForceservice.setForces(forces)
  // }

  // fetchAPI(url: string, params = []){
  //   const apiUrl = this.url + url;
  //   this.http.get<any>(apiUrl)
  //   .pipe(map(
  //     (response) => {
  //       this.extractForces(response);
  //     }
  //   ))
  //   .subscribe();
  // }



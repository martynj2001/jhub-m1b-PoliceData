import { Injectable } from '@angular/core';
import { map, Subject, Subscription } from 'rxjs';
import { PoliceApiCall } from '../shared/police-api-call.service';
import { Force } from './force.model';


@Injectable({
  providedIn: 'root'
})
export class PoliceForcesService {

  policeForcesUpdated = new Subject<Force[]>();
  private forces: Force[] = [];

  constructor(private polApiCall: PoliceApiCall) {}

  setForces(forces: Force[]){
    this.forces = forces;
    this.policeForcesUpdated.next(this.forces.slice());
  }
  
  setforcesDetail(index: number){

  }

  getForces(){
    return this.forces.slice();
  }


  getForceDetail(index: number){
    console.log(this.forces);
    console.log(index);
    console.log(this.forces[index]);
    return this.forces[index];
  }

  extractForces(response: any){

    //const forces: Force[] = [];

    for (let force of response){
      this.forces.push(new Force(force.id, force.name, '','',[],''));
    }
  }

  fetchForces(){
    this.polApiCall.fetchAPI('forces')
      .pipe(map(
        (response => {
          this.extractForces(response)
        })
      ))
      .subscribe(
        (response) => {
          //console.log(this.forces)
          this.policeForcesUpdated.next(this.forces.slice());
        });
  }
}


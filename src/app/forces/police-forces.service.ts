import { Injectable } from '@angular/core';
import { map, Subject, Subscription } from 'rxjs';
import { PoliceApiCall } from '../shared/police-api-call.service';
import { Force } from './force.model';


@Injectable({providedIn: 'root'})

export class PoliceForcesService {

  policeForcesUpdated = new Subject<Force[]>();
  private forces: Force[] = [];

  constructor(private polApiCall: PoliceApiCall) {}

  setForces(forces: Force[]){
    this.forces = forces;
    //console.log(this.forces)
    this.policeForcesUpdated.next(this.forces.slice());
  }

  getForces(){
    return this.forces.slice();
  }
  
  setforcesDetail(index: number){

  }

  
  getForceDetail(index: number){
    this.polApiCall.fetchForceDetail(this.forces[index].id)
    .subscribe((force) => {
      this.forces[index].description = force.description;
      this.forces[index].telephone = force.telephone;
      this.forces[index].url = force.url;
      this.forces[index].engagement_methods = force.engagement_methods;
    });
    //console.log(this.forces[index]);
    return this.forces[index];
    
  }
}


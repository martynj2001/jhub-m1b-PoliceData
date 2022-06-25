import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Force } from './force.model';


@Injectable({
  providedIn: 'root'
})
export class PoliceForcesService {

  policeForcesUpdated = new Subject<Force[]>();
  private forces: Force[];

  constructor() {}

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
  
}


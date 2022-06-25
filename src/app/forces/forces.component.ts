import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PoliceApiCall } from '../shared/police-api-call.service';
import { Force } from './force.model';
import { PoliceForcesService } from './police-forces.service';

@Component({
  selector: 'app-forces',
  templateUrl: './forces.component.html',
  styleUrls: ['./forces.component.css']
})
export class ForcesComponent implements OnInit, OnDestroy {

  forces: Force[];
  subscription: Subscription;

  constructor(private policeForceService: PoliceForcesService) { }

  ngOnInit(): void {

    this.policeForceService.fetchForces();
    // this.subscription = this.policeForceService.policeForcesUpdated.subscribe(
    //   (forces: Force[]) => {
    //     this.forces = forces;
    //   }
    // )

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}

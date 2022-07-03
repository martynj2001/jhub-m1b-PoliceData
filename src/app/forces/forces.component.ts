import { Component, OnDestroy, OnInit } from '@angular/core';
import { PoliceApiCall } from '../shared/police-api-call.service';
import { Force } from './force.model';
import { PoliceForcesService } from './police-forces.service';


@Component({
  selector: 'app-forces',
  templateUrl: './forces.component.html',
  styleUrls: ['./forces.component.css']
})
export class ForcesComponent implements OnInit, OnDestroy {

  isLoading = null;
  errorCode = null;

  constructor(private polApiService: PoliceApiCall, private polForService: PoliceForcesService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.polApiService.fetchAPI('forces').subscribe(
      (forces) => {
        this.isLoading = false;
        this.polForService.setForces(forces);
        //console.log("Subscription triggered");
      }, error => {
        this.errorCode = error;
      });
  }

  ngOnDestroy(): void {

  }

}

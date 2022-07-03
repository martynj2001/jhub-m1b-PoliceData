import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PoliceApiCall } from 'src/app/shared/police-api-call.service';
import { Force } from '../force.model';
import { PoliceForcesService } from '../police-forces.service';

@Component({
  selector: 'app-force-list',
  templateUrl: './force-list.component.html',
  styleUrls: ['./force-list.component.css']
})
export class ForceListComponent implements OnInit, OnDestroy {

  forces: Force[] = [];
  subscription: Subscription;

  constructor(private polForService: PoliceForcesService) { }


  ngOnInit(): void {
    
    this.subscription = this.polForService.policeForcesUpdated
    .subscribe(
      (forces: Force[]) => {
        this.forces = forces;
      }
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

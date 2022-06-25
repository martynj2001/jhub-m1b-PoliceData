import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Force } from '../force.model';
import { PoliceForcesService } from '../police-forces.service';

@Component({
  selector: 'app-force-list',
  templateUrl: './force-list.component.html',
  styleUrls: ['./force-list.component.css']
})
export class ForceListComponent implements OnInit {

  constructor(private polForService: PoliceForcesService) { }

  forces: Force[];
  private subscription: Subscription;

  ngOnInit(): void {

    this.subscription = this.polForService.policeForcesUpdated
    .subscribe(
      (forces: Force[]) => {
        this.forces = forces;
      }
    )
  }
}

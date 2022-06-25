import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Force } from '../force.model';
import { PoliceForcesService } from '../police-forces.service';

@Component({
  selector: 'app-force-detail',
  templateUrl: './force-detail.component.html',
  styleUrls: ['./force-detail.component.css'],
})
export class ForceDetailComponent implements OnInit, OnDestroy {

  force: Force;
  index: number = 0;

  subscription: Subscription;


  constructor(private route: ActivatedRoute, 
              private polForService: PoliceForcesService) { }

  ngOnInit(): void {
    
    this.subscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          console.log(this.index);
          this.force = this.polForService.getForceDetail(this.index);
          console.log(this.force);
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

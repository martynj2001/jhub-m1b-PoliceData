import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PoliceInfoComponent } from 'src/app/police-info/police-info.component';
import { PoliceInfoService } from 'src/app/police-info/police-info.service';
import { Force } from '../force.model';
import { PoliceForcesService } from '../police-forces.service';
import { Socials } from '../socials.model';

@Component({
  selector: 'app-force-detail',
  templateUrl: './force-detail.component.html',
  styleUrls: ['./force-detail.component.css'],
})
export class ForceDetailComponent implements OnInit, OnDestroy {

  force: Force;
  index: number = 0;
  social_media: Socials[]
  data: boolean;
  subscription: Subscription;

  constructor(private route: ActivatedRoute, 
              private polForService: PoliceForcesService,
              private polInfoService: PoliceInfoService,
              private router: Router) { }

  ngOnInit(): void {
    
    this.subscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.index = +params['id'];
          this.force = this.polForService.getForceDetail(this.index);
          this.data = this.polInfoService.isLocationData(this.force.name);
        }
      );
  }

  onPoliceData(){
    //console.log(`Index passed to police-info: ${this.index}` )
    this.router.navigate(['/police-info', this.index], {relativeTo: this.route});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}

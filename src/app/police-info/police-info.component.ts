import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Force } from '../forces/force.model';
import { PoliceForcesService } from '../forces/police-forces.service';
import { CrimeData } from './crime-data.model';
import { PoliceInfoService } from './police-info.service';

@Component({
  selector: 'app-police-info',
  templateUrl: './police-info.component.html',
  styleUrls: ['./police-info.component.css']
})
export class PoliceInfoComponent implements OnInit, OnDestroy {

  force: Force;
  crimedata: CrimeData;
  index: number;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private polForService: PoliceForcesService,
              private polInfoService: PoliceInfoService) { }

  ngOnInit(): void {

  
  }
  ngOnDestroy(): void {
  
  }
}

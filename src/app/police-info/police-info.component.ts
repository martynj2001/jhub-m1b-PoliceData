import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Force } from '../forces/force.model';
import { CrimeData } from './crime-data.model';

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

  constructor() { }

  ngOnInit(): void {

  
  }
  ngOnDestroy(): void {
  
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Force } from 'src/app/forces/force.model';
import { PoliceForcesService } from 'src/app/forces/police-forces.service';
import { CrimeCatagory, CrimeData } from '../crime-data.model';
import { PoliceInfoService } from '../police-info.service';

@Component({
  selector: 'app-crime-data',
  templateUrl: './crime-data.component.html',
  styleUrls: ['./crime-data.component.css']
})
export class CrimeDataComponent implements OnInit {

  force: Force;
  crimedata: CrimeData [];
  index: number;
  subscription: Subscription;
  citys: string [];
  citySelected = null;
  crimeCatagories: CrimeCatagory[];

  constructor(private route: ActivatedRoute,
              private polForService: PoliceForcesService,
              private polInfoService: PoliceInfoService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (params) => {
        this.index = +params.get('id');
        this.force = this.polForService.getForceDetail(this.index);
        this.citys = this.polInfoService.getCitys(this.force.id);
      }
    )
  }

  onCitySelected(city: string){
    this.citySelected = city;
    this.crimedata = this.polInfoService.fetchCityCrimeData(this.force.id, city);
    this.crimeCatagories = this.polInfoService.fetchCrimeCatagories();
    console.log(this.crimeCatagories);
  }

}

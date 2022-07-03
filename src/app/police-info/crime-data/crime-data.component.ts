import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Force } from 'src/app/forces/force.model';
import { PoliceForcesService } from 'src/app/forces/police-forces.service';
import { PoliceApiCall } from 'src/app/shared/police-api-call.service';
import { CrimeCatagory, CrimeData } from '../crime-data.model';
import { PoliceInfoService } from '../police-info.service';

@Component({
  selector: 'app-crime-data',
  templateUrl: './crime-data.component.html',
  styleUrls: ['./crime-data.component.css']
})
export class CrimeDataComponent implements OnInit, OnDestroy {

  force: Force;
  crimedata: CrimeData[];
  crimeCatagories: CrimeCatagory[];
  citys: string [];

  crimeDataSub: Subscription;
  
  citySelected = null;
  isLoading = null;
  showCrimes = null;
  errorCode = null;
  selectedCatagory = 'all-crime';
  totalCrimes: number;

  constructor(private route: ActivatedRoute,
              private polForService: PoliceForcesService,
              private polInfoService: PoliceInfoService, 
              private apiCallService: PoliceApiCall) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.showCrimes = false;
    this.apiCallService.fetchCrimeCatagories().subscribe(
      (crimeCat) => {
        this.crimeCatagories = crimeCat;
      }, error => {
        this.errorCode = error;
      });
    this.route.paramMap.subscribe(
      (params) => {
        let index = +params.get('id');
        this.force = this.polForService.getForce(index);
        this.citys = this.polInfoService.getCitys(this.force.id);
        this.isLoading = false;
      });
  }

  onCitySelected(city: string){
    this.isLoading = true;
    this.citySelected = city;
    const city_area = this.polInfoService.getCityLocationData(this.force.id, city);
    this.crimeDataSub = this.apiCallService.fetchCrimeInformation(city_area, '2022-1', this.selectedCatagory).subscribe(
      (crimeData: CrimeData[]) => {
        this.crimedata = crimeData;
        this.polInfoService.setCrimeData(this.crimedata);
        this.totalCrimes = this.polInfoService.getTotalCrimes();
        this.isLoading = false;
        this.showCrimes = true;
      }, error => {
        this.errorCode = error;
      });
  }

  onCatagoryChanged(){
    console.log("Catagory Changed");
    this.isLoading = true;
    const city_area = this.polInfoService.getCityLocationData(this.force.id, this.citySelected);
    this.crimeDataSub = this.apiCallService.fetchCrimeInformation(city_area, '2022-1', this.selectedCatagory).subscribe(
      (crimeData: CrimeData[]) => {
        this.crimedata = crimeData;
        this.polInfoService.setCrimeData(this.crimedata);
        this.totalCrimes = this.polInfoService.getTotalCrimes();
        this.isLoading = false;
        this.showCrimes = true;
      }, error => {
        this.errorCode = error;
      });
  }

  ngOnDestroy(): void {
    //this.crimeDataSub.unsubscribe();
  }

}

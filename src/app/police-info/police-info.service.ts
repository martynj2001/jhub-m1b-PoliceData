import { Injectable } from '@angular/core';
import { PoliceApiCall } from '../shared/police-api-call.service';
import { CrimeCatagory, CrimeData } from './crime-data.model';

@Injectable({
  providedIn: 'root'
})
export class PoliceInfoService {

  //In production version this will need to be stored on external  
  //storage(perhaps Goofle Forebase?)

  private crimeData: CrimeData [];
  private crimeCatagories: CrimeCatagory[];

  forceLocations = [
    {
      id: "avon-and-somerset",
      city_1: {
        name: "Bristol",
        location: [
          "51.5226195,-2.5783928",
          "51.4589171,-2.7061088",
          "51.3852706,-2.5639732",
          "51.4559222,-2.419091"
        ]
      },
      city_2: {
        name: "Bath",
        location: [
          "51.4187779,-2.3656239",
          "51.3845084,-2.4452748",
          "51.338203,-2.3903431",
          "51.384489,-2.297359"
        ] 
      }
    },
    {
      id: "bedfordshire",
      city_1: {
        name: "Bedford",
        location: [
          "52.1798149,-0.4731771",
          "52.1233596,-0.5555746",
          "52.0862455,-0.4841635",
          "52.1520175,-0.3866598",
          "52.1798149,-0.4731771"
        ]
      },
      city_2: {
        name: "Luton",
        location: [
          "51.8951271,-0.5651876",
          "51.849728,-0.435538",
          "51.8934322,-0.3440878",
          "51.944253,-0.4759237",
          "51.8951271,-0.5651876"
        ] 
      }
    }
  ]

  constructor(private policeApiCall: PoliceApiCall) { }

  private getCityLocationData(id: string, city: string){
  
    let area = '';
    for (let force of this.forceLocations){
      if (id === force.id){
        if(city === force.city_1.name ){
          for (let latlong of force.city_1.location){
            area = area + latlong + ":";
          }  
          area = area.slice(0,-1);        
        } else {
          for (let latlong of force.city_2.location){
            area = area + latlong + ":";
          }  
          area = area.slice(0,-1);
        }
      }
    }
    console.log(area);
    return area;
  }

  getCitys(id: string){

    let citys: string[] = [];
    for (let force of this.forceLocations){
      if (id === force.id){
        citys.push(force.city_1.name);
        citys.push(force.city_2.name);
      }
    }
    return citys;
  } 

  fetchCityCrimeData(id: string, city: string, crimeCat: string = 'all-crime', date: string = '2022-1'){

    let location: string = this.getCityLocationData(id, city);
    this.policeApiCall.fetchCrimeInformation(crimeCat, location, date)
    .subscribe(
      (crimesData: CrimeData []) => {
         
        this.crimeData = crimesData;
        console.log(this.crimeData);
      }
    );
    return this.crimeData;
  }

  fetchCrimeCatagories( date: string = '2022-1'){
    this.policeApiCall.fetchCrimeCatagories(date).subscribe(
      (catagories: CrimeCatagory[]) => {
        this.crimeCatagories = catagories;
      }
    );
    return this.crimeCatagories;
  }

}
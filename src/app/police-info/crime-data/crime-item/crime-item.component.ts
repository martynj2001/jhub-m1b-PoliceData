import { Component, Input, OnInit } from '@angular/core';
import { CrimeData } from '../../crime-data.model';
import { PoliceInfoService } from '../../police-info.service';

@Component({
  selector: 'app-crime-item',
  templateUrl: './crime-item.component.html',
  styleUrls: ['./crime-item.component.css']
})
export class CrimeItemComponent implements OnInit {

  constructor(private policeInfoService: PoliceInfoService) { }

  @Input() crimeCatagory: string;
  @Input() crimeData: CrimeData[];
  @Input() totalCrimes: number;

  ngOnInit(): void {
   
  }

}

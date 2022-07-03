import { Component, Input, OnInit } from '@angular/core';
import { PoliceInfoService } from 'src/app/police-info/police-info.service';

@Component({
  selector: 'app-force-list-item',
  templateUrl: './force-list-item.component.html',
  styleUrls: ['./force-list-item.component.css']
})
export class ForceListItemComponent implements OnInit {

  @Input() force: string;
  @Input() index: number;
  data: boolean;

  constructor(private polInfoService: PoliceInfoService) { }

  ngOnInit(): void {

    this.data = this.polInfoService.isLocationData(this.force);

  }

}

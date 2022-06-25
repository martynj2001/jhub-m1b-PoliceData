import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-force-list-item',
  templateUrl: './force-list-item.component.html',
  styleUrls: ['./force-list-item.component.css']
})
export class ForceListItemComponent implements OnInit {

  @Input() force: string;
  @Input() index:number;

  constructor() { }

  ngOnInit(): void {
  }

}

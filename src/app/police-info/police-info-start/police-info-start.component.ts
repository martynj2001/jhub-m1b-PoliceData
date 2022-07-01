import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-police-info-start',
  templateUrl: './police-info-start.component.html',
  styleUrls: ['./police-info-start.component.css']
})
export class PoliceInfoStartComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  OnRtnToForce(){
    this.router.navigate(['/forces'], {relativeTo: this.route});
  }

}

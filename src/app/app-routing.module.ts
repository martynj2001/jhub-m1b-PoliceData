import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForceDetailComponent } from './forces/force-detail/force-detail.component';
import { ForceStartComponent } from './forces/force-detail/force-start/force-start.component';
import { ForcesComponent } from './forces/forces.component';
import { CrimeDataComponent } from './police-info/crime-data/crime-data.component';
import { CrimeItemComponent } from './police-info/crime-data/crime-item/crime-item.component';
import { PoliceInfoStartComponent } from './police-info/police-info-start/police-info-start.component';
import { PoliceInfoComponent } from './police-info/police-info.component';

const routes: Routes = [
  {path: '', redirectTo: '/forces', pathMatch: 'full'},
  {path: 'forces', component: ForcesComponent, children: [
      {path: '', component: ForceStartComponent },
      {path: ':id', component: ForceDetailComponent }
  ]},
  {path: 'police-info', component: PoliceInfoComponent, children: [
      {path: '', component: PoliceInfoStartComponent },
      {path: ':id', component: CrimeDataComponent, children: [
        {path: 'crime-data', component: CrimeItemComponent}
      ] },
      
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

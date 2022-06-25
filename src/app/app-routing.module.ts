import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForceDetailComponent } from './forces/force-detail/force-detail.component';
import { ForceStartComponent } from './forces/force-detail/force-start/force-start.component';
import { ForcesComponent } from './forces/forces.component';
import { PoliceInfoComponent } from './police-info/police-info.component';

const routes: Routes = [
  {path: '', redirectTo: '/forces', pathMatch: 'full'},
  {path: 'forces', component: ForcesComponent, children: [
      {path: '', component: ForceStartComponent },
      {path: ':id', component: ForceDetailComponent }
  ]},
  {path: 'police-info', component: PoliceInfoComponent, children: [
    {path: ':id', component: PoliceInfoComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

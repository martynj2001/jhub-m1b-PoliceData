import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ForcesComponent } from './forces/forces.component';
import { ForceListComponent } from './forces/force-list/force-list.component';
import { ForceDetailComponent } from './forces/force-detail/force-detail.component';
import { PoliceInfoComponent } from './police-info/police-info.component';
import { ForceStartComponent } from './forces/force-detail/force-start/force-start.component';
import { ForceListItemComponent } from './forces/force-list/force-list-item/force-list-item.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ForcesComponent,
    ForceListComponent,
    ForceDetailComponent,
    PoliceInfoComponent,
    ForceStartComponent,
    ForceListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

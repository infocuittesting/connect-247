import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppService } from "./app.service";

import { AppCommonpage } from "./app.commonpage";

import { IndividualprofileComponent } from './individualprofile/individualprofile.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import { IndividualService } from './individualprofile/individual.service';
import { ReservationService } from './reservation/reservation.service';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { ReservationoptionComponent } from './reservationoption/reservationoption.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { ProfileComponent } from './profile/profile.component';

import { ProfileService } from './profile/profile.service';
import { ModalService } from './modal.service';
import { ProfilesearchComponent } from './profilesearch/profilesearch.component';
import { SearchandeditreservationComponent } from './searchandeditreservation/searchandeditreservation.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { QueueroomComponent } from './queueroom/queueroom.component';
import { RoomdiscrepanciesComponent } from './roomdiscrepancies/roomdiscrepancies.component';
import { RoomconditionComponent } from './roomcondition/roomcondition.component';
import { FacilityforecastComponent } from './facilityforecast/facilityforecast.component';
import { RoomhistoryComponent } from './roomhistory/roomhistory.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { CheckinComponent } from './checkin/checkin.component';
import { TracesComponent } from './traces/traces.component';
import { RoomassignmentComponent } from './roomassignment/roomassignment.component';
import { ManagingqueueComponent } from './managingqueue/managingqueue.component';
import { RevenuemanagementComponent } from './revenuemanagement/revenuemanagement.component';
import {TracesService} from './traces/traces.service';
import { AdvancedsearchComponent } from './advancedsearch/advancedsearch.component';
import { FilterdataPipe } from './filterdata.pipe';
import { DateFormatPipe } from './date-format.pipe';

// Angular Material  Imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,MatIconModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import {MatGridListModule} from '@angular/material/grid-list';


//form control and validators for mat select
import {FormControl, Validators} from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
   
    AppCommonpage,
   routingComponents,
   AdvancedsearchComponent,
   FilterdataPipe,
   DateFormatPipe,
  
   
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    MatCardModule,  
    MatCheckboxModule,
    MatTableModule,
    CdkTableModule,
    MatGridListModule,
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [AppService,IndividualService,ReservationService,ProfileService,ModalService,TracesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndividualprofileComponent } from './individualprofile/individualprofile.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { ReservationoptionComponent } from './reservationoption/reservationoption.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilesearchComponent } from './profilesearch/profilesearch.component';
import { SearchandeditreservationComponent } from './searchandeditreservation/searchandeditreservation.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { QueueroomComponent } from './queueroom/queueroom.component';
import { RoomdiscrepanciesComponent } from './roomdiscrepancies/roomdiscrepancies.component';
import { RoomconditionComponent } from './roomcondition/roomcondition.component';
import { FacilityforecastComponent } from './facilityforecast/facilityforecast.component';
import { RoomhistoryComponent } from './roomhistory/roomhistory.component';

import { AdvancedsearchComponent } from './advancedsearch/advancedsearch.component';
import { ArrivalComponent } from './arrival/arrival.component';
import { CheckinComponent } from './checkin/checkin.component';
import { TracesComponent } from './traces/traces.component';
import { RoomassignmentComponent } from './roomassignment/roomassignment.component';
import { ManagingqueueComponent } from './managingqueue/managingqueue.component';


//Revenue Management Module
import { RevenuemanagementComponent } from './revenuemanagement/revenuemanagement.component';


const routes: Routes = [ { path:'individualprofile', component:IndividualprofileComponent},
{ path:'reservation', component: ReservationComponent },
{ path:'modal-basic', component: ModalBasicComponent },
{ path:'reservationoption', component: ReservationoptionComponent },
{ path:'mains', component: MainscreenComponent },

{ path:'',component:MainscreenComponent},
{path:'advancedsearch',component:AdvancedsearchComponent},

{ path:'profile', component: ProfileComponent },
{ path:'psearch', component: ProfilesearchComponent },
{ path:'searchedit', component: SearchandeditreservationComponent },
{ path:'housekeeping', component: HousekeepingComponent },
{ path:'queueroom', component: QueueroomComponent },
{ path:'roomdisc', component: RoomdiscrepanciesComponent },
{ path:'roomcondn', component: RoomconditionComponent },
{ path:'facility', component: FacilityforecastComponent },
{ path:'roomhistory', component: RoomhistoryComponent },


{ path:'arrival', component:ArrivalComponent },
{ path:'roomassignment', component: RoomassignmentComponent },
{ path:'checkin', component: CheckinComponent },
{ path:'managingqueue', component: ManagingqueueComponent },
{ path:'trace', component: TracesComponent },

//path for revenue management
{path:'revenue',component:RevenuemanagementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ],
 
})
export class AppRoutingModule { }
export const routingComponents = [IndividualprofileComponent,ReservationComponent,ModalBasicComponent,ReservationoptionComponent,MainscreenComponent,
  ProfileComponent,ProfilesearchComponent,SearchandeditreservationComponent,HousekeepingComponent,QueueroomComponent,RoomdiscrepanciesComponent,
  RoomconditionComponent,FacilityforecastComponent,RoomhistoryComponent,ArrivalComponent,CheckinComponent,TracesComponent,ManagingqueueComponent,
  RoomassignmentComponent,AdvancedsearchComponent,RevenuemanagementComponent]
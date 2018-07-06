import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { CheckinService} from './checkin.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css'],
  providers:[CheckinService]
})
export class CheckinComponent implements OnInit {
  public searchandedit =[];

  constructor(private checkinService:CheckinService,private route:Router) { }

  ngOnInit() {
  

  
  
    let inputparms={
      "res":{
      "PF_Firstname":"",
      "RES_Room_Type":"",
      "RES_Stayon":"",
      "RES_Room":"",
      "RES_Market":"",
      "RES_Res_Type":"",
      "RES_Source":"",
      "RES_Creditcard_Number":"",
      "RES_Guest_Status":"",
      "PF_Type":"",
      "RES_Arrival":"",
      "RES_Block":"",
      "RES_Party":"",
      "RES_Confnumber":""
      },
      "pf":{
      "pf_country":"India",
      "pf_type":"individual"
      },
      "act":{
      "res_log_date":"",
      "emp_firstname":""
      }
      }
      
    
  this.checkinService.searchedit(inputparms)
  .subscribe((resp: any) => {
   this.searchandedit=resp;
 });

}
}

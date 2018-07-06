import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { RoomassignmentService } from "./roomassignment.service";
@Component({
  selector: 'app-roomassignment',
  templateUrl: './roomassignment.component.html',
  styleUrls: ['./roomassignment.component.css'],
  providers:[ RoomassignmentService]
})
export class RoomassignmentComponent implements OnInit {

 public searchandedit =[];
  constructor(private RoomassignmentService:RoomassignmentService,private route:Router) { }

  servicestatus=[];
  status=[];
  unassignProfile(){
     let inputparms={
    }
   this.RoomassignmentService.unassignProfile(inputparms)
   .subscribe((resp: any) => {
    this.servicestatus=resp.Status;
    this.status=resp.StatusCode;
  });
}

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
    
  
this.RoomassignmentService.searched(inputparms)
.subscribe((resp: any) => {
 this.searchandedit=resp;
});

}
}

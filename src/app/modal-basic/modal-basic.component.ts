import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";

import { Router } from "@angular/router";
import { AppService } from "../app.service";

@Component({
  selector: 'app-modal-basic',
  templateUrl: './modal-basic.component.html',
  styleUrls: ['./modal-basic.component.css'],
  providers:[ModalService]
})
export class ModalBasicComponent implements OnInit {

  

  public tables =[];

  public negotes =[];

  public notes =[];

  public credit =[];

  public prefer =[];

  
  constructor(private pppService:ModalService,private route:Router ) { }

  ngOnInit() {
 this.pppService.getTables()
   .subscribe((resp: any) => {
     this.tables=resp.ReturnValue;
       console.log("res");
   });


   this.pppService.getNegotiated()
   .subscribe((resp: any) => {
     this.negotes=resp.ReturnValue;
     console.log("res");
   });


   this.pppService.getNotes()
   .subscribe((resp: any) => {
     this.notes=resp.ReturnValue;
     console.log("res");
   });


   this.pppService.getPreferences()
   .subscribe((resp: any) => {
     this.prefer=resp.ReturnValue;
     console.log("res");
   });


   this.pppService.getCreditcard()
   .subscribe((resp: any) => {
     this.credit=resp.ReturnValue;
    // alert(resp);  
    console.log("res");
  
});

  }
  
  servicestatus=[];
  insertFun(){
     let inputparms={
  "PF_Firstname":"aravind",
	"PF_Mobileno":"8695696779",
	"PF_Sequence":"2",
	"PF_Creditcard_No":"87676565433",
	"PF_Card_Type":"vs",
	"PF_Expiration_Date":"10/23"

    }
   this.pppService.insertCreditcard(inputparms)
   .subscribe((resp: any) => {
    this.servicestatus=resp.ServiceStatus;
  });
}

  
  insertnegoFun(){
    let inputparms={
      "PF_Firstname":"veroni",
	"PF_Mobileno":"35445677",
	"PF_Negotiated_Sequence":"1",
	"PF_Start_Sell_Date":"2018-03-28",
             "PF_End_Sell_Date":"2018-03-30",
            "PF_Rate_Code":"whl"

}
  this.pppService.insertNegotiated(inputparms)
  .subscribe((resp: any) => {
   this.servicestatus=resp.ServiceStatus;
 });

}


 
insertnotesFun(){
  let inputparms={
    "PF_Firstname":"veroni",
	"PF_Mobileno":"45456567",
	"PF_Note_Type":"General Notes",
	"PF_Note_Title":"Guest travelling with pets",
	"PF_Note_Description":"Please advise of local pet care and vertinary facilities",
	"PF_Notes_Date":"2018-04-25 01:11:00"

}
this.pppService.insertNotes(inputparms)
.subscribe((resp: any) => {
 this.servicestatus=resp.ServiceStatus;
});

}


insertPreferFun(){
  let inputparms={
    "PF_Firstname":"jersy",
    "PF_Mobileno":"98765678",
    "PF_Preference_Group":"floor",
    "PF_Preference_Description":"floor",
    "PF_Guest_Preference":"3rd floor",
    "pf_preference_group_desc":"specials"


}
this.pppService.insertPrefer(inputparms)
.subscribe((resp: any) => {
 this.servicestatus=resp.ServiceStatus;
});

}

updateCreditFun(){
  let inputparms={
    "PF_Firstname":"Daisy",
    "PF_Mobileno":"86956979",
                "PF_Creditcard_No":"4546575686484"
  

}
this.pppService.updateCredit(inputparms)
.subscribe((resp: any) => {
 this.servicestatus=resp.ServiceStatus;
});

}


updateNegotiatedFun(){
  let inputparms={
  
	"PF_Firstname":"Daisy",
	"PF_Mobileno":"353464634",
             "PF_End_Sell_Date":"2018-04-19"

  

}
this.pppService.updateNegotiated(inputparms)
.subscribe((resp: any) => {
 this.servicestatus=resp.ServiceStatus;
});

}

updateNotesFun(){
  let inputparms={
  
    "PF_Firstname":"veroni",
    "PF_Mobileno":"45456567",
    "PF_Note_Description":"Please advise of local pet care and vertinary facilities"
  }
this.pppService.updateNotes(inputparms)
.subscribe((resp: any) => {
 this.servicestatus=resp.ServiceStatus;
});

}




  }

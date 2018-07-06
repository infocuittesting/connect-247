
import { Component } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { IndividualService } from "./individual.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-individualprofile',
  templateUrl: './individualprofile.component.html',
  styleUrls: ['./individualprofile.component.css'],
  providers:[IndividualService]
})
export class IndividualprofileComponent {

 
  constructor(private IndividualService:IndividualService,private route:Router) { }
user={};
 
  user33={};
  submit(inputt):void {
    console.log(inputt);
      this.IndividualService.postandgetdata (inputt)
      .subscribe( user333 => {
        this.user33 = user333;
    //   console.log("user33  "+ user333);   
      //  alert("user33  "+ user333);    
      },
                 //     error => this.errorMessage = <any>error
                     // function(response) { console.log("Success Response" + response)}
                      );  
                      this.route.navigate(['individualprofile/']);
     }

     servicestatus=[];
     deleteIndividualProfile(){
        let inputparms={
  
   
       }
      this.IndividualService.deleteIndividualProfile(inputparms)
      .subscribe((resp: any) => {
       this.servicestatus=resp.ServiceStatus;
     });
   }
   
     
   updateIndividualProfile(){
    let inputparms={
     "PF_Firstname":"aravindh",
        "PF_Mobileno":"34545",
        "PF_Individual_Address":"Oxon Hill, MD, USA",
        "PF_Home_Address":"Oxon Hill, MD, USA",	
        "PF_City":"newyork",	
        "PF_Postalcode":"621334",	
        "PF_Individual_Country":"america",	
        "PF_Individual_State":"hawaii"
      
        

   }
  this.IndividualService.updateIndividualProfile(inputparms)
  .subscribe((resp: any) => {
   this.servicestatus=resp.ServiceStatus;
 });
}


}

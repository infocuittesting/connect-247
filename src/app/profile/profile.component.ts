import { Component } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { ProfileService } from "./profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ProfileService]
})
export class ProfileComponent  {

  constructor(private ProfileService:ProfileService,private route:Router) { }
user={};
 
  user33={};
  submit(inputt):void {
    console.log(inputt);
      this.ProfileService.postandgetdata (inputt)
      .subscribe( user333 => {
        this.user33 = user333;
    //   console.log("user33  "+ user333);   
      //  alert("user33  "+ user333);    
      },
                 //     error => this.errorMessage = <any>error
                     // function(response) { console.log("Success Response" + response)}
                      );  
                      this.route.navigate(['profile/']);
     }


     servicestatus=[];
     deleteCompanyProfile(){
        let inputparms={
  
   
       }
      this.ProfileService.deleteCompanyProfile(inputparms)
      .subscribe((resp: any) => {
       this.servicestatus=resp.ServiceStatus;
     });
   }
   
   updateCompanyProfile(){
    let inputparms={


   }
  this.ProfileService.updateCompanyProfile(inputparms)
  .subscribe((resp: any) => {
   this.servicestatus=resp.ServiceStatus;
 });
}


}

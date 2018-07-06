import { Component, OnInit  } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from "@angular/router";
import { ReservationoptionService } from "./reservationoption.service";
@Component({
  selector: 'app-reservationoption',
  templateUrl: './reservationoption.component.html',
  styleUrls: ['./reservationoption.component.css'],
  providers:[ReservationoptionService]
})
export class ReservationoptionComponent implements OnInit {

  public tableschanges =[];
  

  constructor(private pppService:ReservationoptionService,private route:Router ) { }

//Alert start
alerts={};
user3={};
alertsub(inputt):void {
    this.pppService.alert(inputt)
    .subscribe( user333 => {
      this.user3 = user333; 
    },
    );  
   }
//
  //credit card option service
  user={};
  user33={};
  submit(inputt):void {
      this.pppService.postandgetdata (inputt)
      .subscribe( user333 => {
        this.user33 = user333; 
      },
      );  
     }

//credit card option service end

     //Fixed charges options
     
checkedvalue:String;
     checkboxfun(chk){
this.checkedvalue=chk.values;
     }
 
    fixed=[];     
     fix(inputt):void {
       console.log(inputt);
         this.pppService.Fixedcharges(inputt)
         .subscribe( user333 => {
          
         },

            );  
              this.route.navigate(['reservationoption/']);
        }  
         //Fixed charges options end.



//privileges option service

     
checkedvalue1:String;
     checkboxfun1(chk1){
this.checkedvalue1=chk1.values;
     }
 
    privillege=[];    
  submits(inputt):void {
    console.log(inputt);
      this.pppService.privileges (inputt)
      .subscribe( users333 => {
       
      },
      );  
      this.route.navigate(['reservationoption/']);
     }
// privileges option end


// Traces start

trace={};
 
tracess={};
submittrace(inputt):void {
  console.log(inputt);
    this.pppService.Traces (inputt)
    .subscribe( user333 => {
      this.tracess = user333;
 
    },

            );  
              this.route.navigate(['reservationoption/']);
   }

//waitlist
waitlist={};
 
waitlists={};
submitwait(inputt):void {
  console.log(inputt);
    this.pppService.waitli(inputt)
    .subscribe( user333 => {
      this.waitlists = user333;
 
    },

            );  
              this.route.navigate(['reservationoption/']);
   }


// Trace End
fixedcharge:any;
privil:any;
  ngOnInit() {
    
    this.fixedcharge =[ { val:false, values:"Once"},{ val:false, values:"Daily"},
    { val:false, values:"Weekly"},{ val:false, values:"Monthly"},{ val:false, values:"Quaterly"},{ val:false, values:"Yearly"}]

    this.privil =[ { val:false, values:"No Post"},{ val:false, values:"Authourized Direct Bill"},
    { val:false, values:"Pre Stay Charging"},{ val:false, values:"Schedule Check Out at"}]

 this.pppService.getTables1()
   .subscribe((resp: any) => {
     this.tableschanges=resp.ReturnValue;
   });
  }
}



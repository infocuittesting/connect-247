import { Component, OnInit } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Router } from "@angular/router";
import { ManagingqueueService } from "./managingqueue.service";
@Component({
  selector: 'app-managingqueue',
  templateUrl: './managingqueue.component.html',
  styleUrls: ['./managingqueue.component.css'],
  providers:[ManagingqueueService]
})
export class ManagingqueueComponent implements OnInit {
  
  constructor(private pService:ManagingqueueService,private route:Router ) { }

public search = [];

     checkin={};
 
  checkin1={};
  subm(inputt):void {
    console.log(inputt);
      this.pService.postmethod1(inputt)

      .subscribe( user333 => {
        this.checkin1 = user333;
   
       
      },

              );  
                this.route.navigate(['managingqueue/']);
     }

  ngOnInit() {
    let inputparms={
      "PF_Firstname":"",
      "RM_Room_Type":"",
      "RM_Room":"",
      "RM_Room_Class":""
    }
    
  this.pService.checkin(inputparms)
  .subscribe((resp: any) => {
   this.search=resp.ReturnValue;
 });

}

}

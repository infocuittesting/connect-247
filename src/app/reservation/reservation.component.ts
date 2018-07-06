
import { Component, OnInit  } from '@angular/core';
import { Route } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {Http} from "@angular/http";
import { ReservationService } from "./reservation.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers:[ReservationService]
})
export class ReservationComponent implements OnInit {

  public tableschanges =[];
  public language =[];
  public country=[];
  public restype=[];
  public source=[];
  public origin=[];
  public roomtype=[];
  public payment =[];
  public getc =[];
  public marketpro =[];
  
  constructor(private ReservationService:ReservationService,private route:Router) { }
user={};
 usera={};
 confim={};
  user33={};
  submit(inputt):void {
   // console.log(inputt);
      this.ReservationService.postandgetdata (inputt)
      .subscribe( (resp:any) => {
        
        this.user33 = resp;
          this.confim=resp.ConfirmationNumber;
          this.usera=resp.Return;
      },

                      );  
                      this.route.navigate(['reservation/']);
     }   
     ngOnInit() {
      this.ReservationService.getratecode()
      .subscribe((resp: any) => {
        this.tableschanges=resp.ReturnValue;
      });
       
      this.ReservationService.getrestype()
      .subscribe((resp: any) => {
        this.restype=resp.ReturnValue;
      }); 
      
      this.ReservationService.getsource()
      .subscribe((resp: any) => {
        this.source=resp.ReturnValue;
      });

      this.ReservationService.getorigin()
      .subscribe((resp: any) => {
        this.origin=resp.ReturnValue;
      });      

      this.ReservationService.getroomtype()
      .subscribe((resp: any) => {
        this.roomtype=resp.ReturnValue;
      }); 
      
      this.ReservationService.getpayment()
      .subscribe((resp: any) => {
        this.payment=resp.ReturnValue;
      });
      
      this.ReservationService.getcurrencydata()
      .subscribe((resp: any) => {
        this.getc=resp.ReturnValue;
      }); 
      this.ReservationService.getmarket()
      .subscribe((resp: any) => {
        this.marketpro=resp.ReturnValue;
      });                   
    }  
}


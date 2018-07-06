import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-housekeeping',
  templateUrl: './housekeeping.component.html',
  styleUrls: ['./housekeeping.component.css']
})
export class HousekeepingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

public commonflag:string;

public changeroomlist:string;
  sample(flag)
  {
    
this.commonflag=flag;

  }

  housekeepingstatus()

  {

   

  if(this.commonflag=="roomlist")
{

  let inputparams={ 
    'RM_Room_Status':'dirty',
    'Room_List':this.changeroomlist
  }
}

else if(this.commonflag=="fromtoroom")
{

}
}
}

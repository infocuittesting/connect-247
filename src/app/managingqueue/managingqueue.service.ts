import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ManagingqueueService {

  constructor(
    private http: Http
  ) { }
 


 postmethod1(input:any):  Observable<object[]> {
       
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={"RM_Qtime":input.RM_Qtime,"RM_Room":input.RM_Room, "RM_Room_Type":input.RM_Room_Type,"RM_Room_Class":input.RM_Room_Class,"RM_FO_Status":input.RM_FO_Status,
   "RM_Room_Status":input.RM_Room_Status,"PF_Firstname":input.PF_Firstname,"RM_VIP":input.RM_VIP,"PF_Mobileno":"9865044075"
 };
  
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_FD_POST_INSERT_UpdateQueueRreservation',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
}



checkin(insertdata:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/HOTEL_FD_GET_SELECT_QueryQueueReservation',insertdata,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}


 private extractData(res: Response) {
  //alert('hai20')
  console.log('res========---===='+res);
  let body = res.json();
  //alert(JSON.stringify(body))
  console.log(JSON.stringify(body));
      return body;
      
  }

}

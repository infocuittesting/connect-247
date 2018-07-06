import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ReservationService { 

    constructor (
        private http: Http
      ) {}
        
      postandgetdata(input:any):  Observable<object[]> {
       
        const headers = new Headers();
         headers.append('Content-Type','application/json');
         const options = new RequestOptions({ headers: headers });
         console.log('working');
         let body={"PF_Firstname":input.PF_Firstname,"PF_Mobileno":input.PF_Mobileno,"RES_Arrival":input.RES_Arrival,"RES_Depature":input.RES_Depature,
         "RES_Nights":input.RES_Nights,"RES_Adults":input.RES_Adults,"RES_Child":input.RES_Child,"RES_Number_Of_Rooms":input.RES_Number_Of_Rooms,
         "RES_Room_Type":input.RES_Room_Type,"RES_Room":input.RES_Room,"RES_Rate":input.RES_Rate,"RES_Packages":input.RES_Packages,
         "RES_Block_Code":input.RES_Block_Code,"RES_Res_Type":input.RES_Res_Type,"RES_Market":input.RES_Market,"RES_Source":input.RES_Source,
         "RES_Origin":input.RES_Origin,"RES_Payment":input.RES_Payment,"RES_Creditcard_Number":input.RES_Creditcard_Number,
         "RES_Exp_Date":input.RES_Exp_Date,"RES_Guest_Balance":input.RES_Guest_Balance,"RES_Disc_Amount":input.RES_Disc_Amount,
         "RES_Disc_Reason":input.RES_Disc_Reason, "RES_Specials":input.RES_Specials, "RES_Comments":input.RES_Comments,"RES_Item_Inv":input.RES_Item_Inv,
         "RES_Extension":input.RES_Extension,"RES_Rate_Code":input.RES_Rate_Code,"RES_ETA":input.RES_ETA,"RES_RTC":input.RES_RTC,
         "RES_Stayon":"2018/05/01 ","RES_Block":"", "RES_Party":"", "RES_Guest_Status ":"Due-In", "RES_Currency":input.RES_Currency,
         "RES_Disc_perc":input.RES_Disc_perc,
       };
        
         return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_UpdateNewReservation',body,options)
            .map(this.extractData)
            //.catch(this.handleErrorObservable);
     }

     getratecode():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers });
      
     
      return this.http.get('https://hotel360.herokuapp.com/Profile/profileratecode')
         .map(this.extractData)
         //.catch(this.handleErrorObservable);
  }

getrestype():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Restype')
     .map(this.extractData)
}
getsource():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Source')
     .map(this.extractData)
}
getorigin():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Origin')
     .map(this.extractData)
}
getroomtype():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.post('https://hotel360.herokuapp.com/Select_Room_Type',options)
     .map(this.extractData)
}
getpayment():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Payment')
     .map(this.extractData)
}
getcurrencydata():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Profile/profilecurrency')
     .map(this.extractData)
}
getmarket():  Observable<object[]> {    
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_GET_SELECT_Market')
     .map(this.extractData)
}
 private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
    //alert(JSON.stringify(body))
    console.log(JSON.stringify(body));
        return body;
    }
   // private handleErrorObservable (error: Response | any) {
     //   console.error("error mesage e=-=-=-=-"+error);
       // return Observable.throw(error.message || error);
        //}
}
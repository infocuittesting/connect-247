import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class ReservationoptionService {

  constructor(
    private http: Http
  ) { }



      postandgetdata(input:any):  Observable<object[]> {
       
        const headers = new Headers();
         headers.append('Content-Type','application/json');
         const options = new RequestOptions({ headers: headers });
         console.log('working');
         let body={"PF_Firstname":"santha","PF_Mobileno":"9003732987","PF_Sequence":input.PF_Sequence, "PF_Creditcard_No":input.PF_Creditcard_No,
         "PF_Card_Type":input.PF_Card_Type,"PF_Expiration_Date":input.PF_Expiration_Date,"PF_Firstname1":"priya","PF_Mobileno1":"9003732987","PF_Sequence1":input.PF_Sequence1, "PF_Creditcard_No1":input.PF_Creditcard_No1,
         "PF_Card_Type1":input.PF_Card_Type1,"PF_Expiration_Date1":input.PF_Expiration_Date1
       };
        
         return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileCreditcard',body,options)
            .map(this.extractData)
            //.catch(this.handleErrorObservable);
     }

// Fixed reservatipn

     Fixedcharges(input:any):  Observable<object[]> {
       
      const headers = new Headers();
       headers.append('Content-Type','application/json');
       const options = new RequestOptions({ headers: headers });
       console.log('working');
       let body={"PF_Mobileno":"8489100429", "Fixed_Charges_Begin_Date":input.Fixed_Charges_Begin_Date, "Fixed_Charges_End_Date":input.Fixed_Charges_End_Date,"Fixed_Charges_Transaction_Code":input.Fixed_Charges_Transaction_Code,"Fixed_Charges_Article_Code":input.Fixed_Charges_Article_Code,
       "Fixed_Charges_Amount":input.Fixed_Charges_Amount,"Fixed_Charges_Quantity":input.Fixed_Charges_Quantity, "Fixed_Charges_Supplement":input.Fixed_Charges_Supplement,"Fixed_Charges_Occurrence":input.Fixed_Charges_Occurrence,
       
     };
      
       return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Post_Insert_UpdateFixedChargesReservation',body,options)
          .map(this.extractData)
          //.catch(this.handleErrorObservable);
   }


   privileges(inputss:any):  Observable<object[]> {
       
    const headers = new Headers();
     headers.append('Content-Type','application/json');
     const options = new RequestOptions({ headers: headers });
     console.log('working');
     let body={"pf_Mobileno":"8489100429","privileges_key":inputss.privileges_key
   };
    
     return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Post_Insert_UpdateGuestPrivileges',body,options)
        .map(this.extractData)
        //.catch(this.handleErrorObservable);
 }


// traces

Traces(input:any):  Observable<object[]> {
       
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={"pf_Mobileno":"9003732987","traces_from_date":input.traces_from_date, "traces_to_date":input.traces_to_date,
   "traces_time":input.traces_time,"traces_dept_code":input.traces_dept_code,"traces_trace_text":input.traces_trace_text
 };
  
   return this.http.post('https://hotel360.herokuapp.com/Hotel_RES_Post_Insert_UpdateGuestTraces',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
}


//waitlist 

waitli(input:any):  Observable<object[]> {
       
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={"PF_Firstname":"saranya","PF_Mobileno":"9698206935","RES_Id":"14",
   "RES_Waitlist_Reason":input.RES_Waitlist_Reason,"RES_Waitlist_Priority":input.RES_Waitlist_Priority,
   "RES_Waitlist_Telephoneno":input.RES_Waitlist_Telephoneno,"RES_Waitlist_Description":input.RES_Waitlist_Description
 };
  
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_WaitlistReservation',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
}


  getTables1():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
   
    return this.http.get('https://hotel360.herokuapp.com/Hotel_RES_Get_Select_QueryReservationActivitylog?Emp_Id=121')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
}

alert(input:any):  Observable<object[]> {
       
  const headers = new Headers();
   headers.append('Content-Type','application/json');
   const options = new RequestOptions({ headers: headers });
   console.log('working');
   let body={"PF_Firstname":"saranya","PF_Mobileno":"9698206935","RES_Alert_Code":input.RES_Alert_Code,"RES_Alert_Area":input.RES_Alert_Area,
   "RES_Alert_Description":input.RES_Alert_Description
 };
  
   return this.http.post('https://hotel360.herokuapp.com/HOTEL_RES_POST_INSERT_UpdateAlertReservation',body,options)
      .map(this.extractData)
      //.catch(this.handleErrorObservable);
}


private extractData(res: Response) {
//alert('hai20')
console.log('res========---===='+res);
let body = res.json();
console.log(JSON.stringify(body));
    return body;
}
}


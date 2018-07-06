import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ModalService { 

    constructor (
        private http: Http
      ) {}

        
   getTables():  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers });
        
       
        return this.http.get('https://hotel360.herokuapp.com/Profile/QueryProfileAcitivitylog?Emp_Id=121&PF_Mobileno=989789098')
           .map(this.extractData)
           //.catch(this.handleErrorObservable);
    }

    getNegotiated():  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers });
      
     
      return this.http.get('https://hotel360.herokuapp.com/Profile/QueryNegotiatedRate?PF_Firstname=veroni&PF_Mobileno=35445677&PF_Rate_Code=whl')
         .map(this.extractData)
         //.catch(this.handleErrorObservable);
  }
      
  
  getNotes():  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
   
    return this.http.get('https://hotel360.herokuapp.com/Profile/QueryProfileNotes?PF_Firstname=veroni&PF_Mobileno=345353&PF_Note_Type=General Notes ')
       .map(this.extractData)
       //.catch(this.handleErrorObservable);
}


getCreditcard():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.get('https://hotel360.herokuapp.com/Profile/QueryProfileCreditcard?PF_Firstname=Daisy&PF_Mobileno=86956979')
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}



//insert service for credit card
insertCreditcard(insertdata:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileCreditcard',insertdata,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}


insertNotes(insertdata:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileNotes',insertdata,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}



insertNegotiated(insertdata:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateNegotiatedRate',insertdata,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}


insertPrefer(insertdata:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfilePreferencenew',insertdata,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}



   
getPreferences():  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.get('https://hotel360.herokuapp.com/Profile/QueryProfilePreference?PF_Firstname=jersy&PF_Mobileno=98765678&PF_Preference_Group=floor&PF_Guest_Preference=4th floor')
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}


updateCredit(insertdata:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileCreditcardRecord',insertdata,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}


updateNegotiated(insertdata:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileNegotiatedRateRecord',insertdata,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}


updateNotes(insertdata:any):  Observable<object[]> {
       
  const headers = new Headers({'Content-Type':'application/json'})
  const options = new RequestOptions({ headers: headers });
  
 
  return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileNotesRecord',insertdata,options)
     .map(this.extractData)
     //.catch(this.handleErrorObservable);
}
 private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
  console.log(JSON.stringify(body));
    // a(JSON.stringify(body));
        return body;
    }
   // private handleErrorObservable (error: Response | any) {
     //   console.error("error mesage e=-=-=-=-"+error);
       // return Observable.throw(error.message || error);
        //}
}
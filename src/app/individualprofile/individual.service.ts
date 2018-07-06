import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class IndividualService { 

    constructor (
        private http: Http
      ) {}

        
      postandgetdata(input:any):  Observable<object[]> {
       
        const headers = new Headers();
         headers.append('Content-Type','application/json');
         const options = new RequestOptions({ headers: headers });
         console.log('working');
         let body={"PF_Firstname":"padhu", 
         "PF_Lastname":"Veroni", 
         "PF_Language":"English",
         "PF_Title":"",
         "PF_Mobileno":"9865044075",
         "PF_Individual_Address":"4/931,raju street",
         "PF_Home_Address":"raju street, Chennai, India",
         "PF_City":"Chennai",
         "PF_Postalcode":"621005",
         "PF_Individual_Country":"India",
         "PF_Individual_State":"Tamilnadu",
         "PF_Salutation":"Ms",
         "PF_Individual_VIP":"VIP",
         "PF_Nationality":"Indian",
         "PF_Date_Of_Birth":"09/07/1996",
         "PF_Type":"individual",
         "PF_Passport":"2343456789098789045678334558586689696",
         "PF_Individual_Communication1":"044-23233434",
         "PF_Individual_Communication2":"0222-3455385",
         "PF_Individual_Communication3":"234354554",
         "PF_Individual_Commtype1":"Business",
         "PF_Individual_Commtype2":"Company",
         "PF_Individual_Commtype3":"Guestnumber"
       };
        
         return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateIndividualProfile',body,options)
            .map(this.extractData)
            //.catch(this.handleErrorObservable);
     }

     deleteIndividualProfile(insertdata:any):  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers });
      
     
      return this.http.get('https://hotel360.herokuapp.com/Profile/DeleteProfileRecord?PF_Firstname=aravindh&PF_Mobileno=23432435&PF_Type=individual')
         .map(this.extractData)
         //.catch(this.handleErrorObservable);
    }
    

    updateIndividualProfile(insertdata:any):  Observable<object[]> {
       
      const headers = new Headers({'Content-Type':'application/json'})
      const options = new RequestOptions({ headers: headers });
      
     
      return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileRecordIndividual',insertdata,options)
         .map(this.extractData)
         //.catch(this.handleErrorObservable);
    }
    

 private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();
    alert(JSON.stringify(body))
    //console.log(JSON.stringify(body));
        return body;
    }
   // private handleErrorObservable (error: Response | any) {
     //   console.error("error mesage e=-=-=-=-"+error);
       // return Observable.throw(error.message || error);
        //}
}
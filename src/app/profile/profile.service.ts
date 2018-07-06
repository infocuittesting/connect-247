import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService { 

    constructor (
        private http: Http
      ) {}

        
      postandgetdata(input:any):  Observable<object[]> {
       
        const headers = new Headers();
         headers.append('Content-Type','application/json');
         const options = new RequestOptions({ headers: headers });
         console.log('working');
         let body={" PF_Firstname":input.PF_Firstname,"PF_Lastname":input.PF_Lastname,"PF_Language":input.PF_Language,"PF_Title":input.PF_Title,
        "PF_Mobileno":input.PF_Mobileno,"PF_Account":input.PF_Account,"PF_Company_Address":input.PF_Company_Address,
        "PF_Business_Address":input.PF_Business_Address,"PF_Postalcode":input.PF_Postalcode,"PF_Owner":input.PF_Owner,
        "PF_Territory":input.PF_Territory,"PF_Type":input.PF_Type,"PF_AR_Number":input.PF_AR_Number,"PF_City":input.PF_City,
        "PF_Ref_Currency":input.PF_Ref_Currency,"PF_Company_Communication1":input.PF_Company_Communication1,"PF_Company_Communication2":input.PF_Company_Communication2,"PF_Company_Communication3":input.PF_Company_Communication3,
        "PF_Company_Commtype1":input.PF_Company_Commtype1,"PF_Company_Commtype2":input.PF_Company_Commtype2,"PF_Company_Commtype3":input.PF_Company_Commtype3,"PF_Company_Country":input.PF_Company_Country,"PF_Company_State":input.PF_Company_State,
    };
        
         return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateCompanyProfile',input,options)
            .map(this.extractData)
            //.catch(this.handleErrorObservable);
     }




          
     deleteCompanyProfile(insertdata:any):  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers });
        
       
        return this.http.get('https://hotel360.herokuapp.com/Profile/DeleteProfileRecord?PF_Firstname=aravindh&PF_Mobileno=23432435&PF_Type=company')
           .map(this.extractData)
           //.catch(this.handleErrorObservable);
      }


      updateCompanyProfile(insertdata:any):  Observable<object[]> {
       
        const headers = new Headers({'Content-Type':'application/json'})
        const options = new RequestOptions({ headers: headers });
        
       
        return this.http.post('https://hotel360.herokuapp.com/Profile/UpdateProfileRecordCompany',insertdata,options)
           .map(this.extractData)
           //.catch(this.handleErrorObservable);
      }


 private extractData(res: Response) {
    //alert('hai20')
    console.log('res========---===='+res);
    let body = res.json();   
    alert(JSON.stringify(body))
    // console.log(JSON.stringify(body));
        return body;
    }
   // private handleErrorObservable (error: Response | any) {
     //   console.error("error mesage e=-=-=-=-"+error);
       // return Observable.throw(error.message || error);
        //}
}
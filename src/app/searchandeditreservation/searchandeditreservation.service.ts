import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchandeditreservationService {

  constructor(    private http: Http) { }

  searchedit(insertdata:any):  Observable<object[]> {
       
    const headers = new Headers({'Content-Type':'application/json'})
    const options = new RequestOptions({ headers: headers });
    
   
    return this.http.post(' https://hotel360.herokuapp.com/Hotel_Res_Post_Select_Queryreservation',insertdata,options)
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

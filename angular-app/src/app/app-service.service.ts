import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
//import { Data } from './Data';

import { Observable, of, pipe, throwError } from 'rxjs';
import { map,catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService  {

  constructor(private http: HttpClient) { }

  Root_url :string = 'http://localhost:8080/getFullPath';
getData(){
   return  this.http.get('/api/getFullPath').

    pipe (

     // map ( ( data : Data[] ) => {
       //   return data;
      //  }), catchError(error => {
      //  return throwError('something was wrong')
    //  })
    )

  }




}

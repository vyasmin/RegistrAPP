import { Injectable } from '@angular/core';

/* importar librerias */

import { HttpClient,HttpHandler,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry,catchError } from 'rxjs/operators';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'**'
    })
  }
  constructor(private http:HttpClient) {
  }
  direccion='https://jsonplaceholder.typicode.com/posts';
  getPosts(): Observable<any>{
    return this.http.get(this.direccion).pipe(retry(3));
  }
  getPost(id):Observable<any>{
    return this.http.get(this.direccion+'/'+id).pipe(retry(3));
  }
}

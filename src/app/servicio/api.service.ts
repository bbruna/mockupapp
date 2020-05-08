import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Persona } from '../models/persona';
import {environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  //url = 'http://localhost:3000/persona';
  url = "";
  constructor(private http: HttpClient) { 
    this.url = environment.urlEndPoint
  }

  getPersona(): Observable<Persona> {
    return this.http
      .get<Persona>(this.url)
      .pipe(
        retry(2),
        //catchError(this.handleError),
      );
  }
}

import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, fromEventPattern } from 'rxjs';
import { template } from './template';
import { identifierModuleUrl } from '@angular/compiler';

export interface PeriodicElement {
  id: number;
  name: string;
  email: any;
  password:any;
}



@Injectable({
  providedIn: 'root'
})
export class CrudService {
  server:string = "http://127.0.0.1:8000/";
  ELEMENT_DATA: PeriodicElement[] = [
    {id: 0, name: 'vicky', email: 'email@email.com', password: 'pass'},
    {id: 1, name: 'vicky', email: 'email@email.com', password: 'pass'},
    {id: 2, name: 'vicky', email: 'email@email.com', password: 'pass'},
    {id: 3, name: 'vicky', email: 'email@email.com', password: 'pass'},
    {id: 4, name: 'vicky', email: 'email@email.com', password: 'pass'}
  ];
  constructor(private router:Router, private actRoute:ActivatedRoute, private http:HttpClient) {
    
   }
  ELEMENT_DATAS;
  ngOninit(){
    /*let headers = new HttpHeaders();
    headers = headers.set('Content-Type','application/json');
    headers.append('encType', 'multipart/form-data');
    headers.append('X-Requested-With', 'XMLHttpRequest');
    const options = {
      headers: new HttpHeaders().append('encType', 'multipart/form-data').append('encType', 'multipart/form-data').append('X-Requested-With', 'XMLHttpRequest')
    }*/

    this.getElementData().subscribe(data => this.ELEMENT_DATAS = data);
  }
  public data;
  private _url: string = "/assets/data/elementData.json";
  private _url1:string ="http://www.mocky.io/v2/5d294f663000004d005a3ff4"
  private _url2: string = "http://www.mocky.io/v2/5e9b2dfc3300009532bf1715";
  getElementData():Observable<PeriodicElement[]>{
    return this.http.get<PeriodicElement[]>(this._url);
    
  }
  addElementData(name, email, password): Observable<template>{
    const element = new template(name, email, password);
    return this.http.post<template>(this.server + 'addElement', element);
  }
  getElementDataServer(): Observable<template[]>{
    return this.http.get<template[]>(this.server+ 'getData');
  }
  deleteElementData(id): Observable<template>{
    var template = {
      id: id,
      name:"not set",
      email:"not set",
      password:"not set"
    };
    return this.http.post<template>(this.server+'delElement', template);
  }

  updateElementData(formvalue): Observable<template>{

    return this.http.post<template>(this.server + 'update', formvalue)
  }
}

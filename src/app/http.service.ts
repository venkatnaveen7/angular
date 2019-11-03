import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient:HttpClient) { }


  getList(){
    this._httpClient.get('');
  }

}

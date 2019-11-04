import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient:HttpClient) { }


  getList(){
    return this._httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
  getBooksList(){
    return this._httpClient.get('https://fakerestapi.azurewebsites.net/api/Books');
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listData:any=[];

  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.getList().subscribe(data=>{
    this.listData=data;
    });
  }

}

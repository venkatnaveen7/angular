import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  booksList:Object=[];

  constructor(private _hhtp:HttpService) { }

  ngOnInit() {
    this.getBooks();
  }

  getBooks(){
    this._hhtp.getBooksList().subscribe(obj=>{
      this.booksList=obj;
    });
  }

}

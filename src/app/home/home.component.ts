import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  clickCounter: number =0;
  name:string="Type Here";
  constructor() { }

  ngOnInit() {
  }

  counterClick(){
    this.clickCounter+=1;
  }

  negativeClick(){
    this.clickCounter-=1;
  }

  setCssClasses(counter){
    return {
      activeClass:counter>2,
      deactiveClass:counter<=2
    }
  }

}

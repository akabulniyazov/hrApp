import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  message: string="Welcome to HR Application";
  date: string;

  constructor() {
    setInterval( () => {
      let currentDate = new Date();
      this.date=currentDate.toDateString()+' '+currentDate.toLocaleTimeString();
    } , 1000);
   }

  ngOnInit() {
  }

  addTwoNumbers(a: number,b: number){
    return a+b;
  }

}

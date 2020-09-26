import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  message: string="Welcome to HR Application";
  date: string;

  isCollapsed: boolean =true;

  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed;
    this.router.navigate(['employees']);
  }

  @Input("name") userName: string;

  constructor(private router: Router) {
    setInterval( () => {
      let currentDate = new Date();
      this.date=currentDate.toDateString()+' '+currentDate.toLocaleTimeString();
    } , 1000);
   }

  ngOnInit() {
  }
}

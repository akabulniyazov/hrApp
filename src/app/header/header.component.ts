import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';

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

  constructor(private router: Router,
    private hardcodedAuthenticationService : HardcodedAuthenticationServiceService) {
    setInterval( () => {
      let currentDate = new Date();
      this.date=currentDate.toDateString()+' '+currentDate.toLocaleTimeString();
    } , 1000);
   }

  ngOnInit() {
  }

  createEmployee(){
    this.router.navigate(['employee',-1]);
  }
}

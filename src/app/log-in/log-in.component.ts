import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username = ''
  password = ''
  errorMessage = 'Invalid credentials'
  invalidLogin = false

  constructor( private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationServiceService,) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    // console.log(this.password);
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['employees'])
      this.invalidLogin = false
    }else{
      this.invalidLogin=true
  }

}

}

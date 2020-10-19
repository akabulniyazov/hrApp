import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationServiceService
  ) { }

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }

}

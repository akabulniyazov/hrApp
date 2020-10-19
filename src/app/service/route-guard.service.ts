import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationServiceService } from './hardcoded-authentication-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodedAuthenticationService : HardcodedAuthenticationServiceService,
    private router: Router) {
    }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuthenticationService.isUserLoggedIn()){
      console.log("Returned true")
      return true;
    }
    // ROUTE USER TO LOGIN PAGE
    this.router.navigate(['login']);
      return false;

  }
}

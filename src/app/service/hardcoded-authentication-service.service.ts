import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationServiceService {

  constructor() { }

  authenticate(username, password){
    // console.log('before '+this.isUserLoggedIn)
    if(username === 'Mindtek' && password === 'MindtekStudent'){
      sessionStorage.setItem('authenticateUser',username)
      // console.log('after '+this.isUserLoggedIn)
      return true;
    }
      return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }
}

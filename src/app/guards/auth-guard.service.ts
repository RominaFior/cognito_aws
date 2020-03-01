import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem('currentUserToken')) {
      return true;
    } else {
      console.log('No estás logueado');
      this.router.navigate(['/']);
      return false
    }
  }
}

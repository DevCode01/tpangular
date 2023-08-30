import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    const isAuthenticated = this.authService.isAuthenticatedUser(); 
    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
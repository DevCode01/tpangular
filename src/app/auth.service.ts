import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(
    private _http: HttpClient,
    private _route: Router,
  ) {}

  login() {
    this.isAuthenticated = true;
    console.log("set to TRUE");
  }

  logout() {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
  
  getUserStatus(username: string): Observable<any> {
    return this._http.get<any>('http://localhost:3000/register?username=' + username);
  }
}
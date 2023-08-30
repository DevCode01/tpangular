import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
    // Logic to authenticate user
    this.isAuthenticated = true;
    console.log("set to TRUE");
  }

  logout() {
    // Logic to log out user
    this.isAuthenticated = false;
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({  // Note the @ symbol before Component
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _route: Router, private _http: HttpClient) { }
  signup: FormGroup | any;
  signuser: any;
  
  ngOnInit(): void {
    this.signup = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
    });
  }


  signupdata(signup: FormGroup) {
    if (this.signup.valid) {
      this.signuser = this.signup.value.username;
      this._http.post<any>("http://localhost:3000/register", this.signup.value)
        .subscribe(
          res => {
            alert('Nouvel utilisateur ajouté');
            this.signup.reset();
            this._route.navigate(['login']);
          },
          err => {
            alert('Souci technique');
          }
        );
    } else {
      alert('Saisie invalide');
    }
  }
  
}

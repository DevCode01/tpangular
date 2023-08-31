import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';
import '@testing-library/jest-dom';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, ReactiveFormsModule],
      providers: [AuthService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to listcourse on successful login', () => {
    const mockUser = {
      username: 'userTest',
      password: 'userTest'
    };

    spyOn(component['_http'], 'get').and.returnValue(of([mockUser])); 
    spyOn(component['_route'], 'navigate'); 

    component.login.controls['username'].setValue('aa');
    component.login.controls['password'].setValue('aa');
    component.logindata(component.login);

    expect(component['_route'].navigate).toHaveBeenCalledWith(['listcourse']);
  });

  it('should show error message on failed login', () => {
    const mockUser = {
      username: 'userTest',
      password: 'userTest'
    };

    spyOn(component['_http'], 'get').and.returnValue(of([mockUser])); 
    spyOn(component['_route'], 'navigate'); 
    spyOn(window, 'alert'); 

    component.login.controls['username'].setValue('eeeee');
    component.login.controls['password'].setValue('eeee'); 
    component.logindata(component.login);

    expect(window.alert).toHaveBeenCalledWith('Utilisateur ou mot de passe incorrect');
  });
});

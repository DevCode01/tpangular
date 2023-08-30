import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListCourseComponent } from './list-course/list-course.component';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ListCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      { path: 'listcourse', component: ListCourseComponent, canActivate: [AuthGuard] },
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}


    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Course {
  id: number;
  courseName: string;
  location: string;
}

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courseForm: FormGroup | any;
  courses: Course[] = [];

  constructor(private _http: HttpClient, private _route: Router) {}

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      courseName: new FormControl(),
      location: new FormControl()
    });

    this.loadCourses();
  }

  loadCourses() {
    this._http.get<Course[]>('http://localhost:3000/course')
      .subscribe(
        res => {
          this.courses = res;
        },
        err => {
          console.error('Error loading courses', err);
        }
      );
  }

  createCourse() {
    const courseData = this.courseForm.value;

    if (courseData.courseName && courseData.location) {
      this._http.post<any>('http://localhost:3000/course', courseData)
        .subscribe(
          res => {
            alert('Course created successfully');
            this.courseForm.reset();
            this.loadCourses(); // Refresh the course list
          },
          err => {
            alert('Error creating course');
          }
        );
    } else {
      alert('Please fill in all fields.');
    }
  }

  deleteCourse(courseId: number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this._http.delete(`http://localhost:3000/course/${courseId}`)
        .subscribe(
          res => {
            alert('Course deleted successfully');
            this.loadCourses(); // Refresh the course list
          },
          err => {
            alert('Error deleting course');
          }
        );
    }
  }

  logout() {
    // Here, you can implement your logout logic
    // For example, navigate to the login page
    this._route.navigate(['login']);
  }
}

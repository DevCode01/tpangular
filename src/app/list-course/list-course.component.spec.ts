import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ListCourseComponent } from './list-course.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListCourseComponent', () => {
  let component: ListCourseComponent;
  let fixture: ComponentFixture<ListCourseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListCourseComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize courseForm', () => {
    expect(component.courseForm).toBeDefined();
  });

  it('should initialize courses array', () => {
    expect(component.courses).toEqual([]);
  });

  it('should create a course', () => {
    component.courseForm.controls['courseName'].setValue('CourseTest');
    component.courseForm.controls['location'].setValue('LocalisationTest');

    component.createCourse();
    expect(component.courses.length).toBe(1);
    expect(component.courses[0].courseName).toBe('CourseTest');
    expect(component.courses[0].location).toBe('LocalisationTest');
  });


});

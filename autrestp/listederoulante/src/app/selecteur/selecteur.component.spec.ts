import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecteurComponent } from './selecteur.component';

describe('SelecteurComponent', () => {
  let component: SelecteurComponent;
  let fixture: ComponentFixture<SelecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecteurComponent]
    });
    fixture = TestBed.createComponent(SelecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

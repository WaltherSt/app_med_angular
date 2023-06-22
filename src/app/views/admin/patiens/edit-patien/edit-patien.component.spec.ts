import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatienComponent } from './edit-patien.component';

describe('EditPatienComponent', () => {
  let component: EditPatienComponent;
  let fixture: ComponentFixture<EditPatienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPatienComponent]
    });
    fixture = TestBed.createComponent(EditPatienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

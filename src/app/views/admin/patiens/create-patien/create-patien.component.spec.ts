import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePatienComponent } from './create-patien.component';

describe('CreatePatienComponent', () => {
  let component: CreatePatienComponent;
  let fixture: ComponentFixture<CreatePatienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePatienComponent]
    });
    fixture = TestBed.createComponent(CreatePatienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

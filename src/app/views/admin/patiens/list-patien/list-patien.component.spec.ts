import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatienComponent } from './list-patien.component';

describe('ListPatienComponent', () => {
  let component: ListPatienComponent;
  let fixture: ComponentFixture<ListPatienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListPatienComponent]
    });
    fixture = TestBed.createComponent(ListPatienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

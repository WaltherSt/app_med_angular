import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMeetsComponent } from './list-meets.component';

describe('ListMeetsComponent', () => {
  let component: ListMeetsComponent;
  let fixture: ComponentFixture<ListMeetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMeetsComponent]
    });
    fixture = TestBed.createComponent(ListMeetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

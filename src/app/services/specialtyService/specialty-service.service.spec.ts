import { TestBed } from '@angular/core/testing';

import { SpecialtyServiceService } from './specialty-service.service';

describe('SpecialtyServiceService', () => {
  let service: SpecialtyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialtyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

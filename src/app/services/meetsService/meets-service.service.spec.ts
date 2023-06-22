import { TestBed } from '@angular/core/testing';

import { MeetsServiceService } from './meets-service.service';

describe('MeetsServiceService', () => {
  let service: MeetsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DisplayPrdService } from './display-prd.service';

describe('DisplayPrdService', () => {
  let service: DisplayPrdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayPrdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

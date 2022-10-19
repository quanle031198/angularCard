import { TestBed } from '@angular/core/testing';

import { HandleRouterGuard } from './handle-router.guard';

describe('HandleRouterGuard', () => {
  let guard: HandleRouterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HandleRouterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

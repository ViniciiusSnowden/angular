import { TestBed } from '@angular/core/testing';

import { RotaGuard } from './rota.guard';

describe('RotaGuard', () => {
  let guard: RotaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RotaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GeneralGuard } from './general.guard';

describe('GeneralGuard', () => {
  let guard: GeneralGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
    });
    guard = TestBed.inject(GeneralGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

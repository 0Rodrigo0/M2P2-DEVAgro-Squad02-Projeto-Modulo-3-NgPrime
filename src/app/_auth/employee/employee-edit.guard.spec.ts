import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EmployeeEditGuard } from './employee-edit.guard';

describe('EmployeeEditGuard', () => {
  let guard: EmployeeEditGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
    });
    guard = TestBed.inject(EmployeeEditGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FarmService } from './farm.service';

describe('FarmService', () => {
  let service: FarmService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(FarmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

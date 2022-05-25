import { TestBed } from '@angular/core/testing';

import { FacturescotonService } from './facturescoton.service';

describe('FacturescotonService', () => {
  let service: FacturescotonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturescotonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

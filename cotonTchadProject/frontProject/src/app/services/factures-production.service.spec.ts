import { TestBed } from '@angular/core/testing';

import { FacturesProductionService } from './factures-production.service';

describe('FacturesProductionService', () => {
  let service: FacturesProductionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturesProductionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

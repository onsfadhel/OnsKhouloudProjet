import { TestBed } from '@angular/core/testing';

import { StockproduitService } from './stockproduit.service';

describe('StockproduitService', () => {
  let service: StockproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

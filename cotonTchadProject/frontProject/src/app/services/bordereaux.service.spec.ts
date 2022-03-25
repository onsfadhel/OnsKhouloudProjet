import { TestBed } from '@angular/core/testing';

import { BordereauxService } from './bordereaux.service';

describe('BordereauxService', () => {
  let service: BordereauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BordereauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

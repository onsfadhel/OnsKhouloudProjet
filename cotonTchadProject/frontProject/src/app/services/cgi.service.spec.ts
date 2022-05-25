import { TestBed } from '@angular/core/testing';

import { CgiService } from './cgi.service';

describe('CgiService', () => {
  let service: CgiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CgiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

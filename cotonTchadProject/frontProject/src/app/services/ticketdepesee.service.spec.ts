import { TestBed } from '@angular/core/testing';

import { TicketdepeseeService } from './ticketdepesee.service';

describe('TicketdepeseeService', () => {
  let service: TicketdepeseeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketdepeseeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

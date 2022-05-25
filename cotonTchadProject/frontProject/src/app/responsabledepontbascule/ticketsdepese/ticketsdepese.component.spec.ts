import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsdepeseComponent } from './ticketsdepese.component';

describe('TicketsdepeseComponent', () => {
  let component: TicketsdepeseComponent;
  let fixture: ComponentFixture<TicketsdepeseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsdepeseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsdepeseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

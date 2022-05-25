import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartfinancierComponent } from './piechartfinancier.component';

describe('PiechartfinancierComponent', () => {
  let component: PiechartfinancierComponent;
  let fixture: ComponentFixture<PiechartfinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiechartfinancierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartfinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

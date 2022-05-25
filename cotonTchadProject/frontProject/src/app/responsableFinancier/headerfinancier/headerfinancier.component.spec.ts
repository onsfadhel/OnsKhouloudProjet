import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderfinancierComponent } from './headerfinancier.component';

describe('HeaderfinancierComponent', () => {
  let component: HeaderfinancierComponent;
  let fixture: ComponentFixture<HeaderfinancierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderfinancierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderfinancierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

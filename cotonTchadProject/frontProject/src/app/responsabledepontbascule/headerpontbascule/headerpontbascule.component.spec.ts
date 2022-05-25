import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpontbasculeComponent } from './headerpontbascule.component';

describe('HeaderpontbasculeComponent', () => {
  let component: HeaderpontbasculeComponent;
  let fixture: ComponentFixture<HeaderpontbasculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderpontbasculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpontbasculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

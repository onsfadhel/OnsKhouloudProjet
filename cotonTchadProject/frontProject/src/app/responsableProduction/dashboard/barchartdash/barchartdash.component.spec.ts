import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartdashComponent } from './barchartdash.component';

describe('BarchartdashComponent', () => {
  let component: BarchartdashComponent;
  let fixture: ComponentFixture<BarchartdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartdashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarchartdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

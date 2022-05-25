import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultervehiculesComponent } from './consultervehicules.component';

describe('ConsultervehiculesComponent', () => {
  let component: ConsultervehiculesComponent;
  let fixture: ComponentFixture<ConsultervehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultervehiculesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultervehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

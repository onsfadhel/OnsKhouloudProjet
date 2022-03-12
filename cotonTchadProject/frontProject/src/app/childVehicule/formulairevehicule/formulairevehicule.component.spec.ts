import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairevehiculeComponent } from './formulairevehicule.component';

describe('FormulairevehiculeComponent', () => {
  let component: FormulairevehiculeComponent;
  let fixture: ComponentFixture<FormulairevehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairevehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

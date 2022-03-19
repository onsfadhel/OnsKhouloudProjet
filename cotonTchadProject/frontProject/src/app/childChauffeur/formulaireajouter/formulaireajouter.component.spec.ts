import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireajouterComponent } from './formulaireajouter.component';

describe('FormulaireajouterComponent', () => {
  let component: FormulaireajouterComponent;
  let fixture: ComponentFixture<FormulaireajouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireajouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireajouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

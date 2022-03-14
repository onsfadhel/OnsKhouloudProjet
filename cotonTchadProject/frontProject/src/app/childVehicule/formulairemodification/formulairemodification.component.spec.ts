import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairemodificationComponent } from './formulairemodification.component';

describe('FormulairemodificationComponent', () => {
  let component: FormulairemodificationComponent;
  let fixture: ComponentFixture<FormulairemodificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairemodificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairemodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

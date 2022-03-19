import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairemodifierComponent } from './formulairemodifier.component';

describe('FormulairemodifierComponent', () => {
  let component: FormulairemodifierComponent;
  let fixture: ComponentFixture<FormulairemodifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulairemodifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairemodifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

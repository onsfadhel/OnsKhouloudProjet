import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierFactureProductionComponent } from './modifier-facture-production.component';

describe('ModifierFactureProductionComponent', () => {
  let component: ModifierFactureProductionComponent;
  let fixture: ComponentFixture<ModifierFactureProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierFactureProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierFactureProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

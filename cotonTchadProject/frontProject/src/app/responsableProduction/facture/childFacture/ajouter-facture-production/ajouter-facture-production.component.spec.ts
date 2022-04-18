import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterFactureProductionComponent } from './ajouter-facture-production.component';

describe('AjouterFactureProductionComponent', () => {
  let component: AjouterFactureProductionComponent;
  let fixture: ComponentFixture<AjouterFactureProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterFactureProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterFactureProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureProductionComponent } from './facture-production.component';

describe('FactureProductionComponent', () => {
  let component: FactureProductionComponent;
  let fixture: ComponentFixture<FactureProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

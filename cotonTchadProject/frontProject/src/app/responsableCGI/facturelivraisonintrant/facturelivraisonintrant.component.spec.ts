import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturelivraisonintrantComponent } from './facturelivraisonintrant.component';

describe('FacturelivraisonintrantComponent', () => {
  let component: FacturelivraisonintrantComponent;
  let fixture: ComponentFixture<FacturelivraisonintrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturelivraisonintrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturelivraisonintrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

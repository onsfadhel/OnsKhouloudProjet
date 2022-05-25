import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockproduitsComponent } from './stockproduits.component';

describe('StockproduitsComponent', () => {
  let component: StockproduitsComponent;
  let fixture: ComponentFixture<StockproduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockproduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockcotonComponent } from './stockcoton.component';

describe('StockcotonComponent', () => {
  let component: StockcotonComponent;
  let fixture: ComponentFixture<StockcotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockcotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockcotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturescotonComponent } from './facturescoton.component';

describe('FacturescotonComponent', () => {
  let component: FacturescotonComponent;
  let fixture: ComponentFixture<FacturescotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturescotonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturescotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

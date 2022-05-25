import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordereuadelivraisonComponent } from './bordereuadelivraison.component';

describe('BordereuadelivraisonComponent', () => {
  let component: BordereuadelivraisonComponent;
  let fixture: ComponentFixture<BordereuadelivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordereuadelivraisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BordereuadelivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

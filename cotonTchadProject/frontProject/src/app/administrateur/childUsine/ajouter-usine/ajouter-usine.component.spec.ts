import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUsineComponent } from './ajouter-usine.component';

describe('AjouterUsineComponent', () => {
  let component: AjouterUsineComponent;
  let fixture: ComponentFixture<AjouterUsineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterUsineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterUsineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

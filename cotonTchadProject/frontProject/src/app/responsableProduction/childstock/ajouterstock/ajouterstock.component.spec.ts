import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterstockComponent } from './ajouterstock.component';

describe('AjouterstockComponent', () => {
  let component: AjouterstockComponent;
  let fixture: ComponentFixture<AjouterstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

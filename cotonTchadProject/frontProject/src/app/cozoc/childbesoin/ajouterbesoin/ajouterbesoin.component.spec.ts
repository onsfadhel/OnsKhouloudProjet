import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterbesoinComponent } from './ajouterbesoin.component';

describe('AjouterbesoinComponent', () => {
  let component: AjouterbesoinComponent;
  let fixture: ComponentFixture<AjouterbesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterbesoinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterbesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

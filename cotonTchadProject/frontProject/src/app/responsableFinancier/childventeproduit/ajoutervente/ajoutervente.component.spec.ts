import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterventeComponent } from './ajoutervente.component';

describe('AjouterventeComponent', () => {
  let component: AjouterventeComponent;
  let fixture: ComponentFixture<AjouterventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterventeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

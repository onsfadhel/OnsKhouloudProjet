import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterbordereauxComponent } from './ajouterbordereaux.component';

describe('AjouterbordereauxComponent', () => {
  let component: AjouterbordereauxComponent;
  let fixture: ComponentFixture<AjouterbordereauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterbordereauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterbordereauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

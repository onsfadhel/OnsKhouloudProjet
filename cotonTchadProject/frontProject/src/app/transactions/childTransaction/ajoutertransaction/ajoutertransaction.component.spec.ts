import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutertransactionComponent } from './ajoutertransaction.component';

describe('AjoutertransactionComponent', () => {
  let component: AjoutertransactionComponent;
  let fixture: ComponentFixture<AjoutertransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutertransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutertransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

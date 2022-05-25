import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterborderelivComponent } from './ajouterbordereliv.component';

describe('AjouterborderelivComponent', () => {
  let component: AjouterborderelivComponent;
  let fixture: ComponentFixture<AjouterborderelivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterborderelivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterborderelivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

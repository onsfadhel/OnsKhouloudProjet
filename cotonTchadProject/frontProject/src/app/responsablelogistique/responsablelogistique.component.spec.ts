import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsablelogistiqueComponent } from './responsablelogistique.component';

describe('ResponsablelogistiqueComponent', () => {
  let component: ResponsablelogistiqueComponent;
  let fixture: ComponentFixture<ResponsablelogistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsablelogistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsablelogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

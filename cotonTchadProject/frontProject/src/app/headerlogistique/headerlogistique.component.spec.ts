import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderlogistiqueComponent } from './headerlogistique.component';

describe('HeaderlogistiqueComponent', () => {
  let component: HeaderlogistiqueComponent;
  let fixture: ComponentFixture<HeaderlogistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderlogistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderlogistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavcgiComponent } from './sidenavcgi.component';

describe('SidenavcgiComponent', () => {
  let component: SidenavcgiComponent;
  let fixture: ComponentFixture<SidenavcgiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavcgiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavcgiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

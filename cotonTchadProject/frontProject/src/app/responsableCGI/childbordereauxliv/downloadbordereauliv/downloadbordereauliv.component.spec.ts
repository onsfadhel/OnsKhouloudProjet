import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadbordereaulivComponent } from './downloadbordereauliv.component';

describe('DownloadbordereaulivComponent', () => {
  let component: DownloadbordereaulivComponent;
  let fixture: ComponentFixture<DownloadbordereaulivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadbordereaulivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadbordereaulivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

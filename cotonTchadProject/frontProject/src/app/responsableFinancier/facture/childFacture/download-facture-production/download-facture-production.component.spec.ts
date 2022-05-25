import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFactureProductionComponent } from './download-facture-production.component';

describe('DownloadFactureProductionComponent', () => {
  let component: DownloadFactureProductionComponent;
  let fixture: ComponentFixture<DownloadFactureProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadFactureProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFactureProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

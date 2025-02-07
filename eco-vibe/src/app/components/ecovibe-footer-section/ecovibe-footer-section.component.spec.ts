import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeFooterSectionComponent } from './ecovibe-footer-section.component';

describe('EcovibeFooterSectionComponent', () => {
  let component: EcovibeFooterSectionComponent;
  let fixture: ComponentFixture<EcovibeFooterSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeFooterSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeFooterSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

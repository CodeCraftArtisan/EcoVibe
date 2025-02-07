import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeAboutUsSectionComponent } from './ecovibe-about-us-section.component';

describe('EcovibeAboutUsSectionComponent', () => {
  let component: EcovibeAboutUsSectionComponent;
  let fixture: ComponentFixture<EcovibeAboutUsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeAboutUsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeAboutUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeKnowAboutUsSectionComponent } from './ecovibe-know-about-us-section.component';

describe('EcovibeKnowAboutUsSectionComponent', () => {
  let component: EcovibeKnowAboutUsSectionComponent;
  let fixture: ComponentFixture<EcovibeKnowAboutUsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeKnowAboutUsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeKnowAboutUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

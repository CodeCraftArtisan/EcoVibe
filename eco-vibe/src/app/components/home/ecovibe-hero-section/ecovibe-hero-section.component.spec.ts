import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeHeroSectionComponent } from './ecovibe-hero-section.component';

describe('EcovibeHeroSectionComponent', () => {
  let component: EcovibeHeroSectionComponent;
  let fixture: ComponentFixture<EcovibeHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeHeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

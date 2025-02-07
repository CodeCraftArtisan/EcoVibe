import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeAboutUsPageComponent } from './ecovibe-about-us-page.component';

describe('EcovibeAboutUsPageComponent', () => {
  let component: EcovibeAboutUsPageComponent;
  let fixture: ComponentFixture<EcovibeAboutUsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeAboutUsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeAboutUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

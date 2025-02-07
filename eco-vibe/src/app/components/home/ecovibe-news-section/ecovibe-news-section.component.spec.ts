import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeNewsSectionComponent } from './ecovibe-news-section.component';

describe('EcovibeNewsSectionComponent', () => {
  let component: EcovibeNewsSectionComponent;
  let fixture: ComponentFixture<EcovibeNewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeNewsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeNewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

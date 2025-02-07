import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeDonutChartSectionComponent } from './ecovibe-donut-chart-section.component';

describe('EcovibeDonutChartSectionComponent', () => {
  let component: EcovibeDonutChartSectionComponent;
  let fixture: ComponentFixture<EcovibeDonutChartSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeDonutChartSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeDonutChartSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

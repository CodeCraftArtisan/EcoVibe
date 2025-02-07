import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeInfoSectionComponent } from './ecovibe-info-section.component';

describe('EcovibeInfoSectionComponent', () => {
  let component: EcovibeInfoSectionComponent;
  let fixture: ComponentFixture<EcovibeInfoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeInfoSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

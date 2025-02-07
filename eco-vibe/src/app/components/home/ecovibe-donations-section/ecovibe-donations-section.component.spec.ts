import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeDonationsSectionComponent } from './ecovibe-donations-section.component';

describe('EcovibeDonationsSectionComponent', () => {
  let component: EcovibeDonationsSectionComponent;
  let fixture: ComponentFixture<EcovibeDonationsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeDonationsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeDonationsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

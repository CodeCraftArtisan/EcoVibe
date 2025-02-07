import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcovibeMakingDonationComponent } from './ecovibe-making-donation.component';

describe('EcovibeMakingDonationComponent', () => {
  let component: EcovibeMakingDonationComponent;
  let fixture: ComponentFixture<EcovibeMakingDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcovibeMakingDonationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcovibeMakingDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { EcovibeMakingDonationComponent } from './ecovibe-making-donation/ecovibe-making-donation.component';
import { EcovibeContributeToProtectComponent } from './ecovibe-contribute-to-protect/ecovibe-contribute-to-protect.component';
import { HowWeUseDonationsComponent } from './how-we-use-donations/how-we-use-donations.component';

@Component({
  selector: 'app-donate',
  imports: [
    EcovibeMakingDonationComponent,
    EcovibeContributeToProtectComponent,
    HowWeUseDonationsComponent,
  ],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.scss',
})
export class DonateComponent {}

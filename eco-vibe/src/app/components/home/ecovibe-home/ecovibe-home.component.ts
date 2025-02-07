import { Component } from '@angular/core';
import { EcovibeHeroSectionComponent } from '../ecovibe-hero-section/ecovibe-hero-section.component';
import { EcovibeInfoSectionComponent } from '../ecovibe-info-section/ecovibe-info-section.component';
import { EcovibeAboutUsSectionComponent } from '../ecovibe-about-us-section/ecovibe-about-us-section.component';
import { EcovibeSupportersSectionComponent } from '../ecovibe-supporters-section/ecovibe-supporters-section.component';
import { EcovibeKnowAboutUsSectionComponent } from '../ecovibe-know-about-us-section/ecovibe-know-about-us-section.component';
import { EcovibeDonutChartSectionComponent } from '../ecovibe-donut-chart-section/ecovibe-donut-chart-section.component';
import { EcovibeDonationsSectionComponent } from '../ecovibe-donations-section/ecovibe-donations-section.component';
import { EcovibeNewsSectionComponent } from '../ecovibe-news-section/ecovibe-news-section.component';

@Component({
  selector: 'app-ecovibe-home',
  imports: [EcovibeHeroSectionComponent, EcovibeInfoSectionComponent, EcovibeAboutUsSectionComponent, EcovibeSupportersSectionComponent, EcovibeKnowAboutUsSectionComponent, EcovibeDonutChartSectionComponent, EcovibeDonationsSectionComponent, EcovibeNewsSectionComponent],
  templateUrl: './ecovibe-home.component.html',
  styleUrl: './ecovibe-home.component.scss'
})
export class EcovibeHomeComponent {

}

import { Routes } from '@angular/router';
import { EcovibeHomeComponent } from './components/home/ecovibe-home/ecovibe-home.component';
import { EcovibeContactComponent } from './components/contact/ecovibe-contact/ecovibe-contact.component';
import { EcovibeAboutUsPageComponent } from './components/about-us-page/ecovibe-about-us-page/ecovibe-about-us-page.component';
import { EcovibeWhatWeDoComponent } from './components/what-we-do/ecovibe-what-we-do/ecovibe-what-we-do.component';
import { EcovibeMediaComponent } from './components/media/ecovibe-media/ecovibe-media.component';
import { ForumPageComponent } from './components/forum/forum-page/forum-page.component';
import { EcovibePostDetailComponent } from './components/forum/components/ecovibe-post-detail/ecovibe-post-detail.component';
import { DonateComponent } from './components/donate/donate.component';

export const routes: Routes = [
  { path: '', component: EcovibeHomeComponent },
  { path: 'about-us', component: EcovibeAboutUsPageComponent },
  { path: 'what-we-do', component: EcovibeWhatWeDoComponent },
  { path: 'media', component: EcovibeMediaComponent },
  { path: 'forum', component: ForumPageComponent },
  { path: 'contact', component: EcovibeContactComponent },
  { path: 'post/:id', component: EcovibePostDetailComponent },
  { path: 'donate', component: DonateComponent },
];

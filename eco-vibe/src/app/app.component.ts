import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarEcoVibeComponent } from './components/navbar-eco-vibe/navbar-eco-vibe.component';
import { EcovibeFooterSectionComponent } from './components/ecovibe-footer-section/ecovibe-footer-section.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarEcoVibeComponent,
    EcovibeFooterSectionComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'EcoVibe';
}

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Bootstrapping the application with routing
bootstrapApplication(AppComponent, {
  providers: [
    RouterModule,
    provideRouter(routes), // Register routes
    provideHttpClient(), // provideHttpClient here
    CommonModule, // Import CommonModule for Angular directives like ngIf
  ],
}).catch((err) => console.error(err));

import { RenderMode, ServerRoute, PrerenderFallback } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about-us',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'what-we-do',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'media',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'forum',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'donate',
    renderMode: RenderMode.Prerender,
  },
  {
    path: '**',
    renderMode: RenderMode.Client, // Handle all other routes on the client side
  },
];

import { RenderMode, ServerRoute, PrerenderFallback } from '@angular/ssr';
import { inject } from '@angular/core';
import { PostService } from './components/forum/services/post.service';

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
    path: 'post/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      const postService = inject(PostService); 
      const ids = await postService.getAllPostsIds().toPromise(); 
      if (!ids || ids.length === 0) {
        console.error('No post IDs found for prerendering.');
        return []; 
      }
      return ids.map(id => ({ id }));
    },
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

import { Component, Input } from '@angular/core';
import { Post } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecovibe-post-content',
  imports: [CommonModule],
  templateUrl: './ecovibe-post-content.component.html',
  styleUrl: './ecovibe-post-content.component.scss',
})
export class EcovibePostContentComponent {
  @Input() post: Post | null = null;

  // Create a getter to split content into paragraphs dynamically
  get paragraphs(): string[] {
    if (this.post && this.post.content) {
      return this.post.content.split('\n').filter((p) => p.trim() !== '');
    }
    return [];
  }
}

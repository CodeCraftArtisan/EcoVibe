import { Component } from '@angular/core';
import { Post } from '../../../types';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ecovibe-posts',
  imports: [CommonModule, RouterModule],
  templateUrl: './ecovibe-posts.component.html',
  styleUrl: './ecovibe-posts.component.scss'
})
export class EcovibePostsComponent {

  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}

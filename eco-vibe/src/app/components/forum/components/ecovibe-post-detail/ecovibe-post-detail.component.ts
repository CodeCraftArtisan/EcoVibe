import { Component, OnInit } from '@angular/core';
import { Post, Comment } from '../../../types';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { EcovibePostContentComponent } from '../ecovibe-post-content/ecovibe-post-content.component';
import { EcovibeNewCommentFormComponent } from '../ecovibe-new-comment-form/ecovibe-new-comment-form.component';
import { EcovibeCommentListComponent } from '../ecovibe-comment-list/ecovibe-comment-list.component';

@Component({
  selector: 'ecovibe-post-detail',
  imports: [CommonModule, FormsModule, EcovibePostContentComponent, EcovibeNewCommentFormComponent, EcovibeCommentListComponent],
  templateUrl: './ecovibe-post-detail.component.html',
  styleUrl: './ecovibe-post-detail.component.scss'
})
export class EcovibePostDetailComponent implements OnInit{

  post: Post | null = null;
  comments: Comment[] = [];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      this.loadPost(postId);
      this.loadComments(postId);
    }
  }

  loadPost(postId: string): void {
    this.postService.getPost(postId).subscribe({
      next: (post) => this.post = post,
      error: (err) => console.error('Error loading post:', err),
    });
  }

  loadComments(postId: string): void {
    this.postService.getComments(postId).subscribe({
      next: (comments) => this.comments = comments,
      error: (err) => console.error('Error loading comments:', err),
    });
  }

  onCommentCreated(newComment: Comment): void {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      newComment.postId = postId;
      this.postService.createComment(newComment).subscribe({
        next: () => {
          this.loadComments(postId); // Refresh comments
        },
        error: (err) => console.error('Error creating comment:', err),
      });
    }
  }
}

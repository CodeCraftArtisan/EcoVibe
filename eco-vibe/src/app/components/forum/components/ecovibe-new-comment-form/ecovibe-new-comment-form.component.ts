import { Component, EventEmitter, Output } from '@angular/core';
import { Comment } from '../../../types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ecovibe-new-comment-form',
  imports: [FormsModule],
  templateUrl: './ecovibe-new-comment-form.component.html',
  styleUrl: './ecovibe-new-comment-form.component.scss'
})
export class EcovibeNewCommentFormComponent {
  newComment: Partial<Comment> = {
    authorUsername: '',
    content: '',
    date: '',
    postId: '' 
  }

  @Output() commentCreated = new EventEmitter<Comment>();

  onSubmit(): void {
    if (this.newComment.authorUsername && this.newComment.content) {
      const commentToSave: Comment = {
        ...this.newComment,
        date: new Date().toISOString(),
      } as Comment;
      this.commentCreated.emit(commentToSave);
      this.newComment = { authorUsername: '', content: '' }; 
    }
  }
}

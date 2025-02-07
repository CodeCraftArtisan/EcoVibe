import { Component, Input } from '@angular/core';
import { Comment } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ecovibe-comment-list',
  imports: [CommonModule],
  templateUrl: './ecovibe-comment-list.component.html',
  styleUrl: './ecovibe-comment-list.component.scss'
})
export class EcovibeCommentListComponent {
  @Input() comments: Comment[] = [];
}

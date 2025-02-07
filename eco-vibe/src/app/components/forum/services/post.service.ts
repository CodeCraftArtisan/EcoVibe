import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Post, Comment } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private postUrl = 'http://localhost:8080/api/v1/posts';
  private commentUrl = 'http://localhost:8080/api/v1/comments';

  constructor(private http: HttpClient) {}

  // Fetch all posts
  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl);
  }

  getAllPostsIds(): Observable<string[]> {
    return this.http.get<Post[]>(this.postUrl).pipe(
      map((posts: Post[]) => posts.map(post => post.id)) // Assuming each post has an 'id' field
    );
  }

  getPost(postId: string): Observable<Post> {
    return this.http.get<Post>(`http://localhost:8080/api/v1/posts/${postId}`);
  }

  getComments(postId: string): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `http://localhost:8080/api/v1/comments/post/${postId}`
    );
  }

  createComment(commentToSave: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.commentUrl, commentToSave);
  }
}

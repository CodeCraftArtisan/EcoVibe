export interface Post {
  id: string;
  authorUsername: string;
  title: string;
  content: string;
  date: string;
  subTitle: string;
  imageUrl: string;
}

export interface Comment {
  id: string;
  authorUsername: string;
  content: string;
  date: string;
  postId: string;
}

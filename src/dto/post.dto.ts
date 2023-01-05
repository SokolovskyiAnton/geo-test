export interface PostStateDto {
  commentsOfPost: CommentDto[];
  posts: PostDto[];
  paginatedPosts: PostDto[];
}

export interface PostDto {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments: CommentDto[];
}

export interface CommentDto {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

import { PostDto, CommentDto } from "@/dto/post.dto";
import api from "@/services/api";

export function mergeComments(
  posts: PostDto[],
  comments: CommentDto[][]
): PostDto[] {
  return posts.map((post, index) => ({
    ...post,
    ...{
      comments: comments[index],
    },
  }));
}

export async function getComments(posts: PostDto[]): Promise<CommentDto[][]> {
  return await Promise.all(getCommentsOfPost(posts));
}
function getCommentsOfPost(posts: PostDto[]) {
  return posts.map(async ({ id }) => {
    return (await api.get(`/posts/${id}/comments`)).data;
  });
}

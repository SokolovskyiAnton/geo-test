import { defineStore } from "pinia";
import { CommentDto, PostDto, PostStateDto } from "@/dto/post.dto";
import api from "@/services/api";
import { getComments, mergeComments } from "@/helpers/mergeData";
import { paginate } from "@/helpers/paginate";
export const usePosts = defineStore("posts", {
  state: (): PostStateDto => {
    return {
      commentsOfPost: [],
      posts: [],
      paginatedPosts: [],
    };
  },
  getters: {
    getComments({ commentsOfPost }): CommentDto[] {
      return commentsOfPost;
    },
    getPostsList({ posts }): PostDto[] {
      return posts;
    },
    getPaginatedPosts({ paginatedPosts }): PostDto[] {
      return paginatedPosts;
    },
  },
  actions: {
    async getCommentsOfPost(id: string) {
      this.commentsOfPost = (await api.get(`/posts/${id}/comments`)).data;
    },
    async getPosts() {
      const posts = (await api.get("/posts")).data;
      const comments = await getComments(posts);
      this.posts = mergeComments(posts, comments);
    },
    paginatePosts(page: number, perPage: number): PostDto[] {
      const paginated = paginate(this.posts, page, perPage);
      this.paginatedPosts = paginated;
      return paginated;
    },
  },
});

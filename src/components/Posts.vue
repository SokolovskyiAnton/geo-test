<template>
  <div v-if="posts.length">
    <FilterPosts @filter-array="handleFilter" />
    <div v-for="post in paginatedPosts" :key="post.id">
      <Post :post="post" />
    </div>
    <Pagination
      @change-page="handlePagination"
      :total-page="totalPages"
      :page="currentPage"
    />
  </div>
  <div v-else>There are no posts yet...:(</div>
</template>

<script setup lang="ts">
import Post from "@/components/Post.vue";
import FilterPosts from "@/components/FilterPosts.vue";
import Pagination from "@/components/Pagination.vue";
import { PostDto } from "@/dto/post.dto";
import { computed, onMounted, ref } from "vue";
import { usePosts } from "@/stores/posts";

defineEmits(["changePage", "filterArray"]);

const store = usePosts();
const currentPage = ref(1);
const paginatedPosts = ref<PostDto[]>([]);
const pageSize = 10;

const posts = computed(() => {
  return store.getPostsList;
});
const totalPages = computed(() => {
  return Math.ceil(posts.value.length / pageSize);
});

function handlePagination(page: number) {
  currentPage.value = page;
  paginatedPosts.value = store.paginatePosts(currentPage.value, pageSize);
}

function handleFilter(posts: PostDto[]) {
  paginatedPosts.value = posts;
}

onMounted(() => {
  paginatedPosts.value = store.paginatePosts(currentPage.value, pageSize);
});
</script>

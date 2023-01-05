<template>
  <div class="px-2 mb-5">
    <input
      v-model="title"
      type="text"
      id="filter"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Filter by title"
      @input="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePosts } from "@/stores/posts";

const emit = defineEmits(["filterArray"]);

const store = usePosts();
const title = ref("");

function handleChange() {
  const posts = store.getPaginatedPosts;
  const filteredPosts = posts.filter(
    (post) => post.title.toLowerCase().indexOf(title.value.toLowerCase()) > -1
  );
  emit("filterArray", filteredPosts);
}
</script>

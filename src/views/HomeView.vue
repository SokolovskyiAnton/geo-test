<template>
  <Spinner v-if="isLoading" />
  <div v-else>
    <Posts />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePosts } from "@/stores/posts";
import Spinner from "@/components/Spinner.vue";
import Posts from "@/components/Posts.vue";

const store = usePosts();
const isLoading = ref(true);

onMounted(async () => {
  try {
    isLoading.value = true;
    await store.getPosts();
  } finally {
    isLoading.value = false;
  }
});
</script>

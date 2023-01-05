<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ post.title }}</div>
      <p class="text-gray-700 text-base">
        {{ post.body }}
      </p>
    </div>
    <div class="flex justify-between px-6 pt-4 pb-2">
      <span
        @click="showDetailsPost"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer"
        >Details</span
      >
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
      >
        Comments: {{ post.comments.length }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PostDto } from "@/dto/post.dto";
import { useRouter } from "vue-router";

const props = defineProps<{
  post: PostDto;
}>();

const router = useRouter();
function showDetailsPost() {
  router.push({ name: "postDetails", params: { id: props.post.id } });
}
</script>

<template>
  <div class="flex justify-center items-center mt-8">
    <button
      :disabled="page === 1"
      @click="prevPage"
      class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      Previous
    </button>
    <div class="px-2">
      {{ currentPage }}
    </div>
    <button
      :disabled="page === totalPage"
      @click="nextPage"
      class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    >
      Next
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  page: number;
  totalPage: number;
}>();
const emit = defineEmits(["changePage"]);

const currentPage = computed(() => {
  return props.page + "/" + props.totalPage;
});

function nextPage() {
  emit("changePage", props.page + 1);
}
function prevPage() {
  emit("changePage", props.page - 1);
}
</script>

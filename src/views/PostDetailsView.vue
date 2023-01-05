<template>
  <Spinner v-if="isLoading" />
  <div v-else>
    <Line id="my-chart-id" :options="chartOptions" :data="chartData"></Line>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { usePosts } from "@/stores/posts";
import { useRoute } from "vue-router";
import Spinner from "@/components/Spinner.vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const store = usePosts();
const route = useRoute();
const isLoading = ref(true);
const chartData = {
  labels: [] as string[],
  datasets: [{ label: "Email length", data: [] as number[] }],
};
const chartOptions = {
  responsive: true,
};

onMounted(async () => {
  const postId = route.params.id as string;

  try {
    isLoading.value = true;
    if (postId) {
      await store.getCommentsOfPost(postId);
      const comments = store.getComments;

      chartData.labels = comments.map((comment) => comment.email);
      chartData.datasets[0].data = comments.map(
        (comment) => comment.email.length
      );
    }
  } finally {
    isLoading.value = false;
  }
});
</script>

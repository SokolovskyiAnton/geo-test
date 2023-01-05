<template>
  <Header />
  <div class="container mx-auto pt-4">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
</script>

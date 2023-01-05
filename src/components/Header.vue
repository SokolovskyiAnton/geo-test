<template>
  <header class="h-14 bg-sky-500">
    <div class="flex justify-between items-center h-full px-2">
      <div class="text-2xl font-bold">Super Vue App</div>
      <ul class="flex">
        <li class="ml-2" v-for="link in links" :key="link.title">
          <router-link :to="link.url" exact>
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/map",
    title: "Map",
  },
];
</script>

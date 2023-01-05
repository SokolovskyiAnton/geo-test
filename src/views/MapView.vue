<template>
  <div id="map"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const map = ref(null);

onMounted(() => {
  map.value = L.map("map").setView([18.05, 11.05], 5);
  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map.value);
});
</script>

<style lang="stylus">
#map
  height 80vh
</style>

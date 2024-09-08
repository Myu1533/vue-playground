<script setup lang="ts">
import { onMounted } from "vue";
import { Chart } from "chart.js/auto";

onMounted(() => {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  new Chart(document.getElementById("test-chart") as HTMLCanvasElement, {
    type: "line",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Weight by Day",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
});
</script>
<template>
  <canvas id="test-chart"></canvas>
</template>

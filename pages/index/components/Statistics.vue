<script setup lang="ts">
import { ref } from "vue";

const stats = ref([
  { label: "Creators Registered", value: 1250, suffix: "+" },
  { label: "Projects Completed", value: 3400, suffix: "+" },
  { label: "Earnings Distributed", value: 850, suffix: "K", prefix: "$" },
  { label: "Average Rating", value: 4.9, suffix: "/5" },
]);

// Basic animation logic - in production use a library or IntersectionObserver
</script>

<template>
  <section class="py-24 bg-primary text-primary-content relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <svg width="100%" height="100%">
        <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dotPattern)" />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-primary-content/20">
        <div v-for="stat in stats" :key="stat.label" class="p-4">
          <div class="text-5xl font-extrabold tracking-tight mb-2">
            {{ stat.prefix }}{{ stat.value }}{{ stat.suffix }}
          </div>
          <div class="text-sm font-medium opacity-80 uppercase tracking-widest">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

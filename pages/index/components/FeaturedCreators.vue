<script setup lang="ts">
import { ref } from "vue";

const creators = ref([
  {
    name: "Ahmed Al-Mansouri",
    role: "Full-Stack Developer",
    avatar: "/images/avatar-ahmed.png",
    reviews: 47,
    projects: 89,
    rating: 5,
    skills: ["Vue.js", "Node.js", "Cloudflare"],
  },
  {
    name: "Fatima Khalid",
    role: "Graphic Designer",
    avatar: "/images/avatar-fatima.png",
    reviews: 34,
    projects: 52,
    rating: 5,
    skills: ["Branding", "UI/UX", "Illustrator"],
  },
  {
    name: "Omar Ellis",
    role: "Video Editor",
    avatar: "/images/avatar-omar.png",
    reviews: 28,
    projects: 41,
    rating: 4.8,
    skills: ["Premiere Pro", "After Effects", "Motion"],
  },
  // Duplicates for infinite scroll effect if needed
  {
    name: "Zainab Ali",
    role: "Mobile Developer",
    avatar: "/images/avatar-fatima.png", // reusing for demo
    reviews: 15,
    projects: 22,
    rating: 4.9,
    skills: ["Flutter", "React Native", "Swift"],
  },
]);
</script>

<template>
  <section class="py-24 bg-base-100 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
      <div class="flex justify-between items-end">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">Featured Creators</h2>
          <p class="mt-4 text-lg text-base-content/70">Top talent from the GCC ready to bring your vision to life.</p>
        </div>
        <a href="/browse" class="btn btn-outline hidden sm:flex">View All Creators</a>
      </div>
    </div>

    <!-- Carousel -->
    <div class="relative w-full overflow-x-auto pb-8 hide-scrollbar px-6 lg:px-8">
      <div class="flex gap-6 w-max mx-auto lg:mx-0">
        <div
          v-for="creator in creators"
          :key="creator.name"
          class="card w-80 bg-base-100 shadow-lg border border-base-200 transition-all hover:scale-105 hover:shadow-xl group"
        >
          <figure class="px-6 pt-6 relative">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img :src="creator.avatar" :alt="creator.name" />
              </div>
            </div>
          </figure>
          <div class="card-body items-center text-center">
            <h3 class="card-title text-lg">{{ creator.name }}</h3>
            <div class="badge badge-ghost badge-sm">{{ creator.role }}</div>

            <div class="flex items-center gap-1 my-2">
              <div class="rating rating-sm rating-half">
                <!-- Static 5 stars for demo -->
                <input type="radio" class="mask mask-star-2 bg-warning" disabled checked />
                <input type="radio" class="mask mask-star-2 bg-warning" disabled checked />
                <input type="radio" class="mask mask-star-2 bg-warning" disabled checked />
                <input type="radio" class="mask mask-star-2 bg-warning" disabled checked />
                <input type="radio" class="mask mask-star-2 bg-warning" disabled checked />
              </div>
              <span class="text-xs text-base-content/60">({{ creator.reviews }})</span>
            </div>

            <div class="flex flex-wrap gap-1 justify-center mt-2">
              <span v-for="skill in creator.skills" :key="skill" class="badge badge-accent badge-outline badge-xs">{{
                skill
              }}</span>
            </div>

            <div class="card-actions mt-4 w-full">
              <button
                class="btn btn-primary btn-sm btn-block text-primary-content opacity-0 group-hover:opacity-100 transition-opacity"
              >
                View Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-8 sm:hidden">
      <a href="/browse" class="btn btn-outline w-full max-w-xs">View All Creators</a>
    </div>
  </section>
</template>

<style scoped>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

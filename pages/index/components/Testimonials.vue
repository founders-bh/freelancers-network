<script setup lang="ts">
import { ref } from "vue";

const testimonials = ref([
  {
    content:
      "Finally, a platform that doesn't eat into my profits. The community is supportive and the clients are professional.",
    author: "Sarah J.",
    role: "Freelance Designer",
    avatar: "/images/avatar-fatima.png", // reusing
  },
  {
    content:
      "As a startup founder, I need quality work within budget. Freelancers Network connected me with an amazing developer in 2 days.",
    author: "Khalid M.",
    role: "Tech Entrepreneur",
    avatar: "/images/avatar-ahmed.png", // reusing
  },
  {
    content:
      "The zero-commission model is a game changer. I can price my services competitively and still earn more than on Upwork.",
    author: "James D.",
    role: "Content Writer",
    avatar: "/images/avatar-omar.png", // reusing
  },
]);
</script>

<template>
  <section class="py-24 bg-base-200">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">Trusted by the Community</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="(testimonial, idx) in testimonials"
          :key="idx"
          class="card bg-base-100 shadow-lg border border-base-200"
        >
          <div class="card-body relative">
            <div class="absolute top-4 right-6 text-primary/10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M14.017 21L14.017 18C14.017 16.896 14.325 16.053 14.941 15.471C15.556 14.89 16.637 14.499 18.184 14.298V11.898C16.946 12.028 16.037 12.25 15.455 12.565C14.819 12.879 14.352 13.389 14.053 14.095V11H19V21L14.017 21ZM5 21L5 18C5 16.896 5.308 16.053 5.924 15.011C6.539 14.89 7.62 14.499 9.167 14.298V11.898C7.929 12.028 7.02 12.25 6.438 12.565C5.802 12.879 5.335 13.389 5.036 14.095V11H10V21L5 21Z"
                />
              </svg>
            </div>
            <p class="italic text-base-content/80 mb-6 relative z-10">"{{ testimonial.content }}"</p>
            <div class="flex items-center gap-4 mt-auto">
              <div class="avatar">
                <div class="w-12 rounded-full">
                  <img :src="testimonial.avatar" :alt="testimonial.author" />
                </div>
              </div>
              <div>
                <h4 class="font-bold text-base-content">{{ testimonial.author }}</h4>
                <div class="text-sm text-base-content/60">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

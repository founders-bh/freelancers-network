<script setup>
import { onMounted } from "vue";
import HeroSection from "./components/HeroSection.vue";
import HowItWorks from "./components/HowItWorks.vue";
import FeaturedCreators from "./components/FeaturedCreators.vue";
import Categories from "./components/Categories.vue";
import Statistics from "./components/Statistics.vue";
import WhyChooseUs from "./components/WhyChooseUs.vue";
import Testimonials from "./components/Testimonials.vue";
import CTASection from "./components/CTASection.vue";

// Intersection Observer for scroll animations
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up");
          entry.target.classList.remove("opacity-0", "translate-y-8");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".scroll-animate").forEach((el) => {
    el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700");
    observer.observe(el);
  });
});
</script>

<template>
  <div class="homepage overflow-x-hidden">
    <!-- Hero Section (No scroll animation, immediate load) -->
    <HeroSection />

    <!-- Animated Sections -->
    <HowItWorks class="scroll-animate" />
    <FeaturedCreators class="scroll-animate" />
    <Categories class="scroll-animate" />
    <Statistics class="scroll-animate" />
    <WhyChooseUs class="scroll-animate" />
    <Testimonials class="scroll-animate" />
    <CTASection class="scroll-animate" />
  </div>
</template>

<style scoped>
/* Keyframes are defined in tailwind.css via @theme */
</style>

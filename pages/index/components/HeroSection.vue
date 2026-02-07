<script setup>
import { ref } from "vue";

const stats = ref([
  { label: "Active Creators", value: "500+" },
  { label: "Projects Completed", value: "1000+" },
  { label: "Zero Platform Fees", value: "100%" },
]);
</script>

<template>
  <section
    class="hero min-h-screen bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 relative overflow-hidden flex items-center justify-center"
  >
    <!-- Decorative background patterns -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
        style="animation-delay: 1s"
      ></div>
    </div>

    <div class="hero-content w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-0 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left: Text Content -->
        <div class="space-y-8 text-center lg:text-left">
          <div class="inline-block">
            <span class="badge badge-primary badge-lg gap-2 shadow-sm font-medium py-4 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
              Open Source & Zero Commission
            </span>
          </div>

          <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-sm">
              Connect. Create.
            </span>
            <br />
            <span class="text-base-content">Succeed.</span>
          </h1>

          <p class="text-xl lg:text-2xl text-base-content/80 leading-relaxed font-light">
            The GCC's first <strong class="text-primary font-semibold">zero-commission</strong> freelancing platform
            where creators keep <strong class="text-secondary font-semibold">100% of their earnings</strong>, powered by
            community and sponsorships.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <a
              href="/signup?type=creator"
              class="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-primary-content"
            >
              Join as Creator
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="/browse"
              class="btn btn-secondary btn-lg btn-outline gap-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Find Talent
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"
                />
              </svg>
            </a>
            <a href="/signup?type=seller" class="btn btn-ghost btn-lg gap-2 hover:bg-base-200"> Become a Seller </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-12 border-t border-base-300/50 mt-8">
            <div v-for="stat in stats" :key="stat.label" class="text-center lg:text-left">
              <div class="text-2xl lg:text-4xl font-bold text-primary">{{ stat.value }}</div>
              <div class="text-sm font-medium text-base-content/60 uppercase tracking-wide mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right: Visual/Illustration -->
        <div class="relative hidden lg:block perspective-1000">
          <div class="relative w-full max-w-lg mx-auto transform transition-transform hover:scale-105 duration-500">
            <!-- Main Illustration Image -->
            <img
              src="/images/hero-illustration.png"
              alt="Freelancers Network Abstract"
              class="w-full h-auto drop-shadow-2xl rounded-3xl object-cover"
            />

            <!-- Glassmorphism Card Overlay -->
            <div
              class="absolute -bottom-10 -left-10 card bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 w-80 animate-float"
              style="animation-delay: 2s; animation-duration: 5s"
            >
              <div class="card-body p-6">
                <div class="space-y-4">
                  <!-- Mock Creator Profile Card -->
                  <div
                    class="flex items-center gap-3 p-3 bg-base-100/80 rounded-box shadow-sm border border-base-content/5"
                  >
                    <div class="avatar">
                      <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="/images/avatar-ahmed.png" alt="Creator" />
                      </div>
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="font-bold text-sm truncate text-base-content">Ahmed Al-Mansouri</h3>
                      <p class="text-xs text-base-content/60 truncate">Full-Stack Developer</p>
                    </div>
                    <div class="badge badge-success badge-sm gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <!-- Mock Project Stats -->
                  <div class="flex justify-between items-center text-sm px-1">
                    <div class="text-base-content/70">Earnings</div>
                    <div class="font-bold text-success text-lg font-mono">$45,210</div>
                  </div>
                  <div class="w-full bg-base-300 rounded-full h-2">
                    <div class="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style="width: 85%"></div>
                  </div>

                  <div class="flex gap-2 justify-center pt-2">
                    <div class="badge badge-outline badge-xs opacity-70">Secure</div>
                    <div class="badge badge-outline badge-xs opacity-70">0% Fees</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating Badge 1 -->
            <div
              class="absolute -top-6 -right-6 badge badge-accent badge-lg shadow-lg animate-float py-4 px-4 font-bold tracking-wide"
              style="animation-duration: 4s"
            >
              🚀 Open Source
            </div>
            <!-- Floating Badge 2 -->
            <div
              class="absolute bottom-20 -right-12 badge badge-secondary badge-lg shadow-lg animate-float py-4 px-4 font-bold tracking-wide"
              style="animation-delay: 1.5s; animation-duration: 6s"
            >
              💰 100% to You
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>

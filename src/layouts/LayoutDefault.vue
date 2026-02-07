<script setup lang="ts">
import { ref, onMounted } from "vue";

const theme = ref("freelancers-light");

const toggleTheme = () => {
  theme.value = theme.value === "freelancers-light" ? "freelancers-dark" : "freelancers-light";
  document.documentElement.setAttribute("data-theme", theme.value);
  localStorage.setItem("theme", theme.value);
};

// Load saved theme on mount
onMounted(() => {
  const savedTheme = localStorage.getItem("theme") || "freelancers-light";
  theme.value = savedTheme;
  document.documentElement.setAttribute("data-theme", savedTheme);
});
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans text-base-content bg-base-100 transition-colors duration-200">
    <!-- Navigation -->
    <header
      class="navbar bg-base-100 shadow-md sticky top-0 z-50 backdrop-blur-lg bg-base-100/95 border-b border-base-200"
    >
      <div class="navbar-start">
        <div class="dropdown lg:hidden">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 border border-base-200"
          >
            <li><a href="/browse">Browse Creators</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <a href="/" class="btn btn-ghost normal-case text-xl font-bold">
          <span class="text-primary">Freelancers</span>
          <span class="text-secondary">.Network</span>
        </a>
      </div>

      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 gap-2 font-medium">
          <li><a href="/browse" class="hover:text-primary transition-colors">Browse Creators</a></li>
          <li><a href="/how-it-works" class="hover:text-primary transition-colors">How It Works</a></li>
          <li><a href="/about" class="hover:text-primary transition-colors">About</a></li>
          <li><a href="/blog" class="hover:text-primary transition-colors">Blog</a></li>
        </ul>
      </div>

      <div class="navbar-end gap-2">
        <!-- Theme Toggle -->
        <label class="swap swap-rotate btn btn-ghost btn-circle hover:bg-base-200">
          <input type="checkbox" :checked="theme === 'freelancers-dark'" @change="toggleTheme" />
          <!-- sun icon -->
          <svg class="swap-on fill-current w-6 h-6 text-warning" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"
            />
          </svg>
          <!-- moon icon -->
          <svg
            class="swap-off fill-current w-6 h-6 text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
            />
          </svg>
        </label>

        <a href="/login" class="btn btn-ghost hover:bg-base-200">Login</a>
        <a href="/signup" class="btn btn-primary gap-2 shadow-md hover:shadow-lg transition-all text-primary-content">
          Sign Up
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 w-full">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer footer-center p-10 bg-base-300 text-base-content font-sans">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-7xl px-4">
        <!-- About Column -->
        <div class="text-left">
          <h3 class="footer-title opacity-100 text-lg mb-4 text-primary">About</h3>
          <p class="text-sm opacity-80 leading-relaxed">
            The GCC's first zero-commission, open-source freelancing platform powered by community and sponsorships.
          </p>
          <div class="flex gap-3 mt-4">
            <a href="#" class="btn btn-circle btn-ghost btn-sm hover:bg-base-100 hover:text-primary">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                />
              </svg>
            </a>
            <a href="#" class="btn btn-circle btn-ghost btn-sm hover:bg-base-100 hover:text-primary">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a href="#" class="btn btn-circle btn-ghost btn-sm hover:bg-base-100 hover:text-primary">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- For Creators -->
        <div class="text-left">
          <h3 class="footer-title opacity-100 text-lg mb-4 text-primary">For Creators</h3>
          <ul class="space-y-2">
            <li>
              <a href="/signup?type=creator" class="link link-hover hover:text-primary transition-colors"
                >Join as Creator</a
              >
            </li>
            <li>
              <a href="/how-it-works" class="link link-hover hover:text-primary transition-colors">How It Works</a>
            </li>
            <li><a href="/categories" class="link link-hover hover:text-primary transition-colors">Categories</a></li>
            <li>
              <a href="/success-stories" class="link link-hover hover:text-primary transition-colors"
                >Success Stories</a
              >
            </li>
          </ul>
        </div>

        <!-- For Clients/Sellers -->
        <div class="text-left">
          <h3 class="footer-title opacity-100 text-lg mb-4 text-primary">For Clients & Sellers</h3>
          <ul class="space-y-2">
            <li><a href="/browse" class="link link-hover hover:text-primary transition-colors">Browse Talent</a></li>
            <li>
              <a href="/signup?type=seller" class="link link-hover hover:text-primary transition-colors"
                >Become a Seller</a
              >
            </li>
            <li>
              <a href="/post-project" class="link link-hover hover:text-primary transition-colors">Post a Project</a>
            </li>
            <li><a href="/pricing" class="link link-hover hover:text-primary transition-colors">Pricing</a></li>
          </ul>
        </div>

        <!-- Legal & Resources -->
        <div class="text-left">
          <h3 class="footer-title opacity-100 text-lg mb-4 text-primary">Legal & Resources</h3>
          <ul class="space-y-2">
            <li><a href="/terms" class="link link-hover hover:text-primary transition-colors">Terms of Service</a></li>
            <li><a href="/privacy" class="link link-hover hover:text-primary transition-colors">Privacy Policy</a></li>
            <li>
              <a
                href="https://github.com/founders-bh/freelancers-network"
                class="link link-hover hover:text-primary transition-colors flex items-center gap-1"
              >
                Source Code (AGPL-3.0)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </li>
            <li><a href="/sponsors" class="link link-hover hover:text-primary transition-colors">Our Sponsors</a></li>
            <li><a href="/contact" class="link link-hover hover:text-primary transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div class="divider before:bg-base-content/10 after:bg-base-content/10"></div>

      <div class="text-center">
        <p class="text-sm opacity-70">
          © 2026 Freelance Founders for Business Systems. Licensed under
          <a
            href="https://www.gnu.org/licenses/agpl-3.0.en.html"
            class="link link-primary"
            target="_blank"
            rel="noopener"
            >AGPL-3.0</a
          >.
        </p>
        <p class="text-xs opacity-60 mt-2">Built with ❤️ in the Kingdom of Bahrain 🇧🇭</p>
      </div>
    </footer>
  </div>
</template>

<template>
  <div class="min-h-screen bg-base-200 font-sans">
    <!-- Navbar -->
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl font-bold text-primary">Freelancers Network</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>How it Works</a></li>
          <li><a>Sponsors</a></li>
          <li><a class="btn btn-primary btn-sm text-white">Join Now</a></li>
        </ul>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="hero min-h-[70vh] bg-base-100">
      <div class="hero-content text-center">
        <div class="max-w-2xl">
          <h1 class="text-5xl font-bold text-base-content">
            Sellers find work,<br />
            Creators do work.<br />
            <span class="text-primary">We take 0%.</span>
          </h1>
          <p class="py-6 text-xl text-base-content/80">
            A non-profit, open-source network fueled by <span class="badge badge-secondary badge-outline">Corporate Sponsorships</span>. 
            We connect technical talent with sales experts to deliver projects efficiently.
            <br />
            <span class="font-bold block mt-2">100% of the project fee goes to YOU.</span>
          </p>
          <div class="flex justify-center gap-4">
            <button class="btn btn-primary">I'm a Creator</button>
            <button class="btn btn-secondary">I'm a Seller</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats / Concept -->
    <div class="flex justify-center py-10 bg-base-200">
      <div class="stats shadow stats-vertical lg:stats-horizontal bg-base-100">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <div class="stat-title">Network Commission</div>
          <div class="stat-value text-primary">0%</div>
          <div class="stat-desc">Sustainably funded</div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
          </div>
          <div class="stat-title">Manual Escrow</div>
          <div class="stat-value text-secondary">Secure</div>
          <div class="stat-desc">Funds held until completion</div>
        </div>
      </div>
    </div>

    <!-- Sponsors Component -->
    <div class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-10">Backed by Industry Leaders</h2>
        <div class="flex flex-wrap justify-center items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
          <!-- Placeholder Sponsor Logos (Using text for now or generic placeholders) -->
          <div class="w-40 h-20 bg-base-200 flex items-center justify-center rounded-box font-bold text-xl">
            TechGiant
          </div>
          <div class="w-40 h-20 bg-base-200 flex items-center justify-center rounded-box font-bold text-xl">
            CloudCorp
          </div>
          <div class="w-40 h-20 bg-base-200 flex items-center justify-center rounded-box font-bold text-xl">
            InnovateGCC
          </div>
          <div class="w-40 h-20 bg-base-200 flex items-center justify-center rounded-box font-bold text-xl">
            FutureBank
          </div>
        </div>
        <p class="text-center mt-8 text-base-content/60">
          Proudly sponsored by forward-thinking companies in the GCC.
        </p>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <nav>
        <header class="footer-title">Network</header> 
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Governance</a>
        <a class="link link-hover">Transparency Report</a>
      </nav> 
      <nav>
        <header class="footer-title">Legal</header> 
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Logic can be added here
</script>

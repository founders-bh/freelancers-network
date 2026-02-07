<template>
  <section id="how-it-works" class="py-24 bg-base-200">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">How It Works</h2>
        <p class="mt-4 text-lg text-base-content/70">
          A unique ecosystem where everyone wins. Zero commissions, full transparency.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <!-- Client Card -->
        <div
          class="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-base-200"
        >
          <div class="card-body items-center text-center">
            <div class="p-4 bg-primary/10 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="card-title text-xl mb-2">For Clients</h3>
            <p class="text-base-content/70">
              Post your project and get matched with top-tier talent. Pay only the project fee —
              <strong>no platform markups</strong>.
            </p>
            <div class="badge badge-primary badge-outline mt-4">Verified Talent</div>
          </div>
        </div>

        <!-- Creator Card -->
        <div
          class="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-base-200 relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 bg-secondary text-secondary-content text-xs font-bold px-2 py-1 rounded-bl-lg"
          >
            Keep 100%
          </div>
          <div class="card-body items-center text-center">
            <div class="p-4 bg-secondary/10 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h3 class="card-title text-xl mb-2">For Creators</h3>
            <p class="text-base-content/70">
              Focus on your craft. Get connected with quality clients without paying any platform fees.
            </p>
            <div class="badge badge-secondary badge-outline mt-4">Guaranteed Payouts</div>
          </div>
        </div>

        <!-- Seller Card -->
        <div
          class="card bg-base-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-base-200"
        >
          <div class="card-body items-center text-center">
            <div class="p-4 bg-accent/10 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 class="card-title text-xl mb-2">For Sellers</h3>
            <p class="text-base-content/70">
              Earn generous commissions by finding clients and matching them with the perfect creators.
            </p>
            <div class="badge badge-accent badge-outline mt-4">Commission Based</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<template>
  <section class="py-24 bg-base-200">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl font-bold tracking-tight text-base-content sm:text-4xl">Explore Categories</h2>
        <p class="mt-4 text-lg text-base-content/70">Find the perfect talent for your specific needs.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- App Creators Card -->
        <a
          href="/category/application"
          class="group relative overflow-hidden rounded-2xl h-96 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity z-10"
          ></div>
          <!-- Placeholder image background or pattern -->
          <div
            class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
          ></div>

          <div class="absolute inset-0 flex flex-col justify-end p-8 z-20 text-white">
            <h3
              class="text-3xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              Application Creators
            </h3>
            <p
              class="text-white/80 mb-6 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75"
            >
              Web Development, Mobile Apps, Backend Systems, and more.
            </p>
            <div
              class="flex items-center gap-2 text-sm font-bold uppercase tracking-wider translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150"
            >
              Explore Talent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </a>

        <!-- Multimedia Creators Card -->
        <a
          href="/category/multimedia"
          class="group relative overflow-hidden rounded-2xl h-96 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br from-secondary/80 to-warning/80 mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity z-10"
          ></div>
          <!-- Placeholder image background or pattern -->
          <div
            class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558655146-d09347e0c7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
          ></div>

          <div class="absolute inset-0 flex flex-col justify-end p-8 z-20 text-white">
            <h3
              class="text-3xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              Multimedia Creators
            </h3>
            <p
              class="text-white/80 mb-6 translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75"
            >
              Graphic Design, Video Editing, Animation, 3D Modeling.
            </p>
            <div
              class="flex items-center gap-2 text-sm font-bold uppercase tracking-wider translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-150"
            >
              Explore Talent
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

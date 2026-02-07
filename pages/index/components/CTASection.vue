<template>
  <section class="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
    <div class="absolute inset-0 bg-black/10"></div>
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center text-white">
      <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Ready to Start Your Journey?</h2>
      <p class="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
        Join the revolution. Whether you're hiring or creating, do it where the community thrives.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/signup?type=creator" class="btn btn-lg bg-white text-primary border-none hover:bg-white/90 shadow-lg">
          Join as Creator
        </a>
        <a href="/browse" class="btn btn-lg btn-outline text-white border-white hover:bg-white/10 hover:border-white">
          Find Talent
        </a>
      </div>
    </div>
  </section>
</template>

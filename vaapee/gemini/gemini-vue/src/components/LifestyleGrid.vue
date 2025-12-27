<template>
  <section class="py-24 bg-[#050505] text-white">
    <div class="container mx-auto px-6">

      <div class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span class="text-brand-primary font-bold tracking-[0.3em] uppercase text-sm">Be the Star</span>
          <h2 class="text-5xl md:text-6xl font-black italic mt-2 uppercase">
            Trending <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Now</span>
          </h2>
        </div>
        <p class="text-gray-400 max-w-sm text-sm md:text-right">
          Discover the lifestyle that defines you. Bold flavors, neon nights, and unlimited power.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px]">

        <div class="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl bg-gray-900 border border-gray-800">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
               class="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" alt="Lifestyle">
          <div class="absolute bottom-0 left-0 p-8">
            <h3 class="text-3xl font-bold uppercase mb-2">Cyber Punk</h3>
            <button class="px-6 py-2 bg-brand-primary text-black font-bold uppercase rounded-full text-xs hover:bg-white transition-colors">
              Explore
            </button>
          </div>
        </div>

        <div class="relative group overflow-hidden rounded-2xl bg-brand-primary p-6 flex flex-col justify-between text-black transition-transform hover:-translate-y-2">
          <div class="text-4xl">⚡</div>
          <div>
            <div class="text-4xl font-black italic">95%</div>
            <div class="text-xs font-bold uppercase tracking-wider">Market Share</div>
          </div>
        </div>

        <div class="md:row-span-2 relative group overflow-hidden rounded-2xl bg-gray-900 border border-gray-800">
          <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10"></div>
          <img src="../img/100k_pur.png"
               class="w-full h-full object-cover object-center opacity-80 group-hover:scale-110 transition-transform duration-700" alt="Detail">
          <div class="absolute bottom-6 left-6 z-20">
            <span class="text-brand-secondary text-xs font-bold border border-brand-secondary px-2 py-1 rounded">LIMITED</span>
            <h4 class="text-xl font-bold mt-2">Pink Edition</h4>
          </div>
        </div>

        <div class="relative group overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center">
          <div class="absolute inset-0 bg-[url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2JqY3J4ZHg3eGV4ZHg3eGV4ZHg3eGV4ZHg3eGV4ZHg3eGV4JmVwPXYxX2ludGVybmFsX2dpZJfYnlfaWQmY3Q9Zw/3o7aD2saalBwwftBIY/giphy.gif')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:opacity-60 transition-opacity"></div>
          <span class="relative z-10 font-bold uppercase tracking-widest text-xl">Vibe</span>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Data for flagship products to highlight on the home page
const highlighted = [
  {
    name: 'VAPANDA 4 IN 1 120K',
    slogan: '4 Worlds. 1 Click.',
    points: [
      { title: 'Interaction', desc: "Click‑to‑Shift System. Don't settle for one vibe. Press the button to instantly swap between 4 distinct flavors." },
      { title: 'Capacity', desc: '120,000 Puffs. The ultimate endurance machine.' },
    ],
    tagline: 'The Shapeshifter. Adapt to every moment.',
    slug: 'vapanda-4-in-1-120k',
  },
  {
    name: 'VAAPEE STAR 100K',
    slogan: 'Silent Beast. Infinite Fuel.',
    points: [
      { title: 'No Screen', desc: 'Zero distractions. No fancy screens, just pure performance.' },
      { title: 'Indicator', desc: 'Halo LED Indicator. Know your power status with a subtle, futuristic glow.' },
      { title: 'Volume', desc: 'Massive Reservoir. Built for the long haul. “量大管饱” (The Tank).' },
    ],
    tagline: '',
    slug: 'vaapee-star-100k',
  },
];
</script>

<template>
  <!-- Hero banner -->
  <section class="relative h-screen flex items-center pt-20 overflow-hidden">
    <!-- Background image or video (placeholder image used here) -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <img src="https://images.unsplash.com/photo-1607974967075-87d8ac2f6e20?auto=format&fit=crop&w=1920&q=80" alt="Vaping hero" class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div class="absolute inset-0 bg-black/70 mix-blend-multiply"></div>
      <div class="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
    <!-- Hero content -->
    <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full relative z-10">
      <div class="space-y-8" data-aos="fade-up">
        <h1 class="text-6xl md:text-7xl font-black uppercase font-['Anton'] leading-tight">
          Full Power.<br />Full Fun.
        </h1>
        <p class="text-xl text-gray-400 max-w-md">The Next Evolution of Vaping is Here.</p>
        <router-link to="/products" class="inline-block bg-[#39FF14] text-black px-8 py-4 uppercase font-bold tracking-wider hover:bg-white hover:text-black transition-colors">Explore Collections</router-link>
      </div>
    </div>
  </section>

  <!-- Brand Manifesto -->
  <section class="py-20 bg-[#0e0e0e] border-t border-white/5">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl font-black uppercase mb-8 font-['Anton']">Brand Manifesto</h2>
      <p class="max-w-2xl mx-auto text-gray-400 text-lg italic">
        "VAAPEE is not about rebellion. It's about the unapologetic choice to be yourself. We create clouds for the dreamers. Authentic release, right here, right now."
      </p>
    </div>
  </section>

  <!-- Highlighted Products -->
  <section class="py-20 bg-[#0a0a0a] border-t border-white/5">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-black uppercase mb-12 font-['Anton']">Flagship Products</h2>
      <div class="grid md:grid-cols-2 gap-12">
        <div v-for="product in highlighted" :key="product.slug" class="p-8 border border-white/10 bg-[#151515] rounded-xl hover:border-[#39FF14] transition-colors" data-aos="fade-up">
          <h3 class="text-3xl font-black uppercase mb-2 font-['Anton']">{{ product.name }}</h3>
          <p class="text-sm uppercase text-[#39FF14] mb-4">{{ product.slogan }}</p>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li v-for="(pt, idx) in product.points" :key="idx">
              <span class="text-white font-semibold mr-2">{{ pt.title }}:</span>{{ pt.desc }}
            </li>
          </ul>
          <p v-if="product.tagline" class="mt-4 italic text-gray-500">{{ product.tagline }}</p>
          <router-link :to="`/products/${product.slug}`" class="inline-block mt-6 bg-[#39FF14] text-black px-6 py-3 uppercase font-bold tracking-wide rounded hover:bg-white hover:text-black transition-colors">Learn More</router-link>
        </div>
      </div>
    </div>
  </section>
  
  <!-- Call to Action for Wholesale -->
  <section class="py-16 bg-[#0e0e0e] border-t border-white/5 text-center">
    <h2 class="text-3xl md:text-4xl font-black uppercase mb-6 font-['Anton']">Ready to Join the Movement?</h2>
    <p class="text-gray-400 max-w-xl mx-auto mb-8">Partner with us for factory-direct pricing, low minimums and global shipping.</p>
    <router-link to="/wholesale" class="inline-block bg-[#39FF14] text-black px-10 py-4 uppercase font-bold tracking-wider rounded hover:bg-white hover:text-black transition-colors">Become a Partner</router-link>
  </section>
</template>
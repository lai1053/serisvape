<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

// Product specification and flavor data keyed by slug. This can be expanded with more details as needed.
const productDetails = {
  'vapanda-4-in-1-120k': {
    name: 'VAPANDA 4 IN 1 120K',
    slogan: '4 Worlds. 1 Click.',
    description: 'The flagship shapeshifter device lets you switch between four distinct flavors at the press of a button.',
    points: [
      { title: 'Interaction', desc: "Click‑to‑Shift System. Don't settle for one vibe. Press the button to instantly swap between 4 distinct flavors." },
      { title: 'Capacity', desc: '120,000 Puffs. The ultimate endurance machine.' },
    ],
    tagline: 'The Shapeshifter. Adapt to every moment.',
    specs: {
      Puffs: '120,000',
      Battery: '750 mAh',
      'E‑Liquid': '28 mL',
      Dimensions: '90 × 45 × 25 mm',
      Charging: 'USB‑C Fast Charging',
    },
  },
  'vaapee-star-100k': {
    name: 'VAAPEE STAR 100K',
    slogan: 'Silent Beast. Infinite Fuel.',
    description: 'The ultimate endurance device built for those who want volume and simplicity without distraction.',
    points: [
      { title: 'No Screen', desc: 'Zero distractions. No fancy screens, just pure performance.' },
      { title: 'Indicator', desc: 'Halo LED Indicator. Know your power status with a subtle, futuristic glow.' },
      { title: 'Volume', desc: 'Massive Reservoir. Built for the long haul. “量大管饱” (The Tank).' },
    ],
    tagline: 'Built like a tank for the long haul.',
    specs: {
      Puffs: '100,000',
      Battery: '650 mAh',
      'E‑Liquid': '25 mL',
      Dimensions: '85 × 42 × 22 mm',
      Charging: 'USB‑C Fast Charging',
    },
  },
  'vaapee-double-45k': {
    name: 'VAAPEE DOUBLE 45K',
    slogan: 'Double Trouble.',
    description: 'Revolutionary dual‑flavor technology from EU warehouses straight to your hand.',
    points: [
      { title: 'Dual Mesh & Tank', desc: 'Instant switch, faster heating, denser clouds with dual mesh and dual tank setup.' },
    ],
    tagline: '',
    specs: {
      Puffs: '45,000',
      Battery: '600 mAh',
      'E‑Liquid': '20 mL',
      Dimensions: '80 × 40 × 22 mm',
      Charging: 'USB‑C Fast Charging',
    },
  },
  'vaapee-x-30k': {
    name: 'VAAPEE X 30K',
    slogan: 'Intelligence on Board.',
    description: 'HD digital screen monitors battery & e‑liquid in real‑time. Eco and Boost modes let you control the power.',
    points: [
      { title: 'HD Screen', desc: 'Monitor battery & e‑liquid in real‑time.' },
      { title: 'Modes', desc: 'Eco / Boost Mode gives you control over the output.' },
    ],
    tagline: '',
    specs: {
      Puffs: '30,000',
      Battery: '550 mAh',
      'E‑Liquid': '18 mL',
      Dimensions: '78 × 38 × 20 mm',
      Charging: 'USB‑C Fast Charging',
    },
  },
};

// Default flavor list for all products. Each product could have its own list if provided.
const flavorList = [
  'Urban Legend',
  'Neon Dream',
  'Cyber Punk',
  'Tropical Groove',
  'Berry Blast',
  'Mango Tango',
  'Minty Fresh',
  'Grape Galaxy',
  'Citrus Storm',
  'Café Mocha',
];

// Obtain the current route slug
const route = useRoute();
const slug = computed(() => route.params.slug);

// Compute the product details, falling back to a generic stub if not found
const product = computed(() => {
  const key = slug.value;
  if (productDetails[key]) return productDetails[key];
  return {
    name: 'Product Not Found',
    slogan: '',
    description: 'This product does not exist in our catalog.',
    points: [],
    tagline: '',
    specs: {},
  };
});
</script>

<template>
  <section class="py-24 bg-[#0a0a0a] min-h-screen">
    <div class="container mx-auto px-6">
      <router-link to="/products" class="text-sm uppercase text-gray-500 hover:text-[#39FF14] mb-8 inline-block">← Back to products</router-link>
      <h1 class="text-4xl md:text-5xl font-black uppercase mb-4 font-['Anton']">{{ product.name }}</h1>
      <p v-if="product.slogan" class="text-xl text-[#39FF14] uppercase mb-6">{{ product.slogan }}</p>
      <p class="text-gray-400 mb-8 max-w-2xl">{{ product.description }}</p>

      <!-- Feature Points -->
      <div v-if="product.points.length" class="mb-12">
        <h2 class="text-2xl font-black uppercase mb-4 font-['Anton']">Highlights</h2>
        <ul class="space-y-4 text-gray-400">
          <li v-for="(pt, idx) in product.points" :key="idx" class="flex">
            <span class="text-[#39FF14] font-bold mr-3">0{{ idx + 1 }}.</span>
            <div>
              <span class="text-white font-semibold">{{ pt.title }}:</span> {{ pt.desc }}
            </div>
          </li>
        </ul>
        <p v-if="product.tagline" class="mt-4 italic text-gray-500">{{ product.tagline }}</p>
      </div>

      <!-- Flavor List -->
      <div class="mb-12">
        <h2 class="text-2xl font-black uppercase mb-4 font-['Anton']">Flavor List</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div v-for="(flavor, idx) in flavorList" :key="idx" class="border border-white/10 p-3 text-center hover:border-[#39FF14] transition-colors">
            <span class="block text-sm uppercase font-bold">{{ flavor }}</span>
          </div>
        </div>
      </div>

      <!-- Specifications Table -->
      <div v-if="Object.keys(product.specs).length" class="mb-12">
        <h2 class="text-2xl font-black uppercase mb-4 font-['Anton']">Specifications</h2>
        <table class="w-full text-sm text-left border-collapse">
          <tbody>
            <tr v-for="(val, key) in product.specs" :key="key" class="border-b border-white/10 hover:bg-white/5">
              <th class="py-3 px-4 font-semibold uppercase tracking-widest w-1/3">{{ key }}</th>
              <td class="py-3 px-4 text-gray-400">{{ val }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
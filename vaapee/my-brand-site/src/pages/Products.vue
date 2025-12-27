<script setup>
// The products page lists all available devices organised by series.
import { computed } from 'vue';

// Define all products with minimal metadata. In a real application this would come from an API or CMS.
const products = [
  {
    slug: 'vapanda-4-in-1-120k',
    name: 'VAPANDA 4 IN 1 120K',
    series: 'Series A',
    category: 'Series A: The Multiverse',
    image: 'https://images.unsplash.com/photo-1613668002102-b703966b6da8?auto=format&fit=crop&w=400&q=80',
    tagline: '4 Worlds. 1 Click.',
  },
  {
    slug: 'vaapee-double-45k',
    name: 'VAAPEE DOUBLE 45K',
    series: 'Series A',
    category: 'Series A: The Multiverse',
    image: 'https://images.unsplash.com/photo-1542156822-b65ba34592d2?auto=format&fit=crop&w=400&q=80',
    tagline: 'Double Trouble.',
  },
  {
    slug: 'vapanda-2-in-1-80k',
    name: 'Vapanda 2 IN 1 80K',
    series: 'Series A',
    category: 'Series A: The Multiverse',
    image: 'https://images.unsplash.com/photo-1512499617640-c2f9994586de?auto=format&fit=crop&w=400&q=80',
    tagline: 'Switch Flavors.',
  },
  {
    slug: 'vaapee-star-100k',
    name: 'VAAPEE STAR 100K',
    series: 'Series B',
    category: 'Series B: The Titans',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&q=80',
    tagline: 'Silent Beast. Infinite Fuel.',
  },
  {
    slug: 'vapanda-ultra-50k',
    name: 'Vapanda Ultra 50K',
    series: 'Series B',
    category: 'Series B: The Titans',
    image: 'https://images.unsplash.com/photo-1485214298942-7f5403d133c4?auto=format&fit=crop&w=400&q=80',
    tagline: 'Ultra Capacity.',
  },
  {
    slug: 'vapanda-pro-40k',
    name: 'VAPANDA PRO 40K',
    series: 'Series B',
    category: 'Series B: The Titans',
    image: 'https://images.unsplash.com/photo-1510051640313-111b0db3a1a7?auto=format&fit=crop&w=400&q=80',
    tagline: 'Pro Performance.',
  },
  {
    slug: 'vaapee-x-30k',
    name: 'VAAPEE X 30K',
    series: 'Series C',
    category: 'Series C: The Smart Grid',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80',
    tagline: 'Intelligence on Board.',
  },
  {
    slug: 'vapanda-tornado-25k',
    name: 'Vaapee Tornado 25K',
    series: 'Series C',
    category: 'Series C: The Smart Grid',
    image: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=400&q=80',
    tagline: 'Tornado 25K.',
  },
  {
    slug: 'vapanda-tornado-18k',
    name: 'Vapanda Tornado 18K',
    series: 'Series C',
    category: 'Series C: The Smart Grid',
    image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=400&q=80',
    tagline: 'Tornado 18K.',
  },
  {
    slug: 'vapliq-e-liquids',
    name: 'VAPLIQ 烟油',
    series: 'Accessories',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1542332213-9a5d39e6a47b?auto=format&fit=crop&w=400&q=80',
    tagline: 'Premium Flavors.',
  },
];

// Derive unique categories in the same order as defined in the spec
const categories = computed(() => {
  const order = ['Series A: The Multiverse', 'Series B: The Titans', 'Series C: The Smart Grid', 'Accessories'];
  return order.map(name => ({ name }));
});
</script>

<template>
  <section class="py-24 bg-[#0a0a0a]">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl md:text-5xl font-black uppercase mb-12 font-['Anton']">Product Collections</h1>
      <!-- Loop over each category and list its products -->
      <div v-for="category in categories" :key="category.name" class="mb-16">
        <h2 class="text-2xl md:text-3xl font-black uppercase mb-6 font-['Anton']">{{ category.name }}</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div v-for="prod in products.filter(p => p.category === category.name)" :key="prod.slug" class="border border-white/10 rounded-lg overflow-hidden hover:border-[#39FF14] transition-colors" data-aos="fade-up">
            <router-link :to="`/products/${prod.slug}`" class="block h-full">
              <img :src="prod.image" :alt="prod.name" class="w-full h-40 object-cover opacity-60 hover:opacity-90 transition-opacity" />
              <div class="p-4">
                <h3 class="text-lg font-bold uppercase font-['Anton'] mb-1">{{ prod.name }}</h3>
                <p class="text-xs uppercase text-[#39FF14] mb-2">{{ prod.tagline }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
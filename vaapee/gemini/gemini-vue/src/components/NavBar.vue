<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

// 监听滚动，实现滚动后变黑的效果
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
          :class="[isScrolled ? 'bg-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6']">

    <div v-if="!isScrolled" class="absolute top-0 w-full bg-black text-[10px] text-gray-400 text-center py-1 uppercase tracking-widest">
      Warning: This product contains nicotine. Nicotine is an addictive chemical.
    </div>

    <div class="container mx-auto px-6 flex justify-between items-center mt-4">
      <div class="text-3xl font-bold tracking-tighter italic">
        VAAPEE<span class="text-brand-primary">.STAR</span>
      </div>

      <nav class="hidden md:flex space-x-8 text-sm font-semibold tracking-wider uppercase">
        <a href="#" class="hover:text-brand-primary transition-colors">Products</a>
        <a href="#" class="hover:text-brand-primary transition-colors">New Arrival</a>
        <a href="#" class="hover:text-brand-primary transition-colors">Collections</a>
        <a href="#" class="text-brand-primary">Support</a>
      </nav>

      <button class="bg-brand-primary text-black px-6 py-2 rounded-full font-bold uppercase text-xs hover:scale-105 transition-transform">
        Shop Now
      </button>
    </div>
  </header>
</template>

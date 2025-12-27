<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProductShowcase from './components/ProductShowcase.vue'
import LifestyleGrid from './components/LifestyleGrid.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-brand-bg text-brand-text font-sans overflow-x-hidden selection:bg-brand-primary selection:text-black">

    <NavBar />

    <HeroSection />

    <ProductShowcase />

    <LifestyleGrid />
    <section class="py-32 flex justify-center items-center bg-brand-primary">
    <h2 class="text-[12vw] leading-none font-black text-brand-bg tracking-tighter uppercase">
      Full Power<br>Full Fun.
    </h2>
  </section>
    <FooterSection />

  </div>
</template>

<style>
/* 可以在这里引入字体，或者在 index.html 里引入 */
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap');
</style>

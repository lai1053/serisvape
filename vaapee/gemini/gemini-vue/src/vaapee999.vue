<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 1200, easing: 'ease-out-quart', once: true })
})

const modules = [Autoplay, EffectFade]

// 模拟高端画廊系列
const collections = [
  { id: 1, title: "Summer Haze", subtitle: "Tropical Edition", color: "text-orange-500", bg: "bg-orange-50", img: new URL('./img/prod-orange.jpg', import.meta.url).href },
  { id: 2, title: "Neon Forest", subtitle: "Acid Green Series", color: "text-lime-600", bg: "bg-lime-50", img: new URL('./img/prod-green.jpg', import.meta.url).href },
  { id: 3, title: "Cyber Violet", subtitle: "Digital Dreams", color: "text-purple-600", bg: "bg-purple-50", img: new URL('./img/prod-purple.jpg', import.meta.url).href },
]
</script>

<template>
  <div class="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans selection:bg-black selection:text-white overflow-x-hidden">

    <nav class="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-all duration-500 mix-blend-multiply">
      <div class="text-2xl font-bold tracking-tight font-['Playfair_Display']">
        Vaapee<span class="text-xs align-top font-sans font-normal ml-1">studio</span>
      </div>
      <div class="hidden md:flex gap-12 text-xs font-medium tracking-[0.1em] uppercase text-gray-600">
        <a href="#" class="hover:text-black transition-colors">Collections</a>
        <a href="#" class="hover:text-black transition-colors">Philosophy</a>
        <a href="#" class="hover:text-black transition-colors">Journal</a>
      </div>
      <button class="text-xs font-bold border-b border-black pb-1 hover:opacity-50 transition-opacity uppercase tracking-widest">
        Cart (0)
      </button>
    </nav>

    <section class="h-screen grid grid-cols-1 lg:grid-cols-2 relative">

      <div class="relative bg-[#f0f0f0] flex flex-col justify-center px-12 lg:px-24 order-2 lg:order-1 overflow-hidden">
        <div class="absolute -left-20 -top-20 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[80px]"></div>
        <div class="absolute right-0 bottom-0 w-[400px] h-[400px] bg-orange-200/30 rounded-full blur-[80px]"></div>

        <div class="relative z-10" data-aos="fade-up">
          <span class="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase mb-4 block">The New Classic</span>
          <h1 class="text-6xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 text-[#111]">
            Artistry <br> <i class="font-light text-gray-400">in</i> Vapor.
          </h1>
          <p class="text-gray-600 text-sm leading-loose max-w-md mb-10 font-medium">
            Redefining the vaping experience with sculptural design and pure flavor technology. Where industrial precision meets artistic expression.
          </p>
          <div class="flex gap-8 items-center">
            <button class="bg-[#111] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
              Discover
            </button>
            <a href="#" class="text-xs font-bold uppercase tracking-widest border-b border-gray-300 pb-1 hover:border-black transition-colors">View Gallery</a>
          </div>
        </div>
      </div>

      <div class="relative bg-white h-[50vh] lg:h-auto order-1 lg:order-2 flex items-center justify-center overflow-hidden">
        <swiper :modules="modules" :effect="'fade'" :autoplay="{ delay: 4000, disableOnInteraction: false }" class="w-full h-full">
          <swiper-slide v-for="item in collections" :key="item.id" :class="`flex items-center justify-center w-full h-full ${item.bg}`">
            <div class="relative w-full h-full flex items-center justify-center">
              <div class="absolute w-[300px] h-[300px] bg-white rounded-full opacity-40 blur-3xl transform translate-x-10 translate-y-10"></div>

              <img :src="item.img" class="relative z-10 w-[280px] md:w-[400px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] transform hover:scale-105 transition-transform duration-1000" :alt="item.title">

              <div class="absolute bottom-12 right-12 text-right">
                <h3 class="text-3xl font-serif font-italic text-gray-900">{{ item.title }}</h3>
                <p class="text-xs uppercase tracking-widest text-gray-500 mt-1">{{ item.subtitle }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="py-32 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-12 gap-12 items-center">

          <div class="col-span-12 lg:col-span-7 relative" data-aos="fade-right">
            <div class="aspect-[4/5] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" alt="Concept">
            </div>
            <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-[#f5f5f5] p-4 hidden lg:block" data-aos="fade-up" data-aos-delay="200">
              <img src="./img/tech-screen.jpg" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Detail">
            </div>
          </div>

          <div class="col-span-12 lg:col-span-4 lg:col-start-9" data-aos="fade-left">
            <span class="text-orange-500 font-bold text-xs uppercase tracking-widest mb-4 block">Philosophy</span>
            <h2 class="text-4xl lg:text-5xl font-serif mb-8 leading-tight">
              Designed for <br> the Senses.
            </h2>
            <div class="space-y-8 text-gray-600 font-light text-sm leading-relaxed">
              <p>
                We believe that functionality should never compromise beauty. Our devices are crafted not just as tools, but as accessories to your lifestyle.
              </p>
              <p>
                Every curve is intentional, every material chosen for its tactile quality. From the smooth matte finish to the vibrant high-resolution display.
              </p>
            </div>
            <div class="mt-12 flex items-center gap-4">
              <div class="w-12 h-[1px] bg-black"></div>
              <span class="text-xs font-bold uppercase tracking-widest">Read Our Story</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-24 bg-[#fafafa] border-t border-gray-100">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-end mb-16">
          <h2 class="text-3xl font-serif">Essentials</h2>
          <span class="text-xs font-bold uppercase tracking-widest text-gray-400">Technical Specifications</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          <div class="bg-white p-12 hover:bg-[#f8f8f8] transition-colors group aspect-square flex flex-col justify-between">
            <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">9000 Puffs</h3>
              <p class="text-xs text-gray-500 leading-relaxed">Long-lasting cobalt core ensures consistent performance.</p>
            </div>
          </div>

          <div class="bg-white p-12 hover:bg-[#f8f8f8] transition-colors group aspect-square flex flex-col justify-between">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6"/><path d="M9 13h6"/><path d="M9 17h6"/></svg>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Smart LED</h3>
              <p class="text-xs text-gray-500 leading-relaxed">Real-time monitoring of e-liquid and battery levels.</p>
            </div>
          </div>

          <div class="bg-white p-12 hover:bg-[#f8f8f8] transition-colors group aspect-square flex flex-col justify-between">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2.69l5.74 5.88-5.74 5.88-5.74-5.88z"/><path d="M12 21.31l5.74-5.88-5.74-5.88-5.74 5.88z"/></svg>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">Dual Mesh</h3>
              <p class="text-xs text-gray-500 leading-relaxed">Enhanced flavor profile with instant heating technology.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-white pt-24 pb-12 border-t border-gray-100">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-serif italic mb-8">Vaapee.</h2>

        <div class="flex justify-center gap-8 mb-12 text-xs font-bold uppercase tracking-widest text-gray-500">
          <a href="#" class="hover:text-black">Instagram</a>
          <a href="#" class="hover:text-black">Facebook</a>
          <a href="#" class="hover:text-black">Contact</a>
        </div>

        <p class="text-[10px] text-gray-400 font-medium uppercase tracking-widest max-w-lg mx-auto leading-relaxed">
          Warning: This product contains nicotine. Nicotine is an addictive chemical. <br>
          © 2025 Vaapee Studio. All rights reserved.
        </p>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* 引入衬线字体，增加优雅感 */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;600&display=swap');

.font-serif { font-family: 'Playfair Display', serif; }
.font-sans { font-family: 'Inter', sans-serif; }
</style>

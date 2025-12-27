<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { Autoplay, EffectCards } from 'swiper/modules'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 800, easing: 'ease-out-back', offset: 50, once: false })
})

const modules = [Autoplay, EffectCards]

// 模拟产品数据
const products = [
  { id: 1, name: "SKULL_SKATER", tag: "LIMITED", img: new URL('./img/prod-green.jpg', import.meta.url).href, bg: "bg-[#C4F135]" },
  { id: 2, name: "ASTRO_BOY", tag: "NEW DROP", img: new URL('./img/prod-orange.jpg', import.meta.url).href, bg: "bg-[#FF5C00]" },
  { id: 3, name: "CYBER_GHOST", tag: "HOT", img: new URL('./img/prod-purple.jpg', import.meta.url).href, bg: "bg-[#8B5CF6]" }
]

// 口味数据 (像贴纸一样)
const flavors = [
  { name: "Blue Razz", color: "bg-blue-500", icon: "🫐" },
  { name: "Watermelon", color: "bg-red-500", icon: "🍉" },
  { name: "Sour Apple", color: "bg-[#C4F135]", icon: "🍏" },
  { name: "Grape Ice", color: "bg-purple-600", icon: "🍇" },
  { name: "Mint Blast", color: "bg-teal-400", icon: "❄️" },
  { name: "Mango Bomb", color: "bg-orange-500", icon: "🥭" },
]

// FAQ 数据
const faqs = [
  { q: "HOW LONG DOES IT LAST?", a: "9000 Puffs. Basically forever (unless you vape like a chimney)." },
  { q: "IS IT RECHARGEABLE?", a: "Yes. Type-C fast charging. 0 to 100 quicker than your ex moves on." },
  { q: "WHERE TO BUY?", a: "Right here, or at your local skate shop / vape store." },
]
</script>

<template>
  <div class="min-h-screen bg-white text-black font-['Kanit'] selection:bg-black selection:text-[#C4F135] overflow-x-hidden">

    <div class="bg-black text-[#C4F135] py-3 border-b-4 border-black overflow-hidden font-['Russo_One'] text-sm relative z-50">
      <div class="animate-marquee whitespace-nowrap flex gap-8">
        <span v-for="n in 10">⚠ FREE SHIPPING ON ORDERS OVER $50 •</span>
      </div>
    </div>

    <nav class="sticky top-0 z-40 bg-white border-b-4 border-black px-4 py-4 flex justify-between items-center shadow-[0_4px_0_rgba(0,0,0,0.1)]">
      <div class="text-3xl font-black italic tracking-tighter uppercase font-['Russo_One'] transform -skew-x-10">
        Vaapee<span class="text-[#FF5C00]">.</span>
      </div>
      <button class="md:hidden text-2xl font-black">☰</button>
      <div class="hidden md:flex gap-4 items-center">
        <a href="#" class="font-bold uppercase hover:underline decoration-4 decoration-[#C4F135]">Flavors</a>
        <a href="#" class="font-bold uppercase hover:underline decoration-4 decoration-[#C4F135]">Lookbook</a>
        <a href="#" class="bg-black text-white px-6 py-2 border-2 border-black font-black uppercase rounded-full hover:bg-[#C4F135] hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
          Shop Cart (0)
        </a>
      </div>
    </nav>

    <section class="relative bg-[#C4F135] border-b-4 border-black flex flex-col md:flex-row overflow-hidden">
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(black 3px, transparent 3px); background-size: 30px 30px;"></div>

      <div class="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center relative z-10">
        <div class="inline-block bg-white border-4 border-black px-4 py-2 font-black uppercase -rotate-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] w-max mb-8">
          🔥 Season 04 Drop
        </div>
        <h1 class="text-7xl md:text-9xl font-black leading-[0.85] mb-6 font-['Russo_One'] uppercase drop-shadow-xl">
          Street<br><span class="text-white text-stroke-3">Legend.</span>
        </h1>
        <p class="text-xl font-bold mb-8 max-w-md bg-black text-white p-2 inline-block -skew-x-6">
          The graffiti series is here. 9000 Puffs of pure chaos.
        </p>
        <button class="w-max px-10 py-4 bg-[#FF5C00] border-4 border-black font-black text-xl uppercase hover:bg-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          Go Shop ->
        </button>
      </div>

      <div class="w-full md:w-1/2 bg-white border-l-4 border-black flex items-center justify-center p-12 relative overflow-hidden">
        <div class="absolute inset-0 bg-[repeating-conic-gradient(#f0f0f0_0_20deg,white_20deg_40deg)] animate-spin-slow opacity-50"></div>

        <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="w-[300px] h-[450px]">
          <swiper-slide v-for="item in products" :key="item.id" :class="`rounded-xl border-4 border-black ${item.bg} flex items-center justify-center relative shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`">
            <img :src="item.img" class="w-[90%] object-contain drop-shadow-2xl transform hover:scale-110 transition-transform duration-300">
            <div class="absolute top-4 left-4 bg-black text-white px-2 py-1 font-black text-xs uppercase">{{ item.tag }}</div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="py-20 bg-black text-white border-b-4 border-black overflow-hidden relative">
      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-6xl md:text-8xl font-black uppercase text-center mb-16 font-['Russo_One'] text-[#C4F135]">
          Pick Your <br> <span class="text-white text-stroke-2">Poison</span>
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div v-for="(flavor, i) in flavors" :key="i" class="group relative">
            <div class="bg-white text-black border-4 border-white p-6 h-48 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
              <div class="text-4xl">{{ flavor.icon }}</div>
              <h3 class="text-2xl font-black uppercase italic">{{ flavor.name }}</h3>
            </div>
            <div :class="`absolute inset-0 ${flavor.color} translate-x-2 translate-y-2 -z-10 border-4 border-black group-hover:translate-x-4 group-hover:translate-y-4 transition-transform`"></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-[#FF5C00] border-b-4 border-black overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 class="text-5xl font-black uppercase bg-white border-4 border-black px-4 py-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            Lookbook
          </h2>
          <p class="font-bold text-black mt-4 md:mt-0">#VAAPEE_GANG</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[600px]">

          <div class="md:col-span-5 relative group" data-aos="fade-right">
            <div class="absolute inset-0 bg-black translate-x-4 translate-y-4 border-4 border-black"></div>
            <div class="relative h-full border-4 border-black bg-white overflow-hidden">
              <img src="../src/img/hua-ti.png" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
              <div class="absolute bottom-0 bg-[#C4F135] text-black px-4 py-2 font-black uppercase text-xl border-t-4 border-r-4 border-black">Skate Life</div>
            </div>
          </div>

          <div class="md:col-span-4 relative group md:mt-12" data-aos="fade-up">
            <div class="absolute inset-0 bg-black translate-x-4 translate-y-4 border-4 border-black"></div>
            <div class="relative h-full border-4 border-black bg-white overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
              <div class="absolute top-0 right-0 bg-[#8B5CF6] text-white px-4 py-2 font-black uppercase text-xl border-b-4 border-l-4 border-black">Night Owl</div>
            </div>
          </div>

          <div class="md:col-span-3 relative group md:-mt-8" data-aos="fade-left">
            <div class="absolute inset-0 bg-black translate-x-4 translate-y-4 border-4 border-black"></div>
            <div class="relative h-full border-4 border-black bg-white overflow-hidden">
              <img src="../src/img/peng-ke.png" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500">
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black rounded-full w-16 h-16 flex items-center justify-center font-black rotate-12">
                ART
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="bg-white border-b-4 border-black py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div data-aos="zoom-in">
            <div class="relative border-4 border-black p-4 bg-[#8B5CF6] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
              <img src="./img/tech-screen.jpg" class="w-full border-4 border-black grayscale contrast-125 hover:grayscale-0 transition-all">
              <div class="absolute -top-6 -right-6 bg-[#C4F135] border-4 border-black px-4 py-2 font-black uppercase rotate-6">
                Smart Screen!
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-5xl font-black uppercase mb-8 font-['Russo_One']">Don't Guess.<br>Know It.</h2>
            <ul class="space-y-6">
              <li class="flex items-center gap-4 text-2xl font-bold bg-gray-100 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#C4F135] transition-colors cursor-help">
                <span class="text-3xl">🔋</span> Battery % Display
              </li>
              <li class="flex items-center gap-4 text-2xl font-bold bg-gray-100 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FF5C00] transition-colors cursor-help">
                <span class="text-3xl">💧</span> E-Liquid Monitor
              </li>
              <li class="flex items-center gap-4 text-2xl font-bold bg-gray-100 p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#8B5CF6] transition-colors cursor-help">
                <span class="text-3xl">🚀</span> Boost Mode
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-[#C4F135] border-b-4 border-black">
      <div class="container mx-auto px-6 max-w-3xl">
        <h2 class="text-4xl font-black uppercase mb-10 text-center border-b-4 border-black pb-4 inline-block mx-auto">Freq. Asked Questions</h2>
        <div class="space-y-4">
          <div v-for="(item, i) in faqs" :key="i" class="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <details class="group">
              <summary class="flex justify-between items-center font-black text-xl p-6 cursor-pointer list-none">
                <span>{{ item.q }}</span>
                <span class="transition group-open:rotate-180 text-2xl">+</span>
              </summary>
              <div class="text-gray-800 p-6 pt-0 font-bold border-t-2 border-black group-open:block hidden bg-gray-50">
                {{ item.a }}
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-black text-white pt-20 pb-8">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-[12vw] leading-none font-black font-['Russo_One'] text-transparent text-stroke-2 text-stroke-white opacity-50 hover:opacity-100 hover:text-[#C4F135] hover:text-stroke-0 transition-all duration-500 cursor-pointer">
          VAAPEE.
        </h2>

        <div class="flex flex-col md:flex-row justify-center gap-8 mt-12 mb-16 text-xl font-bold uppercase">
          <a href="#" class="hover:text-[#FF5C00] hover:underline decoration-4">Instagram</a>
          <a href="#" class="hover:text-[#8B5CF6] hover:underline decoration-4">TikTok</a>
          <a href="#" class="hover:text-[#C4F135] hover:underline decoration-4">Support</a>
        </div>

        <div class="border-t border-gray-800 pt-8 text-xs text-gray-500 font-mono">
          WARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL. <br>
          © 2025 VAAPEE HYPE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>

  </div>
</template>

<style>
/* 引入 Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,400;0,800;0,900;1,800&family=Russo+One&display=swap');

/* 文字描边工具类 */
.text-stroke-2 { -webkit-text-stroke: 2px white; }
.text-stroke-3 { -webkit-text-stroke: 3px black; }
.text-stroke-white { color: transparent; }

/* 跑马灯 */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 15s linear infinite;
}

/* 慢旋转 */
@keyframes spin-slow {
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 1000, easing: 'ease-out-quad', offset: 80 })
})

const modules = [Autoplay, EffectCoverflow, Pagination]

const products = [
  { id: 1, name: "NEON DEMON", desc: "Cyber Purple / Grape Ice", img: new URL('./img/prod-purple.jpg', import.meta.url).href },
  { id: 2, name: "ACID RAIN", desc: "Toxic Green / Sour Apple", img: new URL('./img/prod-green.jpg', import.meta.url).href },
  { id: 3, name: "SOLAR FLARE", desc: "Magma Orange / Mango", img: new URL('./img/prod-orange.jpg', import.meta.url).href },
]

// 新增：口味实验室数据
const flavors = [
  { name: "CRYO-MANGO", img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=600&auto=format&fit=crop", tag: "ICE LEVEL 9/10" },
  { name: "TOXIC BERRY", img: "https://images.unsplash.com/photo-1516641396056-0ce60a85d49f?q=80&w=600&auto=format&fit=crop", tag: "SWEET LEVEL 8/10" },
  { name: "NEON MINT", img: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=600&auto=format&fit=crop", tag: "FRESH LEVEL 10/10" }
]
</script>

<template>
  <div class="min-h-screen bg-[#020202] text-white font-sans selection:bg-[#f0f] selection:text-white overflow-x-hidden">

    <nav class="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black/50 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div class="text-2xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
        VAAPEE
      </div>
      <div class="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">
        <a href="#" class="hover:text-white hover:shadow-[0_0_10px_white] transition-all">Series</a>
        <a href="#" class="hover:text-white hover:shadow-[0_0_10px_white] transition-all">Flavor Lab</a>
        <a href="#" class="hover:text-white hover:shadow-[0_0_10px_white] transition-all">Community</a>
      </div>
      <button class="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-none transform skew-x-[-15deg] hover:scale-105 transition-transform border border-white/20">
        <span class="block transform skew-x-[15deg] text-xs font-bold uppercase tracking-widest">Store</span>
      </button>
    </nav>

    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2500&auto=format&fit=crop" class="w-full h-full object-cover opacity-50 filter contrast-125 brightness-75 animate-pulse-slow" alt="Cyber City">
        <div class="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
      </div>

      <div class="relative z-10 text-center px-4" data-aos="zoom-out">
        <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-900/20 backdrop-blur-md mb-8">
          <span class="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
          <span class="text-cyan-300 text-[10px] font-bold tracking-[0.3em] uppercase">System Online</span>
        </div>
        <h1 class="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-6 drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
          Night <br> <span class="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">Rider</span>
        </h1>
        <p class="text-gray-400 text-sm md:text-lg max-w-lg mx-auto font-medium leading-relaxed mb-12 tracking-wide">
          Dominate the streets with the Triple 90K. <br>
          <span class="text-white">Dual Mesh Core • Smart Screen • Graffiti Soul</span>
        </p>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span class="text-[10px] uppercase tracking-widest">Scroll to Dive</span>
        <div class="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>

    <section class="py-32 relative overflow-hidden bg-gradient-to-b from-black to-[#0a0a0a]">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 rounded-full blur-[150px]"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-20" data-aos="fade-up">
          <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tight mb-2">Select Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Ammo</span></h2>
          <p class="text-gray-500 text-xs uppercase tracking-[0.2em]">Limited Edition Drop</p>
        </div>

        <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :coverflowEffect="{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }"
            :modules="modules"
            class="w-full py-12"
        >
          <swiper-slide v-for="item in products" :key="item.id" class="w-[300px] md:w-[380px] bg-[#111] border border-white/5 rounded-3xl overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div class="relative h-[500px] flex flex-col items-center justify-center p-8 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
              <div class="absolute bottom-10 w-[80%] h-4 bg-purple-500/20 blur-xl rounded-full group-hover:bg-purple-500/40 transition-all duration-500"></div>

              <img :src="item.img" class="w-[85%] object-contain drop-shadow-2xl transform group-hover:scale-110 group-hover:-translate-y-6 transition-transform duration-700 z-10" :alt="item.name">

              <div class="absolute top-6 left-6 z-20">
                <h3 class="text-2xl font-black uppercase italic text-white leading-none">{{ item.name }}</h3>
              </div>

              <div class="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                <button class="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold hover:bg-purple-500 hover:text-white transition-colors">+</button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="py-32 bg-black relative border-t border-white/5">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 px-2">
          <h2 class="text-5xl font-black uppercase leading-none" data-aos="fade-right">Flavor <br> <span class="text-cyan-400">Matrix.</span></h2>
          <p class="text-gray-500 text-sm max-w-xs text-right mt-4 md:mt-0" data-aos="fade-left">
            Engineered with cryo-extraction tech. <br> Taste the impossible.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div v-for="(flavor, i) in flavors" :key="i" class="group relative h-[400px] overflow-hidden cursor-pointer" data-aos="fade-up" :data-aos-delay="i * 100">
            <img :src="flavor.img" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="Flavor">
            <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-60 transition-opacity"></div>
            <div class="absolute bottom-0 left-0 p-8 w-full">
              <div class="w-full h-[1px] bg-white/20 mb-4 group-hover:bg-cyan-400 transition-colors"></div>
              <div class="flex justify-between items-end">
                <h3 class="text-2xl font-black uppercase italic">{{ flavor.name }}</h3>
                <span class="text-[10px] font-bold bg-white text-black px-2 py-1 uppercase tracking-widest">{{ flavor.tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-2 h-[80vh] border-y border-white/5">
      <div class="relative group overflow-hidden border-r border-white/5">
        <img src="https://images.unsplash.com/photo-1504194921103-f8b80cadd5e4?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-1000" alt="Vape Smoke">
        <div class="absolute inset-0 bg-purple-900/20 mix-blend-overlay"></div>

        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <div class="text-[100px] md:text-[150px] font-black leading-none text-transparent text-stroke-2 opacity-30 group-hover:opacity-100 transition-opacity duration-500 select-none">
            VAPE
          </div>
        </div>
        <div class="absolute bottom-10 left-10">
          <span class="bg-purple-600 text-white px-3 py-1 text-xs font-bold uppercase">Community</span>
          <h3 class="text-3xl font-bold uppercase mt-4">Cloud <br> Chasers</h3>
        </div>
      </div>

      <div class="relative group overflow-hidden">
        <img src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="Neon Street">
        <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
        <div class="absolute top-10 right-10 text-right">
          <span class="text-cyan-400 font-mono text-xs block mb-2">LOCATION:</span>
          <h3 class="text-4xl font-black uppercase leading-none">Neo <br> Tokyo</h3>
        </div>
      </div>
    </section>

    <section class="py-32 bg-[#050505] relative">
      <div class="container mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        <div class="md:col-span-7 relative" data-aos="fade-right">
          <div class="absolute -inset-4 border border-white/10 rounded-3xl"></div>
          <div class="absolute top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-cyan-500 rounded-tl-3xl"></div>

          <img src="./img/tech-screen.jpg" class="w-full rounded-2xl relative z-10 filter contrast-125 brightness-110 shadow-2xl" alt="HUD">

          <div class="absolute top-[30%] right-[20%] z-20 flex items-center gap-2 animate-pulse">
            <div class="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
            <span class="text-xs font-mono text-cyan-400 bg-black/80 px-2 py-1 rounded border border-cyan-500/30">LIQUID: 85%</span>
          </div>
        </div>

        <div class="md:col-span-5 pl-0 md:pl-10" data-aos="fade-left">
          <h2 class="text-5xl font-black uppercase mb-8">Smart <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Core.</span></h2>

          <div class="space-y-8">
            <div class="group cursor-pointer">
              <h4 class="text-xl font-bold text-gray-400 group-hover:text-white transition-colors mb-2 flex items-center gap-4">
                <span class="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity">></span>
                Dual Mesh Coil
              </h4>
              <p class="text-sm text-gray-600 group-hover:text-gray-400 pl-8 transition-colors">
                Instant heating. Double the flavor intensity from the first puff.
              </p>
            </div>
            <div class="group cursor-pointer">
              <h4 class="text-xl font-bold text-gray-400 group-hover:text-white transition-colors mb-2 flex items-center gap-4">
                <span class="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">></span>
                9000 Puffs
              </h4>
              <p class="text-sm text-gray-600 group-hover:text-gray-400 pl-8 transition-colors">
                Powered by a high-density Cobalt battery cell. Lasts longer than the night.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="py-6 bg-[#111] border-y border-white/5 overflow-hidden">
      <div class="animate-marquee whitespace-nowrap flex gap-16 items-center">
        <span class="text-2xl font-black italic text-gray-700">"BEST FLAVOR EVER" — JASON.K</span>
        <span class="text-2xl font-black italic text-white">"DESIGN IS SICK" — SARAH.L</span>
        <span class="text-2xl font-black italic text-gray-700">"BATTERY LASTS FOREVER" — MIKE.D</span>
        <span class="text-2xl font-black italic text-white">"THE SCREEN IS A GAME CHANGER" — ALEX.W</span>
        <span class="text-2xl font-black italic text-gray-700">"BEST FLAVOR EVER" — JASON.K</span>
        <span class="text-2xl font-black italic text-white">"DESIGN IS SICK" — SARAH.L</span>
      </div>
    </div>

    <section class="py-24 bg-black text-center">
      <div class="container mx-auto px-6">
        <p class="text-cyan-500 font-mono text-xs mb-4">/// GLOBAL_PRESENCE</p>
        <h2 class="text-4xl md:text-5xl font-black uppercase mb-12">Available <br> Worldwide</h2>
        <div class="relative w-full max-w-4xl mx-auto aspect-[2/1] bg-[#0a0a0a] rounded-xl border border-white/10 flex items-center justify-center overflow-hidden">
          <div class="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center opacity-10 grayscale invert"></div>
          <div class="absolute top-[30%] left-[20%] w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
          <div class="absolute top-[40%] left-[48%] w-2 h-2 bg-cyan-500 rounded-full animate-ping delay-300"></div>
          <div class="absolute top-[35%] right-[25%] w-2 h-2 bg-pink-500 rounded-full animate-ping delay-700"></div>
          <div class="relative z-10">
            <button class="bg-white text-black px-8 py-3 font-bold uppercase hover:bg-cyan-400 transition-colors">
              Find a Store
            </button>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-[#050505] pt-24 pb-12 border-t border-white/10 relative">
      <div class="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        <div class="col-span-2">
          <h2 class="text-6xl font-black text-white mb-6">VAAPEE.</h2>
          <div class="flex gap-4">
            <input type="email" placeholder="ENTER EMAIL FOR DROPS" class="bg-white/5 border border-white/10 px-4 py-3 w-full max-w-xs text-xs focus:border-cyan-500 outline-none transition-colors">
            <button class="bg-cyan-600 px-6 font-bold text-xs uppercase hover:bg-cyan-500 transition-colors">Join</button>
          </div>
        </div>
        <div>
          <h4 class="font-bold uppercase text-gray-500 text-xs mb-6 tracking-widest">Explore</h4>
          <ul class="space-y-4 text-sm font-medium">
            <li><a href="#" class="hover:text-cyan-400 transition-colors">New Arrivals</a></li>
            <li><a href="#" class="hover:text-cyan-400 transition-colors">Best Sellers</a></li>
            <li><a href="#" class="hover:text-cyan-400 transition-colors">Accessories</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold uppercase text-gray-500 text-xs mb-6 tracking-widest">Connect</h4>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all">IG</a>
            <a href="#" class="w-10 h-10 border border-white/20 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all">TK</a>
          </div>
        </div>
      </div>

      <div class="text-center border-t border-white/5 pt-12">
        <p class="text-[10px] text-gray-600 font-mono uppercase tracking-widest">
          Warning: This product contains nicotine. Nicotine is an addictive chemical. <br>
          © 2025 Vaapee. All rights reserved.
        </p>
      </div>
    </footer>

  </div>
</template>

<style>
/* 镂空字效果 */
.text-stroke-2 {
  -webkit-text-stroke: 2px rgba(255,255,255,0.2);
  color: transparent;
}

/* 慢速呼吸动画 */
@keyframes pulse-slow {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.05); opacity: 0.6; }
}
.animate-pulse-slow {
  animation: pulse-slow 10s ease-in-out infinite;
}

/* 跑马灯 */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 20s linear infinite;
}
</style>

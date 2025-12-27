<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 1000, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', offset: 20 })
})

const modules = [Autoplay]
const activeIndex = ref(0)

// 模拟高端画廊的数据结构
const gallery = [
  { id: 1, name: "SKATER_EDITION_V4", price: "USD 24.99", img: new URL('./img/prod-green.jpg', import.meta.url).href },
  { id: 2, name: "ASTRO_LAB_PROTO", price: "USD 24.99", img: new URL('./img/prod-orange.jpg', import.meta.url).href },
  { id: 3, name: "NEON_GLITCH_X", price: "USD 24.99", img: new URL('./img/prod-purple.jpg', import.meta.url).href },
]

const specs = [
  { label: "BATTERY CELL", value: "COBALT-900" },
  { label: "LIQUID CAPACITY", value: "18.0 ML" },
  { label: "NICOTINE", value: "5% SALT" },
  { label: "CHARGING", value: "TYPE-C FAST" },
]
</script>

<template>
  <div class="fixed inset-0 z-0 bg-[#050505] pointer-events-none">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>
  </div>

  <div class="relative z-10 min-h-screen text-white font-sans selection:bg-white selection:text-black">

    <header class="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-start">
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold tracking-tighter leading-none m-0">VAAPEE<span class="text-[10px] align-top">®</span></h1>
        <span class="text-[10px] font-mono opacity-50 tracking-widest mt-1">EST. 2025 / SHENZHEN</span>
      </div>

      <div class="hidden md:flex gap-12 text-[11px] font-bold tracking-[0.2em]">
        <a href="#" class="group relative overflow-hidden h-4 block">
          <span class="block group-hover:-translate-y-full transition-transform duration-300">PRODUCTS</span>
          <span class="block absolute top-full left-0">VIEW ALL</span>
        </a>
        <a href="#" class="group relative overflow-hidden h-4 block">
          <span class="block group-hover:-translate-y-full transition-transform duration-300">TECHNOLOGY</span>
          <span class="block absolute top-full left-0">INSIDE</span>
        </a>
        <a href="#" class="group relative overflow-hidden h-4 block">
          <span class="block group-hover:-translate-y-full transition-transform duration-300">SUPPORT</span>
          <span class="block absolute top-full left-0">CONTACT</span>
        </a>
      </div>

      <button class="w-10 h-10 border border-white/20 rounded-full flex flex-col justify-center items-center gap-1 hover:bg-white hover:border-white group transition-all">
        <span class="w-4 h-[1px] bg-white group-hover:bg-black transition-colors"></span>
        <span class="w-4 h-[1px] bg-white group-hover:bg-black transition-colors"></span>
      </button>
    </header>

    <section class="relative h-screen flex flex-col justify-between pt-32 pb-12 px-6 border-b border-white/10">
      <div class="absolute inset-0 z-0 overflow-hidden opacity-40 grayscale contrast-125">
        <video autoplay loop muted playsinline class="w-full h-full object-cover">
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/50"></div>
      </div>

      <div class="relative z-10 w-full" data-aos="fade-up">
        <div class="flex justify-between items-end border-b border-white/20 pb-4 mb-4">
          <span class="text-xs font-mono text-[#39FF14]">[ SERIES: TRIPLE 90K ]</span>
          <span class="text-xs font-mono animate-pulse">● SYSTEM ONLINE</span>
        </div>
        <h2 class="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mix-blend-overlay">
          Street <br>
          Machine.
        </h2>
      </div>

      <div class="relative z-10 grid grid-cols-12 gap-4 items-end">
        <div class="col-span-12 md:col-span-4 text-sm text-gray-400 font-medium leading-relaxed">
          Combining graffiti aesthetics with industrial precision. The Triple 90K isn't just a vape; it's a statement piece for the concrete jungle.
        </div>
        <div class="col-span-12 md:col-span-4 md:col-start-9 flex gap-4">
          <button class="flex-1 bg-white text-black py-4 font-bold uppercase text-xs tracking-widest hover:bg-[#39FF14] transition-colors">
            Shop Collection
          </button>
        </div>
      </div>
    </section>

    <section class="py-0 border-b border-white/10 overflow-hidden">
      <div class="grid md:grid-cols-2 h-[80vh]">

        <div class="p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 bg-[#080808] relative">
          <div class="absolute top-8 left-8 text-[10px] font-mono border border-white/20 px-2 py-1">FIG. 01</div>

          <h3 class="text-6xl font-black uppercase mb-8 leading-none">Object <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Viewer</span></h3>

          <div class="space-y-4 font-mono text-xs text-gray-400">
            <div v-for="(spec, i) in specs" :key="i" class="flex justify-between border-b border-white/10 pb-2">
              <span>{{ spec.label }}</span>
              <span class="text-white">{{ spec.value }}</span>
            </div>
          </div>

          <div class="mt-12">
            <p class="text-sm text-gray-500 mb-4">AVAILABLE COLORWAYS</p>
            <div class="flex gap-2">
              <div class="w-8 h-8 rounded-full border border-white/30 bg-[#39FF14]"></div>
              <div class="w-8 h-8 rounded-full border border-white/30 bg-orange-500"></div>
              <div class="w-8 h-8 rounded-full border border-white/30 bg-purple-600"></div>
            </div>
          </div>
        </div>

        <div class="relative bg-[#050505]">
          <swiper :modules="modules" :autoplay="{delay:2500, disableOnInteraction:false}" class="h-full w-full">
            <swiper-slide v-for="item in gallery" :key="item.id" class="flex items-center justify-center relative group">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)]"></div>

              <img :src="item.img" class="w-[60%] md:w-[50%] object-contain drop-shadow-2xl z-10 filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110" alt="Product">

              <div class="absolute bottom-8 w-full text-center z-20">
                <h4 class="text-2xl font-black italic uppercase">{{ item.name }}</h4>
                <p class="text-xs font-mono text-[#39FF14] mt-2">{{ item.price }}</p>
              </div>
            </swiper-slide>
          </swiper>

          <div class="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 z-0 pointer-events-none"></div>
          <div class="absolute top-0 left-1/2 h-full w-[1px] bg-white/5 z-0 pointer-events-none"></div>
        </div>

      </div>
    </section>

    <div class="border-b border-white/10 bg-[#39FF14] text-black overflow-hidden py-3">
      <div class="flex whitespace-nowrap animate-marquee">
        <span class="text-6xl font-black uppercase italic px-8">Full Power. No Compromise.</span>
        <span class="text-6xl font-black uppercase italic px-8 opacity-50">Full Power. No Compromise.</span>
        <span class="text-6xl font-black uppercase italic px-8">Full Power. No Compromise.</span>
        <span class="text-6xl font-black uppercase italic px-8 opacity-50">Full Power. No Compromise.</span>
      </div>
    </div>

    <section class="py-32 px-6 border-b border-white/10 bg-[#080808]">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-12 gap-12">

          <div class="md:col-span-7 relative group" data-aos="fade-right">
            <div class="relative overflow-hidden border border-white/10">
              <img src="./img/tech-screen.jpg" class="w-full filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" alt="Screen">
              <div class="absolute inset-0 border-[20px] border-black/10 pointer-events-none">
                <div class="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#39FF14]"></div>
                <div class="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#39FF14]"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center">
                  <div class="w-1 h-1 bg-[#39FF14]"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="md:col-span-5 flex flex-col justify-between" data-aos="fade-left">
            <div>
              <h2 class="text-5xl font-black uppercase mb-6 leading-none">Intelligence <br> Inside.</h2>
              <p class="text-gray-400 text-sm mb-8 leading-relaxed">
                We stripped away the unnecessary. What remains is a dual-mesh core powered by AI algorithms, delivering consistent flavor from the first puff to the 9000th.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
              <div class="bg-[#080808] p-6 hover:bg-[#111] transition-colors">
                <div class="text-2xl font-bold mb-1">0.001s</div>
                <div class="text-[10px] text-gray-500 uppercase">Firing Speed</div>
              </div>
              <div class="bg-[#080808] p-6 hover:bg-[#111] transition-colors">
                <div class="text-2xl font-bold mb-1">Dual</div>
                <div class="text-[10px] text-gray-500 uppercase">Mesh Core</div>
              </div>
              <div class="bg-[#080808] p-6 hover:bg-[#111] transition-colors">
                <div class="text-2xl font-bold mb-1">HD</div>
                <div class="text-[10px] text-gray-500 uppercase">Smart Screen</div>
              </div>
              <div class="bg-[#080808] p-6 hover:bg-[#111] transition-colors">
                <div class="text-2xl font-bold mb-1">Type-C</div>
                <div class="text-[10px] text-gray-500 uppercase">Fast Charge</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <footer class="bg-black py-20 px-6">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-start gap-12">

        <div class="max-w-xs">
          <h2 class="text-xl font-bold mb-6">VAAPEE®</h2>
          <div class="flex gap-4 mb-8">
            <input type="email" placeholder="EMAIL ADDRESS" class="bg-transparent border-b border-white/30 pb-2 text-xs w-full focus:outline-none focus:border-[#39FF14]">
            <button class="text-xs font-bold uppercase hover:text-[#39FF14]">Join</button>
          </div>
        </div>

        <div class="flex gap-16 text-[10px] font-bold tracking-widest uppercase text-gray-500">
          <ul class="space-y-3">
            <li class="text-white mb-2">SITEMAP</li>
            <li><a href="#" class="hover:text-white">Home</a></li>
            <li><a href="#" class="hover:text-white">Products</a></li>
            <li><a href="#" class="hover:text-white">Technology</a></li>
          </ul>
          <ul class="space-y-3">
            <li class="text-white mb-2">LEGAL</li>
            <li><a href="#" class="hover:text-white">Privacy</a></li>
            <li><a href="#" class="hover:text-white">Terms</a></li>
            <li><a href="#" class="hover:text-white">Compliance</a></li>
          </ul>
          <ul class="space-y-3">
            <li class="text-white mb-2">SOCIAL</li>
            <li><a href="#" class="hover:text-white">Instagram</a></li>
            <li><a href="#" class="hover:text-white">TikTok</a></li>
          </ul>
        </div>

      </div>

      <div class="container mx-auto mt-20 border-t border-white/10 pt-8 text-center">
        <p class="text-[10px] text-gray-600 font-mono">WARNING: THIS PRODUCT CONTAINS NICOTINE. NICOTINE IS AN ADDICTIVE CHEMICAL.</p>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* 引入无衬线字体，推荐 Inter 或 Helvetica */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;900&family=JetBrains+Mono:wght@400;700&display=swap');

.font-sans { font-family: 'Inter', sans-serif; }
.font-mono { font-family: 'JetBrains Mono', monospace; }

/* 跑马灯动画 */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 10s linear infinite;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// 状态
const activeSlide = ref(0)

// 初始化动画
onMounted(() => {
  AOS.init({ duration: 1000, easing: 'ease-out-expo', offset: 100 })
})

// 产品系列数据
const collections = [
  {
    id: 0,
    title: "SKATER BOY",
    subtitle: "Rebel Edition",
    desc: "4500 Puffs / Double Apple Ice",
    color: "text-[#ccff00]",
    img: new URL('./img/prod-green.jpg', import.meta.url).href
  },
  {
    id: 1,
    title: "ASTRO NAUT",
    subtitle: "Space Odyssey",
    desc: "Tornado 25000 / Tropical Blast",
    color: "text-[#ff4d00]",
    img: new URL('./img/prod-orange.jpg', import.meta.url).href
  },
  {
    id: 2,
    title: "NEON GALAXY",
    subtitle: "Starlight Series",
    desc: "Smart Screen / Grape Ice",
    color: "text-[#bc13fe]",
    img: new URL('./img/prod-purple.jpg', import.meta.url).href
  }
]
</script>

<template>
  <div class="fixed inset-0 z-[9999] pointer-events-none opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

  <div class="min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-[#ccff00] selection:text-black">

    <nav class="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white transition-all duration-300">
      <div class="text-3xl font-black tracking-tighter uppercase font-['Anton']">
        Vaapee<span class="text-[#ccff00]">.</span>
      </div>
      <button class="hidden md:block border border-white/30 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
        Menu
      </button>
    </nav>

    <section class="relative h-[110vh] flex flex-col items-center justify-center overflow-hidden">
      <div class="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] bg-purple-900/20 rounded-full blur-[150px] animate-blob"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#ccff00]/10 rounded-full blur-[150px] animate-blob animation-delay-2000"></div>

      <h1 class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black leading-none text-white/5 whitespace-nowrap select-none z-0 blur-sm scale-150">
        TRIPLE 90K
      </h1>

      <div class="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
        <div class="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1" data-aos="fade-up">
          <div class="flex items-center gap-3 mb-6">
            <span class="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse"></span>
            <span class="text-[#ccff00] text-xs font-bold tracking-[0.3em] uppercase">Season 04 Drop</span>
          </div>
          <h2 class="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-6 text-white mix-blend-overlay">
            Beyond <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-emerald-400">Limits.</span>
          </h2>
          <p class="text-gray-400 text-sm md:text-base max-w-md font-medium leading-relaxed mb-8 border-l-2 border-[#ccff00] pl-6">
            Cyberpunk aesthetics meet monster performance. The Triple 90K features a dual-mesh core and a smart display that puts you in control.
          </p>
          <div class="flex gap-4">
            <button class="bg-[#ccff00] text-black px-8 py-4 font-black uppercase hover:bg-white transition-colors skew-x-[-10deg]">
              <span class="skew-x-[10deg] block">Get Yours</span>
            </button>
          </div>
        </div>

        <div class="lg:col-span-7 relative h-[60vh] flex items-center justify-center order-1 lg:order-2">
          <div class="absolute w-[90%] h-[90%] border border-white/5 rounded-full animate-[spin_40s_linear_infinite]"></div>
          <div class="absolute w-[70%] h-[70%] border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
          <img src="./img/hero-device.jpg" class="relative z-20 h-[110%] object-contain drop-shadow-[0_0_50px_rgba(204,255,0,0.3)] animate-float" alt="Hero Device" />
        </div>
      </div>
    </section>

    <div class="py-4 bg-[#ccff00] text-black border-y-4 border-black overflow-hidden relative z-20 rotate-[-1deg] scale-105">
      <div class="animate-marquee whitespace-nowrap flex gap-16 text-5xl font-black italic uppercase">
        <span>Full Power • No Limits • Street Vibe • Dual Mesh • </span>
        <span>Full Power • No Limits • Street Vibe • Dual Mesh • </span>
        <span>Full Power • No Limits • Street Vibe • Dual Mesh • </span>
      </div>
    </div>

    <section class="py-32 bg-[#080808]">
      <div class="container mx-auto px-6 mb-12">
        <h3 class="text-4xl font-black uppercase text-white mb-2">Select Your <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Character</span></h3>
      </div>
      <div class="container mx-auto px-6 h-[600px] flex gap-2 md:gap-4">
        <div
            v-for="(item, index) in collections"
            :key="item.id"
            @mouseenter="activeSlide = index"
            class="relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden rounded-2xl cursor-pointer group border border-white/10"
            :class="activeSlide === index ? 'flex-[3]' : 'flex-[1] opacity-60 hover:opacity-100'"
        >
          <div class="absolute inset-0 bg-[#111]">
            <img :src="item.img" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] object-contain transition-transform duration-700 group-hover:scale-110" :alt="item.title">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
          </div>
          <div class="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end z-10">
            <h4 v-show="activeSlide !== index" class="text-xl font-bold uppercase rotate-[-90deg] mb-12 text-gray-400 whitespace-nowrap origin-left">{{ item.title }}</h4>
            <div v-show="activeSlide === index" data-aos="fade-up">
              <span :class="`${item.color} text-xs font-bold tracking-[0.3em] uppercase mb-2 block`">{{ item.subtitle }}</span>
              <h3 class="text-5xl md:text-6xl font-black uppercase italic leading-[0.9] text-white mb-4">{{ item.title }}</h3>
              <p class="text-gray-400 text-sm max-w-xs">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 bg-black relative">
      <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-auto md:h-[800px]">

        <div class="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-2xl" data-aos="fade-right">
          <img src="https://images.unsplash.com/photo-1515630278258-407f66498911?q=80&w=2000&auto=format&fit=crop" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105" alt="Lifestyle">
          <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
          <div class="absolute bottom-8 left-8">
            <h3 class="text-4xl font-black uppercase text-white mb-2">Night City <br> Walker</h3>
            <button class="text-xs font-bold bg-white text-black px-4 py-2 rounded uppercase">Read Story</button>
          </div>
        </div>

        <div class="relative group overflow-hidden rounded-2xl" data-aos="fade-down" data-aos-delay="100">
          <img src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt="Street">
          <div class="absolute top-4 right-4 bg-[#ccff00] text-black text-xs font-bold px-2 py-1 rounded">VIBE CHECK</div>
        </div>

        <div class="relative group overflow-hidden rounded-2xl" data-aos="fade-up" data-aos-delay="200">
          <img src="https://images.unsplash.com/photo-1566458784339-4976c697813a?q=80&w=1000&auto=format&fit=crop" class="w-full h-full object-cover filter contrast-125" alt="Skate">
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
            <span class="text-2xl">🛹</span>
          </div>
        </div>

      </div>
    </section>

    <section class="py-32 bg-[#050505] relative overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
          <h2 class="text-5xl md:text-6xl font-black uppercase leading-none">
            Tech <br> <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Inside.</span>
          </h2>
          <p class="text-gray-500 text-sm max-w-sm text-right mt-4 md:mt-0">
            Precision engineering meets artistic chaos. Every puff is calculated for maximum flavor density.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-blue-500/50 transition-colors group" data-aos="fade-up" data-aos-delay="0">
            <div class="h-40 mb-6 overflow-hidden rounded-lg bg-black relative">
              <img src="https://images.unsplash.com/photo-1542838686-37da4a9fd1b3?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Airflow">
            </div>
            <h3 class="text-2xl font-bold uppercase mb-2">Dual Airflow</h3>
            <p class="text-gray-400 text-xs leading-relaxed">Adjustable intake system designed for both MTL and RDL vaping styles. Precise control.</p>
          </div>

          <div class="bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-purple-500/50 transition-colors group" data-aos="fade-up" data-aos-delay="100">
            <div class="h-40 mb-6 overflow-hidden rounded-lg bg-black relative">
              <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Chipset">
            </div>
            <h3 class="text-2xl font-bold uppercase mb-2">AI Core 2.0</h3>
            <p class="text-gray-400 text-xs leading-relaxed">Instant firing speed of 0.001s with consistent power output management.</p>
          </div>

          <div class="bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-[#ccff00]/50 transition-colors group" data-aos="fade-up" data-aos-delay="200">
            <div class="h-40 mb-6 overflow-hidden rounded-lg bg-black relative">
              <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop" class="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Battery">
            </div>
            <h3 class="text-2xl font-bold uppercase mb-2">9000 Puffs</h3>
            <p class="text-gray-400 text-xs leading-relaxed">High-density cobalt battery ensures you get every single puff you paid for.</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-[#ccff00] text-black pt-24 pb-12 relative overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-multiply"></div>

      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-[15vw] font-black leading-none tracking-tighter text-center mb-12 opacity-90">
          VAAPEE.
        </h2>

        <div class="grid md:grid-cols-3 gap-12 border-t border-black/10 pt-12">
          <div>
            <h4 class="font-bold uppercase mb-4 text-xs tracking-widest">Headquarters</h4>
            <p class="text-sm font-medium opacity-70">1024 Cyber Avenue, <br>Neon District, SZ 518000</p>
          </div>
          <div>
            <h4 class="font-bold uppercase mb-4 text-xs tracking-widest">Connect</h4>
            <div class="flex flex-col gap-2 font-bold text-lg">
              <a href="#" class="hover:underline">INSTAGRAM</a>
              <a href="#" class="hover:underline">TIKTOK</a>
              <a href="#" class="hover:underline">YOUTUBE</a>
            </div>
          </div>
          <div>
            <h4 class="font-bold uppercase mb-4 text-xs tracking-widest">Newsletter</h4>
            <div class="flex border-b border-black pb-2">
              <input type="email" placeholder="YOUR EMAIL" class="bg-transparent placeholder-black/50 outline-none w-full font-bold uppercase text-sm">
              <button class="font-bold uppercase">→</button>
            </div>
          </div>
        </div>

        <div class="mt-20 p-4 bg-black text-[#ccff00] text-center font-mono text-[10px] uppercase tracking-wider rounded">
          Warning: This product contains nicotine. Nicotine is an addictive chemical.
        </div>
      </div>
    </footer>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700;900&display=swap');

.font-sans { font-family: 'Inter', sans-serif; }

/* 跑马灯 */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 15s linear infinite;
}

/* 装饰球 */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob { animation: blob 7s infinite; }
.animation-delay-2000 { animation-delay: 2s; }

/* 悬浮 */
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}
.animate-float { animation: float 6s ease-in-out infinite; }
</style>

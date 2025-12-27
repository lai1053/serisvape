<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

// 导入我们之前写的组件 (假设你已经将它们保存为独立文件)
// import HeroSection from './components/HeroSection.vue'
// import SeriesA from './components/SeriesA.vue'
// import SeriesB from './components/SeriesB.vue'
// import SeriesC from './components/SeriesC.vue'
// import Wholesale from './components/Wholesale.vue'
import HeroSection from "@/view/HeroSection.vue";
import SeriesA from "@/view/VAPANDA4N1.vue";
import SeriesB from "@/view/Performance.vue";
import TitanDe from "@/view/TitanDe.vue";
import SeriesC from "@/view/SmartGrid.vue";
import Wholesale from "@/view/Wholesale.vue";


const isAgeVerified = ref(false)
const showNavbar = ref(true)

// 1. 年龄验证逻辑
const verifyAge = () => {
  isAgeVerified.value = true
  localStorage.setItem('vapanda_verified', 'true')
  gsap.from('.app-content', { opacity: 0, duration: 1, ease: 'power2.out' })
}

onMounted(() => {
  if (localStorage.getItem('vapanda_verified') === 'true') {
    isAgeVerified.value = true
  }
})
</script>

<template>
  <div class="bg-black min-h-screen text-white font-sans selection:bg-[#39FF14] selection:text-black">

    <transition name="fade">
      <div v-if="!isAgeVerified" class="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6">
        <div class="max-w-md w-full text-center space-y-10 border border-white/10 p-12 bg-[#050505] relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-[2px] bg-[#39FF14] animate-pulse"></div>

          <h2 class="text-5xl font-black font-['Anton'] italic uppercase">VAPANDA<span class="text-[#39FF14]">.</span></h2>
          <div class="space-y-4">
            <p class="text-sm font-bold tracking-[0.3em] uppercase text-gray-500">Age Verification Required</p>
            <p class="text-xs text-gray-400 leading-relaxed uppercase">
              You must be of legal smoking age (21+) in your jurisdiction to view this site.
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <button @click="verifyAge" class="w-full py-5 bg-[#39FF14] text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
              I am 21 or Older
            </button>
            <a href="https://www.google.com" class="text-[10px] text-gray-600 uppercase tracking-widest hover:text-white transition-colors">
              Exit / I am Underage
            </a>
          </div>
        </div>
      </div>
    </transition>

    <nav v-if="isAgeVerified" class="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center transition-all">
      <div class="text-2xl font-black font-['Anton'] italic uppercase tracking-tighter cursor-pointer">
        VAPANDA<span class="text-[#39FF14]">.</span>
      </div>

      <div class="hidden md:flex gap-10">
        <a v-for="link in ['Multiverse', 'Titans', 'Smart Grid', 'Wholesale']" :key="link"
           :href="`#${link.toLowerCase().replace(' ', '-')}`"
           class="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#39FF14] transition-colors">
          {{ link }}
        </a>
      </div>

      <button class="px-6 py-2 border border-[#39FF14] text-[#39FF14] font-black uppercase text-[10px] tracking-widest hover:bg-[#39FF14] hover:text-black transition-all">
        Contact Us
      </button>
    </nav>

    <main v-if="isAgeVerified" class="app-content">

      <section id="home"><HeroSection /></section>

      <section id="multiverse"><SeriesA /></section>

      <section id="titans"><SeriesB /></section>
      <TitanDe/>
      <section id="smart-grid"><SeriesC /></section>

      <section id="wholesale"><Wholesale /></section>

    </main>

    <div v-if="isAgeVerified" class="fixed bottom-10 right-10 z-[40]">
      <div class="p-4 bg-[#39FF14] text-black font-black uppercase text-[10px] tracking-tighter cursor-pointer shadow-[0_0_30px_rgba(57,255,20,0.4)] animate-bounce">
        Wholesale Inquire
      </div>
    </div>

  </div>
</template>

<style>
/* 全局平滑滚动 */
html {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #39FF14 #000;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* 适配移动端的 Section 切换 */
section {
  min-height: 100vh;
}
</style>

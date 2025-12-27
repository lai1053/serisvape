<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const glowRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  // 1. UI 元素细腻入场
  tl.from('.ui-element', { opacity: 0, y: 10, stagger: 0.2, duration: 1 })
      .from('.main-cta', { scale: 0.9, opacity: 0, duration: 1 }, "-=0.5")
      .from('.cyber-lines', { opacity: 0, duration: 2 }, "-=1.5") // 线条慢慢浮现

  // 2. 鼠标动态光晕
  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e
    gsap.to(glowRef.value, { x: clientX - 400, y: clientY - 400, duration: 2 })
  })
})
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-between">

    <div class="absolute inset-0 z-0">
      <video autoplay loop muted playsinline class="h-full w-full object-cover saturate-150 contrast-110 brightness-90">
        <source src="/bg-video2.mp4" type="video/mp4" />
      </video>

      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>

      <div class="cyber-lines absolute inset-0 pointer-events-none z-10">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[size:100%_3px,3px_100%] mix-blend-overlay"></div>

        <div class="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent"></div>
        <div class="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#39FF14]/30 to-transparent"></div>
      </div>
    </div>

    <div ref="glowRef" class="pointer-events-none absolute h-[800px] w-[800px] rounded-full bg-[#39FF14]/5 blur-[120px] z-10 mix-blend-screen"></div>

    <div class="ui-element relative z-20 container mx-auto px-6 pt-32 flex justify-between items-start">
      <div class="space-y-2">
        <div class="text-[#39FF14] font-mono text-[10px] tracking-[0.4em] font-bold relative">
          <span class="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-[1px] bg-[#39FF14]"></span> PROJECT STREETWEAR V4.0
        </div>
        <div class="text-white font-['Anton'] italic text-3xl tracking-tighter uppercase">VAPANDA<span class="text-[#39FF14]">.</span></div>
      </div>
      <div class="hidden md:block text-right font-mono text-[9px] text-white/40 space-y-1">
        <div>SYS_LOAD: 100%</div>
        <div class="flex items-center justify-end gap-2">
          VAPOR_DENSITY: OPTIMIZED
          <div class="w-10 h-[2px] bg-white/20 relative overflow-hidden"> <div class="absolute inset-0 bg-[#39FF14] animate-progress"></div>
          </div>
        </div>
        <div class="text-[#39FF14] animate-pulse">● LIVE_FEED_ACTIVE</div>
      </div>
    </div>

    <div class="flex-grow"></div>

    <div class="relative z-20 container mx-auto px-6 pb-20">
      <div class="max-w-2xl relative">
        <div class="ui-element absolute -left-8 top-0 h-full w-[1px] bg-gradient-to-b from-[#39FF14]/50 to-transparent hidden md:block"></div>

        <p class="ui-element text-white text-lg md:text-2xl font-bold italic tracking-wider mb-8 uppercase leading-tight">
          AUTHENTIC RELEASE. <br>
          <span class="text-gray-500">RIGHT HERE, RIGHT NOW.</span>
        </p>

        <div class="main-cta flex flex-wrap gap-4">
          <button class="px-10 py-5 bg-[#39FF14] text-black font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all shadow-[0_0_40px_rgba(57,255,20,0.3)] relative overflow-hidden group">
            <span class="relative z-10">Explore Collection</span>
            <div class="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"></div>
          </button>
          <button class="px-10 py-5 border border-white/20 backdrop-blur-md text-white font-black uppercase text-xs tracking-[0.2em] hover:bg-white/10 transition-all">
            Wholesale Portal
          </button>
        </div>
      </div>
    </div>

    <div class="relative z-30 w-full py-4 bg-black border-t border-white/10 text-center">
      <p class="text-[9px] md:text-[11px] text-gray-600 font-bold tracking-[0.3em] uppercase">
        WARNING: This product contains nicotine. Nicotine is an addictive chemical.
      </p>
    </div>

  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

button {
  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
}

section {
  scrollbar-width: none;
}

/* 进度条动画 */
@keyframes progress {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
.animate-progress {
  animation: progress 2s linear infinite;
}
</style>

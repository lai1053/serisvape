<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const advantages = [
  {
    icon: '⚡',
    title: 'Premium Quality',
    desc: '1000m² dust-free manufacturing base with 100% QC inspection',
    stat: '100% QC'
  },
  {
    icon: '🌍',
    title: 'Global Shipping',
    desc: 'Fast delivery to 50+ countries with DHL, UPS, and local carriers',
    stat: '3-7 Days'
  },
  {
    icon: '🔋',
    title: 'Long Lasting',
    desc: 'Up to 100K puffs with advanced battery and coil technology',
    stat: '100K+'
  },
  {
    icon: '🛡️',
    title: 'Certified Safe',
    desc: 'CE, FCC, RoHS certified. TPD compliant for European markets',
    stat: 'Certified'
  },
  {
    icon: '💼',
    title: 'B2B Focused',
    desc: 'Dedicated wholesale support with competitive pricing and MOQ',
    stat: 'B2B Ready'
  },
  {
    icon: '🎨',
    title: 'Unique Design',
    desc: 'Streetwear-inspired aesthetics with cutting-edge technology',
    stat: 'Street Style'
  }
]

onMounted(() => {
  gsap.utils.toArray('.advantage-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: i * 0.1
    })
  })
})
</script>

<template>
  <section class="relative bg-black py-32 overflow-hidden border-t border-white/5">
    <!-- 背景网格 -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:80px_80px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-20" data-aos="fade-up">
        <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
          Why Choose Us // The Edge
        </span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
          Built Different.<br>
          <span class="text-[#39FF14]">Built Better.</span>
        </h2>
      </div>

      <!-- 优势网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div v-for="(item, i) in advantages" :key="i"
             class="advantage-card group p-8 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#39FF14]/50 transition-all relative overflow-hidden">
          
          <!-- 悬停背景效果 -->
          <div class="absolute inset-0 bg-[#39FF14]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10">
            <div class="text-5xl mb-4">{{ item.icon }}</div>
            <div class="text-[#39FF14] font-mono text-[9px] tracking-[0.3em] mb-2 uppercase">{{ item.stat }}</div>
            <h3 class="text-2xl font-black font-['Anton'] italic text-white uppercase mb-4">{{ item.title }}</h3>
            <p class="text-gray-400 text-xs leading-relaxed tracking-wider uppercase">
              {{ item.desc }}
            </p>
          </div>

          <!-- 装饰线 -->
          <div class="absolute bottom-0 left-0 w-0 h-[2px] bg-[#39FF14] group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>

      <!-- 数据展示 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-20">
        <div v-for="stat in [
          { label: 'Countries', value: '50+', color: '#39FF14' },
          { label: 'Products', value: '100+', color: '#FF00FF' },
          { label: 'Puffs Max', value: '100K', color: '#00FFFF' },
          { label: 'Years', value: '10+', color: '#39FF14' }
        ]" :key="stat.label" class="text-center">
          <div class="text-5xl md:text-6xl font-black font-['Anton'] italic mb-2 transition-colors"
               :style="{ color: stat.color }">{{ stat.value }}</div>
          <div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>





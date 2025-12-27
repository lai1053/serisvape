<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  { year: '2015', title: 'Founded', desc: 'Started with a vision to revolutionize vaping experience' },
  { year: '2018', title: 'First Breakthrough', desc: 'Launched our first high-capacity device series' },
  { year: '2020', title: 'Global Expansion', desc: 'Expanded to 50+ countries worldwide' },
  { year: '2024', title: 'Innovation Leader', desc: 'Leading the industry with 100K+ puff technology' }
]

onMounted(() => {
  gsap.utils.toArray('.milestone-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.1
    })
  })
})
</script>

<template>
  <section class="relative bg-black py-32 overflow-hidden border-t border-white/5">
    <!-- 背景网格 -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:100px_100px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 标题区域 -->
      <div class="text-center mb-20" data-aos="fade-up">
        <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
          Our Story // Since 2015
        </span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
          Full Power.<br>
          <span class="text-[#39FF14]">Full Fun.</span>
        </h2>
        <p class="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wider uppercase">
          Born from the streets, built for the future. We're not just making devices, we're crafting experiences that push boundaries.
        </p>
      </div>

      <!-- 品牌理念卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <div class="milestone-item p-8 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#39FF14]/50 transition-all group">
          <div class="text-[#39FF14] text-5xl font-black font-['Anton'] mb-4">01</div>
          <h3 class="text-2xl font-black font-['Anton'] italic text-white uppercase mb-4">Innovation</h3>
          <p class="text-gray-400 text-xs leading-relaxed tracking-wider uppercase">
            Cutting-edge technology meets street culture. Every device is engineered for maximum performance.
          </p>
        </div>

        <div class="milestone-item p-8 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#39FF14]/50 transition-all group">
          <div class="text-[#39FF14] text-5xl font-black font-['Anton'] mb-4">02</div>
          <h3 class="text-2xl font-black font-['Anton'] italic text-white uppercase mb-4">Quality</h3>
          <p class="text-gray-400 text-xs leading-relaxed tracking-wider uppercase">
            1000m² dust-free manufacturing base. Every product undergoes rigorous quality control.
          </p>
        </div>

        <div class="milestone-item p-8 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#39FF14]/50 transition-all group">
          <div class="text-[#39FF14] text-5xl font-black font-['Anton'] mb-4">03</div>
          <h3 class="text-2xl font-black font-['Anton'] italic text-white uppercase mb-4">Community</h3>
          <p class="text-gray-400 text-xs leading-relaxed tracking-wider uppercase">
            Built by vapers, for vapers. We listen, we evolve, we deliver what the community demands.
          </p>
        </div>
      </div>

      <!-- 时间线 -->
      <div class="relative">
        <div class="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-[#39FF14]/20 hidden md:block"></div>
        
        <div v-for="(milestone, i) in milestones" :key="i" 
             class="milestone-item relative mb-16 md:mb-24 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div :class="i % 2 === 0 ? 'md:text-right md:pr-8 md:w-1/2' : 'md:ml-auto md:pl-8 md:w-1/2'"
               class="w-full md:w-1/2">
            <div class="text-[#39FF14] font-mono text-[10px] tracking-[0.5em] mb-2 uppercase">{{ milestone.year }}</div>
            <h3 class="text-3xl font-black font-['Anton'] italic text-white uppercase mb-2">{{ milestone.title }}</h3>
            <p class="text-gray-400 text-xs leading-relaxed tracking-wider uppercase">{{ milestone.desc }}</p>
          </div>
          
          <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#39FF14] rounded-full border-4 border-black z-10 hidden md:block"></div>
          
          <div :class="i % 2 === 0 ? 'md:ml-auto md:pl-8 md:w-1/2' : 'md:text-right md:pr-8 md:w-1/2'"
               class="w-full md:w-1/2 hidden md:block"></div>
        </div>
      </div>

      <!-- 工厂信息 -->
      <div class="mt-32 mb-20">
        <div class="text-center mb-16">
          <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
            Built By Serisvape // Since 2015
          </span>
          <h2 class="text-5xl md:text-7xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
            BUILT BY <span class="text-[#39FF14]">SERISVAPE.</span>
          </h2>
          <p class="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed tracking-wider uppercase mt-6">
            Founded in 2015, Shenzhen. From OEM giants to brand innovators.
          </p>
        </div>

        <!-- 工厂数据 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="milestone-item p-8 border border-white/10 bg-white/5 backdrop-blur-xl text-center">
            <div class="text-5xl font-black font-['Anton'] text-[#39FF14] mb-4">1000+</div>
            <div class="text-sm font-black uppercase tracking-widest text-white mb-2">SQM Facility</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider">Dust-free Manufacturing</div>
          </div>
          
          <div class="milestone-item p-8 border border-white/10 bg-white/5 backdrop-blur-xl text-center">
            <div class="text-5xl font-black font-['Anton'] text-[#39FF14] mb-4">TPD</div>
            <div class="text-sm font-black uppercase tracking-widest text-white mb-2">FDA, CE, RoHS</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider">Certified</div>
          </div>
          
          <div class="milestone-item p-8 border border-white/10 bg-white/5 backdrop-blur-xl text-center">
            <div class="text-5xl font-black font-['Anton'] text-[#39FF14] mb-4">10+</div>
            <div class="text-sm font-black uppercase tracking-widest text-white mb-2">Years R&D</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider">Innovation Leader</div>
          </div>
        </div>
      </div>

      <!-- CTA 区域 -->
      <div class="mt-32 text-center">
        <p class="text-gray-400 text-sm mb-8 tracking-widest uppercase">Ready to join the movement?</p>
        <button @click="window.scrollTo({ top: document.querySelector('#multiverse')?.offsetTop - 80, behavior: 'smooth' })" class="px-12 py-5 bg-[#39FF14] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-[0_0_40px_rgba(57,255,20,0.3)]">
          Explore Our Products
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>


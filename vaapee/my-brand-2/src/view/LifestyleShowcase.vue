<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lifestyleScenes = [
  {
    title: 'Night Life',
    subtitle: 'Where the city never sleeps',
    desc: 'From rooftop parties to underground clubs, VAPANDA keeps the energy flowing all night long.',
    mood: 'vibrant',
    color: '#FF00FF'
  },
  {
    title: 'Daily Commute',
    subtitle: 'Your perfect travel companion',
    desc: 'Compact, powerful, and reliable. Perfect for those who demand excellence on the go.',
    mood: 'professional',
    color: '#39FF14'
  },
  {
    title: 'Creative Sessions',
    subtitle: 'Fuel your inspiration',
    desc: 'When creativity strikes, you need a device that matches your intensity. Full power, full focus.',
    mood: 'artistic',
    color: '#00FFFF'
  }
]

const activeScene = ref(0)

onMounted(() => {
  gsap.utils.toArray('.scene-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      delay: i * 0.2
    })
  })
})
</script>

<template>
  <section class="relative bg-[#050505] py-32 overflow-hidden border-t border-white/5">
    <!-- 背景效果 -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute top-0 left-0 w-96 h-96 bg-[#39FF14] rounded-full blur-[120px]"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-[#FF00FF] rounded-full blur-[120px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-20" data-aos="fade-up">
        <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
          Lifestyle // Your World
        </span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
          Live It.<br>
          <span class="text-[#39FF14]">Vape It.</span>
        </h2>
      </div>

      <!-- 场景展示 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div v-for="(scene, i) in lifestyleScenes" :key="i"
             @mouseenter="activeScene = i"
             class="scene-card group relative h-[500px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden cursor-pointer transition-all hover:border-[#39FF14]/50 hover:scale-105">
          
          <!-- 背景渐变 -->
          <div class="absolute inset-0 opacity-20 transition-opacity duration-500"
               :style="{ background: `linear-gradient(135deg, ${scene.color}20, transparent)` }"></div>
          
          <!-- 内容 -->
          <div class="relative z-10 h-full flex flex-col justify-between p-8">
            <div>
              <div class="text-[10px] font-mono tracking-[0.5em] mb-4 uppercase"
                   :style="{ color: scene.color }">{{ scene.subtitle }}</div>
              <h3 class="text-4xl font-black font-['Anton'] italic text-white uppercase mb-4 leading-none">
                {{ scene.title }}
              </h3>
              <p class="text-gray-400 text-xs leading-relaxed tracking-wider uppercase">
                {{ scene.desc }}
              </p>
            </div>
            
            <div class="flex items-center gap-4">
              <div class="w-12 h-[2px]" :style="{ backgroundColor: scene.color }"></div>
              <span class="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Explore</span>
            </div>
          </div>

          <!-- 悬停效果 -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
               :style="{ background: `radial-gradient(circle at center, ${scene.color}10, transparent 70%)` }"></div>
        </div>
      </div>

      <!-- 使用场景网格 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="i in 8" :key="i"
             class="aspect-square border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden group hover:border-[#39FF14]/50 transition-all cursor-pointer">
          <!-- 这里可以放置实际的生活场景图片 -->
          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-white/10 to-transparent group-hover:from-[#39FF14]/20 transition-all">
            <span class="text-[8px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-[#39FF14] transition-colors">
              Scene {{ i }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>





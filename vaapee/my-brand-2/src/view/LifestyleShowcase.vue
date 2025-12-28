<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { t, tm } = useI18n()

const lifestyleScenes = computed(() => tm('lifestyle.scenes'))

const activeScene = ref(0)
const lifestyleImages = [
  '/life/img.png',
  '/life/img_1.png',
  '/life/img_3.png',
  '/life/img_4.png',
  '/life/img_5.png',
  '/life/img_6.png',
  '/life/img_7.png',
  '/life/img_8.png'
]

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
          {{ t('lifestyle.badge') }}
        </span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
          {{ t('lifestyle.titleLine1') }}<br>
          <span class="text-[#39FF14]">{{ t('lifestyle.titleLine2') }}</span>
        </h2>
      </div>

      <!-- 品牌宣言 -->
      <div class="w-full text-center py-16 px-6 mb-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
           style="background: radial-gradient(circle at center, rgba(57, 255, 20, 0.05) 0%, transparent 70%);">
        <h3 class="text-[#39FF14] font-extrabold text-4xl md:text-5xl tracking-[1px] uppercase"
            style="text-shadow: 0 0 10px rgba(57, 255, 20, 0.4);">
          REDEFINING THE PULSE OF EVERY MOMENT.
        </h3>
        <p class="text-[#E0E0E0] text-base md:text-lg leading-relaxed max-w-[800px] mx-auto mt-6">
          More than just performance—it’s an extension of your lifestyle. Seamlessly elevating your journey from the daily hustle to the creative flow, and into the night.
        </p>
      </div>

      <!-- 使用场景网格 -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div v-for="(image, i) in lifestyleImages" :key="image"
             class="aspect-square border border-white/10 overflow-hidden group hover:border-[#39FF14]/50 transition-all">
          <img
            :src="image"
            :alt="t('lifestyle.sceneLabel', { index: i + 1 })"
            class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>



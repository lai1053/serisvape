<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const { t, tm } = useI18n()
const faqs = computed(() => tm('faq.items'))

const openIndex = ref(null)

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

onMounted(() => {
  gsap.from('.faq-item', {
    scrollTrigger: {
      trigger: '.faq-section',
      start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.1
  })
})
</script>

<template>
  <section class="faq-section relative bg-black py-32 overflow-hidden border-t border-white/5">
    <!-- 背景网格 -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:100px_100px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-20" data-aos="fade-up">
        <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
          {{ t('faq.badge') }}
        </span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
          {{ t('faq.titleLine1') }}<br>
          <span class="text-[#39FF14]">{{ t('faq.titleLine2') }}</span>
        </h2>
      </div>

      <!-- FAQ 列表 -->
      <div class="max-w-4xl mx-auto space-y-4">
        <div v-for="(faq, i) in faqs" :key="i"
             class="faq-item border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all hover:border-[#39FF14]/30">
          <button
            @click="toggleFAQ(i)"
            class="w-full p-6 text-left flex justify-between items-center group"
          >
            <span class="text-white font-black font-['Anton'] italic uppercase text-sm md:text-base pr-8">
              {{ faq.question }}
            </span>
            <div class="flex-shrink-0 w-6 h-6 flex items-center justify-center">
              <div class="w-[2px] h-4 bg-[#39FF14] transition-transform duration-300"
                   :class="openIndex === i ? 'rotate-90' : ''"></div>
              <div class="w-4 h-[2px] bg-[#39FF14] absolute"></div>
            </div>
          </button>
          
          <div class="overflow-hidden transition-all duration-500"
               :style="{ maxHeight: openIndex === i ? '200px' : '0' }">
            <div class="px-6 pb-6 text-gray-400 text-xs md:text-sm leading-relaxed tracking-wider uppercase">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-20">
        <p class="text-gray-400 text-sm mb-6 tracking-widest uppercase">{{ t('faq.ctaPrompt') }}</p>
        <button class="px-12 py-5 border border-[#39FF14] text-[#39FF14] font-black uppercase text-xs tracking-widest hover:bg-[#39FF14] hover:text-black transition-all">
          {{ t('faq.ctaButton') }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import enMessages from '@/i18n/locales/en.json'
import gsap from 'gsap'

const { t, tm } = useI18n()
const testimonialsAll = computed(() => {
  const items = tm('testimonials.items')
  if (Array.isArray(items)) {
    return items
  }
  return Array.isArray(enMessages?.testimonials?.items) ? enMessages.testimonials.items : []
})

const pageIndex = ref(0)
const cardsPerPage = ref(1)
const autoplayDelay = 5000
let autoplayTimer = null

const totalPages = computed(() => {
  const total = Math.ceil(testimonialsAll.value.length / cardsPerPage.value)
  return total > 0 ? total : 1
})

const visibleTestimonials = computed(() => {
  const start = pageIndex.value * cardsPerPage.value
  return testimonialsAll.value.slice(start, start + cardsPerPage.value)
})

const updateCardsPerPage = () => {
  const width = window.innerWidth
  if (width >= 1024) {
    cardsPerPage.value = 6
  } else if (width >= 768) {
    cardsPerPage.value = 4
  } else {
    cardsPerPage.value = 1
  }
  if (pageIndex.value > totalPages.value - 1) {
    pageIndex.value = 0
  }
}

const goToPage = (index) => {
  pageIndex.value = index
}

const nextPage = () => {
  pageIndex.value = (pageIndex.value + 1) % totalPages.value
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = setInterval(nextPage, autoplayDelay)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

onMounted(() => {
  updateCardsPerPage()
  window.addEventListener('resize', updateCardsPerPage)
  startAutoplay()

  gsap.from('.testimonial-card', {
    scrollTrigger: {
      trigger: '.testimonials-section',
      start: 'top 80%'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  })
})

onUnmounted(() => {
  stopAutoplay()
  window.removeEventListener('resize', updateCardsPerPage)
})
</script>

<template>
  <section class="testimonials-section relative bg-[#050505] py-32 overflow-hidden border-t border-white/5">
    <!-- 背景效果 -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="absolute top-1/4 left-0 w-96 h-96 bg-[#39FF14] rounded-full blur-[120px]"></div>
      <div class="absolute bottom-1/4 right-0 w-96 h-96 bg-[#FF00FF] rounded-full blur-[120px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-20" data-aos="fade-up">
        <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
          {{ t('testimonials.badge') }}
        </span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
          {{ t('testimonials.titleLine1') }}<br>
          <span class="text-[#39FF14]">{{ t('testimonials.titleLine2') }}</span>
        </h2>
      </div>

      <!-- 评价轮播 -->
      <div class="max-w-6xl mx-auto" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
        <transition name="fade-slide" mode="out-in">
          <div
            :key="pageIndex"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-8"
          >
            <div
              v-for="testimonial in visibleTestimonials"
              :key="testimonial.name"
              class="testimonial-card h-full p-8 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#39FF14]/50 transition-all"
            >
              <div class="flex gap-1 mb-6">
                <span v-for="n in testimonial.rating" :key="n" class="text-[#39FF14] text-xl">★</span>
              </div>

              <p class="text-gray-300 text-sm leading-relaxed mb-8 italic">
                "{{ testimonial.content }}"
              </p>

              <div class="mb-6">
                <span class="text-[8px] font-bold text-[#39FF14] border border-[#39FF14] px-2 py-1 uppercase tracking-widest">
                  {{ testimonial.product }}
                </span>
              </div>

              <div class="border-t border-white/10 pt-6">
                <div class="text-white font-black font-['Anton'] italic uppercase text-sm mb-1">
                  {{ testimonial.name }}
                </div>
                <div class="text-gray-500 text-[10px] uppercase tracking-widest">
                  {{ testimonial.role }}
                </div>
              </div>
            </div>
          </div>
        </transition>

        <div class="flex items-center justify-center gap-3 mt-10">
          <button
            v-for="index in totalPages"
            :key="index"
            @click="goToPage(index - 1)"
            class="h-2.5 rounded-full transition-all"
            :class="pageIndex === index - 1 ? 'w-10 bg-[#39FF14]' : 'w-2.5 bg-white/30 hover:bg-white/60'"
            :aria-label="`Go to page ${index}`"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>

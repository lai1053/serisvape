<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Autoplay, Pagination]

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Retail Store Owner, NYC',
    content: 'VAPANDA products fly off the shelves. The quality is unmatched and customers keep coming back. Best wholesale partner we\'ve worked with.',
    rating: 5,
    product: 'STAR 100K Series'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Distributor, Madrid',
    content: 'Fast shipping, excellent quality control, and the devices last longer than competitors. Our sales have increased 40% since switching to VAPANDA.',
    rating: 5,
    product: 'Tornado 18K Series'
  },
  {
    name: 'James Wilson',
    role: 'Online Shop Owner, London',
    content: 'The 4-in-1 technology is a game changer. Customers love the variety and the long-lasting battery. Zero complaints in 6 months.',
    rating: 5,
    product: '4 IN 1 120K'
  },
  {
    name: 'Sarah Kim',
    role: 'Chain Store Manager, Seoul',
    content: 'Professional service, reliable products, and great pricing. The B2B support team is always responsive. Highly recommended.',
    rating: 5,
    product: 'Ultra 50K Series'
  }
]

const currentIndex = ref(0)

onMounted(() => {
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
          Testimonials // Real Voices
        </span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
          Trusted By<br>
          <span class="text-[#39FF14]">Thousands.</span>
        </h2>
      </div>

      <!-- 评价轮播 -->
      <div class="max-w-5xl mx-auto">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="30"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :pagination="{ clickable: true, bulletClass: 'swiper-pagination-bullet-custom' }"
          :breakpoints="{
            768: { slidesPerView: 2 }
          }"
          class="testimonial-swiper"
        >
          <SwiperSlide v-for="(testimonial, i) in testimonials" :key="i">
            <div class="testimonial-card h-full p-8 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#39FF14]/50 transition-all">
              <!-- 评分 -->
              <div class="flex gap-1 mb-6">
                <span v-for="n in testimonial.rating" :key="n" class="text-[#39FF14] text-xl">★</span>
              </div>

              <!-- 内容 -->
              <p class="text-gray-300 text-sm leading-relaxed mb-8 italic">
                "{{ testimonial.content }}"
              </p>

              <!-- 产品标签 -->
              <div class="mb-6">
                <span class="text-[8px] font-bold text-[#39FF14] border border-[#39FF14] px-2 py-1 uppercase tracking-widest">
                  {{ testimonial.product }}
                </span>
              </div>

              <!-- 作者信息 -->
              <div class="border-t border-white/10 pt-6">
                <div class="text-white font-black font-['Anton'] italic uppercase text-sm mb-1">
                  {{ testimonial.name }}
                </div>
                <div class="text-gray-500 text-[10px] uppercase tracking-widest">
                  {{ testimonial.role }}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

:deep(.swiper-pagination) {
  position: relative;
  margin-top: 3rem;
}

:deep(.swiper-pagination-bullet-custom) {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.3);
  opacity: 1;
  margin: 0 4px;
  transition: all 0.3s;
}

:deep(.swiper-pagination-bullet-custom-active) {
  background: #39FF14;
  width: 24px;
  border-radius: 6px;
}
</style>





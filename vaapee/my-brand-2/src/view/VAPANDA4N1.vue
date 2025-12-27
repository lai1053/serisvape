<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import { product4n1 } from '@/data/products4n1'

const modules = [Navigation, Pagination, EffectFade]
const router = useRouter()

const activeIndex = ref(0)
const swiperInstance = ref(null)

const viewDetails = () => {
  router.push(`/product/${product4n1.id}`)
}

const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
}

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

// 点击进度条切换
const goToSlide = (index) => {
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(index)
  }
}

// 手动切换slide
const slidePrev = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}

const slideNext = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}

// 获取当前产品的颜色
const currentColor = computed(() => {
  return product4n1.flavors[activeIndex.value]?.color || product4n1.color
})
</script>

<template>
  <section class="relative bg-black py-32 overflow-hidden">
    <!-- 背景网格 -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:100px_100px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-16" data-aos="fade-up">
        <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
          Series A // The Multiverse
        </span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
          {{ product4n1.name }}<br>
          <span class="text-[#39FF14]">{{ product4n1.slogan }}</span>
        </h2>
        <p class="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed tracking-wider uppercase">
          Experience 4 flavors in one device. Switch between flavors with a simple click.
        </p>
      </div>

      <!-- Swiper 滑动展示 -->
      <div class="relative max-w-6xl mx-auto">
        <Swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          :navigation="false"
          :pagination="false"
          :effect="'fade'"
          :fade-effect="{ crossFade: true }"
          :loop="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          @slideChange="onSlideChange"
          @swiper="onSwiper"
          class="product-swiper"
        >
          <SwiperSlide v-for="(flavor, index) in product4n1.flavors" :key="index">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12 py-12">
              <!-- 左侧：产品图片 -->
              <div class="w-full lg:w-1/2 relative">
                <div class="relative bg-white/5 border border-white/10 backdrop-blur-xl px-8 py-[25px] rounded-lg">
                  <!-- 背景光效 -->
                  <div class="absolute inset-0 blur-[60px] opacity-20 transition-colors duration-1000"
                       :style="{ background: flavor.color || product4n1.color }"></div>
                  
                  <!-- 产品图片 -->
                  <img
                    :src="`${product4n1.basePath}/single_product/${flavor.file}`"
                    :alt="flavor.name"
                    class="relative z-10 w-full h-auto object-contain scale-[0.85]"
                    @error="console.error('Image not found:', `${product4n1.basePath}/single_product/${flavor.file}`)"
                  />
                  
                  <!-- 120K 标识 -->
                  <div class="absolute top-4 right-4 font-black font-['Anton'] italic text-4xl opacity-20 transition-colors duration-1000 z-20"
                       :style="{ color: flavor.color || product4n1.color }">
                    120K
                  </div>

                  <!-- 左右切换按钮 - 绝对定位在图片容器内 -->
                  <button 
                    @click="slidePrev"
                    class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/70 backdrop-blur-md border-2 transition-all flex items-center justify-center group hover:scale-110 hover:bg-black/90 cursor-pointer"
                    :style="{ borderColor: currentColor }"
                  >
                    <svg class="w-5 h-5 md:w-7 md:h-7 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" :style="{ color: currentColor }">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button 
                    @click="slideNext"
                    class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/70 backdrop-blur-md border-2 transition-all flex items-center justify-center group hover:scale-110 hover:bg-black/90 cursor-pointer"
                    :style="{ borderColor: currentColor }"
                  >
                    <svg class="w-5 h-5 md:w-7 md:h-7 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" :style="{ color: currentColor }">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
            </div>

              <!-- 右侧：产品信息 -->
              <div class="w-full lg:w-1/2 space-y-8">
                <div>
                  <span class="font-mono text-[10px] tracking-[0.5em] font-bold mb-4 block uppercase transition-colors duration-1000"
                        :style="{ color: flavor.color || product4n1.color }">
                    SKU_PROFILE_0{{ index + 1 }}
                  </span>
                  <h3 class="text-4xl md:text-6xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
                    {{ flavor.name.split(' + ')[0] }}<br>
                    <span class="transition-colors duration-1000" :style="{ color: flavor.color || product4n1.color }">
                      + {{ flavor.name.split(' + ')[1] }}
                    </span>
                  </h3>
                  
                  <!-- 4个口味标签 -->
                  <div class="grid grid-cols-2 gap-3 mt-6">
                    <div v-for="(flav, idx) in flavor.flavors" :key="idx"
                         class="p-3 bg-white/5 border border-white/10 text-center transition-all hover:border-opacity-50"
                         :style="{ borderColor: flavor.color ? `${flavor.color}40` : 'rgba(255,255,255,0.1)' }">
                      <div class="text-[10px] font-black uppercase tracking-wider text-white">
                        {{ flav }}
          </div>
        </div>
      </div>
    </div>

                <!-- 技术参数 -->
                <div class="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  <div v-for="(value, key) in product4n1.specs" :key="key" class="space-y-1">
                    <div class="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
                      {{ key.replace(/([A-Z])/g, ' $1').trim() }}
                    </div>
                    <div class="text-2xl font-['Anton'] italic text-white transition-colors duration-1000" 
                         :style="{ color: flavor.color || product4n1.color }">
                      {{ value }}
                    </div>
                  </div>
        </div>

                <!-- CTA 按钮 -->
                <div class="flex gap-4 pt-6">
                  <button @click="viewDetails" class="flex-1 px-8 py-5 bg-[#39FF14] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-[0_0_40px_rgba(57,255,20,0.3)]">
                    View Details
                  </button>
                  <button class="px-8 py-5 border border-white/20 text-white font-black uppercase text-xs tracking-widest hover:bg-white/10 transition-all">
                    Wholesale
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>

      <!-- 进度指示器 - 可点击 -->
      <div class="flex justify-center gap-2 mt-8">
        <button 
          v-for="(flavor, index) in product4n1.flavors" 
          :key="index"
          @click="goToSlide(index)"
          :class="activeIndex === index ? 'w-8' : 'w-2 bg-white/20'"
          :style="activeIndex === index ? { backgroundColor: flavor.color || product4n1.color } : {}"
          class="h-2 rounded-full transition-all duration-300 cursor-pointer hover:opacity-80"
          :title="flavor.name"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

/* 隐藏默认的 Swiper 导航按钮 */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  display: none;
}

/* 自定义导航按钮样式 */
.swiper-button-prev-custom,
.swiper-button-next-custom {
  position: absolute;
  z-index: 20;
}

/* 确保按钮在所有slide上都能显示 */
:deep(.swiper-slide) {
  position: relative;
}
</style>

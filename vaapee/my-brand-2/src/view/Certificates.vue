<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const { t, tm } = useI18n()

// 证书分类数据 - 按照新的顺序整理
const certificateCategories = computed(() => tm('certificates.categories'))

const selectedImage = ref(null)
const showModal = ref(false)

const openImageModal = (certPath, certFile) => {
  selectedImage.value = `/certificates/${certPath}/${certFile}`
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeImageModal = () => {
  showModal.value = false
  selectedImage.value = null
  document.body.style.overflow = ''
}

const videoRef = ref(null)

onMounted(() => {
  // 滚动到页面顶部
  window.scrollTo({ top: 0, behavior: 'instant' })

  // 证书卡片动画
  gsap.utils.toArray('.certificate-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      delay: i * 0.1
    })
  })

  // 类别标题动画
  gsap.utils.toArray('.category-section').forEach((section, i) => {
    gsap.from(section.querySelector('h2'), {
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: -50,
      duration: 0.8,
      delay: i * 0.2
    })
  })
})

// 滚动到指定分类区域
const scrollToCategory = (categoryId) => {
  const element = document.getElementById(categoryId)
  if (element) {
    const offset = 100
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}

</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden border-b border-white/10">
      <!-- 背景椭圆形径向渐变光效 -->
      <div class="absolute inset-0 opacity-100 pointer-events-none" style="background: radial-gradient(ellipse at top, rgba(57, 255, 20, 0.1) 0%, transparent 70%);"></div>
      
      <!-- 网格背景 -->
      <div class="absolute inset-0 opacity-5 pointer-events-none z-0">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <!-- 背景装饰性水印 -->
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div class="watermark-text font-black font-['Anton'] italic uppercase" style="font-size: 15vw; color: transparent; -webkit-text-stroke: 1px rgba(255,255,255,0.03); white-space: nowrap; user-select: none;">
          {{ t('certificates.watermark') }}
        </div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex items-center gap-4 mb-8">
          <button @click="router.back()" class="text-[#39FF14] hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span class="text-gray-500 text-xs uppercase tracking-widest">{{ t('certificates.back') }}</span>
        </div>

        <div class="text-center max-w-5xl mx-auto">
          <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
            {{ t('certificates.badge') }}
          </span>
          <h1 class="hero-title text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6" style="letter-spacing: -2px;">
            {{ t('certificates.titleLine1') }}<br>
            <span class="text-[#39FF14]">{{ t('certificates.titleLine2') }}</span>
          </h1>

          <!-- 描述文案 -->
          <div class="mb-10 space-y-4">
            <p class="text-white text-lg md:text-xl font-bold max-w-3xl mx-auto leading-relaxed">
              {{ t('certificates.lead') }}
            </p>
            <p class="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
              {{ t('certificates.sublead') }}
            </p>
          </div>

          <!-- 品牌实力数据行 -->
          <div class="trust-stats-row flex flex-wrap justify-center items-center mt-12 mb-8" style="gap: 60px;">
            <div class="stat-item text-center">
              <div class="text-5xl md:text-6xl font-black font-['Anton'] text-[#39FF14] mb-2">{{ t('certificates.stats.isoValue') }}</div>
              <div class="text-xs md:text-sm text-white uppercase" style="letter-spacing: 3px;">{{ t('certificates.stats.isoLabel') }}</div>
            </div>
            <div class="stat-item text-center">
              <div class="text-5xl md:text-6xl font-black font-['Anton'] text-[#39FF14] mb-2">{{ t('certificates.stats.patentValue') }}</div>
              <div class="text-xs md:text-sm text-white uppercase" style="letter-spacing: 3px;">{{ t('certificates.stats.patentLabel') }}</div>
            </div>
            <div class="stat-item text-center">
              <div class="text-5xl md:text-6xl font-black font-['Anton'] text-[#39FF14] mb-2">{{ t('certificates.stats.platformValue') }}</div>
              <div class="text-xs md:text-sm text-white uppercase" style="letter-spacing: 3px;">{{ t('certificates.stats.platformLabel') }}</div>
            </div>
          </div>

          <!-- 快速跳转导航 -->
          <div class="category-quick-links flex flex-wrap justify-center items-center gap-4 mt-10">
            <button 
              @click="scrollToCategory('category-management')"
              class="capsule-btn px-6 py-3 border border-[#39FF14] bg-transparent text-[#39FF14] font-black uppercase text-xs tracking-widest hover:bg-[#39FF14] hover:text-black transition-all"
            >
              {{ t('certificates.quickLinks.management') }}
            </button>
            <button 
              @click="scrollToCategory('category-patents')"
              class="capsule-btn px-6 py-3 border border-[#39FF14] bg-transparent text-[#39FF14] font-black uppercase text-xs tracking-widest hover:bg-[#39FF14] hover:text-black transition-all"
            >
              {{ t('certificates.quickLinks.patents') }}
            </button>
            <button 
              @click="scrollToCategory('category-platform')"
              class="capsule-btn px-6 py-3 border border-[#39FF14] bg-transparent text-[#39FF14] font-black uppercase text-xs tracking-widest hover:bg-[#39FF14] hover:text-black transition-all"
            >
              {{ t('certificates.quickLinks.platform') }}
            </button>
          </div>

          <!-- 视频展示 -->
          <div class="video-container mt-16 mb-8 max-w-5xl mx-auto">
            <video
              ref="videoRef"
              src="/Corporate_Montage_Video_Generation.mp4"
              autoplay
              loop
              muted
              playsinline
              class="w-full h-auto rounded-lg shadow-2xl"
            ></video>
          </div>
        </div>
      </div>
    </section>

    <!-- 证书分类展示 -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div v-for="(category, categoryIndex) in certificateCategories" :key="categoryIndex" 
             :id="category.id"
             class="category-section mb-32 last:mb-0">
          <!-- 类别标题 -->
          <div class="text-center mb-16">
            <h2 class="text-5xl md:text-6xl font-black font-['Anton'] italic text-white uppercase mb-4">
              {{ category.title }}
            </h2>
            <p class="text-[#39FF14] text-sm uppercase tracking-widest">
              {{ category.subtitle }}
            </p>
          </div>

          <!-- 证书网格 -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div v-for="cert in category.certificates" :key="cert.id"
                 @click="openImageModal(category.path, cert.file)"
                 class="certificate-card cursor-pointer group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-lg overflow-hidden hover:border-[#39FF14]/50 transition-all hover:scale-105">
              <div class="aspect-[4/3] bg-white/5 overflow-hidden">
                <img
                  :src="`/certificates/${category.path}/${cert.file}`"
                  :alt="cert.name"
                  class="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div class="p-6 border-t border-white/10">
                <div class="text-sm font-black uppercase tracking-wider text-white">
                  {{ cert.name }}
                </div>
                <div class="mt-2 text-xs text-gray-400 uppercase tracking-widest">
                  {{ t('certificates.clickToView') }}
                </div>
              </div>
              <!-- 悬停遮罩 -->
              <div class="absolute inset-0 bg-[#39FF14]/0 group-hover:bg-[#39FF14]/5 transition-colors duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 图片查看模态框 -->
    <div v-if="showModal" 
         @click="closeImageModal"
         class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
         style="backdrop-filter: blur(10px);">
      <button @click.stop="closeImageModal" 
              class="absolute top-6 right-6 text-white hover:text-[#39FF14] transition-colors z-10">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div @click.stop class="max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
        <img
          :src="selectedImage"
          :alt="t('certificates.imageAlt')"
          class="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

/* 标题霓虹发光效果 */
.hero-title {
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.5), 0 0 20px rgba(57, 255, 20, 0.2);
}

.hero-title span {
  text-shadow: 0 0 10px rgba(57, 255, 20, 0.6), 0 0 20px rgba(57, 255, 20, 0.3);
}

/* 胶囊按钮样式优化 */
.capsule-btn {
  border-radius: 50px;
  transition: all 0.3s ease;
}

/* 核心数据展示层响应式调整 */
@media (max-width: 768px) {
  .trust-stats-row {
    gap: 40px !important;
  }
  
  .stat-item {
    min-width: 120px;
  }
  
  .watermark-text {
    font-size: 12vw !important;
  }
}
</style>

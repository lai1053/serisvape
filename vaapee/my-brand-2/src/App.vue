<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import gsap from 'gsap'

// 导入我们之前写的组件 (假设你已经将它们保存为独立文件)
// import HeroSection from './components/HeroSection.vue'
// import SeriesA from './components/SeriesA.vue'
// import SeriesB from './components/SeriesB.vue'
// import SeriesC from './components/SeriesC.vue'
// import Wholesale from './components/Wholesale.vue'
import HeroSection from "@/view/HeroSection.vue";
import SeriesA from "@/view/VAPANDA4N1.vue";
import SeriesB from "@/view/Performance.vue";
import TitanDe from "@/view/TitanDe.vue";
import SeriesC from "@/view/SmartGrid.vue";
import Wholesale from "@/view/Wholesale.vue";
// 新增组件
import BrandStory from "@/view/BrandStory.vue";
import LifestyleShowcase from "@/view/LifestyleShowcase.vue";
import WhyChooseUs from "@/view/WhyChooseUs.vue";
import Testimonials from "@/view/Testimonials.vue";
import FAQ from "@/view/FAQ.vue";
import NewsCenter from "@/view/NewsCenter.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import HealthWarningBanner from "@/components/HealthWarningBanner.vue";
import FooterSection from "@/components/FooterSection.vue";

const { t } = useI18n()
const route = useRoute()
const router = useRouter()

const isAgeVerified = ref(false)
const showNavbar = ref(true)
const isProductPage = ref(false)
const mobileMenuOpen = ref(false)

const goHome = () => {
  if (isProductPage.value) {
    router.push('/')
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// 导航链接（使用多语言）
const navLinks = [
  { key: 'story', href: '#story' },
  { key: 'products', href: '#products' },
  { key: 'lifestyle', href: '#lifestyle' },
  { key: 'whyUs', href: '#why-us' },
  { key: 'news', href: '#news' },
  { key: 'wholesale', href: '#wholesale' }
]

// 处理导航点击
const handleNavClick = (href) => {
  if (isProductPage.value) {
    // 如果在产品详情页，先跳转到首页，然后滚动到对应位置
    router.push('/').then(() => {
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          const offset = 80 // 导航栏高度
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          })
        }
      }, 100)
    })
  } else {
    // 在首页，直接滚动到对应位置
    const element = document.querySelector(href)
    if (element) {
      const offset = 80 // 导航栏高度
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }
}

// 1. 年龄验证逻辑
const verifyAge = () => {
  isAgeVerified.value = true
  localStorage.setItem('vapanda_verified', 'true')
  gsap.from('.app-content', { opacity: 0, duration: 1, ease: 'power2.out' })
}

const exitSite = () => {
  window.location.href = 'https://www.google.com'
}

onMounted(() => {
  // 检查是否是首次访问（没有验证记录）
  const verified = localStorage.getItem('vapanda_verified')
  if (verified === 'true') {
    isAgeVerified.value = true
  } else {
    // 首次访问，必须显示年龄验证弹窗
    isAgeVerified.value = false
  }
  // 检查是否是产品详情页
  isProductPage.value = route.path.startsWith('/product') || route.path.startsWith('/news')
})

// 监听路由变化
watch(() => route.path, (newPath) => {
  isProductPage.value = newPath.startsWith('/product') || newPath.startsWith('/news')
})
</script>

<template>
  <div class="bg-black min-h-screen text-white font-sans selection:bg-[#39FF14] selection:text-black">

    <transition name="fade">
      <div v-if="!isAgeVerified" class="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6">
        <div class="max-w-md w-full text-center space-y-10 border border-white/10 p-12 bg-[#050505] relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-[2px] bg-[#39FF14] animate-pulse"></div>

          <h2 class="text-5xl font-black font-['Anton'] italic uppercase">VAPANDA<span class="text-[#39FF14]">.</span></h2>
          
          <!-- 健康警告 -->
          <div class="p-6 bg-red-900/20 border-2 border-red-500/50 rounded-lg">
            <p class="text-red-400 font-black uppercase text-sm mb-2 tracking-widest">
              {{ t('ageVerification.warning') }}
            </p>
          </div>

          <div class="space-y-4">
            <p class="text-sm font-bold tracking-[0.3em] uppercase text-gray-500">
              {{ t('ageVerification.title') }}
            </p>
            <p class="text-xs text-gray-400 leading-relaxed uppercase">
              {{ t('ageVerification.subtitle') }}
            </p>
          </div>

          <div class="flex flex-col gap-4">
            <button @click="verifyAge" class="w-full py-5 bg-[#39FF14] text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all">
              {{ t('ageVerification.confirm') }}
            </button>
            <button @click="exitSite" class="text-[10px] text-gray-600 uppercase tracking-widest hover:text-white transition-colors">
              {{ t('ageVerification.exit') }}
            </button>
          </div>
        </div>
      </div>
    </transition>

    <nav v-if="isAgeVerified" class="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 px-6 py-4 transition-all">
      <div class="flex justify-between items-center">
        <div @click="goHome" class="text-2xl font-black font-['Anton'] italic uppercase tracking-tighter cursor-pointer hover:text-[#39FF14] transition-colors">
          VAPANDA<span class="text-[#39FF14]">.</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex gap-10 items-center">
          <a v-for="link in navLinks" :key="link.key"
             :href="link.href"
             @click.prevent="handleNavClick(link.href)"
             class="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer">
            {{ t(`nav.${link.key}`) }}
          </a>
        </div>

        <div class="flex items-center gap-4">
          <LanguageSwitcher />
          <button @click="handleNavClick('#wholesale')" class="hidden md:block px-6 py-2 border border-[#39FF14] text-[#39FF14] font-black uppercase text-[10px] tracking-widest hover:bg-[#39FF14] hover:text-black transition-all">
            {{ t('nav.contactUs') }}
          </button>
          
          <!-- Mobile Menu Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 text-gray-400 hover:text-[#39FF14] transition-colors"
            :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="mobile-menu">
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
          <div class="flex flex-col gap-4">
            <a v-for="link in navLinks" :key="link.key"
               :href="link.href"
               @click.prevent="handleNavClick(link.href); mobileMenuOpen = false"
               class="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#39FF14] transition-colors cursor-pointer py-2">
              {{ t(`nav.${link.key}`) }}
            </a>
            <button @click="handleNavClick('#wholesale'); mobileMenuOpen = false" class="w-full px-6 py-2 border border-[#39FF14] text-[#39FF14] font-black uppercase text-[10px] tracking-widest hover:bg-[#39FF14] hover:text-black transition-all text-left">
              {{ t('nav.contactUs') }}
            </button>
          </div>
        </div>
      </transition>
    </nav>

    <main v-if="isAgeVerified" class="app-content">
      <router-view v-if="isProductPage" />
      
      <template v-else>
        <section id="home"><HeroSection /></section>

        <!-- 新增：品牌故事 -->
        <section id="story"><BrandStory /></section>

        <!-- 新增：生活方式 -->
        <section id="lifestyle"><LifestyleShowcase /></section>

        <!-- 产品展示区域 -->
        <section id="products">
          <section id="multiverse"><SeriesA /></section>
          <section id="titans"><SeriesB /></section>
          <TitanDe/>
          <section id="smart-grid"><SeriesC /></section>
        </section>

        <!-- 新增：为什么选择我们 -->
        <section id="why-us"><WhyChooseUs /></section>

        <!-- 新增：客户见证 -->
        <section id="testimonials"><Testimonials /></section>

        <!-- 新增：常见问题 -->
        <section id="faq"><FAQ /></section>

        <!-- 新增：新闻中心 -->
        <section id="news"><NewsCenter /></section>

        <section id="wholesale"><Wholesale /></section>
        
        <!-- Footer -->
        <FooterSection />
      </template>
    </main>

    <!-- 健康警告横幅 -->
    <HealthWarningBanner v-if="isAgeVerified && !isProductPage" />

    <!-- WhatsApp 悬浮按钮 -->
    <a 
      v-if="isAgeVerified"
      :href="`https://wa.me/8613425059749`"
      target="_blank"
      class="fixed bottom-24 right-10 z-[40] group"
    >
      <div class="p-4 bg-[#25D366] text-white font-black uppercase text-[10px] tracking-tighter cursor-pointer shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all rounded-full">
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.98 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span class="hidden group-hover:inline">WhatsApp</span>
        </div>
      </div>
    </a>

    <!-- 批发询价按钮 -->
    <div v-if="isAgeVerified" class="fixed bottom-42 right-10 z-[40]">
      <button @click="handleNavClick('#wholesale')" class="p-4 bg-[#39FF14] text-black font-black uppercase text-[10px] tracking-tighter cursor-pointer shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_40px_rgba(57,255,20,0.6)] transition-all rounded-full">
        {{ t('common.wholesaleInquire') }}
      </button>
    </div>

  </div>
</template>

<style>
/* 全局平滑滚动 */
html {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: #39FF14 #000;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  opacity: 1;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}

/* 适配移动端的 Section 切换 */
section {
  min-height: 100vh;
}

/* 为健康警告横幅留出空间 */
.app-content {
  padding-bottom: 100px;
}

@media (max-width: 768px) {
  .app-content {
    padding-bottom: 120px;
  }
}
</style>

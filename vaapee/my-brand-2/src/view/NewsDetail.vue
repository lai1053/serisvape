<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

// 新闻数据（实际应该从API或数据文件获取）
const newsData = {
  1: {
    id: 1,
    date: '2024-12-15',
    category: 'Product Launch',
    title: 'VAPANDA STAR 100K Series Launched',
    excerpt: 'Introducing our revolutionary 100K puff technology with dual mesh coil system.',
    image: '/img/bg.png',
    content: `
      <p class="mb-6">We are thrilled to announce the launch of our revolutionary VAPANDA STAR 100K series, a breakthrough in vaping technology that sets new industry standards.</p>
      
      <h3 class="text-2xl font-black font-['Anton'] italic uppercase mb-4 mt-8">Revolutionary Technology</h3>
      <p class="mb-6">The STAR 100K features our innovative dual mesh coil system, delivering unparalleled flavor and vapor production. With a massive 100,000 puff capacity, this device redefines what's possible in disposable vaping.</p>
      
      <h3 class="text-2xl font-black font-['Anton'] italic uppercase mb-4 mt-8">Key Features</h3>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>100,000 puff capacity - the highest in the industry</li>
        <li>Dual mesh coil system for superior flavor</li>
        <li>3D curved screen display</li>
        <li>Type-C fast charging</li>
        <li>Premium build quality with cyberpunk aesthetics</li>
      </ul>
      
      <p class="mb-6">Available now at authorized retailers worldwide. Experience the future of vaping with VAPANDA STAR 100K.</p>
    `
  },
  2: {
    id: 2,
    date: '2024-12-10',
    category: 'Event',
    title: 'VAPANDA at Vape Expo Europe 2024',
    excerpt: 'Join us at the largest vape exhibition in Europe. Experience our latest innovations.',
    image: '/img/bg.png',
    content: `
      <p class="mb-6">VAPANDA is proud to announce our participation in Vape Expo Europe 2024, the largest vaping exhibition in Europe.</p>
      
      <h3 class="text-2xl font-black font-['Anton'] italic uppercase mb-4 mt-8">Event Details</h3>
      <p class="mb-6">Visit us at Booth A-15 to experience our latest product innovations, including the new STAR 100K series and 4-IN-1 technology.</p>
      
      <h3 class="text-2xl font-black font-['Anton'] italic uppercase mb-4 mt-8">What to Expect</h3>
      <ul class="list-disc list-inside space-y-2 mb-6">
        <li>Live product demonstrations</li>
        <li>Exclusive show specials and discounts</li>
        <li>Meet the VAPANDA team</li>
        <li>New product previews</li>
        <li>Networking opportunities with industry leaders</li>
      </ul>
      
      <p class="mb-6">We look forward to meeting you at the expo!</p>
    `
  },
  3: {
    id: 3,
    date: '2024-12-05',
    category: 'Award',
    title: 'Best Innovation Award 2024',
    excerpt: 'VAPANDA receives recognition for breakthrough technology in vaping industry.',
    image: '/img/bg.png',
    content: `
      <p class="mb-6">VAPANDA is honored to receive the Best Innovation Award 2024 for our groundbreaking 4-IN-1 technology and 100K puff capacity devices.</p>
      
      <h3 class="text-2xl font-black font-['Anton'] italic uppercase mb-4 mt-8">Recognition</h3>
      <p class="mb-6">This award recognizes our commitment to innovation and excellence in the vaping industry. Our 4-IN-1 technology allows users to switch between four different flavors in a single device, revolutionizing the vaping experience.</p>
      
      <h3 class="text-2xl font-black font-['Anton'] italic uppercase mb-4 mt-8">Our Commitment</h3>
      <p class="mb-6">We remain dedicated to pushing the boundaries of vaping technology and delivering exceptional products to our customers worldwide.</p>
    `
  }
}

const newsId = computed(() => parseInt(route.params.id))
const news = computed(() => newsData[newsId.value])

onMounted(() => {
  // 滚动到页面顶部
  window.scrollTo({ top: 0, behavior: 'instant' })
  
  if (!news.value) {
    router.push('/')
    return
  }

  // 内容动画
  gsap.from('.news-content', {
    opacity: 0,
    y: 30,
    duration: 0.8
  })
})
</script>

<template>
  <div v-if="news" class="min-h-screen bg-black text-white">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden border-b border-white/10">
      <div class="absolute inset-0 opacity-5 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex items-center gap-4 mb-8">
          <button @click="router.back()" class="text-[#39FF14] hover:text-white transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span class="text-gray-500 text-xs uppercase tracking-widest">Back to News</span>
        </div>

        <div class="max-w-4xl mx-auto">
          <!-- 分类标签 -->
          <div class="mb-6">
            <span class="text-[8px] font-bold text-[#39FF14] border border-[#39FF14] px-3 py-1 uppercase tracking-widest">
              {{ news.category }}
            </span>
          </div>

          <!-- 日期 -->
          <div class="text-[10px] font-mono text-gray-500 mb-6 uppercase tracking-widest">
            {{ new Date(news.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
          </div>

          <!-- 标题 -->
          <h1 class="text-5xl md:text-7xl font-black font-['Anton'] italic text-white uppercase leading-tight mb-8">
            {{ news.title }}
          </h1>

          <!-- 摘要 -->
          <p class="text-xl text-gray-400 mb-12 leading-relaxed tracking-wider uppercase">
            {{ news.excerpt }}
          </p>

          <!-- 主图 -->
          <div class="relative h-96 bg-white/5 border border-white/10 rounded-lg overflow-hidden mb-12">
            <div class="absolute inset-0 bg-gradient-to-br from-[#39FF14]/10 to-transparent"></div>
            <img :src="news.image" :alt="news.title" class="w-full h-full object-cover opacity-50" />
          </div>
        </div>
      </div>
    </section>

    <!-- 内容区域 -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto news-content">
          <div class="prose prose-invert max-w-none" v-html="news.content"></div>
        </div>
      </div>
    </section>

    <!-- 相关新闻 -->
    <section class="py-20 border-t border-white/10">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-black font-['Anton'] italic text-white uppercase mb-12 text-center">
          Related <span class="text-[#39FF14]">News</span>
        </h2>
        <div class="text-center">
          <button @click="router.push('/#news')" class="px-12 py-5 border border-[#39FF14] text-[#39FF14] font-black uppercase text-xs tracking-widest hover:bg-[#39FF14] hover:text-black transition-all">
            View All News
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.prose {
  color: #e5e7eb;
}

.prose h3 {
  color: #39FF14;
}

.prose p {
  color: #d1d5db;
  line-height: 1.8;
}

.prose ul {
  color: #d1d5db;
}

.prose li {
  margin-bottom: 0.5rem;
}
</style>


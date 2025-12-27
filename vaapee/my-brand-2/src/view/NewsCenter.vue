<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import newsData from '@/data/news.json'

gsap.registerPlugin(ScrollTrigger)

const { t } = useI18n()
const router = useRouter()

const newsItems = newsData

const selectedCategory = ref('All')

const categories = computed(() => [
  'All',
  ...new Set(newsItems.map((item) => item.category))
])

const filteredNews = ref(newsItems)

const filterNews = (category) => {
  selectedCategory.value = category
  if (category === 'All') {
    filteredNews.value = newsItems
  } else {
    filteredNews.value = newsItems.filter(item => item.category === category)
  }
}

onMounted(() => {
  gsap.utils.toArray('.news-card').forEach((card, i) => {
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
})
</script>

<template>
  <section class="relative bg-black py-32 overflow-hidden border-t border-white/5">
    <!-- 背景网格 -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:100px_100px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-20" data-aos="fade-up">
        <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
          {{ t('news.badge') }}
        </span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
          {{ t('news.title') }}<br>
          <span class="text-[#39FF14]">& Events.</span>
        </h2>
        <p class="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wider uppercase">
          {{ t('news.subtitle') }}
        </p>
      </div>

      <!-- 分类筛选 -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <button
          v-for="category in categories"
          :key="category"
          @click="filterNews(category)"
          :class="selectedCategory === category 
            ? 'bg-[#39FF14] text-black' 
            : 'bg-white/5 border border-white/10 text-gray-400 hover:border-[#39FF14]/50'"
          class="px-6 py-3 font-black uppercase text-[10px] tracking-widest transition-all"
        >
          {{ category }}
        </button>
      </div>

      <!-- 新闻网格 -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div
          v-for="item in filteredNews"
          :key="item.id"
          @click="$router.push(`/news/${item.id}`)"
          class="news-card group border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-[#39FF14]/50 transition-all cursor-pointer"
        >
          <!-- 图片 -->
          <div class="relative h-48 bg-gradient-to-br from-white/10 to-transparent overflow-hidden">
            <div class="absolute inset-0 bg-[#39FF14]/10 group-hover:bg-[#39FF14]/20 transition-colors"></div>
            <img
              :src="item.coverImage || item.image"
              :alt="item.title"
              class="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
              loading="lazy"
            />
            <div class="absolute top-4 left-4">
              <span class="text-[8px] font-bold text-[#39FF14] border border-[#39FF14] px-2 py-1 uppercase tracking-widest">
                {{ item.category }}
              </span>
            </div>
          </div>

          <!-- 内容 -->
          <div class="p-6">
            <div class="text-[9px] font-mono text-gray-500 mb-3 uppercase tracking-widest">
              {{ new Date(item.date).toLocaleDateString() }}
            </div>
            <h3 class="text-xl font-black font-['Anton'] italic text-white uppercase mb-3 leading-tight group-hover:text-[#39FF14] transition-colors">
              {{ item.title }}
            </h3>
            <p class="text-gray-400 text-xs leading-relaxed tracking-wider uppercase mb-4">
              {{ item.excerpt }}
            </p>
            <div class="flex items-center gap-2 text-[#39FF14] text-[10px] font-bold uppercase tracking-widest">
              {{ t('news.readMore') }}
              <span class="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import newsData from '@/data/news.json'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const newsId = computed(() => parseInt(route.params.id))
const news = computed(() => newsData.find((item) => item.id === newsId.value))

const contentHtml = ref('')
const contentState = ref('loading')
const contentError = ref('')

const getDocExportUrl = (docUrl) => {
  const match = docUrl.match(/\/d\/([a-zA-Z0-9-_]+)/)
  if (!match) {
    return null
  }
  return `https://docs.google.com/document/d/${match[1]}/export?format=html`
}

const loadDocContent = async () => {
  contentState.value = 'loading'
  contentError.value = ''
  contentHtml.value = ''

  if (!news.value || !news.value.docUrl) {
    contentState.value = 'error'
    contentError.value = t('news.errorMissingSource')
    return
  }

  const exportUrl = getDocExportUrl(news.value.docUrl)
  if (!exportUrl) {
    contentState.value = 'error'
    contentError.value = t('news.errorInvalidUrl')
    return
  }

  try {
    const response = await fetch(exportUrl)
    if (!response.ok) {
      throw new Error(t('news.errorLoadFailed'))
    }
    const rawHtml = await response.text()
    const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
    contentHtml.value = bodyMatch ? bodyMatch[1] : rawHtml
    contentState.value = 'ready'
  } catch (error) {
    contentState.value = 'error'
    contentError.value = t('news.errorLoadFailed')
  }
}

onMounted(() => {
  // 滚动到页面顶部
  window.scrollTo({ top: 0, behavior: 'instant' })
  
  if (!news.value) {
    router.push('/')
    return
  }

  loadDocContent()

  // 内容动画
  gsap.from('.news-content', {
    opacity: 0,
    y: 30,
    duration: 0.8
  })
})

watch(() => route.params.id, () => {
  if (!news.value) {
    router.push('/')
    return
  }
  loadDocContent()
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
          <span class="text-gray-500 text-xs uppercase tracking-widest">{{ t('news.backToNews') }}</span>
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
          <div v-if="contentState === 'loading'" class="text-sm uppercase tracking-widest text-gray-500">
            {{ t('news.loading') }}
          </div>
          <div v-else-if="contentState === 'error'" class="text-sm uppercase tracking-widest text-red-400">
            {{ contentError || t('news.loadError') }}
            <div v-if="news?.docUrl" class="mt-4">
              <a :href="news.docUrl" target="_blank" class="text-[#39FF14] underline">
                {{ t('news.openSource') }}
              </a>
            </div>
          </div>
          <div v-else class="prose prose-invert max-w-none" v-html="contentHtml"></div>
        </div>
      </div>
    </section>

    <!-- 相关新闻 -->
    <section class="py-20 border-t border-white/10">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-black font-['Anton'] italic text-white uppercase mb-12 text-center">
          {{ t('news.relatedTitle') }} <span class="text-[#39FF14]">{{ t('news.relatedEmphasis') }}</span>
        </h2>
        <div class="text-center">
          <button @click="router.push('/#news')" class="px-12 py-5 border border-[#39FF14] text-[#39FF14] font-black uppercase text-xs tracking-widest hover:bg-[#39FF14] hover:text-black transition-all">
            {{ t('news.viewAll') }}
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

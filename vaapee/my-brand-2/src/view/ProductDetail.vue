<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { products } from '@/data/products'
import { getProductMarketing, formatDescription } from '@/data/productMarketing'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const productId = computed(() => route.params.id)
const product = computed(() => products[productId.value])

const selectedFlavor = ref(0)
const imageType = ref('single_product')

const imageTypes = computed(() => {
  if (!product.value) return []
  // 4in1 产品有额外的 single_product_spin
  if (product.value.id === '4in1-120k') {
    return [
      { key: 'single_product', label: t('product.imageTypes.product') },
      { key: 'single_product_spin', label: t('product.imageTypes.spinView') },
      { key: 'large_box_3d', label: t('product.imageTypes.largeBox') },
      { key: 'small_box_3d', label: t('product.imageTypes.smallBox') }
    ]
  }
  return [
    { key: 'single_product', label: t('product.imageTypes.product') },
    { key: 'large_box_3d', label: t('product.imageTypes.largeBox') },
    { key: 'small_box_3d', label: t('product.imageTypes.smallBox') }
  ]
})

const currentImage = computed(() => {
  if (!product.value) return ''
  const flavor = product.value.flavors[selectedFlavor.value]
  const file = typeof flavor === 'object' ? flavor.file : flavor
  return `${product.value.basePath}/${imageType.value}/${file}`
})

const selectFlavor = (index) => {
  selectedFlavor.value = index
}

const changeImageType = (type) => {
  imageType.value = type
}

// 获取营销文案
const marketing = computed(() => {
  if (!product.value) return null
  return getProductMarketing(product.value.id)
})

// 格式化的描述段落
const descriptionParagraphs = computed(() => {
  if (!marketing.value) return []
  return formatDescription(marketing.value.description)
})

// 格式化的口味描述段落
const flavorParagraphs = computed(() => {
  if (!marketing.value) return []
  return formatDescription(marketing.value.flavors)
})

onMounted(() => {
  // 滚动到页面顶部
  window.scrollTo({ top: 0, behavior: 'instant' })
  
  if (!product.value) {
    router.push('/')
    return
  }

  // 图片切换动画
  gsap.from('.product-image', {
    opacity: 0,
    scale: 0.9,
    duration: 0.6
  })

  // 规格卡片动画
  gsap.utils.toArray('.spec-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 30,
      duration: 0.5,
      delay: i * 0.1
    })
  })
})
</script>

<template>
  <div v-if="product" class="min-h-screen text-white transition-colors duration-1000" :style="{ background: `linear-gradient(180deg, ${product.color}05 0%, #000000 50%)` }">
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
          <span class="text-gray-500 text-xs uppercase tracking-widest">{{ t('product.backToProducts') }}</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- 产品图片区域 -->
          <div class="relative">
            <!-- 图片类型切换 -->
            <div class="flex flex-wrap gap-2 mb-4">
              <button
                v-for="type in imageTypes"
                :key="type.key"
                @click="changeImageType(type.key)"
                :class="imageType === type.key ? 'text-black' : 'bg-white/5 border text-gray-400'"
                :style="imageType === type.key 
                  ? { backgroundColor: product.color } 
                  : { borderColor: `${product.color}30` }"
                class="px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all hover:opacity-80"
              >
                {{ type.label }}
              </button>
            </div>

            <!-- 主图 -->
            <div class="relative bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-xl scale-[1.0]">
              <div class="absolute inset-0 blur-[60px] opacity-20 transition-colors duration-1000"
                   :style="{ background: product.color }"></div>
              <img
                :src="currentImage"
                :alt="product.flavors[selectedFlavor].name"
                :class="['product-image relative z-10 w-full h-auto object-contain', product.id === '4in1-120k' ? 'scale-[1.0]' : '']"
              />
            </div>

            <!-- 口味缩略图 -->
            <div class="grid grid-cols-5 gap-3 mt-6">
              <button
                v-for="(flavor, index) in product.flavors"
                :key="index"
                @click="selectFlavor(index)"
                :class="selectedFlavor === index 
                  ? 'border-2 scale-110' 
                  : 'border border-white/10 opacity-60 hover:opacity-100'"
                :style="selectedFlavor === index ? { borderColor: product.color } : {}"
                class="relative overflow-hidden bg-white/5 rounded transition-all"
              >
                <img
                  :src="`${product.basePath}/single_product/${typeof flavor === 'object' ? flavor.file : flavor}`"
                  :alt="typeof flavor === 'object' ? flavor.name : flavor"
                  class="w-full h-20 object-contain"
                />
                <div v-if="selectedFlavor === index" 
                     class="absolute inset-0 transition-colors duration-300"
                     :style="{ backgroundColor: `${product.color}20` }"></div>
              </button>
            </div>
          </div>

          <!-- 产品信息 -->
          <div class="space-y-8">
            <div>
              <span class="font-mono text-[10px] tracking-[0.5em] font-bold mb-4 block uppercase"
                    :style="{ color: product.color }">
                {{ product.id === '4in1-120k' ? t('product.seriesA') : t('product.seriesB') }}
              </span>
              <h1 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-4">
                {{ product.name }}
              </h1>
              <p class="text-gray-500 font-bold tracking-widest text-lg mb-6">{{ product.slogan }}</p>
              
              <div class="flex items-center gap-4 mb-8">
                <div class="text-4xl font-black font-['Anton'] italic" :style="{ color: product.color }">
                  {{ product.puffs }} {{ t('product.puffsLabel') }}
                </div>
              </div>

              <!-- 4in1 产品的4个口味展示 -->
              <div v-if="product.id === '4in1-120k' && product.flavors[selectedFlavor].flavors" 
                   class="grid grid-cols-2 gap-3 mb-8">
                <div v-for="(flav, idx) in product.flavors[selectedFlavor].flavors" :key="idx"
                     class="p-3 bg-white/5 border border-white/10 text-center">
                  <div class="text-[10px] font-black uppercase tracking-wider text-white">
                    {{ flav }}
                  </div>
                </div>
              </div>
            </div>

            <!-- 核心特性 -->
            <div class="space-y-4">
              <h3 class="text-xl font-black font-['Anton'] italic uppercase" :style="{ color: product.color }">{{ t('product.keyFeatures') }}</h3>
              <div class="grid grid-cols-1 gap-3">
                <div v-for="feature in product.features" :key="feature"
                     class="flex items-center gap-4 p-4 bg-white/5 border border-white/10 transition-all hover:opacity-80"
                     :style="{ borderColor: `${product.color}50` }">
                  <div class="w-2 h-2 rounded-full" :style="{ backgroundColor: product.color }"></div>
                  <span class="text-sm font-bold uppercase tracking-wider">{{ feature }}</span>
                </div>
              </div>
            </div>

            <!-- CTA 按钮 -->
            <div class="flex gap-4 pt-6">
              <button 
                class="flex-1 px-8 py-5 text-black font-black uppercase text-xs tracking-widest hover:opacity-90 transition-all"
                :style="{ 
                  backgroundColor: product.color,
                  boxShadow: `0 0 40px ${product.color}30`
                }"
              >
                {{ t('product.wholesaleInquiry') }}
              </button>
              <button 
                class="px-8 py-5 border text-white font-black uppercase text-xs tracking-widest hover:opacity-80 transition-all"
                :style="{ borderColor: product.color }"
              >
                {{ t('product.downloadCatalog') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 营销文案 -->
    <section v-if="marketing" class="py-20 border-b border-white/10">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-5xl font-black font-['Anton'] italic text-white uppercase mb-12 text-center">
          {{ t('product.storyTitle') }} <span :style="{ color: product.color }">{{ t('product.storyEmphasis') }}</span>
        </h2>
        
        <!-- 产品描述 -->
        <div class="space-y-6 mb-16">
          <div v-for="(paragraph, index) in descriptionParagraphs" :key="index"
               class="text-gray-300 text-base leading-relaxed tracking-wide">
            {{ paragraph }}
          </div>
        </div>
        
        <!-- 口味描述 -->
        <div v-if="flavorParagraphs.length > 0" class="space-y-6">
          <h3 class="text-3xl font-black font-['Anton'] italic uppercase mb-8" :style="{ color: product.color }">
            {{ t('product.flavorCollection') }}
          </h3>
          <div v-for="(paragraph, index) in flavorParagraphs" :key="index"
               class="text-gray-300 text-base leading-relaxed tracking-wide">
            {{ paragraph }}
          </div>
        </div>
      </div>
    </section>

    <!-- 技术规格 -->
    <section class="py-20 border-b border-white/10">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-black font-['Anton'] italic text-white uppercase mb-12 text-center">
          {{ t('product.specTitle') }} <span :style="{ color: product.color }">{{ t('product.specEmphasis') }}</span>
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div v-for="(value, key) in product.specs" :key="key"
               class="spec-card p-6 bg-white/5 border border-white/10 backdrop-blur-xl text-center">
            <div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
              {{ key.replace(/([A-Z])/g, ' $1').trim() }}
            </div>
            <div class="text-2xl font-black font-['Anton'] italic" :style="{ color: product.color }">
              {{ value }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 口味列表 -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-black font-['Anton'] italic text-white uppercase mb-12 text-center">
          {{ t('product.flavorsTitle') }} <span :style="{ color: product.color }">{{ t('product.flavorsEmphasis') }}</span>
        </h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div v-for="(flavor, index) in product.flavors" :key="index"
               @click="selectFlavor(index)"
               :class="selectedFlavor === index 
                 ? 'border-2 scale-105' 
                 : 'border'"
               :style="selectedFlavor === index 
                 ? { borderColor: product.color } 
                 : { borderColor: `${product.color}30` }"
               class="group cursor-pointer bg-white/5 backdrop-blur-xl p-4 rounded-lg transition-all hover:opacity-80"
            >
            <div class="relative mb-4 bg-white/5 rounded overflow-hidden">
              <img
                :src="`${product.basePath}/single_product/${typeof flavor === 'object' ? flavor.file : flavor}`"
                :alt="typeof flavor === 'object' ? flavor.name : flavor"
                class="w-full h-32 object-contain"
              />
              <div v-if="selectedFlavor === index"
                   class="absolute inset-0 transition-colors duration-300"
                   :style="{ backgroundColor: `${product.color}20` }"></div>
            </div>
            <div class="text-center">
              <div class="text-xs font-black uppercase tracking-wider text-white">
                {{ typeof flavor === 'object' ? flavor.name : flavor }}
              </div>
              <!-- 4in1 产品的4个口味标签 -->
              <div v-if="product.id === '4in1-120k' && flavor.flavors" 
                   class="mt-2 grid grid-cols-2 gap-1">
                <div v-for="(flav, idx) in flavor.flavors" :key="idx"
                     class="text-[8px] text-gray-400 uppercase">
                  {{ flav.split(' ')[0] }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');
</style>

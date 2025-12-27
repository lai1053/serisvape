<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { allProducts } from '@/data/productsAll'

gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

const seriesKey = computed(() => route.params.series)
const fileName = computed(() => decodeURIComponent(route.params.file))

const product = computed(() => {
  if (!seriesKey.value || !allProducts[seriesKey.value]) return null
  return allProducts[seriesKey.value]
})

const currentProduct = computed(() => {
  if (!product.value || !fileName.value) return null
  return {
    series: product.value.name,
    seriesKey: seriesKey.value,
    fileName: fileName.value,
    image: `${product.value.basePath}/${product.value.imageType}/${fileName.value}`,
    color: getColorForProduct(seriesKey.value)
  }
})

const imageType = ref('single_product')

// 获取可用的图片类型
const availableImageTypes = computed(() => {
  if (!product.value) return []
  const types = []
  
  // 根据产品系列确定可用的图片类型
  const imageTypeMap = {
    'VAPLIQ_e_liquid': [
      { key: 'single_product', label: 'Product' },
      { key: 'large_box_3d', label: 'Large Box' },
      { key: 'small_box_3d', label: 'Small Box' }
    ],
    'Vapanda_2_In_1_80K': [
      { key: 'single_product', label: 'Product' },
      { key: 'large_box_3d', label: 'Large Box' },
      { key: 'small_box_3d', label: 'Small Box' }
    ],
    'VAAPEE_DOUBLE_45K': [
      { key: 'front', label: 'Front' },
      { key: 'front_back', label: 'Front & Back' },
      { key: 'large_box_3d', label: 'Large Box' },
      { key: 'small_box_3d', label: 'Small Box' }
    ],
    'VAAPEE_X_30K': [
      { key: 'single_product', label: 'Product' },
      { key: 'side_single_product', label: 'Side View' },
      { key: 'large_box_3d', label: 'Large Box' },
      { key: 'small_box_3d', label: 'Small Box' }
    ],
    'Vaapee_Tornado_25K': [
      { key: 'single_product', label: 'Product' },
      { key: 'large_box_3d', label: 'Large Box' },
      { key: 'small_box_3d', label: 'Small Box' }
    ],
    'Vapanda_Tornado_18K': [
      { key: 'single_product', label: 'Product' },
      { key: 'large_box_3d', label: 'Large Box' },
      { key: 'small_box_3d', label: 'Small Box' }
    ]
  }
  
  return imageTypeMap[seriesKey.value] || [{ key: product.value.imageType, label: 'Product' }]
})

const currentImage = computed(() => {
  if (!currentProduct.value) return ''
  return `${product.value.basePath}/${imageType.value}/${fileName.value}`
})

const changeImageType = (type) => {
  imageType.value = type
}

const getColorForProduct = (key) => {
  const colors = {
    'VAPLIQ_e_liquid': '#FF00FF',
    'Vapanda_2_In_1_80K': '#00FFFF',
    'VAAPEE_DOUBLE_45K': '#FFD700',
    'VAAPEE_X_30K': '#FF1493',
    'Vaapee_Tornado_25K': '#9370DB',
    'Vapanda_Tornado_18K': '#39FF14'
  }
  return colors[key] || '#39FF14'
}

// 获取产品规格（根据系列）
const getProductSpecs = computed(() => {
  if (!seriesKey.value) return {}
  
  const specsMap = {
    'VAPLIQ_e_liquid': {
      type: 'E-Liquid',
      capacity: '10mL',
      nicotine: '0-50mg',
      vgpg: '70/30',
      flavors: '20 Flavors'
    },
    'Vapanda_2_In_1_80K': {
      puffs: '80,000',
      battery: '850mAh',
      capacity: '16mL (8mL × 2)',
      coil: 'Dual Mesh',
      charging: 'Type-C'
    },
    'VAAPEE_DOUBLE_45K': {
      puffs: '45,000',
      battery: '850mAh',
      capacity: '14mL (7mL × 2)',
      coil: 'Dual Mesh',
      charging: 'Type-C'
    },
    'VAAPEE_X_30K': {
      puffs: '30,000',
      battery: '650mAh',
      capacity: '12mL',
      coil: 'Mesh',
      charging: 'Type-C'
    },
    'Vaapee_Tornado_25K': {
      puffs: '25,000',
      battery: '650mAh',
      capacity: '10mL',
      coil: 'Mesh',
      charging: 'Type-C'
    },
    'Vapanda_Tornado_18K': {
      puffs: '18,000',
      battery: '600mAh',
      capacity: '8mL',
      coil: 'Mesh',
      charging: 'Type-C'
    }
  }
  
  return specsMap[seriesKey.value] || {}
})

onMounted(() => {
  // 滚动到页面顶部
  window.scrollTo({ top: 0, behavior: 'instant' })
  
  if (!currentProduct.value) {
    router.push('/')
    return
  }

  // 初始化图片类型
  if (availableImageTypes.value.length > 0) {
    imageType.value = availableImageTypes.value[0].key
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
  <div v-if="currentProduct" class="min-h-screen text-white transition-colors duration-1000" :style="{ background: `linear-gradient(180deg, ${currentProduct.color}05 0%, #000000 50%)` }">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden border-b border-white/10">
      <div class="absolute inset-0 opacity-5 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex items-center gap-4 mb-8">
          <button @click="router.back()" class="hover:opacity-80 transition-colors" :style="{ color: currentProduct.color }">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span class="text-gray-500 text-xs uppercase tracking-widest">Back to Products</span>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- 产品图片区域 -->
          <div class="relative">
            <!-- 图片类型切换 -->
            <div class="flex flex-wrap gap-2 mb-4">
              <button
                v-for="type in availableImageTypes"
                :key="type.key"
                @click="changeImageType(type.key)"
                :class="imageType === type.key ? 'text-black' : 'bg-white/5 border text-gray-400'"
                :style="imageType === type.key 
                  ? { backgroundColor: currentProduct.color } 
                  : { borderColor: `${currentProduct.color}30` }"
                class="px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-all hover:opacity-80"
              >
                {{ type.label }}
              </button>
            </div>

            <!-- 主图 -->
            <div class="relative bg-white/5 border border-white/10 p-8 rounded-lg backdrop-blur-xl">
              <div class="absolute inset-0 blur-[60px] opacity-20 transition-colors duration-1000"
                   :style="{ background: currentProduct.color }"></div>
              <img
                :src="currentImage"
                :alt="currentProduct.fileName"
                class="product-image relative z-10 w-full h-auto object-contain max-h-[600px]"
                @error="console.error('Image not found:', currentImage)"
              />
            </div>
          </div>

          <!-- 产品信息 -->
          <div class="space-y-8">
            <div>
              <span class="font-mono text-[10px] tracking-[0.5em] font-bold mb-4 block uppercase"
                    :style="{ color: currentProduct.color }">
                SERIES C // COMMAND CENTER
              </span>
              <h1 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-4">
                {{ currentProduct.series }}
              </h1>
              <p class="text-gray-500 font-bold tracking-widest text-lg mb-6">
                {{ currentProduct.fileName.replace('.png', '').replace(/_/g, ' ') }}
              </p>
            </div>

            <!-- 技术规格 -->
            <div class="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div v-for="(value, key) in getProductSpecs" :key="key"
                   class="spec-card space-y-1">
                <div class="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
                  {{ key.replace(/([A-Z])/g, ' $1').trim() }}
                </div>
                <div class="text-2xl font-black font-['Anton'] italic" :style="{ color: currentProduct.color }">
                  {{ value }}
                </div>
              </div>
            </div>

            <!-- CTA 按钮 -->
            <div class="flex gap-4 pt-6">
              <button 
                class="flex-1 px-8 py-5 text-black font-black uppercase text-xs tracking-widest hover:opacity-90 transition-all"
                :style="{ 
                  backgroundColor: currentProduct.color,
                  boxShadow: `0 0 40px ${currentProduct.color}30`
                }"
              >
                Wholesale Inquiry
              </button>
              <button 
                class="px-8 py-5 border text-white font-black uppercase text-xs tracking-widest hover:opacity-80 transition-all"
                :style="{ borderColor: currentProduct.color }"
              >
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 同系列其他产品 -->
    <section class="py-20 border-b border-white/10" v-if="product">
      <div class="container mx-auto px-6">
        <h2 class="text-5xl font-black font-['Anton'] italic text-white uppercase mb-12 text-center">
          More from <span :style="{ color: currentProduct.color }">{{ product.name }}</span>
        </h2>
        
        <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
          <div v-for="(img, index) in product.images" :key="index"
               @click="router.push(`/product-all/${seriesKey}/${encodeURIComponent(img)}`)"
               :class="fileName === img ? 'border-2 scale-105' : 'border'"
               :style="fileName === img 
                 ? { borderColor: currentProduct.color } 
                 : { borderColor: `${currentProduct.color}30` }"
               class="cursor-pointer bg-white/5 backdrop-blur-xl p-2 rounded-lg transition-all group hover:opacity-80"
            >
            <div class="relative aspect-[3/4] bg-white/5 overflow-hidden rounded">
              <img
                :src="`${product.basePath}/${product.imageType}/${img}`"
                :alt="img"
                class="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform"
                loading="lazy"
              />
            </div>
            <div class="mt-2 text-[8px] font-bold text-gray-400 uppercase text-center truncate">
              {{ img.replace('.png', '').replace(/_/g, ' ').substring(0, 15) }}
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


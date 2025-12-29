<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { allProducts, getAllProductsFlat } from '@/data/productsAll'

const router = useRouter()

const allProductsList = getAllProductsFlat()
const activeIdx = ref(0)
const selectedSeries = ref('all')
const currentPage = ref(1)
const itemsPerPage = ref(48) // 每页显示48个产品，减少初始加载

const seriesList = computed(() => {
  const series = ['all', ...Object.keys(allProducts)]
  return series
})

const filteredProducts = computed(() => {
  let products = []
  if (selectedSeries.value === 'all') {
    products = allProductsList
  } else {
    products = allProductsList.filter(p => p.seriesKey === selectedSeries.value)
  }
  return products
})

// 分页处理
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredProducts.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage.value)
})

const viewProductDetail = (product) => {
  router.push(`/product-all/${product.seriesKey}/${encodeURIComponent(product.fileName)}`)
}

const changePage = (page) => {
  currentPage.value = page
  // 滚动到 Command Center 区域而不是页面顶部
  setTimeout(() => {
    const section = document.querySelector('#smart-grid')
    if (section) {
      const offset = 80 // 导航栏高度
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }, 100)
}

// 当切换系列时重置页码
const handleSeriesChange = (series) => {
  selectedSeries.value = series
  currentPage.value = 1
}

onMounted(() => {
  // 使用 Intersection Observer 实现懒加载
  const setupLazyLoad = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          if (img.dataset.src) {
            img.src = img.dataset.src
            img.classList.remove('loading-image')
            img.removeAttribute('data-src')
            observer.unobserve(img)
          }
        }
      })
    }, {
      rootMargin: '100px'
    })

    // 观察所有图片
    document.querySelectorAll('img[data-src]').forEach(img => {
      observer.observe(img)
    })
  }

  // 初始设置
  setTimeout(setupLazyLoad, 100)
  
  // 监听路由变化或筛选变化
  const unwatch = watch([selectedSeries, currentPage], () => {
    setTimeout(setupLazyLoad, 100)
  })
  
  onUnmounted(() => {
    unwatch()
  })
})
</script>

<template>
  <section class="dashboard-section relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">
    <!-- 背景网格 -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:100px_100px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 标题 -->
      <div class="text-center mb-16" data-aos="fade-up">
          <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
            Series C // The Smart Grid System
          </span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-[0.85] mb-6">
            Command<br>
          <span class="text-[#39FF14]">Center.</span>
          </h2>
        <p class="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed tracking-wider uppercase">
          Complete product collection. Browse all available flavors and series.
        </p>
        </div>

      <!-- 系列筛选 -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button
          v-for="series in seriesList"
          :key="series"
          @click="handleSeriesChange(series)"
          :class="selectedSeries === series 
            ? 'bg-[#39FF14] text-black' 
            : 'bg-white/5 border border-white/10 text-gray-400 hover:border-[#39FF14]/50'"
          class="px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all"
        >
          {{ series === 'all' ? 'All Products' : allProducts[series]?.name || series }}
        </button>
      </div>

      <!-- 产品网格 -->
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        <div
          v-for="(product, index) in paginatedProducts"
          :key="`${product.seriesKey}-${product.fileName}`"
          @click="viewProductDetail(product)"
          class="product-card group relative cursor-pointer border transition-all duration-300 overflow-hidden"
          :class="'border-white/10 opacity-70 hover:opacity-100 hover:border-[#39FF14]/50 hover:scale-105'"
        >
          <!-- 产品图片 - 懒加载 -->
          <div class="relative aspect-[3/4] bg-white/5 overflow-hidden">
            <img
              :data-src="product.image"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"
              :alt="product.fileName"
              class="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300 loading-image"
              @error="console.error('Image not found:', product.image)"
              loading="lazy"
            />
          </div>

          <!-- 系列标签 -->
          <div class="absolute top-1 left-1 right-1 z-10">
            <div class="text-[6px] font-black uppercase tracking-wider text-center px-1 py-0.5 bg-black/80 backdrop-blur-sm"
                 :style="{ color: product.color }">
              {{ product.series.split(' ')[0] }}
            </div>
          </div>

          <!-- 底部文件名 -->
          <div class="absolute bottom-0 left-0 right-0 p-1 bg-black/90 backdrop-blur-sm z-10">
            <div class="text-[7px] font-bold text-white uppercase text-center truncate">
              {{ product.fileName.replace(/\.(png|webp)$/i, '').replace(/_/g, ' ').substring(0, 20) }}
            </div>
          </div>
        </div>
      </div>

      <!-- 分页控制 -->
      <div v-if="totalPages > 1" class="flex justify-center items-center gap-2 mt-12">
        <button
          @click="changePage(currentPage - 1)"
          :disabled="currentPage === 1"
          :class="currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#39FF14] hover:text-black'"
          class="px-4 py-2 border border-white/20 text-white font-black uppercase text-[10px] tracking-widest transition-all"
        >
          Prev
        </button>
        
        <div class="flex gap-2">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="changePage(page)"
            :class="currentPage === page 
              ? 'bg-[#39FF14] text-black' 
              : 'bg-white/5 border border-white/10 text-gray-400 hover:border-[#39FF14]/50'"
            class="w-10 h-10 text-[10px] font-black uppercase tracking-widest transition-all"
          >
            {{ page }}
          </button>
        </div>
        
        <button
          @click="changePage(currentPage + 1)"
          :disabled="currentPage === totalPages"
          :class="currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#39FF14] hover:text-black'"
          class="px-4 py-2 border border-white/20 text-white font-black uppercase text-[10px] tracking-widest transition-all"
        >
          Next
        </button>
      </div>

      <!-- 统计信息 -->
      <div class="mt-16 text-center">
        <div class="inline-flex items-center gap-8 px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-xl">
          <div>
            <div class="text-3xl font-black font-['Anton'] italic text-[#39FF14]">
              {{ filteredProducts.length }}
            </div>
            <div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
              Products
            </div>
          </div>
          <div class="w-px h-12 bg-white/10"></div>
          <div>
            <div class="text-3xl font-black font-['Anton'] italic text-[#39FF14]">
              {{ Object.keys(allProducts).length }}
            </div>
            <div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
              Series
            </div>
          </div>
          <div class="w-px h-12 bg-white/10"></div>
          <div>
            <div class="text-3xl font-black font-['Anton'] italic text-[#39FF14]">
              {{ currentPage }}/{{ totalPages }}
            </div>
            <div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
              Page
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.dashboard-section {
  scrollbar-width: none;
}

/* 懒加载占位样式 */
.loading-image {
  background: linear-gradient(90deg, rgba(255,255,255,0.05) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* 图片加载完成后移除加载效果 */
img[src^="data:image"] {
  background: rgba(255,255,255,0.05);
}
</style>

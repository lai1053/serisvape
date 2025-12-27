<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const router = useRouter()
const { t, tm } = useI18n()

gsap.registerPlugin(ScrollTrigger)

const milestones = computed(() => tm('brandStory.milestones'))
const valueCards = computed(() => tm('brandStory.values'))
const certificateThumbs = [
  '/certificates/international-certificates/11.png',
  '/certificates/international-certificates/12.png',
  '/certificates/patents/3.png',
  '/certificates/patents/4.png',
  '/certificates/alibaba-and-made-in-china-certificates/1.png',
  '/certificates/alibaba-and-made-in-china-certificates/2.png'
]

const activeMilestone = ref(0)

onMounted(() => {
  // 设置初始激活状态
  activeMilestone.value = 0

  // 品牌理念卡片动画
  gsap.utils.toArray('.milestone-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.1
    })
  })

  // 等待DOM更新后初始化ScrollTrigger
  setTimeout(() => {
    // Sticky Scroll 交互 - 监听滚动，切换激活的里程碑
    milestones.value.forEach((milestone, index) => {
      const element = document.querySelector(`.timeline-item-${index}`)
      if (element) {
        ScrollTrigger.create({
          trigger: element,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => {
            activeMilestone.value = index
          },
          onEnterBack: () => {
            activeMilestone.value = index
          }
        })
      }
    })

    // 文字描述动画
    milestones.value.forEach((milestone, index) => {
      const descElement = document.querySelector(`.timeline-item-${index} .timeline-desc`)
      if (descElement) {
        gsap.from(descElement, {
          scrollTrigger: {
            trigger: descElement,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          delay: 0.2
        })
      }
    })
  }, 100)
})
</script>

<template>
  <section class="relative bg-black py-32 overflow-visible border-t border-white/5">
    <!-- 背景网格 -->
    <div class="absolute inset-0 opacity-[0.05] pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:100px_100px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- 标题区域 -->
      <div class="text-center mb-20" data-aos="fade-up">
        <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
          {{ t('brandStory.badge') }}
        </span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
          {{ t('brandStory.titleLine1') }}<br>
          <span class="text-[#39FF14]">{{ t('brandStory.titleLine2') }}</span>
        </h2>
        <p class="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed tracking-wider uppercase">
          {{ t('brandStory.subtitle') }}
        </p>
      </div>

      <!-- 品牌理念卡片 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <div v-for="card in valueCards" :key="card.number" class="milestone-item p-8 border border-white/10 bg-white/5 backdrop-blur-xl hover:border-[#39FF14]/50 transition-all group">
          <div class="text-[#39FF14] text-5xl font-black font-['Anton'] mb-4">{{ card.number }}</div>
          <h3 class="text-2xl font-black font-['Anton'] italic text-white uppercase mb-4">{{ card.title }}</h3>
          <p class="text-gray-400 text-xs leading-relaxed tracking-wider uppercase">
            {{ card.desc }}
          </p>
        </div>
      </div>

      <!-- 时间线 - Sticky Scroll 布局 -->
      <div class="timeline-container relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- 左侧：年份节点列表 -->
          <div class="timeline-left">
            <div v-for="(milestone, index) in milestones" :key="index"
                 :class="`timeline-item-${index} timeline-item`"
                 class="mb-16 md:mb-20 last:mb-0 min-h-[260px] flex flex-col justify-center">
              <div class="text-[#39FF14] font-mono text-[10px] tracking-[0.5em] mb-4 uppercase">
                {{ milestone.year }}
              </div>
              <h3 class="text-4xl md:text-5xl font-black font-['Anton'] italic text-white uppercase mb-6">
                {{ milestone.title }}
              </h3>
              <div class="timeline-desc text-gray-400 text-sm md:text-base leading-relaxed tracking-wider">
                {{ milestone.desc }}
              </div>
              <!-- 移动端图片 -->
              <img
                :src="milestone.image"
                :alt="milestone.title"
                class="lg:hidden w-full h-auto rounded-lg object-cover mt-8 border border-[#39FF14]"
              />
            </div>
          </div>

          <!-- 右侧：粘性图片容器 -->
          <div class="timeline-right hidden lg:block">
            <div class="sticky-image-container" style="position: sticky; top: 10%;">
              <div class="relative aspect-[4/3] w-full">
                <div v-for="(milestone, index) in milestones" :key="index"
                     :class="['timeline-image-wrapper', { 'active': activeMilestone === index }]"
                     class="absolute inset-0 transition-opacity duration-500"
                     :style="{
                       opacity: activeMilestone === index ? 1 : 0,
                       zIndex: activeMilestone === index ? 10 : 0,
                       pointerEvents: activeMilestone === index ? 'auto' : 'none'
                     }">
                  <img
                    :src="milestone.image"
                    :alt="milestone.title"
                    class="w-full h-full rounded-lg object-cover"
                    :style="{
                      filter: activeMilestone === index ? 'grayscale(0%)' : 'grayscale(100%)',
                      border: activeMilestone === index ? '1px solid #39FF14' : 'none',
                      transition: 'all 0.5s ease'
                    }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 品牌宣言 -->
      <div class="mt-32 mb-20 text-center">
        <h2 class="text-5xl md:text-7xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
          Built by Passion. Defined by Innovation.
        </h2>
        <p class="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed tracking-wider uppercase mt-6">
          Since 2015, Shenzhen Vaapee Technology has evolved from an OEM pioneer to a global brand innovator.
        </p>
      </div>

      <!-- 工厂信息 -->
      <div class="mt-32 mb-20">
        <div class="text-center mb-16">
          <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
            Built By Serisvape // Since 2015
          </span>
          <h2 class="text-5xl md:text-7xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
            BUILT BY <span class="text-[#39FF14]">SERISVAPE.</span>
          </h2>
          <p class="text-gray-400 text-sm md:text-base max-w-3xl mx-auto leading-relaxed tracking-wider uppercase mt-6">
            Founded in 2015, Shenzhen. From OEM giants to brand innovators.
          </p>
        </div>

        <!-- 工厂数据 -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="milestone-item p-8 border border-white/10 bg-white/5 backdrop-blur-xl text-center">
            <div class="text-5xl font-black font-['Anton'] text-[#39FF14] mb-4">1000+</div>
            <div class="text-sm font-black uppercase tracking-widest text-white mb-2">SQM Facility</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider">Dust-free Manufacturing</div>
          </div>

          <div class="milestone-item p-8 border border-white/10 bg-white/5 backdrop-blur-xl text-center">
            <div class="text-5xl font-black font-['Anton'] text-[#39FF14] mb-4">TPD</div>
            <div class="text-sm font-black uppercase tracking-widest text-white mb-2">FDA, CE, RoHS</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider">Certified</div>
          </div>

          <div class="milestone-item p-8 border border-white/10 bg-white/5 backdrop-blur-xl text-center">
            <div class="text-5xl font-black font-['Anton'] text-[#39FF14] mb-4">10+</div>
            <div class="text-sm font-black uppercase tracking-widest text-white mb-2">Years R&D</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider">Innovation Leader</div>
          </div>
        </div>

        <!-- 证书链接 -->
        <div class="mt-12 text-center">
          <button @click="router.push('/certificates')"
                  class="px-8 py-4 border border-[#39FF14] text-[#39FF14] font-black uppercase text-xs tracking-widest hover:bg-[#39FF14] hover:text-black transition-all">
            All manufacturing processes are fully compliant with international standards.
          </button>
        </div>
      </div>

      <!-- 证书缩略图列表 -->
      <div class="mt-24">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <button
            v-for="(thumb, index) in certificateThumbs"
            :key="thumb"
            @click="router.push('/certificates')"
            class="group aspect-[4/3] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden hover:border-[#39FF14]/50 transition-all"
            :aria-label="`Certificate ${index + 1}`"
          >
            <img
              :src="thumb"
              :alt="t('certificates.imageAlt')"
              class="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

/* 时间线描述文字动效 */
.timeline-desc {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.timeline-item.active .timeline-desc {
  opacity: 1;
  transform: translateY(0);
}

/* 图片容器样式 */
.sticky-image-container {
  height: fit-content;
  transform: translateY(60%);
}

.timeline-image-wrapper img {
  border-radius: 8px;
  padding: 2px;
}

</style>

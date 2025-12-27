<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import gsap from 'gsap'

const router = useRouter()
const { t } = useI18n()

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'instant' })
  gsap.from('.legal-content', { opacity: 0, y: 20, duration: 0.6 })
})
</script>

<template>
  <div class="min-h-screen bg-black text-white">
    <section class="relative pt-32 pb-16 overflow-hidden border-b border-white/10">
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
          <span class="text-gray-500 text-xs uppercase tracking-widest">{{ t('legal.back') }}</span>
        </div>

        <h1 class="text-5xl md:text-7xl font-black font-['Anton'] italic text-white uppercase leading-tight">
          {{ t('legal.termsTitle') }}
        </h1>
        <p class="text-gray-400 text-sm md:text-base mt-4 max-w-3xl uppercase tracking-wider">
          {{ t('legal.termsSubtitle') }}
        </p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-6">
        <div class="legal-content max-w-4xl mx-auto space-y-10 text-sm text-gray-300 leading-relaxed">
          <div>
            <h2 class="text-xl font-black uppercase text-white mb-3">{{ t('legal.sections.useTitle') }}</h2>
            <p>{{ t('legal.sections.useBody') }}</p>
          </div>
          <div>
            <h2 class="text-xl font-black uppercase text-white mb-3">{{ t('legal.sections.contentTitle') }}</h2>
            <p>{{ t('legal.sections.contentBody') }}</p>
          </div>
          <div>
            <h2 class="text-xl font-black uppercase text-white mb-3">{{ t('legal.sections.liabilityTitle') }}</h2>
            <p>{{ t('legal.sections.liabilityBody') }}</p>
          </div>
          <div>
            <h2 class="text-xl font-black uppercase text-white mb-3">{{ t('legal.sections.changesTitle') }}</h2>
            <p>{{ t('legal.sections.changesBody') }}</p>
          </div>
          <div>
            <h2 class="text-xl font-black uppercase text-white mb-3">{{ t('legal.sections.contactTitle') }}</h2>
            <p>{{ t('legal.sections.contactBody') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

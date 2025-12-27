<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t-2 border-[#39FF14] py-3 px-4 md:py-4 md:px-6 shadow-[0_-4px_20px_rgba(57,255,20,0.2)]">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
      <div class="flex items-center gap-3 md:gap-4 flex-1">
        <div class="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse flex-shrink-0"></div>
        <div class="text-center md:text-left">
          <p class="text-[#39FF14] font-black uppercase text-[10px] md:text-xs tracking-widest mb-0.5 md:mb-1">
            {{ t('healthWarning.title') }}
          </p>
          <p class="text-gray-400 text-[9px] md:text-[10px] uppercase tracking-wider leading-tight">
            {{ t('healthWarning.subtitle') }} • {{ t('healthWarning.smokingWarning') }}
          </p>
        </div>
      </div>
      <div class="text-[8px] md:text-[9px] text-gray-600 uppercase tracking-widest font-black flex-shrink-0">
        21+ ONLY
      </div>
    </div>
  </div>
</template>


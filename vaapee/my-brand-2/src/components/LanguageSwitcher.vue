<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
  { code: 'et', name: 'Eesti', flag: '🇪🇪' },
  { code: 'lv', name: 'Latviešu', flag: '🇱🇻' },
  { code: 'lt', name: 'Lietuvių', flag: '🇱🇹' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'ro', name: 'Română', flag: '🇷🇴' },
  { code: 'hu', name: 'Magyar', flag: '🇭🇺' },
  { code: 'sk', name: 'Slovenčina', flag: '🇸🇰' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
]

const isOpen = ref(false)
const dropdownRef = ref(null)
const currentLang = ref(languages.find(lang => lang.code === locale.value) || languages[0])

const switchLanguage = (langCode) => {
  locale.value = langCode
  localStorage.setItem('vapanda_lang', langCode)
  currentLang.value = languages.find(lang => lang.code === langCode)
  isOpen.value = false
}

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  const savedLang = localStorage.getItem('vapanda_lang')
  if (savedLang) {
    locale.value = savedLang
    currentLang.value = languages.find(lang => lang.code === savedLang) || languages[0]
  }
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click.stop="isOpen = !isOpen"
      class="flex items-center gap-2 px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-xl hover:border-[#39FF14]/50 transition-all group relative"
      :title="`Current Language: ${currentLang.name}`"
    >
      <span class="text-lg">{{ currentLang.flag }}</span>
      <span class="text-[10px] font-black uppercase tracking-widest text-white hidden md:inline">
        {{ currentLang.code.toUpperCase() }}
      </span>
      <svg class="w-3 h-3 text-white transition-transform" :class="{ 'rotate-180': isOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
      <!-- 悬停提示 -->
      <div class="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/90 border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        {{ currentLang.name }}
        <div class="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/20"></div>
      </div>
    </button>

    <transition name="dropdown">
      <div
        v-if="isOpen"
        @click.stop
        class="absolute top-full right-0 mt-2 w-56 bg-black border border-white/20 backdrop-blur-xl z-50 max-h-[70vh] overflow-y-auto"
      >
        <button
          v-for="lang in languages"
          :key="lang.code"
          @click="switchLanguage(lang.code)"
          :class="locale === lang.code ? 'bg-[#39FF14]/20 border-[#39FF14]' : 'border-transparent'"
          class="w-full flex items-center gap-3 px-4 py-3 border-l-2 hover:bg-white/5 transition-all text-left"
        >
          <span class="text-xl">{{ lang.flag }}</span>
          <span class="text-xs font-black uppercase tracking-widest text-white">{{ lang.name }}</span>
        </button>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>


<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { SITE_CONFIG } from '../../data/config.js'

const router = useRouter()
const { t } = useI18n()

const handleNavClick = (href) => {
  if (href.startsWith('#')) {
    // 锚点链接
    router.push('/').then(() => {
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          })
        }
      }, 100)
    })
  } else {
    router.push(href)
  }
}
</script>

<template>
  <footer class="bg-black text-white pt-24 pb-8 relative overflow-hidden">

    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[400px] font-black text-white/5 pointer-events-none select-none leading-none z-0">
      V
    </div>

    <div class="container mx-auto px-6 relative z-10">

      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 border-b border-gray-800 pb-16 mb-16">

        <div class="max-w-md">
          <h3 class="text-3xl font-black uppercase italic mb-4">{{ t('footer.newsletterTitle') }} <span class="text-brand-primary">{{ t('footer.newsletterTitleEmphasis') }}</span></h3>
          <p class="text-gray-400 text-sm">
            {{ t('footer.newsletterSubtitle') }}
          </p>
        </div>

        <div class="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <input
              type="email"
              :placeholder="t('footer.emailPlaceholder')"
              class="bg-gray-900 border border-gray-700 text-white px-6 py-4 rounded-full w-full md:w-[300px] focus:outline-none focus:border-brand-primary transition-colors text-xs font-bold tracking-widest placeholder-gray-600"
          >
          <button class="bg-brand-primary text-black px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white transition-colors shadow-[0_0_20px_rgba(57,255,20,0.4)]">
            {{ t('footer.subscribe') }}
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">

        <div>
          <h4 class="font-bold uppercase tracking-widest mb-6 text-[#39FF14] text-xs">{{ t('footer.sections.products') }}</h4>
          <ul class="space-y-4 text-sm text-gray-500 font-medium">
            <li><a @click.prevent="handleNavClick('#products')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.allProducts') }}</a></li>
            <li><a @click.prevent="handleNavClick('#multiverse')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.seriesA') }}</a></li>
            <li><a @click.prevent="handleNavClick('#titans')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.seriesB') }}</a></li>
            <li><a @click.prevent="handleNavClick('#smart-grid')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.seriesC') }}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold uppercase tracking-widest mb-6 text-[#39FF14] text-xs">{{ t('footer.sections.support') }}</h4>
          <ul class="space-y-4 text-sm text-gray-500 font-medium">
            <li><a @click.prevent="handleNavClick('#faq')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.faq') }}</a></li>
            <li><a @click.prevent="handleNavClick('#wholesale')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.wholesale') }}</a></li>
            <li><a @click.prevent="handleNavClick('#news')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.news') }}</a></li>
            <li><a @click.prevent="handleNavClick('#wholesale')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.contact') }}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold uppercase tracking-widest mb-6 text-[#39FF14] text-xs">{{ t('footer.sections.company') }}</h4>
          <ul class="space-y-4 text-sm text-gray-500 font-medium">
            <li><a @click.prevent="handleNavClick('#story')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.about') }}</a></li>
            <li><a @click.prevent="handleNavClick('/certificates')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.certificates') }}</a></li>
            <li><a @click.prevent="handleNavClick('#why-us')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.whyUs') }}</a></li>
            <li><a @click.prevent="handleNavClick('#lifestyle')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.lifestyle') }}</a></li>
            <li><a @click.prevent="handleNavClick('#testimonials')" class="hover:text-white transition-colors cursor-pointer">{{ t('footer.links.testimonials') }}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold uppercase tracking-widest mb-6 text-[#39FF14] text-xs">{{ t('footer.sections.contact') }}</h4>
          <ul class="space-y-3 text-xs text-gray-500 font-medium">
            <li class="leading-relaxed">
              <div class="text-white font-bold mb-1">{{ SITE_CONFIG.company }}</div>
              <div>{{ SITE_CONFIG.contact.address }}</div>
            </li>
            <li>
              <a :href="`mailto:${SITE_CONFIG.contact.email}`" class="hover:text-[#39FF14] transition-colors">
                {{ SITE_CONFIG.contact.email }}
              </a>
            </li>
            <li>
              <a :href="`https://wa.me/${SITE_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`" target="_blank" class="hover:text-[#39FF14] transition-colors">
                WhatsApp: {{ SITE_CONFIG.contact.whatsapp }}
              </a>
            </li>
          </ul>
          <div class="flex gap-4 mt-6">
            <a :href="SITE_CONFIG.social.instagram" target="_blank" class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all">IG</a>
            <a :href="SITE_CONFIG.social.facebook" target="_blank" class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-[#39FF14] hover:text-black transition-all">FB</a>
          </div>
        </div>

      </div>

      <div class="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-wider">
        <p>© 2025 {{ SITE_CONFIG.brand }}. {{ t('footer.rights') }}</p>
        <div class="flex gap-6">
          <a @click.prevent="handleNavClick('/privacy')" class="hover:text-gray-400 cursor-pointer">{{ t('footer.privacy') }}</a>
          <a @click.prevent="handleNavClick('/terms')" class="hover:text-gray-400 cursor-pointer">{{ t('footer.terms') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

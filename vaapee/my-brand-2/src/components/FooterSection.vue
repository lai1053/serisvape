<script setup>
import { useRouter } from 'vue-router'
import { SITE_CONFIG } from '../../data/config.js'

const router = useRouter()

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
          <h3 class="text-3xl font-black uppercase italic mb-4">Stay <span class="text-brand-primary">Connected</span></h3>
          <p class="text-gray-400 text-sm">
            Join the movement. Get the latest drops, exclusive offers, and invites to VIP events directly to your inbox.
          </p>
        </div>

        <div class="w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              class="bg-gray-900 border border-gray-700 text-white px-6 py-4 rounded-full w-full md:w-[300px] focus:outline-none focus:border-brand-primary transition-colors text-xs font-bold tracking-widest placeholder-gray-600"
          >
          <button class="bg-brand-primary text-black px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white transition-colors shadow-[0_0_20px_rgba(57,255,20,0.4)]">
            Subscribe
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">

        <div>
          <h4 class="font-bold uppercase tracking-widest mb-6 text-[#39FF14] text-xs">Products</h4>
          <ul class="space-y-4 text-sm text-gray-500 font-medium">
            <li><a @click.prevent="handleNavClick('#products')" class="hover:text-white transition-colors cursor-pointer">All Products</a></li>
            <li><a @click.prevent="handleNavClick('#multiverse')" class="hover:text-white transition-colors cursor-pointer">4-IN-1 Series</a></li>
            <li><a @click.prevent="handleNavClick('#titans')" class="hover:text-white transition-colors cursor-pointer">Titans Series</a></li>
            <li><a @click.prevent="handleNavClick('#smart-grid')" class="hover:text-white transition-colors cursor-pointer">Smart Grid</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold uppercase tracking-widest mb-6 text-[#39FF14] text-xs">Support</h4>
          <ul class="space-y-4 text-sm text-gray-500 font-medium">
            <li><a @click.prevent="handleNavClick('#faq')" class="hover:text-white transition-colors cursor-pointer">FAQ</a></li>
            <li><a @click.prevent="handleNavClick('#wholesale')" class="hover:text-white transition-colors cursor-pointer">Wholesale</a></li>
            <li><a @click.prevent="handleNavClick('#news')" class="hover:text-white transition-colors cursor-pointer">News</a></li>
            <li><a @click.prevent="handleNavClick('#wholesale')" class="hover:text-white transition-colors cursor-pointer">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold uppercase tracking-widest mb-6 text-[#39FF14] text-xs">Company</h4>
          <ul class="space-y-4 text-sm text-gray-500 font-medium">
            <li><a @click.prevent="handleNavClick('#story')" class="hover:text-white transition-colors cursor-pointer">About Us</a></li>
            <li><a @click.prevent="handleNavClick('#why-us')" class="hover:text-white transition-colors cursor-pointer">Why Choose Us</a></li>
            <li><a @click.prevent="handleNavClick('#lifestyle')" class="hover:text-white transition-colors cursor-pointer">Lifestyle</a></li>
            <li><a @click.prevent="handleNavClick('#testimonials')" class="hover:text-white transition-colors cursor-pointer">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold uppercase tracking-widest mb-6 text-[#39FF14] text-xs">Contact Info</h4>
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
        <p>© 2025 {{ SITE_CONFIG.brand }}. ALL RIGHTS RESERVED.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-gray-400">Privacy Policy</a>
          <a href="#" class="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>

      <div class="mt-12 p-4 bg-gray-900 text-center rounded-lg border border-gray-800">
        <p class="text-xs font-bold text-gray-400 uppercase">
          WARNING: This product contains nicotine. Nicotine is an addictive chemical. Only for adults (21+).
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// 1. 品牌与基础配置
const SITE_CONFIG = {
  company: "深圳市赛瑞斯电子烟科技有限公司",
  address: "中国广东深圳宝安区永和路派工业区A栋",
  whatsapp: "+86 134 2505 9749",
  email: "info@serisvape.com",
  social: {
    instagram: "https://www.instagram.com/serisvape/",
    facebook: "https://www.facebook.com/vapandaofficial/"
  }
}

// 2. 产品数据架构
const productSeries = [
  {
    name: "Series A: The Multiverse",
    desc: "多口味切换系 - 4 WORLDS. 1 CLICK.",
    products: [
      { name: "VAPANDA 4 IN 1", puffs: "120K", slogan: "THE SHAPESHIFTER", highlight: "Click-to-Shift System" },
      { name: "VAAPEE DOUBLE", puffs: "45K", slogan: "DOUBLE TROUBLE", highlight: "Dual Mesh, Dual Tank" },
      { name: "VAPANDA 2 IN 1", puffs: "80K", slogan: "MECHA GUARDIAN", highlight: "Rotary Switch" }
    ]
  },
  {
    name: "Series B: The Titans",
    desc: "超大容量系 - SILENT BEAST. INFINITE FUEL.",
    products: [
      { name: "VAAPEE STAR", puffs: "100K", slogan: "INFINITE FUEL", highlight: "3D Curved Screen" },
      { name: "VAPANDA ULTRA", puffs: "50K", slogan: "MAXIMUM VOLUME", highlight: "Massive Reservoir" },
      { name: "VAPANDA PRO", puffs: "40K", slogan: "PRO PERFORMANCE", highlight: "Robust Design" }
    ]
  },
  {
    name: "Series C: The Smart Grid",
    desc: "智能数显系 - INTELLIGENCE ON BOARD.",
    products: [
      { name: "VAAPEE X", puffs: "30K", slogan: "SMART MONITOR", highlight: "HD Digital Screen" },
      { name: "VAAPEE TORNADO", puffs: "25K", slogan: "MECHA ARTWORK", highlight: "Real-time AI Monitoring" }
    ]
  }
]

// 3. 交互逻辑
const isAgeVerified = ref(false)
const activeSeries = ref(0)

onMounted(() => {
  AOS.init({ duration: 800, easing: 'ease-out-cubic', offset: 50 })
  if (localStorage.getItem('age_verified')) isAgeVerified.value = true
})

const verifyAge = () => {
  localStorage.setItem('age_verified', 'true')
  isAgeVerified.value = true
}
</script>

<template>
  <div v-if="!isAgeVerified" class="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6">
    <div class="max-w-md w-full border border-[#39FF14] bg-[#0a0a0a] p-10 text-center relative">
      <div class="absolute top-0 left-0 w-full h-[2px] bg-[#39FF14] animate-scan"></div>
      <h2 class="text-3xl font-black font-['Anton'] italic mb-4 uppercase">Are You Over 21?</h2>
      <p class="text-gray-500 text-xs tracking-widest mb-8 uppercase">This site contains nicotine products. Nicotine is an addictive chemical.</p>
      <div class="flex flex-col gap-3">
        <button @click="verifyAge" class="bg-[#39FF14] text-black py-4 font-black uppercase hover:bg-white transition-all">Yes, I am 21+</button>
        <button class="border border-white/20 py-4 font-bold text-gray-500 uppercase text-xs">No, Exit</button>
      </div>
    </div>
  </div>

  <div class="fixed inset-0 z-0 bg-[#050505]">
    <div class="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  </div>

  <div class="relative z-10 text-white font-sans">

    <nav class="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div class="container mx-auto px-6 h-20 flex justify-between items-center">
        <div class="text-2xl font-black tracking-tighter uppercase font-['Anton'] italic">
          VAPANDA<span class="text-[#39FF14]">.</span>
        </div>
        <div class="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
          <a href="#products" class="hover:text-[#39FF14]">Products</a>
          <a href="#wholesale" class="hover:text-[#39FF14]">Wholesale</a>
          <a href="#brand" class="hover:text-[#39FF14]">Brand</a>
          <a href="#contact" class="hover:text-[#39FF14]">Contact</a>
        </div>
        <a :href="'https://wa.me/' + SITE_CONFIG.whatsapp.replace(/\D/g,'')" class="bg-[#39FF14] text-black px-5 py-2 text-[10px] font-black uppercase tracking-widest">Inquiry</a>
      </div>
    </nav>

    <section class="h-screen flex items-center relative overflow-hidden">
      <div class="container mx-auto px-6 relative z-10" data-aos="fade-up">
        <span class="text-[#39FF14] font-mono tracking-[0.5em] text-sm mb-4 block">PROJECT STREETWEAR V4.0</span>
        <h1 class="text-7xl md:text-9xl font-black font-['Anton'] italic leading-none mb-6">FULL POWER.<br>FULL FUN.</h1>
        <p class="text-gray-400 max-w-xl mb-10 tracking-widest uppercase text-sm">The Next Evolution of Vaping is Here. Authentic release, right here, right now.</p>
        <div class="flex gap-4">
          <button class="border-2 border-white px-8 py-4 font-black uppercase tracking-tighter hover:bg-[#39FF14] hover:border-[#39FF14] hover:text-black transition-all">Explore Collections</button>
        </div>
      </div>
      <div class="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[#39FF14]/10 rounded-full blur-[150px]"></div>
    </section>

    <section class="py-24 bg-[#0a0a0a] border-y border-white/5">
      <div class="container mx-auto px-6 text-center">
        <p class="text-2xl md:text-4xl font-bold italic text-gray-300 max-w-4xl mx-auto leading-relaxed">
          "VAAPEE is not about rebellion. It's about the unapologetic choice to be yourself. We create clouds for the dreamers."
        </p>
      </div>
    </section>

    <section id="products" class="py-32">
      <div class="container mx-auto px-6">
        <div v-for="(series, sIdx) in productSeries" :key="sIdx" class="mb-32">
          <div class="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
            <div>
              <h2 class="text-4xl font-black font-['Anton'] italic uppercase text-[#39FF14]">{{ series.name }}</h2>
              <p class="text-gray-500 uppercase tracking-widest text-xs mt-2">{{ series.desc }}</p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(p, pIdx) in series.products" :key="pIdx"
                 class="group relative bg-[#111] border border-white/5 p-8 hover:border-[#39FF14]/50 transition-all overflow-hidden"
                 data-aos="fade-up" :data-aos-delay="pIdx * 100">
              <div class="relative z-10">
                <span class="text-[10px] font-mono text-gray-500 mb-2 block tracking-widest">{{ p.puffs }} PUFFS</span>
                <h3 class="text-2xl font-black uppercase mb-1">{{ p.name }}</h3>
                <p class="text-[#39FF14] text-[10px] font-bold tracking-widest mb-6">{{ p.slogan }}</p>
                <div class="h-64 flex items-center justify-center bg-[#050505] mb-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                  <div class="text-gray-800 font-black text-6xl opacity-20 group-hover:opacity-100 transition-opacity">{{ p.puffs }}</div>
                </div>
                <p class="text-gray-400 text-xs mb-6 h-8 opacity-0 group-hover:opacity-100 transition-opacity">{{ p.highlight }}</p>
                <button class="w-full border border-white/10 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="wholesale" class="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div class="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="fade-right">
          <h2 class="text-6xl font-black font-['Anton'] italic mb-8">BECOME A<br><span class="text-[#39FF14]">PARTNER.</span></h2>
          <div class="space-y-8 text-gray-400 text-sm tracking-widest">
            <div class="flex gap-4"><span class="text-[#39FF14]">🚚</span> GLOBAL: DHL / SEUR / DPD / UPS / SPRING</div>
            <div class="flex gap-4"><span class="text-[#39FF14]">📦</span> MOQ: GLOBAL 10 PCS / EU WAREHOUSE 3 PCS</div>
            <div class="flex gap-4"><span class="text-[#39FF14]">⚠️</span> TERMS: NO RETURN POLICY (ALL SALES FINAL)</div>
          </div>
        </div>
        <div class="bg-[#111] p-10 border border-white/10 shadow-2xl relative" data-aos="fade-left">
          <div class="grid grid-cols-1 gap-4">
            <input type="text" placeholder="COMPANY NAME" class="bg-black/50 border border-white/10 p-4 text-xs focus:border-[#39FF14] outline-none">
            <input type="email" placeholder="EMAIL" class="bg-black/50 border border-white/10 p-4 text-xs focus:border-[#39FF14] outline-none">
            <div class="grid grid-cols-2 gap-4">
              <select class="bg-black/50 border border-white/10 p-4 text-xs text-gray-500">
                <option disabled selected>BUSINESS TYPE</option>
                <option>Retail Store</option><option>Distributor</option>
              </select>
              <input type="text" placeholder="COUNTRY" class="bg-black/50 border border-white/10 p-4 text-xs focus:border-[#39FF14] outline-none">
            </div>
            <textarea placeholder="EXPECTED VOLUME / MESSAGE" class="bg-black/50 border border-white/10 p-4 text-xs h-32 outline-none"></textarea>
            <button class="bg-[#39FF14] text-black py-4 font-black uppercase tracking-widest text-xs">Submit Application</button>
          </div>
        </div>
      </div>
    </section>

    <section id="brand" class="py-32 border-t border-white/5">
      <div class="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div class="order-2 md:order-1" data-aos="fade-right">
          <h2 class="text-4xl font-black font-['Anton'] italic mb-8 uppercase text-[#39FF14]">Built by Serisvape.</h2>
          <p class="text-gray-400 text-sm leading-relaxed mb-8 tracking-wider">
            成立于2015年，深圳市赛瑞斯电子烟科技有限公司是一家集电子烟研发、生产、销售于一体的工贸企业。拥有 Vapanda 和 Vaapee 两大品牌，工厂面积超 1000 平方米，通过 TPD、FDA、CE 等全球认证。
          </p>
          <div class="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div><div class="text-2xl font-black italic">2015</div><div class="text-[10px] text-gray-600 uppercase font-bold">Founded</div></div>
            <div><div class="text-2xl font-black italic">1000+</div><div class="text-[10px] text-gray-600 uppercase font-bold">SQM Facility</div></div>
            <div><div class="text-2xl font-black italic">10+</div><div class="text-[10px] text-gray-600 uppercase font-bold">Years R&D</div></div>
          </div>
        </div>
        <div class="order-1 md:order-2 grayscale" data-aos="fade-left">
          <div class="aspect-video bg-gray-900 flex items-center justify-center font-['Anton'] text-4xl opacity-20">SERISVAPE FACILITY</div>
        </div>
      </div>
    </section>

    <footer id="contact" class="bg-black pt-24 pb-12 border-t border-white/10">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-16 mb-20">
          <div class="col-span-1 md:col-span-2">
            <div class="text-4xl font-black font-['Anton'] italic mb-6">VAPANDA<span class="text-[#39FF14]">.</span></div>
            <p class="text-gray-500 text-xs max-w-sm tracking-widest uppercase leading-loose">
              {{ SITE_CONFIG.address }}<br>
              Email: {{ SITE_CONFIG.email }}<br>
              WhatsApp: {{ SITE_CONFIG.whatsapp }}
            </p>
          </div>
          <div>
            <h4 class="text-[10px] font-black uppercase text-white mb-6 tracking-widest">Connect</h4>
            <div class="flex flex-col gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              <a :href="SITE_CONFIG.social.instagram" target="_blank" class="hover:text-[#39FF14]">Instagram</a>
              <a :href="SITE_CONFIG.social.facebook" target="_blank" class="hover:text-[#39FF14]">Facebook</a>
            </div>
          </div>
          <div>
            <h4 class="text-[10px] font-black uppercase text-white mb-6 tracking-widest">Company</h4>
            <div class="flex flex-col gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              <a href="#" class="hover:text-[#39FF14]">Privacy Policy</a>
              <a href="#" class="hover:text-[#39FF14]">Terms of Sale</a>
              <a href="#" class="hover:text-[#39FF14]">Compliance</a>
            </div>
          </div>
        </div>

        <div class="border-y border-white/5 py-8 mb-8 text-center">
          <p class="text-gray-500 font-black text-xs md:text-xl tracking-tighter uppercase opacity-50">
            WARNING: This product contains nicotine. Nicotine is an addictive chemical.
          </p>
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-700 font-bold uppercase tracking-widest">
          <p>© 2025 {{ SITE_CONFIG.company }}. ALL RIGHTS RESERVED.</p>
          <p>STREETWEAR PROJECT V4.0 FINAL</p>
        </div>
      </div>
    </footer>

    <a :href="'https://wa.me/' + SITE_CONFIG.whatsapp.replace(/\D/g,'')"
       class="fixed bottom-8 right-8 z-[60] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform">
      <svg class="w-8 h-8 text-white fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.405c0 6.555-5.332 11.89-11.888 11.89-2.015 0-4.001-.512-5.761-1.483l-6.223 1.705zm6.18-3.321l.343.204c1.61.956 3.466 1.461 5.367 1.461 5.753 0 10.435-4.682 10.435-10.435 0-2.787-1.085-5.406-3.056-7.377-1.972-1.971-4.591-3.056-7.379-3.056-5.752 0-10.435 4.682-10.435 10.435 0 2.062.603 4.075 1.745 5.802l.225.342-1.117 4.08 4.187-1.148z"/></svg>
    </a>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;700;900&display=swap');

.font-sans { font-family: 'Inter', sans-serif; }

/* 核心扫描动画 */
@keyframes scan {
  0% { transform: translateY(-100px); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
.animate-scan {
  animation: scan 4s linear infinite;
}

/* 霓虹发光效果 */
.hover\:shadow-neon:hover {
  box-shadow: 0 0 20px rgba(57, 255, 20, 0.4);
}

::selection {
  background: #39FF14;
  color: #000;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #000;
}
::-webkit-scrollbar-thumb {
  background: #39FF14;
}
</style>

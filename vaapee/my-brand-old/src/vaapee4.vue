<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(() => {
  AOS.init({ duration: 800, easing: 'ease-out-cubic', offset: 50 })
})

const activeFeature = ref(0)

const features = [
  { id: 0, title: "DUAL MESH", desc: "Double the flavor intensity with instant heating.", icon: "⚡" },
  { id: 1, title: "SMART OS", desc: "Real-time AI monitoring for battery & liquid.", icon: "🧠" },
  { id: 2, title: "9000 PUFFS", desc: "High-density cobalt core for lasting power.", icon: "🔋" },
]
</script>

<template>
  <div class="fixed inset-0 z-0 bg-[#0a0a0a]">
    <div class="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-gradient-to-b from-gray-800/20 to-transparent blur-[100px]"></div>
  </div>

  <div class="relative z-10 min-h-screen text-white font-sans selection:bg-white selection:text-black">

    <nav class="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div class="container mx-auto px-6 h-20 flex justify-between items-center">
        <div class="text-2xl font-black tracking-tighter uppercase font-['Anton'] italic">
          VAAPEE<span class="text-[#39FF14]">.</span>
        </div>

        <div class="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-400">
          <a href="#" class="hover:text-white transition-colors">Products</a>
          <a href="#" class="hover:text-white transition-colors">Technology</a>
          <a href="#" class="hover:text-white transition-colors">Brand</a>
          <a href="#" class="hover:text-white transition-colors">Support</a>
        </div>

        <button class="border border-white/20 px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Store
        </button>
      </div>
    </nav>

    <section class="relative h-screen flex items-center pt-20 overflow-hidden">

      <div class="absolute inset-0 z-0 overflow-hidden">
        <video
            autoplay
            loop
            muted
            playsinline
            class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        >
          <source src="/bg-video2.mp4" type="video/mp4" />
        </video>

        <div class="absolute inset-0 bg-black/70 mix-blend-multiply"></div>

        <div class="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      <div class="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full relative z-10">
        <div class="order-2 lg:order-1 relative z-20" data-aos="fade-up">
          <div class="flex items-center gap-4 mb-8">
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 border-t border-white/5 bg-[#0e0e0e]">
      <div class="container mx-auto px-6">
        <div class="flex justify-between items-end mb-12">
          <h2 class="text-4xl font-black uppercase font-['Anton']">Showcase</h2>
          <a href="#" class="text-xs font-bold text-gray-500 uppercase tracking-widest hover:text-white">View All -></a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">

          <div class="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-gray-900 border border-white/5" data-aos="fade-in">
            <img
                src="../src/img/mj_gir_bc.png"
                class="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                alt="Lifestyle"
            >
            <div class="absolute bottom-8 left-8">
              <span class="bg-white text-black px-2 py-1 text-[10px] font-bold uppercase tracking-widest mb-2 inline-block">Collection</span>
              <h3 class="text-3xl font-bold uppercase">Urban Legend</h3>
            </div>
          </div>

          <div class="relative group overflow-hidden bg-gray-900 border border-white/5" data-aos="fade-in" data-aos-delay="100">
            <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
                class="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                alt="Tech"
            >
            <div class="absolute inset-0 flex flex-col justify-center items-center">
              <span class="text-4xl font-mono text-[#39FF14]">0.001s</span>
              <span class="text-[10px] uppercase tracking-[0.2em] text-gray-400 mt-2">Firing Speed</span>
            </div>
          </div>

          <div class="relative group overflow-hidden bg-[#151515] border border-white/5 flex items-center justify-center" data-aos="fade-in" data-aos-delay="200">
            <img
                src="./img/prod-orange.jpg"
                class="w-[60%] object-contain drop-shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500"
                alt="New Product"
            >
            <div class="absolute top-4 right-4 text-right">
              <div class="text-[#ff4d00] font-bold text-sm">NEW</div>
              <div class="text-[10px] text-gray-500 uppercase">Tornado 25000</div>
            </div>
          </div>

          <div class="md:col-span-2 bg-[#39FF14] text-black flex items-center justify-between px-8 relative overflow-hidden group" data-aos="fade-in" data-aos-delay="300">
            <h3 class="text-4xl md:text-5xl font-black italic uppercase relative z-10">
              Full Power. <br> Full Fun.
            </h3>
            <div class="w-32 h-32 border-4 border-black rounded-full absolute -right-4 -bottom-4 opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
            <button class="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center relative z-10 hover:bg-white hover:text-black transition-colors">
              ↗
            </button>
          </div>

        </div>
      </div>
    </section>

    <section class="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div class="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        <div class="relative rounded-2xl overflow-hidden border border-white/10" data-aos="fade-right">
          <img src="./img/tech-screen.jpg" class="w-full grayscale hover:grayscale-0 transition-all duration-700" alt="Tech">
          <div class="absolute top-0 left-0 w-full h-[2px] bg-[#39FF14] shadow-[0_0_20px_#39FF14] animate-scan"></div>
        </div>

        <div data-aos="fade-left">
          <h2 class="text-4xl font-black uppercase mb-12 font-['Anton']">Core Technology</h2>

          <div class="space-y-6">
            <div
                v-for="(feature, index) in features"
                :key="feature.id"
                @mouseenter="activeFeature = index"
                class="border-b border-white/10 pb-6 cursor-pointer group"
            >
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold uppercase transition-colors" :class="activeFeature === index ? 'text-[#39FF14]' : 'text-white'">
                  <span class="mr-4 text-sm font-mono text-gray-600">0{{ index + 1 }}</span>
                  {{ feature.title }}
                </h3>
                <span class="text-xl opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>

              <div
                  class="overflow-hidden transition-all duration-500 ease-in-out"
                  :style="{ maxHeight: activeFeature === index ? '100px' : '0px' }"
              >
                <p class="text-gray-400 text-sm pl-10">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <footer class="bg-black border-t border-white/10 pt-20 pb-10">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-12 mb-20">
          <div class="col-span-1 md:col-span-2">
            <h2 class="text-4xl font-black italic tracking-tighter uppercase mb-6">Vaapee.</h2>
            <p class="text-gray-500 text-sm max-w-sm">
              Redefining the vaping experience through technological innovation and street culture aesthetics.
            </p>
          </div>
          <div>
            <h4 class="text-xs font-bold text-white uppercase tracking-widest mb-6">Platform</h4>
            <ul class="space-y-4 text-xs text-gray-500 uppercase font-bold tracking-wider">
              <li><a href="#" class="hover:text-[#39FF14]">Latest Drops</a></li>
              <li><a href="#" class="hover:text-[#39FF14]">Technology</a></li>
              <li><a href="#" class="hover:text-[#39FF14]">Visuals</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-bold text-white uppercase tracking-widest mb-6">Company</h4>
            <ul class="space-y-4 text-xs text-gray-500 uppercase font-bold tracking-wider">
              <li><a href="#" class="hover:text-[#39FF14]">About Us</a></li>
              <li><a href="#" class="hover:text-[#39FF14]">Contact</a></li>
              <li><a href="#" class="hover:text-[#39FF14]">Warranty</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
          <p>© 2025 VAAPEE TECHNOLOGY. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED BY GEMINI.</p>
        </div>
      </div>
    </footer>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;600;800&display=swap');

.font-sans { font-family: 'Inter', sans-serif; }

/* 扫描线动画 */
@keyframes scan {
  0% { top: 0%; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
.animate-scan {
  animation: scan 3s linear infinite;
}
</style>

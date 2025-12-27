<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

// 1. 物流时效数据
const logistics = [
  { region: "North America", carrier: "DHL / UPS", time: "3-5 Days", status: "STABLE" },
  { region: "European Union", carrier: "DPD / DHL", time: "5-7 Days", status: "FAST" },
  { region: "Middle East", carrier: "Aramex", time: "4-6 Days", status: "EXPRESS" },
  { region: "Southeast Asia", carrier: "Special Line", time: "2-4 Days", status: "HOT" }
]

// 2. 表单逻辑
const form = ref({ name: '', email: '', country: '', message: '' })
const isSubmitting = ref(false)

const submitInquiry = () => {
  isSubmitting.value = true
  setTimeout(() => {
    alert('Inquiry Sent. Our sales team will contact you within 2 hours.')
    isSubmitting.value = false
  }, 1500)
}

onMounted(() => {
  // 航线发光路径动画
  gsap.to(".route-line", { strokeDashoffset: 0, duration: 3, repeat: -1, ease: "none" })
})
</script>

<template>
  <section class="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">

    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      <svg class="w-full h-full opacity-30" viewBox="0 0 1000 500">
        <path d="M200,150 Q500,50 800,200" fill="none" stroke="#39FF14" stroke-width="2" stroke-dasharray="1000" stroke-dashoffset="1000" class="route-line" />
        <path d="M200,150 Q400,300 700,400" fill="none" stroke="#39FF14" stroke-width="2" stroke-dasharray="1000" stroke-dashoffset="1000" class="route-line" />
      </svg>
    </div>

    <div class="container mx-auto px-6 relative z-10">

      <div class="mb-20">
        <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">Global Supply Chain // V4.0</span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none">
          Wholesale<br><span class="text-[#39FF14]">Logistics.</span>
        </h2>
        <p class="mt-6 text-gray-500 text-sm tracking-widest uppercase max-w-xl">
          Empowering your business with high-speed delivery and a 1000m² dust-free manufacturing base.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

        <div class="space-y-6">
          <div v-for="item in logistics" :key="item.region"
               class="p-8 bg-white/2 border border-white/5 hover:border-[#39FF14]/30 transition-all group">
            <div class="flex justify-between items-center">
              <div>
                <div class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{{ item.region }}</div>
                <div class="text-2xl font-black font-['Anton'] italic text-white uppercase">{{ item.carrier }}</div>
              </div>
              <div class="text-right">
                <div class="text-[#39FF14] font-mono text-xl font-bold italic">{{ item.time }}</div>
                <div class="text-[8px] bg-[#39FF14]/10 text-[#39FF14] px-2 py-0.5 inline-block mt-2">{{ item.status }}</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-12">
            <div class="p-6 border border-white/10 text-center">
              <div class="text-3xl font-black font-['Anton'] text-white">1,000㎡+</div>
              <div class="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Production Base</div>
            </div>
            <div class="p-6 border border-white/10 text-center">
              <div class="text-3xl font-black font-['Anton'] text-[#39FF14]">100% QC</div>
              <div class="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Dust-free Workshop</div>
            </div>
          </div>
        </div>

        <div class="bg-white/5 p-10 md:p-12 border border-white/10 backdrop-blur-xl relative">
          <div class="absolute -top-4 -right-4 bg-[#39FF14] text-black text-[10px] font-black px-4 py-2 uppercase tracking-tighter">
            B2B Priority
          </div>

          <h3 class="text-3xl font-black font-['Anton'] italic text-white uppercase mb-8">Start Your Partnership</h3>

          <form @submit.prevent="submitInquiry" class="space-y-6">
            <div class="space-y-2">
              <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Full Name</label>
              <input v-model="form.name" type="text" required class="w-full bg-black/50 border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none transition-all" />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email</label>
                <input v-model="form.email" type="email" required class="w-full bg-black/50 border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none transition-all" />
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Country</label>
                <input v-model="form.country" type="text" required class="w-full bg-black/50 border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none transition-all" />
              </div>
            </div>
            <div class="space-y-2">
              <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Purchase Intent / Message</label>
              <textarea v-model="form.message" rows="4" class="w-full bg-black/50 border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none transition-all"></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting"
                    class="w-full py-6 bg-[#39FF14] text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all shadow-neon disabled:opacity-50">
              {{ isSubmitting ? 'PROCESSING...' : 'SUBMIT PARTNERSHIP REQUEST' }}
            </button>
          </form>
        </div>

      </div>
    </div>

    <div class="mt-32 w-full py-6 bg-black border-t border-white/10 text-center">
      <p class="text-[9px] md:text-[11px] text-gray-600 font-bold tracking-[0.3em] uppercase">
        WARNING: This product contains nicotine. Nicotine is an addictive chemical.
      </p>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.shadow-neon:hover {
  box-shadow: 0 0 30px rgba(57, 255, 20, 0.4);
}

/* 输入框动画 */
input:focus, textarea:focus {
  box-shadow: inset 0 0 10px rgba(57, 255, 20, 0.1);
}
</style>

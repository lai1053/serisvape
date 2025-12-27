<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 1. 完整的 20 款 Tornado 产品矩阵
const smartProducts = [
  // --- 第一组：数显经典款 (Flat Box Style) ---
  { name: "Tornado 18K", flavor: "Cherry Cola Ice", mecha: "CORE_SYSTEM", color: "#FF4500", img: "/src/img/tornado/CHERRY COLA ICE.png", battery: 98, liquid: 85 },
  { name: "Tornado 18K", flavor: "Blue Razz Lemonade", mecha: "MECHA LEOPARD", color: "#00BFFF", img: "/src/img/tornado/Blue RAZZ Lemonade.png", battery: 91, liquid: 82 },
  { name: "Tornado 18K", flavor: "Cherry Cola", mecha: "MECHA FOX", color: "#B22222", img: "/src/img/tornado/Red_Energy_Ice_Cherry_Cola.png", battery: 97, liquid: 90 },
  { name: "Tornado 18K", flavor: "Kiwi Passion Fruit Guava", mecha: "CORE_SYSTEM", color: "#39FF14", img: "/src/img/tornado/KIWI PASSION FRUIT GUAVA.png", battery: 95, liquid: 88 },
  { name: "Tornado 18K", flavor: "Peach Mango Watermelon", mecha: "CORE_SYSTEM", color: "#FFA500", img: "/src/img/tornado/Watermelon_ice.png", battery: 91, liquid: 65 },
  { name: "Tornado 18K", flavor: "Mixed Berries", mecha: "CORE_SYSTEM", color: "#4B0082", img: "/src/img/tornado/MIXED BERRIES.png", battery: 84, liquid: 50 },
  { name: "Tornado 18K", flavor: "Red Bull", mecha: "CORE_SYSTEM", color: "#FF0000", img: "/src/img/tornado/RedBull.png", battery: 100, liquid: 100 },
  { name: "Tornado 18K", flavor: "Strawberry Raspberry Cherry", mecha: "CORE_SYSTEM", color: "#FF1493", img: "/src/img/tornado/Strawberry raspberry cherry.png", battery: 76, liquid: 30 },
  { name: "Tornado 18K", flavor: "Blue Razz Lemonade", mecha: "CORE_SYSTEM", color: "#1E90FF", img: "/src/img/tornado/BLUE RAZZ LEMONADE.png", battery: 89, liquid: 75 },
  // --- 第二组：圆柱机甲款 (Cylindrical Mecha Series) ---
  { name: "Tornado 18K", flavor: "Cranberry Grape", mecha: "MECHA MONSTER", color: "#800080", img: "/src/img/tornado/Cranberry Grape.png", battery: 99, liquid: 88 },
  { name: "Tornado 18K", flavor: "Peach Ice", mecha: "MECHA GORILLA", color: "#FFDAB9", img: "/src/img/tornado/PEACH ICE.png", battery: 100, liquid: 95 },
  { name: "Tornado 18K", flavor: "Mixed Berries", mecha: "MECHA BIRD", color: "#9400D3", img: "/src/img/tornado/Mixed berries.png", battery: 85, liquid: 60 },
  { name: "Tornado 18K", flavor: "Gummy Bear", mecha: "MECHA BEAR", color: "#FF69B4", img: "/src/img/tornado/Gummy bear.png", battery: 92, liquid: 80 },
  { name: "Tornado 18K", flavor: "Kiwi Passion Fruit Guava", mecha: "MECHA WOLF", color: "#32CD32", img: "/src/img/tornado/Kiwi passion fruit guava.png", battery: 94, liquid: 85 },
  { name: "Tornado 18K", flavor: "Blueberry Ice", mecha: "CORE_SYSTEM", color: "#00BFFF", img: "/src/img/tornado/BLUEBERRY ICE.png", battery: 93, liquid: 82 },

  { name: "Tornado 18K", flavor: "Strawberry Banana", mecha: "CORE_SYSTEM", color: "#FF69B4", img: "/src/img/tornado/STRAWBEERY BANANA.png", battery: 88, liquid: 70 },

  { name: "Tornado 18K", flavor: "Blue Razz Ice", mecha: "DIGITAL DOLPHIN", color: "#00FFFF", img: "/src/img/tornado/Blue razz ice.png", battery: 100, liquid: 100 },
  { name: "Tornado 18K", flavor: "Grape Ice", mecha: "GREEN BEAR", color: "#228B22", img: "/src/img/tornado/Grape ice.png", battery: 88, liquid: 75 },
  { name: "Tornado 18K", flavor: "Grape Ice", mecha: "CORE_SYSTEM", color: "#8A2BE2", img: "/src/img/tornado/GRAPE ICE.png", battery: 100, liquid: 92 },

  { name: "Tornado 18K", flavor: "Blueberry Ice", mecha: "MECHA DRAGON", color: "#4169E1", img: "/src/img/tornado/Blueberry ice.png", battery: 78, liquid: 45 }
]
// SmartGrid.vue 这个文件里的 smartProducts数组里面的 img 路径有问题。文件名带了很多空格，而且文件格式也不对

const activeIdx = ref(0)
const liquidVal = ref(0)
const batteryVal = ref(0)

const updateStats = (index) => {
  activeIdx.value = index
  // 模拟数据实时跳动动画
  gsap.to(liquidVal, { value: smartProducts[index].liquid, duration: 1, roundProps: "value" })
  gsap.to(batteryVal, { value: smartProducts[index].battery, duration: 1, roundProps: "value" })
}

onMounted(() => {
  updateStats(0)
})
</script>

<template>
  <section class="dashboard-section relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">

    <div class="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
      <h3 class="text-[30vw] font-black font-['Anton'] italic text-white leading-none uppercase transition-all duration-700">
        {{ smartProducts[activeIdx].mecha.split('_')[0] }}
      </h3>
    </div>

    <div class="container mx-auto px-6 relative z-10">

      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div class="max-w-xl">
          <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">
            Series C // The Smart Grid System
          </span>
          <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-[0.85]">
            Command<br>
            <span :style="{ color: smartProducts[activeIdx].color }" class="transition-colors duration-500">Center.</span>
          </h2>
        </div>

        <div class="relative w-48 h-48 rounded-full border-4 border-white/10 flex flex-col items-center justify-center bg-black shadow-[0_0_50px_rgba(57,255,20,0.1)]">
          <div class="text-5xl font-mono font-black text-white">{{ liquidVal }}%</div>
          <div class="text-[10px] font-bold text-[#39FF14] tracking-widest uppercase italic mt-1">Liquid</div>
          <svg class="absolute inset-0 w-full h-full -rotate-90">
            <circle cx="96" cy="96" r="90" fill="none" stroke="currentColor" stroke-width="4" class="text-white/5" />
            <circle cx="96" cy="96" r="90" fill="none" stroke="currentColor" stroke-width="4"
                    :style="{ color: smartProducts[activeIdx].color, strokeDasharray: `${liquidVal * 5.65} 565` }"
                    class="transition-all duration-1000" />
          </svg>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row gap-12 items-start">
        <div class="w-full lg:w-3/5 grid grid-cols-4 md:grid-cols-5 gap-3">
          <div v-for="(p, i) in smartProducts" :key="i"
               @mouseenter="updateStats(i)"
               class="relative group cursor-pointer border transition-all duration-300"
               :class="activeIdx === i ? 'border-[#39FF14] scale-105 z-20' : 'border-white/5 opacity-40 hover:opacity-100'">
            <img :src="p.img" class="w-full aspect-[3/4] object-cover" />
            <div class="absolute bottom-0 left-0 w-full p-1 bg-black/80 text-[7px] font-bold text-white uppercase text-center overflow-hidden whitespace-nowrap">
              {{ p.flavor.split(' ')[0] }}
            </div>
          </div>
        </div>

        <div class="w-full lg:w-2/5 bg-white/5 p-8 border border-white/10 backdrop-blur-xl">
          <div class="mb-12">
            <div class="flex justify-between items-start mb-2">
              <h4 class="text-3xl font-black font-['Anton'] italic text-white uppercase">{{ smartProducts[activeIdx].mecha }}</h4>
              <span class="text-[#39FF14] font-mono text-[9px] border border-[#39FF14] px-2 py-0.5">ACTIVE</span>
            </div>
            <p class="text-gray-500 font-bold tracking-widest text-xs uppercase">{{ smartProducts[activeIdx].flavor }}</p>
          </div>

          <div class="space-y-10">
            <div class="space-y-3">
              <div class="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span>Battery Integrity ⚡</span>
                <span class="text-white">{{ batteryVal }}%</span>
              </div>
              <div class="h-1 w-full bg-white/5">
                <div class="h-full transition-all duration-700"
                     :style="{ width: `${batteryVal}%`, backgroundColor: smartProducts[activeIdx].color }"></div>
              </div>
            </div>

            <div class="space-y-3">
              <div class="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span>E-Liquid Capacity 💧</span>
                <span class="text-white">{{ liquidVal }}%</span>
              </div>
              <div class="h-1 w-full bg-white/5">
                <div class="h-full transition-all duration-700 delay-100"
                     :style="{ width: `${liquidVal}%`, backgroundColor: smartProducts[activeIdx].color }"></div>
              </div>
            </div>
          </div>

          <div class="mt-16 grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/10 pt-10">
            <div v-for="spec in ['HD_DIGITAL_SCREEN', 'ECO_MAX_SWITCH', 'TYPE_C_FAST_CHARGE', 'MESH_2.0_CORE']" :key="spec"
                 class="text-[9px] font-bold text-gray-500 flex items-center gap-2">
              <div class="w-1 h-1 bg-[#39FF14]"></div> {{ spec }}
            </div>
          </div>

          <button class="w-full mt-12 py-5 bg-[#39FF14] text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-[0_0_30px_rgba(57,255,20,0.3)]">
            Wholesale Inquiry
          </button>
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

/* 进度条平滑过渡 */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>

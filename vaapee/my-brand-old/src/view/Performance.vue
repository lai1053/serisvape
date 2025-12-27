<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 1. 泰坦系产品数据：根据你上传的图片更新
const titans = [
  {
    name: "ULTRA 50K",
    puffs: "50,000",
    slogan: "CYBER LEATHER EDITION",
    color: "#39FF14",
    // 请确保图片文件名与你的文件夹内一致
    img: "/src/img/titan/BLUEBERRY.png",
    features: ["PREMIUM LEATHER GRIP", "SIDE MECHA MONITOR", "50K TITAN PUFFS"]
  },
  {
    name: "STAR 100K",
    puffs: "100,000",
    slogan: "INFINITE POWER STATION",
    color: "#FFD700",
    img: "/src/img/titan/Peach-Mango-Watermelon.png",
    features: ["3D CURVED SCREEN", "DUAL TANK SYSTEM", "MESH 2.0 TECH"]
  },
  {
    name: "PRO 40K",
    puffs: "40,000",
    slogan: "INDUSTRIAL PERFORMANCE",
    color: "#FF007F",
    img: "/src/img/titan/STRAWBERRY.png",
    features: ["ROBUST DESIGN", "STABLE VOLTAGE", "FAST CHARGE"]
  }
]

onMounted(() => {
  // 泰坦数字与产品视差联动
  titans.forEach((_, i) => {
    const target = `.titan-item-${i}`;

    // 背景大数字：向上漂移并放大
    gsap.from(`${target} .titan-bg-number`, {
      scrollTrigger: {
        trigger: target,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
      },
      scale: 1.5,
      y: 100,
      opacity: 0,
      filter: "blur(20px)"
    });

    // 产品实物图：从下方升起并带有呼吸发光
    gsap.from(`${target} .titan-product-img`, {
      scrollTrigger: {
        trigger: target,
        start: "top 80%",
        end: "top center",
        scrub: 1
      },
      y: 150,
      rotateZ: 5,
      scale: 0.8,
      opacity: 0
    });
  });
})
</script>

<template>
  <section class="relative bg-black py-40 overflow-hidden">

    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:100px_100px]"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div v-for="(item, idx) in titans" :key="idx"
           :class="`titan-item-${idx}`"
           class="min-h-screen flex flex-col justify-center mb-40 last:mb-0">

        <div class="flex flex-col lg:flex-row items-center justify-between gap-20">

          <div class="relative w-full lg:w-3/5 flex items-center justify-center">
            <h2 class="titan-bg-number absolute font-['Anton'] italic font-black text-[30vw] leading-none select-none transition-all duration-700"
                :style="{ color: 'transparent', WebkitTextStroke: `2px ${item.color}`, opacity: 0.1 }">
              {{ item.puffs.split(',')[0] }}K
            </h2>

            <div class="titan-product-img relative z-20 w-full max-w-md">
              <div class="relative group">
                <div class="absolute inset-0 blur-[60px] opacity-30 transition-colors duration-1000"
                     :style="{ background: item.color }"></div>

                <img :src="item.img"
                     :alt="item.name"
                     class="relative z-10 w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>

          <div class="w-full lg:w-2/5 space-y-10" data-aos="fade-left">
            <div>
              <span class="font-mono text-[10px] tracking-[0.5em] font-bold transition-colors" :style="{ color: item.color }">
                SERIES B // THE TITANS
              </span>
              <h3 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none mt-4">
                {{ item.name }}
              </h3>
              <p class="text-gray-500 font-bold tracking-widest mt-2">{{ item.slogan }}</p>
            </div>

            <div class="grid grid-cols-1 gap-6 border-t border-white/10 pt-10">
              <div v-for="feat in item.features" :key="feat" class="flex items-center gap-4 group">
                <div class="w-10 h-[1px] bg-white/20 group-hover:w-14 transition-all duration-500" :style="{ backgroundColor: item.color }"></div>
                <span class="text-xs font-black tracking-[0.3em] text-gray-400 group-hover:text-white uppercase transition-colors">
                  {{ feat }}
                </span>
              </div>
            </div>

            <div class="pt-6">
              <button class="px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-[#39FF14] transition-all shadow-neon">
                Wholesale Inquiry
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.shadow-neon:hover {
  box-shadow: 0 0 40px rgba(57, 255, 20, 0.5);
}

.titan-bg-number {
  will-change: transform, opacity, filter;
}

/* 隐藏滚动条 */
section {
  scrollbar-width: none;
}
</style>

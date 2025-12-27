<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// 1. 扩展 10 款口味数据，增加对应的右侧技术参数
const flavors = [
  {
    name: "Red Bull + Blue Razz Ice", mecha: "BATTLE TIGER", color: "#DC143C",
    img: "/src/img/4n1/Cherry.png",
    specs: { puffs: "12,000", coil: "TURBO MESH", battery: "850mAh", volt: "3.9V" }
  },
  {
    name: "Blue Razz Lemonade + Apple Peach", mecha: "CYBER DRAGON", color: "#00CED1",
    img: "/src/img/4n1/blue.png",
    specs: { puffs: "12,000", coil: "DUAL MESH", battery: "850mAh", volt: "3.7V" }
  },
  {
    name: "Lemon Lime + Peach Ice", mecha: "GOLDEN LION", color: "#FFD700",
    img: "/src/img/4n1/lemon.png",
    specs: { puffs: "12,000", coil: "SILK MESH", battery: "850mAh", volt: "3.6V" }
  },
  {
    name: "Kiwi Passion Fruit + Sour Apple", mecha: "KAIJU UNICORN", color: "#9370DB",
    img: "/src/img/4n1/passion.png",
    specs: { puffs: "12,000", coil: "PRO MESH", battery: "850mAh", volt: "3.8V" }
  },
  {
    name: "Double Apple + Peach Ice", mecha: "GREEN APES", color: "#32CD32",
    img: "/src/img/4n1/doubleApple.png",
    specs: { puffs: "12,000", coil: "DUAL MESH", battery: "850mAh", volt: "3.7V" }
  },
  {
    name: "Blueberry Mint + Strawberry Raspberry", mecha: "WHITE TIGER", color: "#E6E6FA",
    img: "/src/img/4n1/blue.png",
    specs: { puffs: "12,000", coil: "NANO MESH", battery: "850mAh", volt: "3.5V" }
  },
  {
    name: "Blueberry Watermelon + Strawberry", mecha: "MECHA ELEPHANT", color: "#87CEEB",
    img: "/src/img/4n1/blue.png",
    specs: { puffs: "12,000", coil: "ULTRA MESH", battery: "850mAh", volt: "3.7V" }
  },
  {
    name: "Peach Mango Watermelon + Ice", mecha: "HUNTING FALCON", color: "#FF4500",
    img: "/src/img/4n1/blue.png",
    specs: { puffs: "12,000", coil: "QUAD MESH", battery: "850mAh", volt: "4.0V" }
  },
  {
    name: "Red Energy Ice + Cherry Cola", mecha: "MECHA MONKEY", color: "#FFD700",
    img: "/src/img/4n1/RedBull.png",
    specs: { puffs: "12,000", coil: "BOOST MESH", battery: "850mAh", volt: "3.8V" }
  },
  {
    name: "Blueberry Ice + Mixed Berries", mecha: "DEEP SEA BEAST", color: "#00008B",
    img: "/src/img/4n1/StrawberryRaspberryCherry.png",
    specs: { puffs: "12,000", coil: "TITAN MESH", battery: "850mAh", volt: "3.7V" }
  }
]

const activeIdx = ref(0)

onMounted(() => {
  const sections = gsap.utils.toArray('.flavor-step')
  sections.forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => updateActive(i),
      onEnterBack: () => updateActive(i),
    })
  })

  function updateActive(i) {
    activeIdx.value = i
    gsap.fromTo(".bg-glow", { opacity: 0.8 }, { opacity: 0.3, duration: 1 })
    gsap.fromTo(".mecha-text-bg", { y: 50, opacity: 0 }, { y: 0, opacity: 0.1, duration: 0.8 })
  }
})
</script>

<template>
  <section class="relative bg-black">
    <div class="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
      <div class="bg-glow absolute inset-0 transition-colors duration-1000 opacity-20"
           :style="{ background: `radial-gradient(circle at 50% 50%, ${flavors[activeIdx].color}, transparent 70%)` }"></div>

      <div class="mecha-text-bg absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <h3 class="text-[25vw] font-black font-['Anton'] italic leading-none uppercase transition-all duration-1000"
            :style="{ color: flavors[activeIdx].color, opacity: 0.08 }">
          {{ flavors[activeIdx].mecha }}
        </h3>
      </div>

      <div class="relative z-20 w-full max-w-lg transition-transform duration-700 hover:scale-105">
        <div class="aspect-[3/4] bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center relative overflow-hidden">

          <div class="absolute z-0 text-white/10 font-black text-9xl italic transition-colors duration-1000"
               :style="{ color: flavors[activeIdx].color, opacity: 0.15 }">120K</div>

          <transition name="product-fade" mode="out-in">
            <img :key="activeIdx"
                 :src="flavors[activeIdx].img"
                 :alt="flavors[activeIdx].name"
                 class="relative z-10 w-4/5 h-4/5 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
          </transition>

          <div class="absolute bottom-6 left-6 right-6 p-6 border border-white/10 bg-black/80 backdrop-blur-md z-20">
            <div class="flex justify-between items-center mb-4">
              <span class="text-[9px] font-mono font-bold tracking-[0.2em]" :style="{ color: flavors[activeIdx].color }">MONITOR_STATUS</span>
              <div class="w-12 h-[2px] bg-white/10 overflow-hidden">
                <div class="h-full animate-progress" :style="{ backgroundColor: flavors[activeIdx].color }"></div>
              </div>
            </div>

            <div class="flex gap-2">
              <div v-for="i in 10" :key="i"
                   class="h-1 flex-1 transition-all duration-300"
                   :style="{
               backgroundColor: activeIdx === (i-1) ? flavors[activeIdx].color : 'rgba(255,255,255,0.05)',
               boxShadow: activeIdx === (i-1) ? `0 0 10px ${flavors[activeIdx].color}` : 'none'
             }"></div>
            </div>

            <div class="mt-4 flex justify-between items-center">
              <div class="text-[10px] font-['Anton'] italic text-white uppercase tracking-wider">{{ flavors[activeIdx].name }}</div>
              <div class="text-[9px] font-mono transition-colors duration-500" :style="{ color: flavors[activeIdx].color }">READY_TO_VAPE</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative z-30">
      <div v-for="(f, i) in flavors" :key="i"
           class="flavor-step h-screen flex items-center justify-between px-10 md:px-24 lg:px-32">

        <div class="max-w-xs md:max-w-md pointer-events-none" data-aos="fade-right">
          <span class="font-mono text-[10px] tracking-[0.5em] block mb-4 transition-colors duration-700"
                :style="{ color: f.color }">SKU_PROFILE_0{{ i + 1 }}</span>

          <h4 class="text-4xl md:text-6xl font-black font-['Anton'] italic text-white uppercase leading-none mb-6">
            {{ f.name.split(' + ')[0] }}<br>
            <span class="transition-colors duration-700" :style="{ color: f.color }">
              + {{ f.name.split(' + ')[1] }}
            </span>
          </h4>

          <p class="text-gray-400 text-xs tracking-[0.2em] leading-relaxed border-l border-white/20 pl-4 uppercase italic">
            Powered by <span :style="{ color: f.color }" class="font-bold transition-colors">{{ f.mecha }}</span> Technology.
          </p>
        </div>

        <div class="hidden lg:flex flex-col gap-12 text-right" data-aos="fade-left">
          <div v-for="(val, label) in f.specs" :key="label" class="space-y-1">
            <div class="text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-700"
                 :style="{ color: f.color, opacity: 0.6 }">
              {{ label.replace('_', ' ') }}
            </div>
            <div class="text-4xl font-['Anton'] italic text-white">{{ val }}</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* 增加一个全局的平滑过渡，确保颜色切换时像呼吸一样自然 */
.transition-colors {
  transition-property: color, background-color, border-color, box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 700ms;
}
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.animate-progress {
  animation: progress 2s linear infinite;
}
@keyframes progress {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}

/* 增强交互感：性能面板的轻微视差 */
[data-aos="fade-left"] {
  transform: translateX(20px);
}

/* 图片切换过渡动画 */
.product-fade-enter-active,
.product-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-fade-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
  filter: blur(10px);
}

.product-fade-leave-to {
  opacity: 0;
  transform: scale(1.1) translateY(-20px);
  filter: blur(10px);
}
</style>

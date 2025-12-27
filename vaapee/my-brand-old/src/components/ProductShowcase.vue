<script setup>
// 1. 引入 Swiper 核心组件和样式
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

// 引入自动播放模块
import { Autoplay, Pagination } from 'swiper/modules';

// 配置 Swiper 的模块
const modules = [Autoplay, Pagination];
</script>

<template>
  <section class="py-24 bg-brand-bg relative z-10 overflow-hidden">
    <div class="container mx-auto px-6">

      <div class="flex justify-between items-end mb-12" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold uppercase italic">
          New <span class="text-brand-primary">Arrival</span>
        </h2>
        <div class="hidden md:flex gap-4">
          <button class="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest">Prev</button>
          <span class="text-gray-600">/</span>
          <button class="text-brand-primary hover:text-white transition-colors uppercase text-xs tracking-widest">Next</button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div class="md:col-span-1 bg-brand-primary rounded-3xl p-8 relative overflow-hidden group min-h-[500px] flex flex-col justify-end" data-aos="fade-right">
          <div class="absolute top-[-50%] right-[-50%] w-[400px] h-[400px] border-[40px] border-black/10 rounded-full"></div>

          <img src="../img/100k_pur.png" class="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:scale-110 transition-transform duration-700" alt="">

          <div class="relative z-10 text-brand-bg">
            <span class="bg-black text-white text-[10px] font-bold px-2 py-1 rounded mb-4 inline-block">KdCOMMENDED</span>
            <h3 class="text-5xl font-black uppercase mb-2 leading-[0.9]">Vaapee<br>Star</h3>
            <p class="font-bold mt-4 border-t border-black/20 pt-4">The legend returns with 9000 puffs and dual mesh core.</p>
            <button class="mt-8 w-full py-3 bg-black text-white font-bold uppercase rounded-xl hover:bg-white hover:text-black transition-colors">
              Check Specs
            </button>
          </div>
        </div>

        <div class="md:col-span-2 min-w-0" data-aos="fade-left">
          <swiper
              :modules="modules"
              :slides-per-view="1.2"
              :space-between="20"
              :autoplay="{ delay: 3000, disableOnInteraction: false }"
              :breakpoints="{
              '640': {
                slidesPerView: 2.2, // 电脑上显示 2 个半，提示用户可以滑
                spaceBetween: 24,
              }
            }"
              class="h-full"
          >
            <swiper-slide v-for="i in 5" :key="i" class="h-full">
              <div class="bg-[#000000] border border-gray-800 rounded-3xl p-6 hover:border-brand-primary transition-colors group cursor-pointer h-full flex flex-col">

                <div class="w-full aspect-[4/5] bg-gray-900 rounded-2xl mb-4 overflow-hidden relative flex items-center justify-center">
                  <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black opacity-60"></div>
                  <img
                      src="../img/100k_blue_pr.png"
                      alt="Vape Product"
                      class="relative z-10 w-2/3 h-auto object-contain drop-shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500"
                  />
                  <div class="absolute top-3 right-3 bg-gray-800 text-white text-[10px] px-2 py-1 font-bold rounded border border-gray-700">NEW</div>
                </div>

                <div class="mt-auto">
                  <h4 class="text-xl font-bold mb-1 text-white">Neon Pulse {{ 100 + i }}K</h4>
                  <p class="text-gray-500 text-xs mb-4 uppercase tracking-wider">Blueberry Ice / Dual Mesh</p>
                  <div class="flex items-center justify-between">
                    <span class="text-brand-primary font-bold text-lg">$19.90</span>
                    <button class="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-brand-primary transition-colors">
                      +
                    </button>
                  </div>
                </div>

              </div>
            </swiper-slide>

          </swiper>
        </div>

      </div>
    </div>
  </section>
</template>

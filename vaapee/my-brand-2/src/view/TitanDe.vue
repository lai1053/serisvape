<template>
  <section class="bg-[#050505] py-24 border-t border-white/5">
    <div class="container mx-auto px-6">

      <div class="mb-32" data-aos="fade-up">
        <h3 class="text-3xl font-black font-['Anton'] italic text-white mb-12 uppercase tracking-tighter">
          <span class="text-[#39FF14]">/</span> Technical Specifications
        </h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse border border-white/10">
            <thead>
            <tr class="bg-white/5 text-[#39FF14] font-mono text-[10px] tracking-[0.3em] uppercase">
              <th class="p-6 border border-white/10">Feature</th>
              <th class="p-6 border border-white/10 text-white">Star 100K</th>
              <th class="p-6 border border-white/10">Ultra 50K</th>
              <th class="p-6 border border-white/10">Pro 40K</th>
            </tr>
            </thead>
            <tbody class="text-gray-400 font-mono text-xs">
            <tr v-for="(val, key) in specTable" :key="key" class="hover:bg-white/5 transition-colors">
              <td class="p-6 border border-white/10 font-bold uppercase">{{ key }}</td>
              <td class="p-6 border border-white/10 text-white">{{ val.star }}</td>
              <td class="p-6 border border-white/10">{{ val.ultra }}</td>
              <td class="p-6 border border-white/10">{{ val.pro }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div data-aos="fade-up">
        <h3 class="text-3xl font-black font-['Anton'] italic text-white mb-12 uppercase tracking-tighter">
          <span class="text-[#39FF14]">/</span> Titan Flavor Palette
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div v-for="flavor in flavorList" :key="flavor.name"
               class="group p-6 border border-white/5 bg-white/2 bg-gradient-to-br from-white/5 to-transparent hover:border-[#39FF14]/50 transition-all">
            <div class="w-8 h-8 rounded-full mb-4 shadow-lg transition-transform group-hover:scale-110" :style="{ backgroundColor: flavor.color }"></div>
            <div class="text-[10px] font-black text-white uppercase tracking-widest">{{ flavor.name }}</div>
          </div>
        </div>
      </div>

      <div class="mt-24 p-12 bg-[#39FF14] text-black flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h4 class="text-4xl font-black font-['Anton'] italic uppercase leading-none">Ready for Bulk Order?</h4>
          <p class="font-bold tracking-widest text-xs mt-2 uppercase">Get the full titan series wholesale catalog & TPD certifications.</p>
        </div>
        <button class="px-12 py-5 bg-black text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all">
          Download PDF Catalog
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
const specTable = {
  "Max Puffs": { star: "100,000", ultra: "50,000", pro: "40,000" },
  "Coil Tech": { star: "Dual Mesh 2.0", ultra: "Turbo Mesh", pro: "Stable Mesh" },
  "Battery": { star: "1000mAh", ultra: "850mAh", pro: "850mAh" },
  "Airflow": { star: "Adjustable", ultra: "Fixed Smooth", pro: "Fixed Robust" }
};

const flavorList = [
  { name: "Blueberry Ice", color: "#3B82F6" },
  { name: "Grape Ice", color: "#7C3AED" },
  { name: "Sour Apple", color: "#22C55E" },
  { name: "Cherry Cola", color: "#DC2626" },
  { name: "Mint Ice", color: "#22D3EE" },
  { name: "Peach Ice", color: "#F97316" },
  { name: "Red Bull", color: "#F59E0B" },
  { name: "Watermelon Ice", color: "#10B981" },
  { name: "Mixed Berries", color: "#EC4899" },
  { name: "Blue Razz Ice", color: "#2563EB" }
];
</script>

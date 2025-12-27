<script setup>
</script>

<template>
  <div class="relative font-sans">
    <!-- Navigation bar -->
    <nav class="fixed top-0 w-full z-40 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div class="container mx-auto px-6 h-20 flex justify-between items-center">
        <!-- Brand logo -->
        <router-link to="/" class="text-2xl font-black tracking-tighter uppercase font-['Anton'] italic flex items-end gap-1">
          VAPANDA<span class="text-[#39FF14]">.</span>
        </router-link>
        <!-- Navigation links -->
        <div class="hidden md:flex gap-8 text-xs font-bold tracking-[0.2em] uppercase text-gray-400">
          <router-link to="/" class="hover:text-white transition-colors">Home</router-link>
          <router-link to="/products" class="hover:text-white transition-colors">Products</router-link>
          <router-link to="/wholesale" class="hover:text-white transition-colors">Wholesale</router-link>
          <router-link to="/brand" class="hover:text-white transition-colors">Brand</router-link>
          <router-link to="/contact" class="hover:text-white transition-colors">Contact</router-link>
        </div>
        <!-- CTA button to store or other call-to-action -->
        <router-link to="/wholesale" class="border border-white/20 px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          Become a Partner
        </router-link>
      </div>
    </nav>

    <!-- Main content area (offset by navigation height) -->
    <main class="pt-20">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-black border-t border-white/10 pt-20 pb-10">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-12 mb-20">
          <div class="col-span-1 md:col-span-2">
            <h2 class="text-4xl font-black italic tracking-tighter uppercase mb-6 font-['Anton']">Vapanda.</h2>
            <p class="text-gray-500 text-sm max-w-sm">
              Redefining the vaping experience through technological innovation and street culture aesthetics.
            </p>
          </div>
          <div>
            <h4 class="text-xs font-bold text-white uppercase tracking-widest mb-6">Platform</h4>
            <ul class="space-y-4 text-xs text-gray-500 uppercase font-bold tracking-wider">
              <li><router-link to="/products" class="hover:text-[#39FF14]">Collections</router-link></li>
              <li><router-link to="/wholesale" class="hover:text-[#39FF14]">Wholesale</router-link></li>
              <li><router-link to="/brand" class="hover:text-[#39FF14]">Brand Story</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="text-xs font-bold text-white uppercase tracking-widest mb-6">Company</h4>
            <ul class="space-y-4 text-xs text-gray-500 uppercase font-bold tracking-wider">
              <li><router-link to="/brand" class="hover:text-[#39FF14]">About Us</router-link></li>
              <li><router-link to="/contact" class="hover:text-[#39FF14]">Contact</router-link></li>
              <li><router-link to="/legal" class="hover:text-[#39FF14]">Legal</router-link></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
          <p>© 2025 Vapanda Technology. All rights reserved.</p>
          <p>Designed by Project Streetwear.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
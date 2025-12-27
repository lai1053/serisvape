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
          <h4 class="font-bold uppercase tracking-widest mb-6 text-brand-primary text-xs">Products</h4>
          <ul class="space-y-4 text-sm text-gray-500 font-medium">
            <li><a href="#" class="hover:text-white transition-colors">Triple 90K</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Neon Pulse</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Accessories</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Gift Cards</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold uppercase tracking-widest mb-6 text-brand-primary text-xs">Support</h4>
          <ul class="space-y-4 text-sm text-gray-500 font-medium">
            <li><a href="#" class="hover:text-white transition-colors">Track Order</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Warranty</a></li>
            <li><a href="#" class="hover:text-white transition-colors">FAQ</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold uppercase tracking-widest mb-6 text-brand-primary text-xs">Company</h4>
          <ul class="space-y-4 text-sm text-gray-500 font-medium">
            <li><a href="#" class="hover:text-white transition-colors">About VAAPEE</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Distributors</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Press Kit</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-bold uppercase tracking-widest mb-6 text-brand-primary text-xs">Follow Us</h4>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">IG</a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">TK</a>
            <a href="#" class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-brand-primary hover:text-black transition-all">YT</a>
          </div>
        </div>

      </div>

      <div class="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 uppercase tracking-wider">
        <p>© 2025 VAAPEE STAR. ALL RIGHTS RESERVED.</p>
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

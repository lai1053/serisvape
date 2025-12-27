<template>
  <section class="relative h-screen w-full overflow-hidden flex items-center bg-[#0B0B15]">

    <div class="absolute inset-0 z-0">
      <img
          src="https://images.unsplash.com/photo-1605218427306-633ba87c9759?q=80&w=2670&auto=format&fit=crop"
          alt="Hero Background"
          class="w-full h-full object-cover opacity-80"
      />
      <div class="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
      <div class="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-primary rounded-full blur-[100px] opacity-10"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">

      <div class="space-y-6">
        <span class="inline-block px-3 py-1 border border-brand-primary text-brand-primary text-xs font-bold tracking-[0.2em] uppercase">
          New Generation
        </span>
        <h1 class="text-6xl md:text-8xl font-black italic leading-[0.9] text-white mt-4">
          VAAPEE <br>
          <span class="text-brand-primary drop-shadow-[0_0_15px_rgba(57,255,20,0.8)]">
            TRIPLE 90K
          </span>
        </h1>
        <p class="text-gray-300 max-w-md text-lg">
          Experience the ultimate flavor explosion. Full power output with dual-mesh coil technology.
        </p>

        <div class="pt-4 flex gap-4">
          <button class="bg-brand-primary text-brand-bg px-8 py-4 text-lg font-black uppercase skew-x-[-10deg] hover:skew-x-0 transition-transform">
            Get It Now
          </button>
          <button class="border border-white px-8 py-4 text-lg font-bold uppercase skew-x-[-10deg] hover:bg-white hover:text-black transition-colors">
            View Detail
          </button>
        </div>
      </div>

      <div class="hidden md:flex relative w-full h-[800px] items-center justify-center perspective-1000">

        <div class="absolute w-[600px] h-[600px] border-[2px] border-brand-primary/30 rounded-full animate-[spin_20s_linear_infinite] shadow-[0_0_50px_rgba(57,255,20,0.1)]"></div>
        <div class="absolute w-[450px] h-[450px] border-[1px] border-white/20 rounded-full animate-[spin_15s_linear_infinite_reverse] border-dashed"></div>

        <img
            src="../img/100k_green-removebg-preview.png"
            alt="Hero Product"
            class="relative z-10 w-[500px] md:w-[600px] object-contain drop-shadow-[0_30px_60px_rgba(57,255,20,0.25)] animate-float"
        />

        <div class="absolute top-[30%] right-[15%] z-20 bg-brand-primary/10 backdrop-blur-md border border-brand-primary text-brand-primary px-4 py-2 rounded-full text-sm font-black tracking-widest uppercase shadow-[0_0_20px_rgba(57,255,20,0.4)] animate-bounce">
          ⚡ 9000 Puffs
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
// Emits an event when the user confirms they are of legal age
const emit = defineEmits(['accepted']);

function confirmAge() {
  emit('accepted');
}

function rejectAge() {
  // If the user is underage, redirect them away from the site
  // This could point to any safe landing page; here we choose the home page of Google.
  window.location.href = 'https://www.google.com';
}
</script>

<template>
  <div class="fixed inset-0 z-50 bg-black/90 flex flex-col justify-center items-center text-center p-6">
    <h2 class="text-3xl md:text-5xl font-black uppercase font-['Anton'] mb-4">Are You Over 21?</h2>
    <p class="text-sm md:text-lg text-gray-300 mb-8 max-w-md">This site contains nicotine products. Please confirm your age to continue.</p>
    <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
      <button @click="confirmAge" class="bg-[#39FF14] text-black px-8 py-3 uppercase font-bold tracking-wider rounded hover:bg-white/90 hover:text-black transition-colors">Yes, I am 21+</button>
      <button @click="rejectAge" class="border border-[#39FF14] text-[#39FF14] px-8 py-3 uppercase font-bold tracking-wider rounded hover:bg-[#39FF14] hover:text-black transition-colors">No, Exit</button>
    </div>
  </div>
</template>
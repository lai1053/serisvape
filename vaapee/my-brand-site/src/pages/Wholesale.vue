<script setup>
import { ref } from 'vue';

// Simple form state; in a real implementation this would post to a backend service
const name = ref('');
const company = ref('');
const email = ref('');
const message = ref('');
const submitted = ref(false);

function handleSubmit() {
  // Basic client-side validation
  if (!name.value || !company.value || !email.value) {
    alert('Please complete all required fields.');
    return;
  }
  submitted.value = true;
  // Reset form fields
  name.value = '';
  company.value = '';
  email.value = '';
  message.value = '';
}
</script>

<template>
  <section class="py-24 bg-[#0a0a0a]">
    <div class="container mx-auto px-6">
      <h1 class="text-4xl md:text-5xl font-black uppercase mb-8 font-['Anton']">Wholesale & Logistics</h1>
      <p class="text-gray-400 mb-12 max-w-2xl">Partner with us to gain access to our cutting‑edge products directly from the factory. Low minimum order quantities, fast global shipping and dedicated support for our distributors.</p>

      <!-- Shipping Policy -->
      <div class="mb-12">
        <h2 class="text-2xl font-black uppercase mb-4 font-['Anton']">Shipping Policy</h2>
        <div class="space-y-4 text-gray-400 text-sm">
          <p><span class="text-white font-semibold">Global Partners:</span> DHL, SEUR, DPD, UPS, Spring.</p>
          <p><span class="text-white font-semibold">Dispatch Hubs:</span> Global Shipping & Belgium Warehouse (Coming Soon).</p>
          <p><span class="text-white font-semibold">MOQ:</span> Global: 10 PCS | EU Warehouse: 3 PCS (Low threshold for partners).</p>
          <p><span class="text-white font-semibold">Terms:</span> No Return Policy (All Sales Final). Tracking Provided.</p>
        </div>
      </div>

      <!-- Become a Partner Form -->
      <div class="mb-12 max-w-lg">
        <h2 class="text-2xl font-black uppercase mb-4 font-['Anton']">Become a Partner</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div>
            <label class="block text-xs uppercase text-gray-400 mb-1">Name*</label>
            <input v-model="name" type="text" class="w-full bg-[#151515] border border-white/10 px-4 py-3 text-sm focus:border-[#39FF14] focus:outline-none" required>
          </div>
          <div>
            <label class="block text-xs uppercase text-gray-400 mb-1">Company*</label>
            <input v-model="company" type="text" class="w-full bg-[#151515] border border-white/10 px-4 py-3 text-sm focus:border-[#39FF14] focus:outline-none" required>
          </div>
          <div>
            <label class="block text-xs uppercase text-gray-400 mb-1">Email*</label>
            <input v-model="email" type="email" class="w-full bg-[#151515] border border-white/10 px-4 py-3 text-sm focus:border-[#39FF14] focus:outline-none" required>
          </div>
          <div>
            <label class="block text-xs uppercase text-gray-400 mb-1">Message</label>
            <textarea v-model="message" rows="4" class="w-full bg-[#151515] border border-white/10 px-4 py-3 text-sm focus:border-[#39FF14] focus:outline-none"></textarea>
          </div>
          <button type="submit" class="bg-[#39FF14] text-black px-6 py-3 uppercase font-bold tracking-wider hover:bg-white hover:text-black transition-colors">
            Submit
          </button>
        </form>
        <p v-if="submitted" class="mt-4 text-sm text-[#39FF14]">Thank you! Your request has been received. We'll be in touch soon.</p>
      </div>
    </div>
  </section>
</template>
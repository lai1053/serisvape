<script setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import emailjs from '@emailjs/browser'
import { SITE_CONFIG } from '../../data/config.js'

// EmailJS 配置
// 需要在 https://www.emailjs.com/ 注册并获取以下配置
// 1. 创建 Email Service (Gmail, Outlook 等)
// 2. 创建 Email Template
// 3. 获取 Public Key
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
}

// 初始化 EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

// 1. 物流时效数据
const logistics = [
  { region: "North America", carrier: "DHL / UPS", time: "3-5 Days", status: "STABLE" },
  { region: "European Union", carrier: "DPD / DHL", time: "5-7 Days", status: "FAST" },
  { region: "Middle East", carrier: "Aramex", time: "4-6 Days", status: "EXPRESS" },
  { region: "Southeast Asia", carrier: "Special Line", time: "2-4 Days", status: "HOT" }
]

// 2. 表单逻辑
const form = ref({ 
  companyName: '',      // Company / Store Name
  contactName: '',      // Contact Name
  email: '',            // Email
  phone: '',            // Phone / WhatsApp
  country: '',          // Country / Region
  businessType: '',     // Business Type
  orderVolume: '',      // Expected Order Volume
  message: ''           // Message
})
const isSubmitting = ref(false)
const submitStatus = ref({ type: '', message: '' }) // 'success' | 'error' | ''

const submitInquiry = async () => {
  // 验证配置
  if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
      EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
      EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    alert('Email service is not configured. Please contact us directly at ' + SITE_CONFIG.contact.email)
    return
  }

  isSubmitting.value = true
  submitStatus.value = { type: '', message: '' }

  try {
    // 发送邮件
    const result = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      {
        to_email: SITE_CONFIG.contact.email,
        company_name: form.value.companyName,
        contact_name: form.value.contactName,
        from_email: form.value.email,
        phone: form.value.phone,
        country: form.value.country,
        business_type: form.value.businessType,
        order_volume: form.value.orderVolume,
        message: form.value.message,
        subject: 'Wholesale Partnership Request from ' + form.value.companyName,
        reply_to: form.value.email
      }
    )

    if (result.text === 'OK') {
      submitStatus.value = { 
        type: 'success', 
        message: 'Inquiry Sent Successfully! Our sales team will contact you within 2 hours.' 
      }
      // 清空表单
      form.value = { 
        companyName: '', 
        contactName: '', 
        email: '', 
        phone: '', 
        country: '', 
        businessType: '', 
        orderVolume: '', 
        message: '' 
      }
      
      // 3秒后清除成功消息
      setTimeout(() => {
        submitStatus.value = { type: '', message: '' }
      }, 5000)
    }
  } catch (error) {
    console.error('EmailJS Error:', error)
    submitStatus.value = { 
      type: 'error', 
      message: 'Failed to send inquiry. Please try again or contact us directly at ' + SITE_CONFIG.contact.email 
    }
    
    // 5秒后清除错误消息
    setTimeout(() => {
      submitStatus.value = { type: '', message: '' }
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
  // 航线发光路径动画
  gsap.to(".route-line", { strokeDashoffset: 0, duration: 3, repeat: -1, ease: "none" })
})
</script>

<template>
  <section class="relative bg-[#050505] py-24 overflow-hidden border-t border-white/5">

    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#39FF14_1px,transparent_1px),linear-gradient(to_bottom,#39FF14_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      <svg class="w-full h-full opacity-30" viewBox="0 0 1000 500">
        <path d="M200,150 Q500,50 800,200" fill="none" stroke="#39FF14" stroke-width="2" stroke-dasharray="1000" stroke-dashoffset="1000" class="route-line" />
        <path d="M200,150 Q400,300 700,400" fill="none" stroke="#39FF14" stroke-width="2" stroke-dasharray="1000" stroke-dashoffset="1000" class="route-line" />
      </svg>
    </div>

    <div class="container mx-auto px-6 relative z-10">

      <div class="mb-20">
        <span class="text-[#39FF14] font-mono text-[10px] tracking-[0.6em] block mb-4 uppercase">Global Supply Chain // V4.0</span>
        <h2 class="text-6xl md:text-8xl font-black font-['Anton'] italic text-white uppercase leading-none">
          Wholesale<br><span class="text-[#39FF14]">Logistics.</span>
        </h2>
        <p class="mt-6 text-gray-500 text-sm tracking-widest uppercase max-w-xl">
          Empowering your business with high-speed delivery and a 1000m² dust-free manufacturing base.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">

        <div class="space-y-6">
          <div v-for="item in logistics" :key="item.region"
               class="p-8 bg-white/2 border border-white/5 hover:border-[#39FF14]/30 transition-all group">
            <div class="flex justify-between items-center">
              <div>
                <div class="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{{ item.region }}</div>
                <div class="text-2xl font-black font-['Anton'] italic text-white uppercase">{{ item.carrier }}</div>
              </div>
              <div class="text-right">
                <div class="text-[#39FF14] font-mono text-xl font-bold italic">{{ item.time }}</div>
                <div class="text-[8px] bg-[#39FF14]/10 text-[#39FF14] px-2 py-0.5 inline-block mt-2">{{ item.status }}</div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-12">
            <div class="p-6 border border-white/10 text-center">
              <div class="text-3xl font-black font-['Anton'] text-white">1,000㎡+</div>
              <div class="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Production Base</div>
            </div>
            <div class="p-6 border border-white/10 text-center">
              <div class="text-3xl font-black font-['Anton'] text-[#39FF14]">100% QC</div>
              <div class="text-[9px] text-gray-500 uppercase tracking-widest mt-1">Dust-free Workshop</div>
            </div>
          </div>
        </div>

        <div class="bg-white/5 p-10 md:p-12 border border-white/10 backdrop-blur-xl relative">
          <div class="absolute -top-4 -right-4 bg-[#39FF14] text-black text-[10px] font-black px-4 py-2 uppercase tracking-tighter">
            B2B Priority
          </div>

          <h3 class="text-3xl font-black font-['Anton'] italic text-white uppercase mb-8">Start Your Partnership</h3>

          <form @submit.prevent="submitInquiry" class="space-y-6">
            <!-- Company / Store Name -->
            <div class="space-y-2">
              <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Company / Store Name <span class="text-red-500">*</span></label>
              <input v-model="form.companyName" type="text" required class="w-full bg-black/50 border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none transition-all" placeholder="Enter company or store name" />
            </div>

            <!-- Contact Name -->
            <div class="space-y-2">
              <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Contact Name <span class="text-red-500">*</span></label>
              <input v-model="form.contactName" type="text" required class="w-full bg-black/50 border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none transition-all" placeholder="Enter contact person name" />
            </div>

            <!-- Email and Phone -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email <span class="text-red-500">*</span></label>
                <input v-model="form.email" type="email" required class="w-full bg-black/50 border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none transition-all" placeholder="your@email.com" />
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Phone / WhatsApp <span class="text-red-500">*</span></label>
                <input v-model="form.phone" type="tel" required class="w-full bg-black/50 border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none transition-all" placeholder="+1 234 567 8900" />
              </div>
            </div>

            <!-- Country / Region -->
            <div class="space-y-2">
              <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Country / Region <span class="text-red-500">*</span></label>
              <input v-model="form.country" type="text" required class="w-full bg-black/50 border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none transition-all" placeholder="Enter country or region" />
            </div>

            <!-- Business Type and Order Volume -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Business Type <span class="text-red-500">*</span></label>
                <select v-model="form.businessType" required class="w-full bg-black/50 border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Select business type</option>
                  <option v-for="type in SITE_CONFIG.wholesaleForm.businessTypes" :key="type" :value="type" class="bg-black text-white">
                    {{ type }}
                  </option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Expected Order Volume <span class="text-red-500">*</span></label>
                <select v-model="form.orderVolume" required class="w-full bg-black/50 border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Select order volume</option>
                  <option v-for="volume in SITE_CONFIG.wholesaleForm.orderVolumes" :key="volume" :value="volume" class="bg-black text-white">
                    {{ volume }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Message -->
            <div class="space-y-2">
              <label class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Message / Requirements</label>
              <textarea v-model="form.message" rows="4" class="w-full bg-black/50 border border-white/10 p-4 text-white font-mono focus:border-[#39FF14] outline-none transition-all" placeholder="Enter your message or specific requirements..."></textarea>
            </div>

            <!-- 状态消息 -->
            <div v-if="submitStatus.type" 
                 :class="submitStatus.type === 'success' 
                   ? 'bg-[#39FF14]/20 border border-[#39FF14] text-[#39FF14]' 
                   : 'bg-red-500/20 border border-red-500 text-red-400'"
                 class="p-4 text-xs font-bold uppercase tracking-wider">
              {{ submitStatus.message }}
            </div>

            <button type="submit" :disabled="isSubmitting"
                    class="w-full py-6 bg-[#39FF14] text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-white transition-all shadow-neon disabled:opacity-50 disabled:cursor-not-allowed">
              {{ isSubmitting ? 'PROCESSING...' : 'SUBMIT PARTNERSHIP REQUEST' }}
            </button>
          </form>
        </div>

      </div>
    </div>

    <div class="mt-32 w-full py-6 bg-black border-t border-white/10 text-center">
      <p class="text-[9px] md:text-[11px] text-gray-600 font-bold tracking-[0.3em] uppercase">
        WARNING: This product contains nicotine. Nicotine is an addictive chemical.
      </p>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

.shadow-neon:hover {
  box-shadow: 0 0 30px rgba(57, 255, 20, 0.4);
}

/* 输入框动画 */
input:focus, textarea:focus, select:focus {
  box-shadow: inset 0 0 10px rgba(57, 255, 20, 0.1);
}

/* 下拉框样式 */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2339FF14' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  padding-right: 3rem;
}

select option {
  background-color: #000;
  color: #fff;
  padding: 0.5rem;
}

/* 必填字段标记 */
.text-red-500 {
  color: #ef4444;
}
</style>

<script setup>
import { ref, onMounted } from 'vue';
import HeroSection from "@/view/HeroSection.vue";
import VAPANDA4N1 from "@/view/VAPANDA4N1.vue";
import Performance from "@/view/Performance.vue";
import TitanDe from "@/view/TitanDe.vue";
import SmartGrid from "@/view/SmartGrid.vue";

// Show the age gate overlay only if the user hasn't confirmed their age yet
const showAgeGate = ref(false);

onMounted(() => {
  const accepted = localStorage.getItem('vapanda-age-accepted');
  if (!accepted) {
    showAgeGate.value = true;
  }
});

function handleAccepted() {
  localStorage.setItem('vapanda-age-accepted', 'true');
  showAgeGate.value = false;
}
</script>

<template>
  <HeroSection/>
  <VAPANDA4N1/>
  <Performance/>
  <TitanDe/>
  <SmartGrid/>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AgeGate from './components/AgeGate.vue';
import DefaultLayout from './components/DefaultLayout.vue';

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
  <!-- Age verification overlay -->
  <AgeGate v-if="showAgeGate" @accepted="handleAccepted" />

  <!-- Main site layout with navigation and footer -->
  <DefaultLayout />
</template>
<script setup>
defineProps({
  title: {
    type: String,
    default: 'Figures held for the current proposal',
  },
  text: { type: String, required: true },
})
</script>

<template>
  <aside class="hold" role="note">
    <p class="hold__title">{{ title }}</p>
    <p>{{ text }}</p>
  </aside>
</template>

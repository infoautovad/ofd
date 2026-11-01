<script setup>
defineProps({
  title: { type: String, required: true },
  place: { type: String, required: true },
  to: { type: String, required: true },
  summary: { type: String, required: true },
  status: { type: String, default: 'Proposed' },
  more: { type: String, default: 'Explore proposal' },
})
</script>

<template>
  <router-link class="card" :to="to">
    <span class="card__status">{{ status }}</span>
    <p class="card__place">{{ place }}</p>
    <h3>{{ title }}</h3>
    <p>{{ summary }}</p>
    <span class="card__more">{{ more }}</span>
  </router-link>
</template>

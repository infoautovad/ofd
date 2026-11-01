<script setup>
defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
})
</script>

<template>
  <figure class="figure">
    <img :src="src" :alt="alt" loading="lazy" decoding="async" />
  </figure>
</template>

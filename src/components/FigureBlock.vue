<script setup>
import { computed } from 'vue'
import { asset } from '../lib/asset'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, required: true },
})

const url = computed(() => asset(props.src))
</script>

<template>
  <figure class="figure">
    <img :src="url" :alt="alt" loading="lazy" decoding="async" />
  </figure>
</template>

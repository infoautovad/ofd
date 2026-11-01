<script setup>
defineProps({
  links: { type: Array, required: true },
})
</script>

<template>
  <nav class="onpage" aria-label="On this page">
    <p class="onpage__label">On this page</p>
    <ul>
      <li v-for="link in links" :key="link.href">
        <a :href="link.href">{{ link.label }}</a>
      </li>
    </ul>
  </nav>
</template>

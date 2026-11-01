<script setup>
defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <nav class="crumbs" aria-label="Breadcrumb">
    <ol>
      <li v-for="item in items" :key="item.label">
        <router-link v-if="item.to" :to="item.to">{{ item.label }}</router-link>
        <span v-else aria-current="page">{{ item.label }}</span>
      </li>
    </ol>
  </nav>
</template>

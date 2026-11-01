<script setup>
defineProps({
  eyebrow: { type: String, default: 'Continue' },
  title: { type: String, required: true },
  text: { type: String, required: true },
  primaryLabel: { type: String, required: true },
  primaryTo: { type: String, required: true },
  secondaryLabel: { type: String, default: '' },
  secondaryTo: { type: String, default: '' },
})
</script>

<template>
  <section class="band band--navy">
    <div class="wrap">
      <p class="eyebrow">{{ eyebrow }}</p>
      <h2>{{ title }}</h2>
      <p class="lede">{{ text }}</p>
      <div class="actions" style="margin-top: 28px">
        <v-btn class="btn-copper" :to="primaryTo">{{ primaryLabel }}</v-btn>
        <v-btn v-if="secondaryTo" class="btn-ghost" :to="secondaryTo">{{ secondaryLabel }}</v-btn>
      </div>
    </div>
  </section>
</template>

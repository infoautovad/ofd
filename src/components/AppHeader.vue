<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteMark from './SiteMark.vue'
import { nav, proposals } from '../data/content'

const route = useRoute()
const drawer = ref(false)
const closeBtn = ref(null)
const drawerWidth = ref(400)

function syncDrawerWidth() {
  drawerWidth.value = window.innerWidth < 720 ? window.innerWidth : 400
}

watch(
  () => route.fullPath,
  () => {
    drawer.value = false
  },
)

watch(drawer, async (open) => {
  if (!open) return
  await nextTick()
  const el = closeBtn.value?.$el ?? closeBtn.value
  el?.focus?.()
})

onMounted(() => {
  syncDrawerWidth()
  window.addEventListener('resize', syncDrawerWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', syncDrawerWidth)
})
</script>

<template>
  <v-app-bar flat height="78" class="site-bar" role="banner">
    <div class="wrap site-bar__row">
      <router-link to="/" class="mark-link" aria-label="OFD Global, home">
        <SiteMark />
      </router-link>
      <nav class="site-nav" aria-label="Primary">
        <router-link v-for="item in nav" :key="item.to" :to="item.to">
          {{ item.label }}
        </router-link>
      </nav>
      <v-btn class="header-cta btn-copper" to="/contact">Discuss a partnership</v-btn>
      <v-btn
        class="nav-toggle"
        icon
        variant="text"
        :aria-expanded="drawer"
        aria-controls="site-menu"
        aria-label="Open menu"
        @click="drawer = true"
      >
        <span class="nav-toggle__bars" aria-hidden="true"></span>
      </v-btn>
    </div>
  </v-app-bar>

  <v-navigation-drawer
    id="site-menu"
    v-model="drawer"
    temporary
    location="right"
    :width="drawerWidth"
    class="site-drawer"
    aria-label="Menu"
  >
    <div class="drawer-head">
      <SiteMark />
      <v-btn
        ref="closeBtn"
        icon
        variant="text"
        class="drawer-close"
        aria-label="Close menu"
        @click="drawer = false"
      >
        <span aria-hidden="true">✕</span>
      </v-btn>
    </div>
    <nav class="drawer-nav" aria-label="Mobile">
      <router-link to="/">Home</router-link>
      <router-link v-for="item in nav" :key="item.to" :to="item.to">
        {{ item.label }}
      </router-link>
      <div class="drawer-sub">
        <router-link v-for="item in proposals" :key="item.to" :to="item.to">
          {{ item.title }}
        </router-link>
      </div>
      <v-btn class="drawer-cta btn-copper" to="/contact">Discuss a partnership</v-btn>
    </nav>
  </v-navigation-drawer>
</template>

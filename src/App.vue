<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

const route = useRoute()
const background = computed(() => route.meta.background || '/images/bg/about.jpg')
</script>

<template>
  <v-app>
    <a class="skip" href="#content">Skip to content</a>
    <div
      class="page-bg"
      :style="{ backgroundImage: `url('${background}')` }"
      aria-hidden="true"
    ></div>
    <AppHeader />
    <div class="atmosphere" aria-hidden="true"></div>
    <v-main id="content" tabindex="-1">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>
    <AppFooter />
  </v-app>
</template>

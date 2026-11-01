<script setup>
import SiteMark from './SiteMark.vue'
import { nav, officeContact, proposals } from '../data/content'

const year = new Date().getFullYear()
</script>

<template>
  <v-footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div>
          <SiteMark />
          <p style="margin-top: 16px">
            OFD Global connects operating companies, technology providers, host governments,
            private capital, and commercial markets around infrastructure and industrial proposals.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <ul>
            <li v-for="item in nav" :key="item.to">
              <router-link :to="item.to">{{ item.label }}</router-link>
            </li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div>
          <h2>Our focus</h2>
          <ul>
            <li v-for="item in proposals" :key="item.to">
              <router-link :to="item.to">{{ item.title }}</router-link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Correspondence</h2>
          <p>{{ officeContact.person }}, {{ officeContact.role }}</p>
          <p v-if="officeContact.email" style="margin-top: 10px">
            <a :href="`mailto:${officeContact.email}`">{{ officeContact.email }}</a>
          </p>
          <p v-if="officeContact.phone" style="margin-top: 10px">
            <a :href="`tel:${officeContact.phone.replace(/[^\d+]/g, '')}`">{{ officeContact.phone }}</a>
          </p>
          <p style="margin-top: 10px">
            <router-link to="/contact">Send a message</router-link>
          </p>
        </div>
      </div>
      <div class="footer-base">
        <p>© {{ year }} OFD Global.</p>
        <p>
          General information for discussion. It is not an offer of securities, a financing
          commitment, or a statement that a government has approved a project.
        </p>
      </div>
    </div>
  </v-footer>
</template>

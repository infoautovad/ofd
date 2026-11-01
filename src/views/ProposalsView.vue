<script setup>
import { computed } from 'vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import ContinueBand from '../components/ContinueBand.vue'
import ProposalCard from '../components/ProposalCard.vue'
import { proposals } from '../data/content'

const andhra = computed(() => proposals.filter((item) => item.place === 'Andhra Pradesh'))
const markets = computed(() => proposals.filter((item) => item.place !== 'Andhra Pradesh'))

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Our focus' },
]
</script>

<template>
  <article>
    <header class="page-hero">
      <div class="wrap">
        <Breadcrumb :items="crumbs" />
        <p class="eyebrow">Our focus</p>
        <h1>Foundations for a changing world.</h1>
        <p class="lede">
          OFD Global explores opportunities where technology, infrastructure, and long-term
          demand meet. The work is to find those meeting points and bring the right parties into
          one structured discussion.
        </p>
      </div>
    </header>

    <section class="band band--tight">
      <div class="wrap">
        <p class="eyebrow">Current exploration</p>
        <h2>Andhra Pradesh</h2>
        <p class="lede">
          An AI infrastructure campus, an advanced-fuels investment, and a co-location of the two.
          Each remains its own concept.
        </p>
        <div class="grid-3" style="margin-top: 36px">
          <ProposalCard v-for="item in andhra" :key="item.to" v-bind="item" />
        </div>
      </div>
    </section>

    <section class="band band--paper">
      <div class="wrap">
        <p class="eyebrow">Current exploration</p>
        <h2>India and Japan</h2>
        <p class="lede">
          A separate opportunity. Forever New laundry care, and candidates who would bring the
          products into these countries and sell them.
        </p>
        <div class="market-card" style="margin-top: 36px">
          <ProposalCard v-for="item in markets" :key="item.to" v-bind="item" />
        </div>
      </div>
    </section>

    <ContinueBand
      title="From a conversation to a decision."
      text="Feasibility, agreements, and approvals are the path an opportunity follows when the parties continue."
      primary-label="Read our approach"
      primary-to="/approach"
      secondary-label="Discuss a partnership"
      secondary-to="/contact"
    />
  </article>
</template>

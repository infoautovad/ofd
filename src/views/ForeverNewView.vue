<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import ContinueBand from '../components/ContinueBand.vue'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Our focus', to: '/proposals' },
  { label: 'Forever New' },
]

const markets = [
  {
    title: 'India',
    text: 'A candidate for India would bring the products into that market and sell them there. The role covers the commercial path in India. It does not, by itself, cover Japan.',
  },
  {
    title: 'Japan',
    text: 'A candidate for Japan would bring the products into that market and sell them there. The role is separate from any appointment in India.',
  },
]
</script>

<template>
  <article>
    <header class="page-hero">
      <div class="wrap">
        <Breadcrumb :items="crumbs" />
        <p class="eyebrow">India and Japan · Exploring</p>
        <h1 class="has-break">
          <span class="line">Forever New</span>
          <span class="line">India and Japan</span>
        </h1>
        <p class="lede">
          OFD Global is exploring a route for Forever New laundry-care products into India and
          Japan. The search is for candidates who can bring the products into these countries and
          sell them.
        </p>
      </div>
    </header>

    <section class="band band--tight">
      <div class="wrap prose">
        <p class="eyebrow">The opportunity</p>
        <h2>A commercial path, country by country.</h2>
        <p>
          This is separate from the Andhra Pradesh concepts. It is a market question: who can
          carry an existing laundry-care range into India, into Japan, and sell it there.
        </p>
        <p>
          <a href="https://forevernew.com/" rel="noopener noreferrer" target="_blank">Forever New</a>
          is a family-founded laundry and fabric-care range, on the market since 1975. The range
          includes everyday and delicate washing, scented washes, baby care, activewear, and stain
          care. The products remain Forever New’s. OFD Global’s part is to find and coordinate the
          candidates for these two countries.
        </p>
        <p>
          No distributor is named here. Sales in India and Japan are not presented as underway. A
          candidate’s role, territory, and terms would be set in an agreement of their own.
        </p>
      </div>
    </section>

    <section class="band band--sand" aria-labelledby="markets-title">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">Where</p>
          <h2 id="markets-title">India and Japan, kept apart.</h2>
        </div>
        <div class="grid-2">
          <article v-for="market in markets" :key="market.title" class="matter">
            <h3>{{ market.title }}</h3>
            <p>{{ market.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="band" aria-labelledby="candidates-title">
      <div class="wrap prose">
        <h2 id="candidates-title">Who a candidate is.</h2>
        <p>
          A candidate is a party able to bring the products into one of these countries and sell
          them: the import path, the shelves or channels, and the selling itself. Interest in both
          countries can be discussed. Each country still needs its own case.
        </p>
        <p>
          The conversation starts with fit. Channel, reach, and the ability to carry a fabric-care
          range come first. Price, volume, and exclusivity are matters for a later agreement, and
          they are not stated here.
        </p>
      </div>
    </section>

    <ContinueBand
      title="A conversation for India, Japan, or both."
      text="OFD Global is looking for candidates who would bring Forever New into these countries and sell. A discussion is the start. An appointment is a separate agreement."
      primary-label="Discuss a partnership"
      primary-to="/contact"
      secondary-label="Our focus"
      secondary-to="/proposals"
    />
  </article>
</template>

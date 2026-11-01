<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import ContinueBand from '../components/ContinueBand.vue'
import { audiences } from '../data/content'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Partnerships' },
]
</script>

<template>
  <article>
    <header class="page-hero">
      <div class="wrap">
        <Breadcrumb :items="crumbs" />
        <p class="eyebrow">Partnerships</p>
        <h1>A discussion matched to the role you would actually hold.</h1>
        <p class="lede">
          OFD Global welcomes a conversation with parties whose role fits a live proposal. An
          enquiry opens that conversation. A mandate, an exclusivity, or a partnership would be
          written separately, and only when the parties agree to write it.
        </p>
      </div>
    </header>

    <section class="band band--tight">
      <div class="wrap">
        <div class="status" role="note" style="border-inline: 1px solid rgba(122, 62, 29, 0.35)">
          <div style="padding: 4px 8px">
            <p>
              <strong>No party is listed here as a signed partner.</strong>
              A name belongs on this website when documentation supports a public statement, and
              only in the terms that documentation allows.
            </p>
          </div>
        </div>
        <div class="steps" style="margin-top: 12px">
          <article
            v-for="item in audiences"
            :id="item.id"
            :key="item.id"
            class="step"
          >
            <p class="step__index">{{ item.index }}</p>
            <div>
              <h2>{{ item.title }}</h2>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="band band--sand">
      <div class="wrap prose">
        <h2>What a first conversation can cover</h2>
        <p>
          A government can ask how a proposal would meet land, power, water, connectivity, and
          approval processes. A technology provider can ask about a project-specific role. An
          operator can ask about operating responsibility. An investor can ask how a financing
          pathway would be diligenced. A development partner can ask where feasibility or
          documentation needs support.
        </p>
        <p>
          Those are openings. They become roles when agreements say so. A first note can go through
          the contact form. Keep confidential commercial terms for a direct exchange after OFD
          Global replies.
        </p>
      </div>
    </section>

    <ContinueBand
      eyebrow="Correspondence"
      title="Send a message."
      text="The contact form is the place to share your name, how to reach you, and what you want to discuss."
      primary-label="Discuss a partnership"
      primary-to="/contact"
      secondary-label="About OFD Global"
      secondary-to="/about"
    />
  </article>
</template>

<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import ContinueBand from '../components/ContinueBand.vue'
import FigureBlock from '../components/FigureBlock.vue'
import HoldNote from '../components/HoldNote.vue'
import InPageNav from '../components/InPageNav.vue'
import StatusBanner from '../components/StatusBanner.vue'
import { fuelMatters } from '../data/content'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Our focus', to: '/proposals' },
  { label: 'Advanced Fuels' },
]

const links = [
  { href: '#concept', label: 'Concept' },
  { href: '#requirements', label: 'Requirements' },
  { href: '#technology', label: 'Technology' },
  { href: '#offtake', label: 'Offtake' },
]
</script>

<template>
  <article>
    <header class="page-hero">
      <div class="wrap">
        <Breadcrumb :items="crumbs" />
        <p class="eyebrow">Andhra Pradesh · Proposed</p>
        <h1 class="has-break">
          <span class="line">Advanced Fuels</span>
          <span class="line">Andhra Pradesh</span>
        </h1>
        <p class="lede">
          A proposed fuels investment, facilitated by OFD Global. The concept joins a technology
          pathway with feedstock, a site, supporting infrastructure, a product slate, and a
          commercial route for the products.
        </p>
      </div>
    </header>
    <StatusBanner />

    <section id="concept" class="band band--tight">
      <div class="wrap">
        <InPageNav :links="links" />
        <div class="prose" style="margin-top: 28px">
          <p>
            The proposal is an investment concept under discussion. Technology choice, site
            conditions, and offtake are to be settled through feasibility, agreements, and
            approvals. This page sets out the matters the concept has to resolve.
          </p>
          <p>
            Environmental performance, carbon attributes, and operating performance belong in
            technical studies. They are established there, and they are not stated on this page.
          </p>
        </div>
        <HoldNote
          title="Particulars held for the current proposal"
          text="Technology name, feedstock, product slate, and any technology-provider reference are taken only from the current proposal, and only when that text is suitable for this audience. Those particulars are withheld here. No environmental or performance claim is made."
        />
      </div>
    </section>

    <section id="requirements" class="band band--sand">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">What the proposal has to settle</p>
          <h2>Feedstock, site, infrastructure, product slate, and commerce.</h2>
          <p class="lede">
            Each matter below is part of the Andhra Pradesh concept. Project-specific answers
            stay in the proposal until they are confirmed for a public page.
          </p>
        </div>
        <div class="req-grid">
          <article v-for="item in fuelMatters" :key="item.title" class="matter">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="technology" class="band">
      <div class="wrap split">
        <div>
          <p class="eyebrow">Technology partnerships</p>
          <h2>A pathway for the technology owner, written in its own agreement.</h2>
        </div>
        <div class="prose">
          <p>
            A technology partnership is one way the proposal can proceed. The technology owner
            would retain the technology. A licence, a technical role, or another project-specific
            arrangement would be set out in its own agreement.
          </p>
          <p>
            This page does not name a technology provider. A name belongs here when a source
            supports publishing it for this audience, and in the terms that source allows. A
            discussion is the start of that path. The agreement is what would record the role.
          </p>
        </div>
      </div>
    </section>

    <section id="offtake" class="band band--paper">
      <div class="wrap split">
        <FigureBlock
          src="/images/energy.png"
          alt="An aerial view of an industrial facility with process units, storage tanks, and pipelines."
        />
        <div>
          <p class="eyebrow">Product offtake</p>
          <h2>A route to market for a defined slate.</h2>
          <div class="prose" style="margin-top: 16px">
            <p>
              Product offtake is the commercial pathway once the slate is defined. It would be
              pursued with buyers suited to those products, and through agreements. No buyer, no
              volume, and no price is stated here. No offtake is represented as signed.
            </p>
            <p>
              OFD Global coordinates that commercial discussion alongside the infrastructure
              questions. It does not become the seller, the operator, or the owner of the
              technology by doing so.
            </p>
          </div>
        </div>
      </div>
    </section>

    <ContinueBand
      title="Seen beside the campus"
      text="Co-location with the AI infrastructure proposal is a separate page. It describes coordination. It leaves this fuels facility with its own technology, operation, financing, approvals, and product agreements."
      primary-label="Integrated campus"
      primary-to="/proposals/integrated-campus"
      secondary-label="AI infrastructure campus"
      secondary-to="/proposals/ai-infrastructure-campus"
    />
  </article>
</template>

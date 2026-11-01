<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import ContinueBand from '../components/ContinueBand.vue'
import { approachSteps } from '../data/content'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Our approach' },
]
</script>

<template>
  <article>
    <header class="page-hero">
      <div class="wrap">
        <Breadcrumb :items="crumbs" />
        <p class="eyebrow">Our approach</p>
        <h1>From an identified opportunity to a decision the parties can stand behind.</h1>
        <p class="lede">
          Five steps. They describe how OFD Global works through an opportunity.
        </p>
      </div>
    </header>

    <section class="band band--tight">
      <div class="wrap">
        <ol class="steps">
          <li v-for="step in approachSteps" :key="step.index" class="step">
            <p class="step__index">{{ step.index }}</p>
            <div>
              <h2>{{ step.title }}</h2>
              <p>{{ step.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section class="band band--sand">
      <div class="wrap prose">
        <h2>What the sequence asks of each party</h2>
        <p>
          Government alignment is a conversation with the authorities who would later decide.
          Industry alignment is a conversation with operators and technology providers about the
          role each would actually hold. Site evaluation is a test of land, power, connectivity,
          water, and access. Capital and offtake are coordinated so that financing and customers
          can be diligenced on the same facts.
        </p>
        <p>
          Feasibility, definitive agreements, and approvals come in that order when a proposal
          continues. Passing one is not the same as holding the next. OFD Global’s part is to
          keep the sequence intelligible to the parties in it.
        </p>
      </div>
    </section>

    <ContinueBand
      title="Who the sequence is for."
      text="Governments, technology providers, operators, investors, and development partners each have a distinct way to engage. Engagement is a discussion. A signed partnership is a document."
      primary-label="Partnerships"
      primary-to="/partnerships"
      secondary-label="Explore our focus"
      secondary-to="/proposals"
    />
  </article>
</template>

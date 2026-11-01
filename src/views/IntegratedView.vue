<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import ContinueBand from '../components/ContinueBand.vue'
import InPageNav from '../components/InPageNav.vue'
import StatusBanner from '../components/StatusBanner.vue'
import { separateItems } from '../data/content'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Our focus', to: '/proposals' },
  { label: 'Integrated campus' },
]

const links = [
  { href: '#colocation', label: 'Co-location' },
  { href: '#components', label: 'Three components' },
  { href: '#separate', label: 'What stays separate' },
  { href: '#coordination', label: 'Coordination' },
]

const components = [
  {
    title: 'AI infrastructure campus',
    text: 'A digital infrastructure proposal. Its technology, operator, customers, financing, and approvals are its own. Land, firm power, fiber, water, and offtake for the campus are described on the campus page.',
    to: '/proposals/ai-infrastructure-campus',
    link: 'Campus proposal',
  },
  {
    title: 'Advanced fuels facility',
    text: 'A fuels proposal. Its technology ownership, feedstock, product slate, operating responsibility, financing, and product agreements are its own. Those questions are described on the fuels page.',
    to: '/proposals/advanced-fuels',
    link: 'Fuels proposal',
  },
  {
    title: 'Power generation, where evaluated',
    text: 'Sponsor-funded gas generation is considered only where the grid-first strategy requires it. If it is pursued, it is a further component, with its own technical review, financing, approvals, and agreements. Proximity would not fold it into the campus or the fuels facility.',
    to: '/proposals/ai-infrastructure-campus#power',
    link: 'Power strategy',
  },
]
</script>

<template>
  <article>
    <header class="page-hero">
      <div class="wrap">
        <Breadcrumb :items="crumbs" />
        <p class="eyebrow">Andhra Pradesh · Proposed coordination</p>
        <h1 class="has-break">
          <span class="line">Integrated AI and</span>
          <span class="line">Advanced Fuels Campus</span>
        </h1>
        <p class="lede">
          A proposed co-location strategy. The AI campus, the fuels facility, and any power
          component would be planned with an awareness of one another, and they would remain
          separate projects.
        </p>
      </div>
    </header>
    <StatusBanner />

    <section id="colocation" class="band band--tight">
      <div class="wrap">
        <InPageNav :links="links" />
        <div class="prose" style="margin-top: 28px">
          <p>
            OFD Global is discussing whether the AI infrastructure campus and the advanced-fuels
            facility could be coordinated in Andhra Pradesh. The idea is co-location: two
            proposals considered together where that improves the way land, access, power, and
            water are examined.
          </p>
          <p>
            Co-location is a coordination strategy. It is a way to plan neighbouring proposals.
            It is not a single project, a single balance sheet, or a single approval.
          </p>
        </div>
      </div>
    </section>

    <section id="components" class="band band--sand">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">Kept distinct</p>
          <h2>Three components, each with its own page of record.</h2>
        </div>
        <div class="coord">
          <p>
            Infrastructure coordination, where it is useful, sits above the projects. It does not
            replace them.
          </p>
        </div>
        <div class="components">
          <article v-for="item in components" :key="item.title" class="component">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
            <p style="margin-top: 14px">
              <router-link :to="item.to">{{ item.link }}</router-link>
            </p>
          </article>
        </div>
      </div>
    </section>

    <section id="separate" class="band">
      <div class="wrap">
        <p class="eyebrow">Separate in law and in commerce</p>
        <h2>Each project retains its own structure.</h2>
        <p class="lede">
          Whatever is shared in discussion, the following stay with the proposal they belong to.
        </p>
        <ul class="separate">
          <li v-for="item in separateItems" :key="item">{{ item }}</li>
        </ul>
        <div class="prose" style="margin-top: 28px">
          <p>
            Technology ownership stays with the technology owner of that project. Operating
            responsibility stays with the operator appointed for that project. Financing is raised
            for that project. Approvals are sought for that project. Commercial agreements are
            written for that project.
          </p>
          <p>
            OFD Global can coordinate the conversation across them. Coordination does not transfer
            those five responsibilities from one project to another, or from either project to
            OFD Global.
          </p>
        </div>
      </div>
    </section>

    <section id="coordination" class="band band--paper">
      <div class="wrap split">
        <div>
          <p class="eyebrow">What coordination can cover</p>
          <h2>Shared interfaces between separate projects.</h2>
        </div>
        <div class="prose">
          <p>
            Where co-location is useful, coordination can cover the practical interface: access,
            the sequencing of studies, and the way power and water are discussed with the relevant
            authorities and utilities.
          </p>
          <p>
            The purpose is to avoid contradictory assumptions between neighbours. Shared study of
            an interface is still shared study. Land tenure, grid connection, water arrangements,
            and permits would be documented for the project they serve.
          </p>
          <p>
            The grid-first power strategy, and any sponsor-funded gas generation evaluated where
            the grid cannot meet the timetable, remain the power case described on the campus
            page. They are not absorbed into the fuels facility by being nearby.
          </p>
        </div>
      </div>
    </section>

    <ContinueBand
      title="Read each proposal on its own terms."
      text="The campus and the fuels facility each have a dedicated page. Partnerships explains who can enter the discussion, without listing any party as signed."
      primary-label="Our focus"
      primary-to="/proposals"
      secondary-label="Partnerships"
      secondary-to="/partnerships"
    />
  </article>
</template>

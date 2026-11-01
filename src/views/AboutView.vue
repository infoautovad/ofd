<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import ContinueBand from '../components/ContinueBand.vue'
import { parties, principles } from '../data/content'
import { asset } from '../lib/asset'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'About' },
]
</script>

<template>
  <article>
    <header class="page-hero">
      <div class="wrap">
        <Breadcrumb :items="crumbs" />
        <p class="eyebrow">About OFD Global</p>
        <h1>Purpose, partnership, and the way a proposal is carried.</h1>
        <p class="lede">
          OFD Global helps credible parties examine proposals that cross the lines between
          industry, government, capital, and markets.
        </p>
      </div>
    </header>

    <section class="band band--tight" aria-labelledby="purpose-title">
      <div class="wrap prose">
        <h2 id="purpose-title">Purpose</h2>
        <p>
          The work sits where an opportunity has been identified and definitive agreements are
          still ahead: who must be involved, what a site must provide, and which commercial
          pathways are realistic.
        </p>
        <p>
          OFD Global is the facilitator of that work. It coordinates partnership discussions,
          infrastructure questions, financing pathways, and offtake opportunities. Technology
          ownership remains with the technology provider. Operating responsibility remains with
          the operator appointed for a project.
        </p>
      </div>
    </section>

    <section class="band band--paper" aria-labelledby="leadership-title">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">Leadership</p>
          <h2 id="leadership-title">Who leads the discussion.</h2>
        </div>
        <article class="leader">
          <div class="leader__frame">
            <span class="leader__wave" aria-hidden="true"></span>
            <span class="leader__wave leader__wave--return" aria-hidden="true"></span>
            <span class="leader__spark" aria-hidden="true"></span>
            <div class="leader__portrait">
              <img
                :src="asset('/images/vish-nellore.jpg')"
                alt="Vish Nellore, President of OFD Global."
                width="188"
                height="188"
                decoding="async"
              />
            </div>
          </div>
          <div>
            <p class="eyebrow">President</p>
            <h3>Vish Nellore</h3>
            <p>
              Vish Nellore is President of OFD Global. He leads the firm’s search for foundations
              where technology, infrastructure, and long-term demand meet, and the work of
              bringing companies, governments, capital, and markets into the same discussion.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section class="band band--sand" aria-labelledby="model-title">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">Partnership model</p>
          <h2 id="model-title">Five parties. One coordinating role.</h2>
          <p class="lede">
            A typical proposal needs all five. OFD Global connects them. Each keeps the decision
            that already belongs to it.
          </p>
        </div>
        <div class="party-grid">
          <article v-for="party in parties" :key="party.title" class="matter">
            <p class="index">{{ party.index }}</p>
            <h3>{{ party.title }}</h3>
            <p>{{ party.text }}</p>
          </article>
        </div>
        <p class="lede" style="margin-top: 28px">
          Coordination keeps infrastructure and commercial questions in the same conversation. The
          decisions on technology, operation, public approval, capital, and customers stay with
          the parties who hold them.
        </p>
      </div>
    </section>

    <section class="band" aria-labelledby="international-title">
      <div class="wrap split">
        <div>
          <p class="eyebrow">International development</p>
          <h2 id="international-title">Place by place, on the conditions of the host location.</h2>
        </div>
        <div class="prose">
          <p>
            The current work includes Andhra Pradesh, and a separate look at Forever New laundry
            care for India and Japan. The focus itself is wider: opportunities where technology,
            infrastructure, and long-term demand meet.
            Parties around a discussion may come from more than one country. That is the sense in
            which the work is international.
          </p>
          <p>
            Each proposal is still judged on the law, the infrastructure, and the market of its
            own site. A method that is useful in one place is tested again in the next.
          </p>
          <p>
            Material on this website is general information for discussion. An investment, a
            government approval, or a commercial contract would be a separate document.
          </p>
        </div>
      </div>
    </section>

    <section class="band band--paper" aria-labelledby="connect-title">
      <div class="wrap prose">
        <h2 id="connect-title">How the connection is made</h2>
        <p>
          Connection, in practice, is a structured conversation among the parties a proposal
          needs. OFD Global helps identify who should be at the table, keeps the infrastructure
          case and the commercial case in view together, and carries the discussion toward
          feasibility, definitive agreements, and approvals when the parties choose to continue.
        </p>
        <p>
          <router-link to="/approach">The sequence is set out in Our approach.</router-link>
        </p>
      </div>
    </section>

    <section class="band" aria-labelledby="principles-title">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">Principles</p>
          <h2 id="principles-title">Responsible development, read project by project.</h2>
        </div>
        <div class="grid-2">
          <article v-for="item in principles" :key="item.title" class="matter">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <ContinueBand
      title="See the work under discussion."
      text="Andhra Pradesh holds three infrastructure concepts. A separate exploration looks at Forever New laundry care for India and Japan."
      primary-label="Explore our focus"
      primary-to="/proposals"
      secondary-label="Discuss a partnership"
      secondary-to="/contact"
    />
  </article>
</template>

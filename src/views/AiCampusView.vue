<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import ContinueBand from '../components/ContinueBand.vue'
import FigureBlock from '../components/FigureBlock.vue'
import HoldNote from '../components/HoldNote.vue'
import InPageNav from '../components/InPageNav.vue'
import StatusBanner from '../components/StatusBanner.vue'
import { aiRequirements } from '../data/content'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Our focus', to: '/proposals' },
  { label: 'AI Infrastructure Campus' },
]

const links = [
  { href: '#scale', label: 'Scale' },
  { href: '#requirements', label: 'Requirements' },
  { href: '#power', label: 'Power' },
  { href: '#offtake', label: 'Offtake' },
  { href: '#role', label: 'Role' },
]
</script>

<template>
  <article>
    <header class="page-hero">
      <div class="wrap">
        <Breadcrumb :items="crumbs" />
        <p class="eyebrow">Andhra Pradesh · Proposed</p>
        <h1 class="has-break">
          <span class="line">AI Infrastructure Campus</span>
          <span class="line">Andhra Pradesh</span>
        </h1>
        <p class="lede">
          A proposed digital infrastructure campus, facilitated by OFD Global. The discussion
          covers land, firm power, fiber connectivity, water, development requirements, and a
          commercial path for customer capacity.
        </p>
      </div>
    </header>
    <StatusBanner />

    <section class="band band--tight">
      <div class="wrap">
        <InPageNav :links="links" />
        <div class="prose" style="margin-top: 28px">
          <p>
            The campus is intended as a setting where compute capacity could be developed for
            customers if land, power, connectivity, water, approvals, and commercial agreements
            are secured. Those conditions are the substance of the proposal.
          </p>
          <p>
            OFD Global coordinates the discussion. It is the facilitator. The technology provider
            owns the technology proposed for the campus. An operator, once appointed, would carry
            operating responsibility.
          </p>
        </div>
      </div>
    </section>

    <section id="scale" class="band band--sand">
      <div class="wrap">
        <p class="eyebrow">Initial scale and expansion</p>
        <h2>An initial case, and a later expansion held as potential.</h2>
        <div class="prose">
          <p>
            The proposal describes an initial scale and a possible later expansion. The initial
            scale is the reference case for land, power, connectivity, water, and customer
            discussions. Expansion is a further possibility, to be considered once the initial
            case is better defined.
          </p>
          <p>
            Both are planning figures inside a proposal. They describe a case to be tested. They
            become built capacity, contracted load, or an approved allocation only through the
            steps that follow feasibility, agreements, and approvals.
          </p>
        </div>
        <HoldNote
          text="The numerical initial scale and the expansion case are withheld until the latest proposal text is confirmed for this page. They will be labelled as proposed and indicative. If two versions of a figure disagree, both will be identified."
        />
      </div>
    </section>

    <section id="requirements" class="band">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">What the campus requires</p>
          <h2>Land, firm power, fiber, water, and the development path.</h2>
          <p class="lede">
            These are the conditions the proposal has to satisfy. Quantities and site-specific
            arrangements stay in the working documents until they are confirmed for publication.
          </p>
        </div>
        <div class="req-grid">
          <article v-for="item in aiRequirements" :key="item.title" class="matter">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="power" class="band band--paper">
      <div class="wrap">
        <p class="eyebrow">Power strategy</p>
        <h2>Grid first. Gas generation evaluated only where required.</h2>
        <p class="lede" style="margin-bottom: 28px">
          Firm supply from the electricity grid is the primary pathway. The proposal is organised
          around that supply.
        </p>
        <div class="power">
          <article class="power__primary">
            <p class="eyebrow">Primary pathway</p>
            <h3>Electricity grid</h3>
            <p>
              Firm power from the grid is the basis of the campus power case. Delivery point,
              quantity, and timetable are matters for the utility discussion and the technical
              studies.
            </p>
          </article>
          <article class="power__secondary">
            <p class="eyebrow">Evaluated where required</p>
            <h3>Sponsor-funded gas generation</h3>
            <p>
              Where the grid cannot meet the proposed requirement on the timetable under
              discussion, sponsor-funded gas generation may be evaluated. That evaluation has its
              own technical review, financing, approvals, and agreements.
            </p>
          </article>
        </div>
        <div class="prose" style="margin-top: 28px">
          <p>
            Gas generation is included so the power strategy is complete. It is a contingency
            inside the proposal. A decision to study it is separate from a decision to build it,
            finance it, or permit it.
          </p>
        </div>
      </div>
    </section>

    <section id="offtake" class="band">
      <div class="wrap split">
        <div>
          <p class="eyebrow">Customers and offtake</p>
          <h2>Capacity matched to a commercial pathway.</h2>
        </div>
        <div class="prose">
          <p>
            Customer capacity is the commercial counterpart of the infrastructure case. Capacity
            would be taken toward the market through offtake pathways suited to digital
            infrastructure, including direct arrangements with customers where those arrangements
            can be reached.
          </p>
          <p>
            No customer is named on this page. No volume is presented as contracted. Operator
            identities that the working materials treat as confidential are not published.
          </p>
        </div>
      </div>
    </section>

    <section id="role" class="band band--sand">
      <div class="wrap">
        <div class="split">
          <div class="prose">
            <p class="eyebrow">Who holds what</p>
            <h2>Facilitation, kept distinct from operation and technology.</h2>
            <p>
              OFD Global’s role is to coordinate the operating company, the technology provider,
              the host government, private capital, and the commercial market. Technology proposed
              for the campus remains the property of its owner. Operation, if a project proceeds,
              remains with the operator appointed for it.
            </p>
            <p>
              Financing, approvals, and customer agreements stay with the parties who enter them.
              A shared discussion of the campus does not move those responsibilities to OFD Global.
            </p>
          </div>
          <FigureBlock
            src="/images/digital.png"
            alt="A data hall with rows of server cabinets."
          />
        </div>
      </div>
    </section>

    <ContinueBand
      title="Also in our focus"
      text="The fuels proposal is separate. The integrated page describes co-location only as coordination, with ownership, operation, financing, approvals, and commercial agreements kept apart."
      primary-label="Advanced fuels"
      primary-to="/proposals/advanced-fuels"
      secondary-label="Integrated campus"
      secondary-to="/proposals/integrated-campus"
    />
  </article>
</template>

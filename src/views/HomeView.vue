<script setup>
import { foundations, movements, roles } from '../data/content'
import { asset } from '../lib/asset'
</script>

<template>
  <article>
    <section class="hero" aria-labelledby="home-title">
      <img
        class="hero__media"
        :src="asset('/images/coast.png')"
        alt="Aerial view of a coastline, port, and city at sunrise."
        fetchpriority="high"
        decoding="async"
      />
      <div class="hero__veil" aria-hidden="true"></div>
      <div class="wrap hero__content">
        <p class="eyebrow">Investment and development facilitation</p>
        <h1 id="home-title">
          <span>Connecting ambition.</span>
          <span>Building what’s next.</span>
        </h1>
        <p class="lede">
          OFD Global looks for foundations for a changing world: opportunities where technology,
          infrastructure, and long-term demand meet. It then connects the companies, governments,
          capital, and markets that a serious discussion needs.
        </p>
        <div class="hero__actions">
          <v-btn class="btn-copper" to="/proposals">Explore our focus</v-btn>
          <v-btn class="btn-ghost" to="/contact">Discuss a partnership</v-btn>
        </div>
      </div>
    </section>

    <section class="band" aria-labelledby="intro-title">
      <div class="wrap split">
        <div>
          <p class="eyebrow">OFD Global</p>
          <h2 id="intro-title">Foundations for a changing world.</h2>
          <div class="prose">
            <p>
              The focus is the meeting point: technology, infrastructure, and demand that can last.
              OFD Global explores those points and coordinates the discussion around them.
            </p>
            <p>
              OFD Global’s work is coordination. The operating company runs a project if one
              proceeds. The technology provider owns the technology. Host governments, capital, and
              customers keep the decisions that belong to them.
            </p>
          </div>
        </div>
        <div>
          <article v-for="role in roles" :key="role.title" class="role">
            <h3>{{ role.title }}</h3>
            <p>{{ role.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="band band--sand" aria-labelledby="foundations-title">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">The test</p>
          <h2 id="foundations-title">Three things have to meet.</h2>
          <p class="lede">
            An opportunity is worth the work when technology, infrastructure, and lasting demand
            can be seen together.
          </p>
        </div>
        <div class="grid-3">
          <article v-for="item in foundations" :key="item.title" class="sector">
            <div class="sector__media">
              <img :src="item.image" :alt="item.alt" loading="lazy" decoding="async" />
            </div>
            <div class="sector__body">
              <p class="sector__index">{{ item.index }}</p>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="band" aria-labelledby="movement-title">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">The path</p>
          <h2 id="movement-title">From a meeting point to a decision.</h2>
          <p class="lede">
            The sequence is the same wherever the opportunity sits. The particulars stay with
            that opportunity.
          </p>
        </div>
        <div class="grid-3">
          <article v-for="item in movements" :key="item.title" class="matter">
            <p class="index">{{ item.index }}</p>
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
        <div class="actions" style="margin-top: 32px">
          <v-btn class="btn-copper" to="/approach">Read our approach</v-btn>
        </div>
      </div>
    </section>

    <section class="band band--navy" aria-labelledby="close-title">
      <div class="wrap">
        <p class="eyebrow">Next</p>
        <h2 id="close-title">The live work sits in Our focus.</h2>
        <p class="lede">
          See what is under discussion, or start a partnership conversation around a role you
          would actually hold.
        </p>
        <div class="actions" style="margin-top: 28px">
          <v-btn class="btn-copper" to="/proposals">Explore our focus</v-btn>
          <v-btn class="btn-ghost" to="/contact">Discuss a partnership</v-btn>
        </div>
      </div>
    </section>
  </article>
</template>

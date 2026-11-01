<script setup>
import { reactive, ref } from 'vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import { enquiryTopics, officeContact } from '../data/content'

const crumbs = [
  { label: 'Home', to: '/' },
  { label: 'Contact' },
]

const form = reactive({
  name: '',
  email: '',
  phone: '',
  organisation: '',
  topic: enquiryTopics[0],
  message: '',
  website: '',
})

const sending = ref(false)
const sent = ref(false)
const error = ref('')

const phoneHref = officeContact.phone
  ? `tel:${officeContact.phone.replace(/[^\d+]/g, '')}`
  : ''

function validEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

async function onSubmit() {
  error.value = ''
  sent.value = false

  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    error.value = 'Name, email, and a message are required.'
    return
  }
  if (!validEmail(form.email.trim())) {
    error.value = 'Enter an email address that can receive a reply.'
    return
  }
  if (form.website) {
    sent.value = true
    return
  }
  if (!officeContact.email) {
    error.value = 'This form cannot deliver yet. OFD Global still needs a receiving email address.'
    return
  }

  sending.value = true
  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(officeContact.email)}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          organisation: form.organisation.trim(),
          topic: form.topic,
          message: form.message.trim(),
          _subject: `OFD Global enquiry from ${form.name.trim()}`,
          _template: 'table',
          _captcha: 'false',
          _replyto: form.email.trim(),
        }),
      },
    )
    if (!response.ok) throw new Error('Request failed')
    sent.value = true
    form.name = ''
    form.email = ''
    form.phone = ''
    form.organisation = ''
    form.topic = enquiryTopics[0]
    form.message = ''
  } catch {
    error.value = 'The message did not send. Please try again in a moment.'
  } finally {
    sending.value = false
  }
}
</script>

<template>
  <article>
    <header class="page-hero">
      <div class="wrap">
        <Breadcrumb :items="crumbs" />
        <p class="eyebrow">Contact</p>
        <h1>Discuss a partnership.</h1>
        <p class="lede">
          Send a message with your contact details. OFD Global reads enquiries about the work
          under discussion and about a role you would hold.
        </p>
      </div>
    </header>

    <section class="band band--tight" aria-labelledby="write-title">
      <div class="wrap contact-grid">
        <aside class="contact-card" aria-labelledby="details-title">
          <p class="eyebrow">Contact details</p>
          <h2 id="details-title">OFD Global Team</h2>
          <ul class="contact-list">
            <li v-if="officeContact.email">
              <span>Email</span>
              <a :href="`mailto:${officeContact.email}`">{{ officeContact.email }}</a>
            </li>
            <li v-if="officeContact.phone">
              <span>Phone</span>
              <a :href="phoneHref">{{ officeContact.phone }}</a>
            </li>
            <li v-if="officeContact.address">
              <span>Address</span>
              <p>{{ officeContact.address }}</p>
            </li>
          </ul>
          <p>
            Use the form for a first conversation. Keep confidential commercial terms for a
            direct exchange after OFD Global replies.
          </p>
        </aside>

        <form id="message" class="enquiry" novalidate @submit.prevent="onSubmit">
          <h2 id="write-title">Send a message</h2>
          <p class="enquiry__honey" aria-hidden="true">
            <label>
              Website
              <input v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
            </label>
          </p>
          <div class="enquiry__row">
            <label>
              <span>Name</span>
              <input v-model="form.name" name="name" type="text" autocomplete="name" required />
            </label>
            <label>
              <span>Email</span>
              <input v-model="form.email" name="email" type="email" autocomplete="email" required />
            </label>
          </div>
          <div class="enquiry__row">
            <label>
              <span>Phone</span>
              <input v-model="form.phone" name="phone" type="tel" autocomplete="tel" />
            </label>
            <label>
              <span>Organisation</span>
              <input v-model="form.organisation" name="organisation" type="text" autocomplete="organization" />
            </label>
          </div>
          <label>
            <span>What this is about</span>
            <select v-model="form.topic" name="topic">
              <option v-for="topic in enquiryTopics" :key="topic" :value="topic">{{ topic }}</option>
            </select>
          </label>
          <label>
            <span>Message</span>
            <textarea v-model="form.message" name="message" rows="6" required></textarea>
          </label>
          <p v-if="error" class="enquiry__status" role="alert">{{ error }}</p>
          <p v-else-if="sent" class="enquiry__status enquiry__status--ok" role="status">
            Your message has been sent. A reply will use the contact details you gave.
          </p>
          <v-btn class="btn-copper" type="submit" :loading="sending" :disabled="sending">
            Send message
          </v-btn>
        </form>
      </div>
    </section>
  </article>
</template>

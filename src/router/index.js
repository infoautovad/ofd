import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProposalsView from '../views/ProposalsView.vue'
import AiCampusView from '../views/AiCampusView.vue'
import FuelsView from '../views/FuelsView.vue'
import IntegratedView from '../views/IntegratedView.vue'
import ForeverNewView from '../views/ForeverNewView.vue'
import ApproachView from '../views/ApproachView.vue'
import PartnershipsView from '../views/PartnershipsView.vue'
import ContactView from '../views/ContactView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'OFD Global',
      background: '/images/coast.png',
      description:
        'OFD Global is an international investment and development facilitator connecting operating companies, technology providers, host governments, private capital, and commercial markets.',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About',
      background: '/images/bg/about.jpg',
      description:
        'OFD Global’s purpose, partnership model, and approach to international development, responsible practice, and project-specific diligence.',
    },
  },
  {
    path: '/proposals',
    name: 'proposals',
    component: ProposalsView,
    meta: {
      title: 'Our focus',
      background: '/images/bg/focus.jpg',
      description:
        'OFD Global explores opportunities where technology, infrastructure, and long-term demand meet. Current work includes Andhra Pradesh, and Forever New laundry care for India and Japan.',
    },
  },
  {
    path: '/proposals/ai-infrastructure-campus',
    name: 'ai-campus',
    component: AiCampusView,
    meta: {
      title: 'AI Infrastructure Campus — Andhra Pradesh',
      background: '/images/digital.png',
      description:
        'A proposed AI infrastructure campus in Andhra Pradesh: land, firm power, fiber, water, a grid-first power strategy, and offtake pathways.',
    },
  },
  {
    path: '/proposals/advanced-fuels',
    name: 'fuels',
    component: FuelsView,
    meta: {
      title: 'Advanced Fuels — Andhra Pradesh',
      background: '/images/energy.png',
      description:
        'A proposed advanced-fuels investment in Andhra Pradesh, covering feedstock, site, infrastructure, product slate, technology partnership, and offtake.',
    },
  },
  {
    path: '/proposals/integrated-campus',
    name: 'integrated',
    component: IntegratedView,
    meta: {
      title: 'Integrated AI and Advanced Fuels Campus',
      background: '/images/coast.png',
      description:
        'A proposed co-location strategy for an AI campus, an advanced-fuels facility, and any separate power component in Andhra Pradesh.',
    },
  },
  {
    path: '/proposals/forever-new',
    name: 'forever-new',
    component: ForeverNewView,
    meta: {
      title: 'Forever New — India and Japan',
      background: '/images/bg/laundry.jpg',
      description:
        'OFD Global is exploring Forever New laundry-care products for India and Japan, and is looking for candidates to bring the products into those countries and sell them.',
    },
  },
  {
    path: '/approach',
    name: 'approach',
    component: ApproachView,
    meta: {
      title: 'Our approach',
      background: '/images/bg/approach.jpg',
      description:
        'How OFD Global identifies opportunities, aligns partners, evaluates sites, coordinates capital and offtake, and moves through feasibility, agreements, and approvals.',
    },
  },
  {
    path: '/partnerships',
    name: 'partnerships',
    component: PartnershipsView,
    meta: {
      title: 'Partnerships',
      background: '/images/bg/partnerships.jpg',
      description:
        'How governments, technology providers, operators, investors, and development partners can engage with OFD Global on a proposal.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact',
      background: '/images/bg/contact.jpg',
      description:
        'Send a message to the OFD Global Team about a partnership.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: 'Page not found',
      background: '/images/bg/notfound.jpg',
      description: 'This page is not part of the OFD Global website.',
    },
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (to.hash) {
      return {
        el: to.hash,
        top: 96,
        behavior: reduce ? 'auto' : 'smooth',
      }
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.name === 'home' ? 'OFD Global' : `${to.meta.title} · OFD Global`
  const description = document.querySelector('meta[name="description"]')
  if (description && to.meta.description) {
    description.setAttribute('content', to.meta.description)
  }
})

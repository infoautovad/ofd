/**
 * Public copy for OFD Global.
 *
 * Quantities, technology-provider names, operator identities, and contact
 * details are omitted on purpose. They were not in the workspace materials.
 * Add them only from a confirmed source. The logo is the file supplied in
 * public/images. Do not describe a proposal as approved, financed, under
 * construction, or operational.
 */

import { asset } from '../lib/asset'

export const nav = [
  { label: 'About', to: '/about' },
  { label: 'Our focus', to: '/proposals' },
  { label: 'Our approach', to: '/approach' },
  { label: 'Partnerships', to: '/partnerships' },
]

export const officeContact = {
  person: 'Vish Nellore',
  role: 'President',
  email: '',
  phone: '',
  address: '',
}

export const enquiryTopics = [
  'Andhra Pradesh',
  'Forever New, India and Japan',
  'A partnership',
  'Something else',
]

export const proposals = [
  {
    title: 'AI Infrastructure Campus',
    place: 'Andhra Pradesh',
    to: '/proposals/ai-infrastructure-campus',
    summary:
      'A proposed digital infrastructure campus, discussed around land, firm power, fiber connectivity, water, and a path to customer capacity.',
  },
  {
    title: 'Advanced Fuels',
    place: 'Andhra Pradesh',
    to: '/proposals/advanced-fuels',
    summary:
      'A proposed fuels investment, discussed around technology, feedstock, site conditions, infrastructure, a product slate, and offtake.',
  },
  {
    title: 'Integrated AI and Advanced Fuels Campus',
    place: 'Andhra Pradesh',
    to: '/proposals/integrated-campus',
    summary:
      'A proposed co-location of the campus and the fuels facility, with infrastructure coordination and with each project kept separate.',
  },
  {
    title: 'Forever New',
    place: 'India and Japan',
    status: 'Exploring',
    more: 'Read the opportunity',
    to: '/proposals/forever-new',
    summary:
      'A look at bringing Forever New laundry-care products into India and Japan, and at candidates who would carry those products into each country and sell them.',
  },
]

export const foundations = [
  {
    index: '01',
    title: 'Technology',
    image: asset('/images/digital.png'),
    alt: 'A data hall with rows of server cabinets.',
    text: 'A technology with an owner. Someone who can answer for it, and who keeps that ownership if the work goes further.',
  },
  {
    index: '02',
    title: 'Infrastructure',
    image: asset('/images/energy.png'),
    alt: 'An aerial view of an industrial facility with process units, storage tanks, and pipelines.',
    text: 'A place that can carry the idea: land, power, water, access, and the connections a real development needs.',
  },
  {
    index: '03',
    title: 'Lasting demand',
    image: asset('/images/coast.png'),
    alt: 'An aerial view of a coastline, port, and city at sunrise.',
    text: 'A market, a customer, or an offtake that can last. The commercial case has to be able to stand beside the physical one.',
  },
]

export const movements = [
  {
    index: '01',
    title: 'See the meeting point',
    text: 'Technology, infrastructure, and demand are read together. If one of them is missing, the opportunity is not ready.',
  },
  {
    index: '02',
    title: 'Bring the decision-holders',
    text: 'Operators, technology owners, governments, capital, and customers stay in their own roles. OFD Global brings them into one discussion.',
  },
  {
    index: '03',
    title: 'Carry it forward',
    text: 'When the parties continue, the path runs through feasibility, agreements, and approvals. Each one is its own gate.',
  },
]

export const roles = [
  {
    title: 'Facilitation',
    text: 'OFD Global connects operating companies, technology providers, host governments, private capital, and commercial markets.',
  },
  {
    title: 'Coordination',
    text: 'The work covers partnership discussions, infrastructure requirements, financing pathways, and offtake opportunities.',
  },
  {
    title: 'Separate responsibilities',
    text: 'Technology ownership stays with the technology provider. Operating responsibility stays with the operator. Financing, approvals, and commercial agreements stay with the parties who enter them.',
  },
]

export const parties = [
  {
    index: '01',
    title: 'Operating companies',
    text: 'The party that would run a facility if a project proceeds.',
  },
  {
    index: '02',
    title: 'Technology providers',
    text: 'The party that owns the technology and answers for it.',
  },
  {
    index: '03',
    title: 'Host governments',
    text: 'The party that sets the public framework: land, policy, permits, and the public interest.',
  },
  {
    index: '04',
    title: 'Private capital',
    text: 'The party that may finance a project, on terms still to be agreed, and only after diligence.',
  },
  {
    index: '05',
    title: 'Commercial markets',
    text: 'The customers and offtakers who may buy capacity or products, if agreements are reached.',
  },
]

export const principles = [
  {
    title: 'Responsible development',
    text: 'Land, community, environmental, and safety questions are examined with the same seriousness as power, connectivity, and offtake. The examination is specific to the project. This website states no environmental outcome, certification, or performance result.',
  },
  {
    title: 'Project-specific diligence',
    text: 'Each proposal is read on its own documents: site, infrastructure, counterparties, approvals, and commercial structure. Work on one proposal stays with that proposal.',
  },
  {
    title: 'Clear roles',
    text: 'Technology ownership, operating responsibility, financing, approvals, and commercial agreements stay with the parties who hold them.',
  },
  {
    title: 'Confidentiality',
    text: 'Commercially sensitive identities and terms stay off the public pages. Operator identities treated as confidential in the working materials remain confidential.',
  },
  {
    title: 'Plain description of status',
    text: 'A meeting, an introduction, or a study is described as what it is. Signed partnerships are described only when documentation supports that description.',
  },
]

export const approachSteps = [
  {
    index: '01',
    title: 'Identify opportunities',
    text: 'OFD Global looks for proposals in which operating companies, technology, host governments, capital, and markets can meet around a defined infrastructure or industrial opportunity.',
  },
  {
    index: '02',
    title: 'Align government and industry partners',
    text: 'The relevant public authorities and industry parties are brought into the same frame, so that expectations about land, utilities, policy, and roles are visible early. Alignment at this stage is a discussion. It is a step toward agreement, and the authority to approve stays with government.',
  },
  {
    index: '03',
    title: 'Evaluate infrastructure and site readiness',
    text: 'Land, power, connectivity, water, access, and the other conditions of the site are tested against the proposal. Readiness is a finding of that work.',
  },
  {
    index: '04',
    title: 'Coordinate capital and commercial pathways',
    text: 'Financing and offtake are prepared as pathways that can be diligenced. Capital is described as committed, and offtake as contracted, only when agreements say so.',
  },
  {
    index: '05',
    title: 'Progress through feasibility, definitive agreements, and approvals',
    text: 'Where the parties continue, a proposal moves through feasibility and then through the agreements and approvals the project requires. Each is its own gate. A page on this website is not a gate that has been passed.',
  },
]

export const audiences = [
  {
    id: 'governments',
    index: '01',
    title: 'Governments',
    text: 'Host governments and public agencies can discuss how a proposal would sit within land, power, water, connectivity, and approval processes. OFD Global’s part in that discussion is coordination. The authority to approve remains with government.',
  },
  {
    id: 'technology-providers',
    index: '02',
    title: 'Technology providers',
    text: 'Technology providers can discuss a project-specific role. The technology remains theirs. Any licence or technical role would be written in its own agreement. A conversation on its own is an opening, and the agreement is what would define the role.',
  },
  {
    id: 'operators',
    index: '03',
    title: 'Operators',
    text: 'Operating companies can discuss running a facility if a project proceeds. Operating responsibility would sit with the operator. OFD Global’s responsibility is facilitation and coordination.',
  },
  {
    id: 'investors',
    index: '04',
    title: 'Investors',
    text: 'Providers of private capital can discuss financing pathways after project-specific diligence. Material on this website is general information. It is an introduction to the proposals, and any investment would depend on separate documents, diligence, and agreements.',
  },
  {
    id: 'development-partners',
    index: '05',
    title: 'Development partners',
    text: 'Advisers and delivery parties can discuss support for feasibility, agreements, or approvals. A role of that kind would be set out in its own terms.',
  },
]

export const aiRequirements = [
  {
    title: 'Land',
    text: 'A site able to carry the initial campus described in the proposal, with a planning view of any later expansion. Area, tenure, and the precise location remain in the proposal documents.',
  },
  {
    title: 'Firm power',
    text: 'Power matched to the proposed initial load, and a credible view of power for any later expansion. Quantity, delivery point, and timetable sit in the proposal and in the studies that would follow.',
  },
  {
    title: 'Fiber connectivity',
    text: 'Connectivity of a standard suitable for digital infrastructure, including route diversity where the proposal calls for it. Route, capacity, and provider arrangements are part of the technical case.',
  },
  {
    title: 'Water',
    text: 'A water arrangement appropriate to the proposed operations. Volume, source, and discharge conditions are specific to the site and remain in the technical case.',
  },
  {
    title: 'Development requirements',
    text: 'Access, land status, studies, and the host-government approvals that apply to a campus of this kind. A discussion with government is a stage in that process. Approval, when it comes, is a separate act of the authority.',
  },
]

export const fuelMatters = [
  {
    title: 'Feedstock',
    text: 'The proposal has to identify the feedstock, its availability, and the arrangements required to bring it to site. Type and volume are published only from the confirmed proposal text.',
  },
  {
    title: 'Site',
    text: 'The proposal has to identify a site in Andhra Pradesh and the conditions of that site: access, land, and room for the facility and its utilities. Location detail beyond the state stays in the proposal until it is confirmed for a public page.',
  },
  {
    title: 'Infrastructure',
    text: 'The facility needs the utilities and logistics its process requires, including power, water, and the means to receive feedstock and move products. Those needs follow the technology and the site.',
  },
  {
    title: 'Product slate',
    text: 'The proposal has to name the products and the form in which they would be sold. The slate is published when the latest text is confirmed for this audience. Yield, purity, and performance stay in the technical studies.',
  },
  {
    title: 'Commercial requirements',
    text: 'The proposal has to show how the products would reach a market, and which approvals sit on the path to a contract. Price, buyer, and volume are matters for those agreements.',
  },
]

export const separateItems = [
  'Technology ownership',
  'Operating responsibility',
  'Financing',
  'Approvals',
  'Commercial agreements',
]

export const unpublished = [
  'A verified email address, telephone number, and postal address.',
  'Numerical scale, land area, power load, feedstock, product slate, and investment particulars, until the latest proposal is confirmed for this page.',
  'Names of technology providers and operators, unless a source supports publishing them to this audience. Operator identities treated as confidential stay confidential.',
  'Any description of a partnership, financing, approval, or offtake as signed or committed, unless documentation supports that description.',
  'Downloads of proposal documents, until a document is appropriate for this audience.',
]

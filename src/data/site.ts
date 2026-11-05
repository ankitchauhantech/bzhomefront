export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  iconName: string;
  badge: string;
  actionText: string;
  link: string;
  bullets: string[];
}

export interface EventItem {
  id: string;
  title: string;
  tag: "Current" | "Past" | "Featured";
  date?: string;
  location?: string;
  summary: string;
  image: string;
  highlights: string[];
}

export interface StatItem {
  value: string;
  label: string;
  subtext: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  branch?: string;
}

export const site = {
  name: "Bravo Zulu Homefront Alliance",
  shortName: "BZ Homefront",
  codeName: "BZ Alliance",
  logo: "https://bzhomefront.com/gallery_gen/128fb74b5faaf297a68b38ca9dad76bd_fit.png",
  localLogo: "/logo.png",
  tagline: "Veterans Unite: Impact Beyond Service",
  motto: "Veterans Unite: Impact Beyond Service.",
  mission: "Veteran-founded and operated IRS 501(c)(19) organization dedicated to easing civilian adjustment challenges, protecting earned benefits, and continuing selfless community service across Texas.",
  nonProfitStatus: "IRS 501(c)(19) Tax-Exempt Veterans Organization",
  founded: "Founded by U.S. Military Veterans",
  headquarters: "3225 Martin Luther King Jr. Blvd, Suite 130, Dallas, TX 75210",
  email: "info@bzhomefront.org",
  phones: ["(469) 268-4147", "(682) 882-0508"],
  hotline: "Call 469.268.4147 for Veteran Support",
  hours: "Monday – Friday: 9:00 AM – 5:00 PM CST",
  social: {
    instagram: "https://www.instagram.com/bzhomefront/",
    facebook: "https://www.facebook.com/BZHomefront",
    x: "https://x.com/bzhomefront",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Design 1 (Vanguard)", href: "/design-1" },
    { label: "Design 2 (Modern)", href: "/design-2" },
    { label: "Design 3 (Heritage)", href: "/design-3" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
};

export const stats: StatItem[] = [
  { value: "500+", label: "Veterans Supported", subtext: "Transitioning to civilian stability" },
  { value: "$1.8M+", label: "Benefits Secured", subtext: "In VA disability & property tax relief" },
  { value: "100%", label: "Veteran-Led", subtext: "Founded & operated by military veterans" },
  { value: "2,500+", label: "Meals & Care Kits", subtext: "Distributed to homeless & low-income vets" },
];

export const services: ServiceItem[] = [
  {
    id: "va-claims",
    title: "VA Claims & Disability Filing",
    shortDesc: "Step-by-step assistance with military records, DD-214 retrieval, appeals, and VA enrollment.",
    description: "Navigating the Department of Veterans Affairs can be overwhelming. We pair you with veteran mentors who understand the medical rating system, PACT Act conditions, and evidentiary standards to secure your full earned disability compensation.",
    iconName: "ShieldCheck",
    badge: "Most Requested",
    actionText: "Request Claims Help",
    link: "/contact?service=va-claims",
    bullets: ["DD-214 & Service Record retrieval", "Disability compensation & pension filings", "PACT Act presumptive claim guidance", "Supplemental claims & rating increases"],
  },
  {
    id: "texas-tax",
    title: "Texas Veteran Property Tax Exemptions",
    shortDesc: "Guidance on Form 50-114 for 100% disabled veteran homestead exemptions and senior reductions.",
    description: "Texas law provides exceptional property tax protections for disabled veterans and surviving spouses. We walk you through qualifying percentages, county appraisal filing, and ensuring you receive every exemption you are legally owed.",
    iconName: "Home",
    badge: "Texas Law",
    actionText: "Check Exemption Eligibility",
    link: "/contact?service=property-tax",
    bullets: ["100% Permanent & Total full homestead exemption", "Age 65+ veteran $12,000 exemption", "Tiered 10%-90% partial assessed value waivers", "Surviving spouse benefit continuation"],
  },
  {
    id: "transition",
    title: "Civilian Transition & Employment",
    shortDesc: "Bridging the gap between military service and meaningful civilian careers and financial security.",
    description: "From translating military specialties into corporate resumes to mock interviews and job placement partnerships, we ensure soldiers, sailors, airmen, and marines transition into thriving professional careers.",
    iconName: "Briefcase",
    badge: "Career Hub",
    actionText: "Explore Transition Support",
    link: "/contact?service=transition",
    bullets: ["Military-to-civilian resume translation", "Direct job referrals with veteran-friendly employers", "Financial planning & budget coaching", "Emergency housing & utility assistance referrals"],
  },
  {
    id: "reentry",
    title: "Justice-Involved Veteran Reentry",
    shortDesc: "Comprehensive assistance for incarcerated veterans returning to civilian society.",
    description: "Nobody gets left behind. We provide focused outreach to veterans in correctional facilities, ensuring they have photo identification, bank accounts, transitional housing, and job training the moment they are released.",
    iconName: "UserCheck",
    badge: "Impact Initiative",
    actionText: "Learn About Reentry",
    link: "/contact?service=reentry",
    bullets: ["State photo ID & Social Security card recovery", "Direct assistance opening initial bank accounts", "Vocational & trade certifications", "Mentorship and peer support groups"],
  },
  {
    id: "honor-flights",
    title: "Honor Flights Coordination",
    shortDesc: "Free, fully chaperoned historic flights for senior veterans to visit their memorials in Washington, D.C.",
    description: "In collaboration with the Honor Flight Network, we coordinate all-expenses-paid trips for World War II, Korean War, and Vietnam War veterans to visit the national memorials honoring their supreme sacrifices.",
    iconName: "Plane",
    badge: "Honor & Legacy",
    actionText: "Nominate a Veteran",
    link: "/contact?service=honor-flight",
    bullets: ["100% free travel, lodging & meals for veterans", "Dedicated medical & companion escort support", "Ceremonies at WWII, Korean, and Vietnam Memorials", "Family reception upon return"],
  },
  {
    id: "buffalo-soldiers",
    title: "Buffalo Soldiers Youth Encampment",
    shortDesc: "Teaching youth equestrian skills, living history, emotional intelligence, and resilience.",
    description: "Partnering with the historic Dallas County Buffalo Soldiers, Camp Fort 24th immerses young people in horsemanship, outdoor encampment, self-discipline, and the proud history of African American military trailblazers.",
    iconName: "Compass",
    badge: "Youth & Heritage",
    actionText: "Join Camp Fort 24th",
    link: "/contact?service=buffalo-soldiers",
    bullets: ["Horsemanship & equestrian training", "Wilderness survival and encampment skills", "Emotional intelligence and character building", "Living history presentations across Dallas-Fort Worth"],
  },
];

export const events: EventItem[] = [
  {
    id: "rodeo-buffalo",
    title: "The Bill Pickett Invitational Rodeo & Buffalo Soldiers Tribute",
    tag: "Featured",
    date: "Juneteenth Celebration",
    location: "Dallas-Fort Worth Metroplex",
    summary: "Partnering with the Dallas County Buffalo Soldiers for an iconic Juneteenth cultural celebration, featuring a living history exhibition of Black cowboys and 19th-century military riders.",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Horsemanship Demonstration", "Living History Reenactment", "Youth Educational Booth"],
  },
  {
    id: "fort-worth-history",
    title: "City of Fort Worth Black History City Council Commemoration",
    tag: "Current",
    date: "Annual Civic Program",
    location: "Fort Worth City Hall",
    summary: "Recognized as special honored guests at the Fort Worth City Council meeting, celebrating the lasting service and contributions of African American service members.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
    highlights: ["City Proclamation", "Veteran Honor Guard", "Community Address"],
  },
  {
    id: "peoples-memorial",
    title: "Honoring Fallen Heroes at Peoples' Memorial Park Cemetery",
    tag: "Past",
    date: "Restoration Project",
    location: "Dallas, Texas",
    summary: "Comprehensive restoration and ongoing caretaking of a historic African American cemetery containing nearly 600 graves, majority being decorated wartime veterans.",
    image: "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Headstone Restoration", "Wreath Placement", "Perpetual Care Maintenance"],
  },
  {
    id: "camp-fort-24",
    title: "Buffalo Soldiers Camp Fort 24th Youth Encampment",
    tag: "Current",
    date: "Summer Leadership Session",
    location: "Lancaster, TX Grounds",
    summary: "Teaching youth survival skills, horsemanship, emotional wellness, physical conditioning, and leadership alongside veteran instructors and equestrian experts.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    highlights: ["Equestrian Discipline", "Wilderness Skills", "Team Building"],
  },
  {
    id: "feeding-unhoused",
    title: "South Dallas Veteran & Community Hunger Relief",
    tag: "Past",
    date: "Monthly Service Day",
    location: "Martin Luther King Jr. Blvd Corridor",
    summary: "Cooking hot gourmet meals on-site and distributing durable hygiene backpacks containing thermal socks, toiletries, and resource cards in honor of fallen Marine comrades.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80",
    highlights: ["350+ Fresh Meals Cooked", "Hygiene Kits Distributed", "Direct VA Outreach Table"],
  },
  {
    id: "community-garden",
    title: "Urban Veteran Victory Garden & Neighborhood Harvest",
    tag: "Past",
    date: "Harvest Initiative",
    location: "South Dallas Community Plot",
    summary: "Transforming an abandoned vacant city lot into a lush organic agricultural hub, harvesting fresh collard greens, tomatoes, and herbs for neighborhood elders and veterans.",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=80",
    highlights: ["1,200 lbs Produce Donated", "Therapeutic Veteran Gardening", "Youth Volunteer Training"],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote: "When I returned home after two deployments, finding steady work and getting my VA disability approved felt impossible. BZ Homefront walked me through every medical record and got my 90% rating approved in 4 months.",
    author: "Staff Sergeant Marcus D.",
    role: "U.S. Army Veteran (OIF / OEF)",
    branch: "Army",
  },
  {
    quote: "The Texas property tax exemption saved my family over $6,400 a year on our house. The team at BZ Homefront handled Form 50-114 and accompanied me to the appraisal office. True brothers in arms.",
    author: "Sergeant First Class Yolanda T.",
    role: "U.S. Air Force Retired",
    branch: "Air Force",
  },
  {
    quote: "Seeing the Buffalo Soldiers Camp teach our young boys discipline, horsemanship, and pride gave my son a positive male role model and purpose he never had before.",
    author: "Evelyn Washington",
    role: "Parent of Camp Fort 24th Cadet",
    branch: "Community Member",
  },
];

export const taxExemptionTiers = [
  { rating: "100% P&T or Unemployable", exemption: "100% Total Property Tax Exemption", note: "Zero county, city, and ISD property taxes on homestead" },
  { rating: "70% to 99% Disability", exemption: "$12,000 Assessed Value Exemption", note: "Substantial annual deduction from taxable value" },
  { rating: "50% to 69% Disability", exemption: "$10,000 Assessed Value Exemption", note: "Standard Texas veteran deduction" },
  { rating: "30% to 49% Disability", exemption: "$7,500 Assessed Value Exemption", note: "Applied automatically upon approval" },
  { rating: "10% to 29% Disability", exemption: "$5,000 Assessed Value Exemption", note: "Basic service-connected disability discount" },
  { rating: "Age 65+ with 10%+ Rating", exemption: "$12,000 Maximum Exemption", note: "Special senior veteran enhancement" },
];

export const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&w=1000&q=80",
    title: "Bill Pickett Invitational Rodeo & Buffalo Soldiers",
    category: "Heritage & Living History",
  },
  {
    url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80",
    title: "City of Fort Worth City Council Commemoration",
    category: "Civic Honors",
  },
  {
    url: "https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&w=1000&q=80",
    title: "Peoples' Memorial Park Cemetery Restoration",
    category: "Honoring Fallen Heroes",
  },
  {
    url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80",
    title: "Camp Fort 24th Youth Horsemanship",
    category: "Youth Leadership",
  },
  {
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80",
    title: "South Dallas Veteran Hunger Relief & Hot Meals",
    category: "Community Outreach",
  },
  {
    url: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1000&q=80",
    title: "Urban Veteran Victory Garden Harvest",
    category: "Community Agriculture",
  },
  {
    url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80",
    title: "Honor Flight Washington D.C. Memorial Tour",
    category: "Senior Veterans",
  },
  {
    url: "https://images.unsplash.com/photo-1579208575657-c595a053b977?auto=format&fit=crop&w=1000&q=80",
    title: "Texas Veteran Property Tax Advocacy Workshop",
    category: "Benefits & Rights",
  },
];


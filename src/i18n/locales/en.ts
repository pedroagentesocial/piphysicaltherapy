/**
 * English dictionary — the source-of-truth SHAPE. `es.ts` is typed `typeof en`,
 * so any missing/renamed key is a compile error (no untranslated strings ship).
 * Copy rules: no em dashes; sentence-case headings; claims about Utah direct
 * access / PIP are stated generally with a "check your plan" hedge.
 */
export const en = {
  site: {
    name: 'PI Physical Therapy',
    tagline: 'Physical therapy and injury rehabilitation in Salt Lake City.',
  },

  nav: {
    home: 'Home',
    services: 'Services',
    rehab: 'Physical therapy',
    accident: 'After an accident',
    conditions: 'Conditions',
    team: 'About',
    firstVisit: 'Your first visit',
    stories: 'Patient stories',
    contact: 'Contact',
    book: 'Request an appointment',
    call: 'Call',
    write: 'Message us',
    menu: 'Menu',
    skip: 'Skip to content',
  },

  langSwitcher: { label: 'Choose language' },

  common: {
    seHablaEspanol: 'Se habla español',
    directAccess: 'No referral needed to start',
    sameWeek: 'Same-week appointments',
    bilingual: 'Bilingual care',
    phoneLabel: 'Call us',
    backTo: 'Back to',
    learnMore: 'Learn more',
    treatedHere: 'Treated here',
    forAccidents: 'Accident rehab',
    bothPillars: 'Rehab and accident care',
    comingSoon: 'Coming soon',
  },

  // Unique title + meta description per page (mirrored in es.ts with ES keywords).
  seo: {
    home: {
      title: 'Physical Therapy in Salt Lake City | PI Physical Therapy',
      description:
        'Doctor of Physical Therapy care in Salt Lake City for orthopedic, post-surgical, sports and after-accident rehab. Same-week visits, no referral needed to start. Se habla español.',
    },
    servicesPT: {
      title: 'Physical Therapy & Sports Rehab in Salt Lake City',
      description:
        'One-on-one physical therapy in Salt Lake City for back pain, post-surgical recovery and sports injuries. DPT-led, hands-on care. Start without a referral. Se habla español.',
    },
    servicesAccident: {
      title: 'Physical Therapy After a Car Accident in Salt Lake City',
      description:
        'Auto accident and whiplash rehabilitation in Salt Lake City. Utah PIP often covers care regardless of fault. We coordinate with your insurer and attorney. Se habla español.',
    },
    conditions: {
      title: 'Conditions We Treat in Salt Lake City | PI Physical Therapy',
      description:
        'Back, neck, shoulder and knee pain, post-surgical recovery, sports injuries and whiplash. See how our Salt Lake City physical therapists treat each one.',
    },
    team: {
      title: 'About PI Physical Therapy | Salt Lake City',
      description:
        'A bilingual physical therapy and injury-rehabilitation clinic in Salt Lake City. Learn about our mission, our values and our commitment to the community. Se habla español.',
    },
    firstVisit: {
      title: 'Your First Physical Therapy Visit | What to Expect',
      description:
        'What to expect at your first physical therapy visit in Salt Lake City: evaluation, hands-on treatment and a recovery plan. No referral needed to start. Se habla español.',
    },
    stories: {
      title: 'Patient Success Stories | PI Physical Therapy SLC',
      description:
        'Real recovery stories from Salt Lake City patients: back pain, post-surgical rehab, sports injuries and after-accident care.',
    },
    contact: {
      title: 'Contact & Schedule Physical Therapy in Salt Lake City',
      description:
        'Schedule physical therapy in Salt Lake City. Call (801) 555-0123 or request an appointment online. Insurance accepted, se habla español.',
    },
    privacy: {
      title: 'Privacy Policy | PI Physical Therapy',
      description: 'How PI Physical Therapy collects, uses and protects your information.',
    },
    terms: {
      title: 'Terms of Use | PI Physical Therapy',
      description: 'The terms that govern your use of the PI Physical Therapy website.',
    },
    notFound: {
      title: 'Page not found | PI Physical Therapy',
      description: 'The page you were looking for is not here. Return to PI Physical Therapy.',
    },
  },

  jsonld: {
    description:
      'PI Physical Therapy is a physical therapy and rehabilitation clinic in Salt Lake City, Utah, treating orthopedic, post-surgical, sports and motor-vehicle / personal-injury patients. Bilingual care in English and Spanish.',
  },

  home: {
    hero: {
      primary: 'Request an appointment',
      slides: [
        {
          eyebrow: 'Salt Lake City physical therapy',
          title: 'Get back to the way you move.',
          subtitle:
            'Doctor of Physical Therapy care for everyday injuries, post-surgical recovery and sports rehab, and expert help getting whole again after a car accident.',
        },
        {
          eyebrow: 'After an accident',
          title: 'Hurt in a crash? We have you covered.',
          subtitle:
            'Whiplash and auto-injury rehab from Doctors of Physical Therapy who handle the insurance and paperwork side with you.',
        },
        {
          eyebrow: 'Rehab and sports recovery',
          title: 'Train, recover, come back stronger.',
          subtitle:
            'Post-surgical recovery and sports injuries, rebuilt with hands-on, progressive, one-on-one care that gets you moving again.',
        },
      ],
    },
    pillarsTitle: 'Two kinds of recovery, one team',
    pillarsLead:
      'Most clinics pick a lane. We do both well, with the same one-on-one attention and a plan built around your goal.',
    pillars: {
      rehab: {
        label: 'Physical therapy',
        title: 'Rehabilitation and sports recovery',
        body: 'Back, neck and joint pain, post-surgical recovery, and sports injuries, rebuilt with hands-on, progressive care.',
        cta: 'Explore physical therapy',
      },
      accident: {
        label: 'After an accident',
        title: 'Auto accident and injury rehab',
        body: 'Hurt in a car accident? We treat whiplash and crash injuries and coordinate the insurance and paperwork with you.',
        cta: 'Recover after an accident',
      },
    },
    trustTitle: 'Why patients choose us',
    trust: [
      { title: 'No referral needed', body: 'In Utah you can start physical therapy without a doctor referral. Check your plan for coverage details.' },
      { title: 'One-on-one care', body: 'You work directly with your Doctor of Physical Therapy, not handed off to aides.' },
      { title: 'Same-week visits', body: 'Pain does not wait. We hold time open so you can start this week.' },
      { title: 'Bilingual team', body: 'Care, paperwork and instructions in English or Spanish. Se habla español.' },
    ],
    processTitle: 'How recovery works here',
    conditionsTitle: 'What we treat',
    conditionsLead: 'From a tweaked back to a post-surgical knee to a crash injury, here is where most patients start.',
    storiesTitle: 'Recovery, in their words',
    ctaTitle: 'Ready to move better?',
    ctaBody: 'Tell us what happened. We will call you back within one business day to get you scheduled.',
    // Section eyebrows (small kickers above headings)
    trustEyebrow: 'Why us',
    servicesEyebrow: 'What we do',
    servicesTitle: 'Care for every stage of recovery',
    servicesLead:
      'Two kinds of recovery, one team. From everyday pain and after-accident care to specialized programs, you get the same one-on-one attention and a plan built around your goal.',
    conditionsEyebrow: 'Conditions',
    processEyebrow: 'How it works',
    storiesEyebrow: 'Patient stories',
  },

  // Service offerings (nav dropdown + home Services section), keyed by the ids
  // in data/content.ts. Specialized programs deep-link into the PT page.
  services: {
    pt: { name: 'Physical therapy', desc: 'One-on-one, hands-on care for pain, post-surgical recovery and everyday injuries.' },
    accident: { name: 'After an accident', desc: 'Whiplash and auto-injury rehab, with the insurance and paperwork handled with you.' },
    sports: { name: 'Sports rehab', desc: 'Return-to-sport programs that rebuild strength, power and confidence after injury.' },
    vestibular: { name: 'Balance and dizziness', desc: 'Vestibular therapy for vertigo, dizziness, concussion recovery and fall prevention.' },
    work: { name: 'Work injuries', desc: 'Rehab for on-the-job injuries with a safe, documented return to work.' },
  },

  // Shared process steps reused on home + first-visit.
  process: {
    steps: [
      { title: 'Book in minutes', body: 'Call or send the form. No referral required to get started in Utah.' },
      { title: 'Full evaluation', body: 'A Doctor of Physical Therapy assesses your movement, strength and the root cause.' },
      { title: 'Hands-on treatment', body: 'Manual therapy plus a progressive exercise plan, adjusted every visit.' },
      { title: 'Back to your life', body: 'We measure progress and get you back to work, sport and the things you love.' },
    ],
  },

  servicePT: {
    eyebrow: 'Physical therapy',
    title: 'Physical therapy and sports rehab in Salt Lake City',
    lead: 'One-on-one, hands-on care for pain, post-surgical recovery and sports injuries. Built to get you moving, not just managing symptoms.',
    introTitle: 'Care that rebuilds capacity, not just calms pain',
    introBody:
      'Every plan starts with a full evaluation by a Doctor of Physical Therapy, then combines manual therapy with progressive strengthening so the fix holds. You see the same therapist each visit.',
    benefitsTitle: 'What you can expect',
    benefits: [
      { title: 'Root-cause evaluation', body: 'We find why it hurts, not just where, so the plan addresses the real driver.' },
      { title: 'Manual + movement', body: 'Hands-on techniques paired with exercise you can actually keep doing at home.' },
      { title: 'Progress you can measure', body: 'Range, strength and function tracked visit to visit, with clear milestones.' },
      { title: 'Direct access', body: 'Start without a referral in Utah. We help you confirm what your plan covers.' },
    ],
    treatTitle: 'Common reasons patients come in',
    extraEyebrow: 'Specialized programs',
    extraTitle: 'Programs built for specific goals',
    extraLead: 'Beyond general rehab, we run focused programs for athletes, balance and dizziness, and work-related injuries.',
    extra: {
      sports: {
        title: 'Sports rehab and return to sport',
        body: 'Sprains, strains, tendinitis and overuse injuries treated to get you back to your sport stronger and less likely to reinjure. We bridge the gap between healed and ready to compete.',
        points: [
          'Sport-specific strength, power and agility',
          'Return-to-play testing with clear criteria',
          'Reinjury prevention and load management',
          'Programs for runners, lifters and field athletes',
        ],
      },
      vestibular: {
        title: 'Balance, dizziness and vestibular therapy',
        body: 'Vertigo, dizziness, post-concussion symptoms and unsteadiness respond well to targeted vestibular rehabilitation that retrains your balance system.',
        points: [
          'BPPV (positional vertigo) treatment',
          'Post-concussion and dizziness recovery',
          'Gaze stability and balance retraining',
          'Fall-risk screening and prevention',
        ],
      },
      work: {
        title: 'Work injury rehabilitation',
        body: 'On-the-job injuries need documented, goal-driven care and a safe path back to work. We rehabilitate the injury and coordinate with your employer and claim.',
        points: [
          'Back, shoulder and repetitive-strain injuries',
          'Job-specific strengthening and conditioning',
          'Documentation for workers compensation claims',
          'Safe, staged return-to-work planning',
        ],
      },
    },
    faqTitle: 'Physical therapy questions',
    faq: [
      { question: 'Do I need a referral to start physical therapy in Utah?', answer: 'No. Utah allows direct access, so you can begin physical therapy without a physician referral. Some insurance plans may still require a referral to cover treatment, so it is worth checking your specific plan.' },
      { question: 'How long is each visit?', answer: 'Most visits run 45 to 60 minutes of one-on-one time with your Doctor of Physical Therapy. Your first visit includes a full evaluation.' },
      { question: 'Will physical therapy help me avoid surgery?', answer: 'For many back, knee and shoulder problems, physical therapy is an effective first option. We will give you an honest assessment and coordinate with your physician when surgery is the better path.' },
      { question: 'What should I wear?', answer: 'Comfortable clothing you can move in. For a knee, bring shorts; for a shoulder, a tank top or loose shirt helps.' },
    ],
    ctaTitle: 'Start your recovery this week',
  },

  serviceAccident: {
    eyebrow: 'After an accident',
    title: 'Physical therapy after a car accident in Salt Lake City',
    lead: 'Whiplash, back and neck pain, and crash injuries, treated by Doctors of Physical Therapy who handle the insurance side with you.',
    introTitle: 'Hurt in a crash? Start care, we handle the rest',
    introBody:
      'After an accident the priority is getting evaluated and starting the right care early. We document everything thoroughly and coordinate with your auto insurer and, if you have one, your attorney.',
    logisticsTitle: 'How payment usually works in Utah',
    logistics: [
      { title: 'Utah is a no-fault state', body: 'Your own auto policy includes Personal Injury Protection (PIP), with a state minimum of $3,000 in medical coverage.' },
      { title: 'PIP pays regardless of fault', body: 'PIP generally covers accident-related medical care no matter who caused the crash. Coverage varies, so confirm your policy.' },
      { title: 'We coordinate the paperwork', body: 'We document your care for your insurer and attorney and bill the right party, so you can focus on recovery.' },
      { title: 'Attorney and provider friendly', body: 'We work alongside your attorney and other providers and keep your records organized.' },
    ],
    stepsTitle: 'What to do after a crash',
    steps: [
      { title: 'Get evaluated early', body: 'Some injuries like whiplash show up days later. An early evaluation protects your health and your claim.' },
      { title: 'Start documented care', body: 'Consistent, documented treatment supports both your recovery and your PIP claim.' },
      { title: 'We handle insurance', body: 'We coordinate billing with your PIP carrier and attorney so you are not chasing paperwork.' },
      { title: 'Recover and return', body: 'We rebuild strength and mobility and guide you back to normal life.' },
    ],
    whiplashTitle: 'Whiplash and crash injuries we treat',
    faqTitle: 'After-accident questions',
    faq: [
      { question: 'Who pays for my rehab after a car accident in Utah?', answer: 'Utah is a no-fault state, so your own auto insurance Personal Injury Protection (PIP) typically pays for accident-related medical care regardless of who was at fault. The state minimum is $3,000 of medical coverage; your policy may include more. We can help you understand your benefits.' },
      { question: 'How soon should I come in after a crash?', answer: 'As soon as you can. Injuries like whiplash often appear a few days later, and starting documented care early helps both your recovery and your claim.' },
      { question: 'Do I need a lawyer to be treated?', answer: 'No. You can start care right away. If you do have an attorney, we coordinate documentation and billing with them.' },
      { question: 'What if my accident was months ago?', answer: 'It is still worth an evaluation. Lingering neck, back and headache symptoms after a crash are common and often treatable.' },
    ],
    ctaTitle: 'Start your accident recovery',
    disclaimer:
      'This is general information about Utah auto insurance and is not legal or medical advice. Coverage depends on your policy. Confirm benefits with your insurer.',
  },

  conditionsHub: {
    eyebrow: 'Conditions',
    title: 'Conditions we treat',
    lead: 'Whatever brought you here, recovery starts with finding the real cause. These are the issues we see most, for everyday injuries and after accidents.',
    rehabGroup: 'Rehabilitation and sports',
    accidentGroup: 'After an accident',
  },

  // Per-condition copy, keyed by the ids in data/content.ts.
  conditions: {
    back: {
      name: 'Back pain',
      lead: 'From a sudden tweak to nagging chronic pain, most back problems respond well to targeted physical therapy, often without imaging or surgery.',
      symptomsTitle: 'Common signs',
      symptoms: ['Stiffness or aching in the lower back', 'Pain that radiates into the hip or leg', 'Trouble bending, lifting or sitting for long', 'Pain that flares after activity or in the morning'],
      approachTitle: 'How we treat it',
      approach: ['Find the movement and strength deficits driving the pain', 'Manual therapy to calm symptoms and restore motion', 'Progressive core and hip strengthening', 'Coaching on lifting, posture and daily habits'],
    },
    neck: {
      name: 'Neck pain',
      lead: 'Desk strain, poor sleep posture or an old injury, neck pain and the headaches that come with it usually improve with hands-on care and the right exercises.',
      symptomsTitle: 'Common signs',
      symptoms: ['Stiffness turning your head', 'Tension headaches from the base of the skull', 'Pain or tingling into the shoulder or arm', 'Aching after screen time or driving'],
      approachTitle: 'How we treat it',
      approach: ['Assess neck mobility, posture and shoulder mechanics', 'Manual therapy for stiff joints and tight muscles', 'Deep neck and postural strengthening', 'Ergonomic and workstation guidance'],
    },
    shoulder: {
      name: 'Shoulder pain',
      lead: 'Rotator cuff strains, impingement, frozen shoulder and post-surgical shoulders all benefit from a precise, progressive plan to restore strength and reach.',
      symptomsTitle: 'Common signs',
      symptoms: ['Pain reaching overhead or behind your back', 'Weakness lifting or carrying', 'Night pain when lying on the shoulder', 'Clicking, catching or stiffness'],
      approachTitle: 'How we treat it',
      approach: ['Pinpoint the structures and motions involved', 'Restore mobility with manual therapy', 'Rebuild rotator cuff and scapular control', 'Return-to-activity and lifting progression'],
    },
    knee: {
      name: 'Knee pain',
      lead: 'Whether it is a sports injury, arthritis or a post-surgical knee, we rebuild strength and confidence so you can walk, climb and run without guarding it.',
      symptomsTitle: 'Common signs',
      symptoms: ['Pain on stairs, squatting or kneeling', 'Swelling after activity', 'Buckling or instability', 'Stiffness after sitting'],
      approachTitle: 'How we treat it',
      approach: ['Evaluate the knee, hip and ankle as a system', 'Reduce swelling and restore motion', 'Progressive quad, hip and balance work', 'Sport- or job-specific return plan'],
    },
    postsurgical: {
      name: 'Post-surgical rehab',
      lead: 'After surgery, the right rehabilitation protects the repair and gets you to full function faster. We follow your surgeon’s protocol and progress you safely.',
      symptomsTitle: 'Where we help',
      symptoms: ['After ACL, meniscus or other knee surgery', 'After rotator cuff or shoulder surgery', 'After back or neck surgery', 'After joint replacement'],
      approachTitle: 'How we treat it',
      approach: ['Follow your surgeon’s protocol step by step', 'Protect the repair while restoring motion early', 'Progressive strengthening toward full function', 'Clear milestones back to work and sport'],
    },
    sports: {
      name: 'Sports injuries',
      lead: 'Sprains, strains, tendinitis and overuse injuries, treated to get you back to your sport stronger and less likely to reinjure.',
      symptomsTitle: 'Common injuries',
      symptoms: ['Ankle sprains and chronic instability', 'Hamstring, groin and calf strains', 'Tendinitis (Achilles, patellar, elbow)', 'Overuse and running injuries'],
      approachTitle: 'How we treat it',
      approach: ['Diagnose the injury and the movement behind it', 'Restore mobility and load tolerance', 'Sport-specific strength and power work', 'Return-to-play testing and reinjury prevention'],
    },
    whiplash: {
      name: 'Whiplash',
      lead: 'Whiplash from a car accident can cause neck pain, headaches and stiffness that last for weeks. Early, targeted treatment helps you recover and supports your claim.',
      symptomsTitle: 'Common signs',
      symptoms: ['Neck pain and stiffness after a crash', 'Headaches from the base of the skull', 'Reduced range turning your head', 'Dizziness, fatigue or shoulder pain'],
      approachTitle: 'How we treat it',
      approach: ['Thorough evaluation and documentation for your claim', 'Gentle manual therapy to restore motion', 'Progressive strengthening as symptoms settle', 'Coordination with your insurer and attorney'],
    },
  },

  about: {
    eyebrow: 'About us',
    title: 'Recovery built around you, right here in Salt Lake City',
    lead: 'PI Physical Therapy is a bilingual physical therapy and injury-rehabilitation clinic in Salt Lake City. We exist to help our neighbors move, work and live without pain.',
    missionTitle: 'Our mission',
    missionBody:
      'To deliver expert, one-on-one physical therapy that treats the root cause, respects your time and your goals, and is accessible to everyone in our community, in English or Spanish.',
    valuesTitle: 'What we stand for',
    values: [
      { title: 'One-on-one care', body: 'You work directly with a Doctor of Physical Therapy every visit, never passed off to aides.' },
      { title: 'Root-cause treatment', body: 'We find why it hurts and fix the driver, so results last instead of masking symptoms.' },
      { title: 'Bilingual by design', body: 'Care, paperwork and home programs in English or Spanish. Se habla español.' },
      { title: 'Honest and transparent', body: 'Clear plans, realistic timelines and straight answers about what your plan covers.' },
    ],
    approachTitle: 'How we care for you',
    approachBody:
      'Every plan starts with a thorough evaluation, combines hands-on manual therapy with progressive exercise, and is adjusted every visit as you improve. We coordinate with your physician, insurer or attorney when needed so you can focus on getting better.',
    communityTitle: 'Our commitment to the community',
    communityBody:
      'We are proud to serve Salt Lake County. As a bilingual clinic, we work to remove the language and access barriers that keep people from getting care, and we partner with local providers, employers and attorneys to support recovery after everyday and accident-related injuries.',
    communityPoints: [
      'Direct access: start care without a referral in Utah',
      'Same-week appointments so pain does not wait',
      'Support with auto-accident (PIP) and work-injury claims',
      'Education and home programs you can actually keep up with',
    ],
    credentialsTitle: 'Credentials that matter',
    credentialsBody:
      'Care here is led by licensed Doctors of Physical Therapy (DPT). Look for the letters: DPT (Doctor of Physical Therapy), OCS (Orthopaedic Certified Specialist) and SCS (Sports Certified Specialist).',
  },

  firstVisit: {
    eyebrow: 'Your first visit',
    title: 'What to expect on your first visit',
    lead: 'Your first appointment is about understanding your problem and leaving with a plan. Here is exactly how it goes.',
    expectTitle: 'What happens during your visit',
    bringTitle: 'What to bring',
    bring: ['Photo ID and your insurance card', 'For an accident: your claim number and insurer (and attorney, if any)', 'Comfortable clothing you can move in', 'A list of your medications and any imaging or surgery reports'],
    prepareTitle: 'How to prepare',
    prepare: [
      'Arrive about 10 minutes early to finish any paperwork.',
      'Note when the pain started and what makes it better or worse.',
      'Think about your goals: what do you want to get back to doing?',
      'For an accident or work injury, have your claim details handy.',
    ],
    directAccessTitle: 'Do I need a referral?',
    directAccessBody:
      'No. Utah allows direct access, so you can start physical therapy without a physician referral. Some insurance plans still ask for a referral to cover care, so we will help you check your specific plan before you owe anything unexpected.',
    paymentTitle: 'Insurance and payment',
    paymentBody:
      'We accept most major plans and Utah auto-accident (PIP) and work-injury claims. We verify your benefits and explain any costs up front, so there are no surprises.',
    afterTitle: 'What happens after your first visit',
    afterBody:
      'You leave with a clear plan and usually a few exercises to start at home. From there, we adjust your plan every visit as you get stronger and move better.',
    afterPoints: [
      'A personalized home program you can actually keep up with',
      'A realistic timeline with clear milestones',
      'Progress tracked visit to visit: range, strength and function',
      'Coordination with your physician, insurer or attorney when needed',
    ],
    faqTitle: 'First-visit questions',
    faq: [
      { question: 'How long is the first visit?', answer: 'Plan for about an hour. It includes a full evaluation, the start of treatment and a clear plan.' },
      { question: 'Will I get treatment on day one?', answer: 'Usually yes. Most patients begin hands-on treatment and leave with exercises at the first visit.' },
      { question: 'How many visits will I need?', answer: 'It depends on your condition and goals. After the evaluation we will give you an honest estimate and adjust it as you progress.' },
      { question: 'What should I wear?', answer: 'Comfortable clothing you can move in. For a knee, bring shorts; for a shoulder, a tank top or loose shirt helps.' },
      { question: 'Do I need to bring imaging or an MRI?', answer: 'If you have recent imaging or surgery reports, bring them, but they are not required to start. Your evaluation is hands-on and movement-based.' },
      { question: 'Can I still come in if my accident was weeks ago?', answer: 'Yes. Lingering neck, back and headache symptoms after a crash are common and still treatable, and starting documented care supports your claim.' },
    ],
  },

  stories: {
    eyebrow: 'Patient stories',
    title: 'Recovery, in their words',
    lead: 'Real outcomes from Salt Lake City patients, across everyday injuries and after-accident care.',
    disclaimer: 'Testimonials reflect individual experiences; results vary by person and condition. Placeholder stories shown until real, consented patient reviews are added.',
    items: [
      { quote: 'I came in barely able to turn my head after a rear-end crash. Twelve weeks later I am back to climbing. They also made the insurance part painless.', name: 'Patient, West Valley City', context: 'Whiplash after an auto accident' },
      { quote: 'After my ACL surgery I was nervous about pushing too hard. They followed my surgeon’s plan exactly and got me back on the trails.', name: 'Patient, Sandy', context: 'Post-surgical knee rehab' },
      { quote: 'Years of back pain and I thought surgery was next. A few months of real, one-on-one therapy and I am lifting my kids again.', name: 'Patient, Murray', context: 'Chronic low back pain' },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Schedule your visit',
    lead: 'Call us or send the form and we will reach out within one business day. New patients welcome, no referral needed to start.',
    formTitle: 'Request an appointment',
    hoursTitle: 'Hours',
    locationTitle: 'Find us',
    insuranceTitle: 'Insurance we accept',
    insuranceNote: 'We accept most major plans and Utah auto-accident (PIP) claims. Do not see yours? Call us, we will check.',
    directionsLabel: 'Get directions',
  },

  lead: {
    name: 'Full name',
    phone: 'Phone',
    email: 'Email',
    service: 'What do you need help with?',
    serviceOptions: { rehab: 'Physical therapy / rehab', accident: 'After a car accident', other: 'Something else' },
    preferredLang: 'Preferred language',
    langOptions: { en: 'English', es: 'Spanish' },
    message: 'Anything we should know? (optional)',
    submit: 'Request appointment',
    submitting: 'Sending...',
    successTitle: 'Request received',
    successBody: 'Thank you. We will call you back within one business day. If it is urgent, call us at (801) 555-0123.',
    errorTitle: 'Something went wrong',
    errorBody: 'We could not send your request. Please call us at (801) 555-0123 and we will get you scheduled.',
    errors: {
      name: 'Please enter your name.',
      phone: 'Please enter a valid phone number.',
      email: 'Please enter a valid email.',
      service: 'Please choose an option.',
    },
    privacyNote: 'By submitting, you agree to be contacted about your request. Please do not include sensitive medical details.',
    // SMS consent. Split so the Privacy Policy stays a real link.
    smsConsent:
      'By Entering Your Phone Number, You Are Agreeing To Receive Text Messages From Us. Message Rates May Apply. You Can Reply STOP or UNSUBSCRIBE To Opt-Out.',
    smsConsentSee: 'See our',
    smsConsentPolicy: 'Privacy Policy',
    smsConsentTail: 'for additional details.',
    consentRequired: 'Please agree to receive text messages before submitting.',
    captchaFailed: 'Security verification failed. Please reload the page and try again.',
  },

  footer: {
    rights: 'All rights reserved.',
    nap: 'Serving Salt Lake County: Salt Lake City, West Valley City, Sandy, Murray, West Jordan and Taylorsville.',
    servicesTitle: 'Services',
    clinicTitle: 'Clinic',
    legalTitle: 'Legal',
    privacy: 'Privacy policy',
    terms: 'Terms of use',
    disclaimer: 'The information on this site is general and is not medical or legal advice. Insurance coverage depends on your individual plan and policy.',
  },

  notFound: {
    title: 'We can’t find that page',
    body: 'The page may have moved. Let’s get you back on track.',
    back: 'Back to home',
  },

  legal: {
    updated: 'Last updated',
    privacyIntro: 'This placeholder privacy policy explains, in general terms, how PI Physical Therapy handles information submitted through this website. Replace with a policy reviewed by counsel before launch.',
    privacyBody: [
      { h: 'Information we collect', p: 'Contact details you submit through our appointment form (name, phone, email and any message). We intentionally do not collect detailed medical history through this site.' },
      { h: 'How we use it', p: 'Only to respond to your request and schedule care. We do not sell your information.' },
      { h: 'Your choices', p: 'Contact us to access, correct or delete the information you submitted.' },
      { h: 'Cookies and analytics', p: 'We may use basic cookies and privacy-respecting analytics to understand how the site is used and improve it. You can control cookies through your browser settings.' },
      { h: 'How information is shared', p: 'We do not sell your information. We share it only with service providers that help us respond to you (for example, secure form delivery or email), and only as needed.' },
      { h: 'Data retention and security', p: 'We keep submitted information only as long as needed to respond to your request and meet our obligations, and we use reasonable safeguards to protect it.' },
      { h: 'Your rights and how to reach us', p: 'You can ask us to access, correct or delete the information you submitted. Contact us by phone or through the form on our contact page and we will help.' },
    ],
    termsIntro: 'This placeholder terms-of-use notice governs your use of this website. Replace with terms reviewed by counsel before launch.',
    termsBody: [
      { h: 'No medical advice', p: 'Content on this site is for general information and is not a substitute for professional medical advice, diagnosis or treatment.' },
      { h: 'No insurance or legal advice', p: 'Statements about Utah direct access and auto-insurance (PIP) are general. Coverage depends on your plan and policy; confirm with your insurer.' },
      { h: 'Use of the site', p: 'Use the site lawfully. We may update content at any time.' },
      { h: 'Third-party links', p: 'Our site may link to third-party websites we do not control. We are not responsible for their content, accuracy or privacy practices.' },
      { h: 'Limitation of liability', p: 'The site is provided on an as-is basis. To the extent permitted by law, we are not liable for damages arising from your use of, or inability to use, this website.' },
      { h: 'Changes to these terms', p: 'We may update these terms from time to time. Continued use of the site after changes means you accept the updated terms.' },
      { h: 'Governing law', p: 'These terms are governed by the laws of the State of Utah, without regard to its conflict-of-laws rules.' },
    ],
  },
} as const;

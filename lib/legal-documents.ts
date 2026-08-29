export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type LegalSection = {
  id: string;
  heading: string;
  blocks: LegalBlock[];
};

export type LegalDocKey = "privacy" | "refund" | "cookie" | "terms";

export type LegalDocumentData = {
  key: LegalDocKey;
  title: string;
  href: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};

export const LEGAL_NAV: { key: LegalDocKey; title: string; href: string }[] = [
  { key: "privacy", title: "Privacy Policy", href: "/privacy-policy" },
  { key: "refund", title: "Refund Policy", href: "/refund-policy" },
  { key: "cookie", title: "Cookie Policies", href: "/cookie-policy" },
  { key: "terms", title: "Terms of Use & Undertaking", href: "/terms-of-service" },
];

export const LEGAL_DOCUMENTS: Record<LegalDocKey, LegalDocumentData> = {
  privacy: {
    key: "privacy",
    title: "Privacy Policy",
    href: "/privacy-policy",
    lastUpdated: "August 2026",
    intro: [
      'FyerX Global Private Limited ("FyerX", "we", "us" or "our") respects the privacy of people who visit fyerx.com, contact us, enquire about our services, apply for opportunities, engage with us as clients, candidates, consultants, learners, suppliers or partners, or otherwise interact with our marketing, technology, talent and learning businesses.',
      "This Privacy Policy explains what personal data we collect, how and why we use it, the parties with whom we may share it, our security and retention practices, and the choices available to you. By using the Website or providing information to FyerX, you acknowledge this Policy.",
    ],
    sections: [
      {
        id: "who-we-are",
        heading: "Who We Are",
        blocks: [
          {
            type: "p",
            text: "FyerX Global Private Limited operates the Website and is responsible for personal data collected through it for FyerX’s own business purposes. FyerX is registered in Theni, Tamil Nadu, India. You may contact us about privacy, personal-data requests or grievances at contact@fyerx.com or +91 75983 06999.",
          },
          {
            type: "p",
            text: "Where FyerX processes personal data solely under a client’s documented instructions—for example, in a client campaign, recruitment mandate or technology project—the client may be responsible for that data and its own privacy notice may apply.",
          },
        ],
      },
      {
        id: "personal-data-we-collect",
        heading: "Personal Data We Collect",
        blocks: [
          {
            type: "p",
            text: "We collect data directly from you, automatically from your use of the Website, and from lawful professional or business sources. We aim to collect only what is reasonably necessary for a defined purpose.",
          },
          {
            type: "ul",
            items: [
              "Contact and business data: name, business name, email address, phone number, job title, city, industry, service interest, business requirement, project context and messages you send.",
              "Candidate, consultant and learner data: CV, work history, skills, qualifications, certifications, portfolio, role preferences, availability, notice period, location, compensation expectations, interview information and learning enquiry details.",
              "Client, supplier and partner data: contact details, communications, account information, contractual and project records, and billing or payment-administration records.",
              "Technical and usage data: IP address, device and browser information, operating system, pages viewed, referral source, timestamps, approximate IP-based location, form interactions and cookie preferences.",
              "Professional-source data: information supplied by a referral, client, recruitment partner, job platform or publicly available professional profile where lawful and relevant.",
            ],
          },
        ],
      },
      {
        id: "purposes-of-processing",
        heading: "Purposes of Processing",
        blocks: [
          {
            type: "p",
            text: "We process data to answer enquiries, schedule conversations, prepare proposals, develop and deliver marketing, creative, web, technology, talent and learning services, operate candidate and client relationships, source and assess talent, arrange interviews, administer engagements, communicate with stakeholders, process payments, improve the Website and protect our systems.",
          },
          {
            type: "p",
            text: "We may also use contact information to send relevant FyerX service updates, insights, invitations or opportunities. You can opt out of non-essential marketing messages at any time through the message itself or by contacting us.",
          },
        ],
      },
      {
        id: "talent-staffing-and-learning",
        heading: "Talent, Staffing and Learning",
        blocks: [
          {
            type: "p",
            text: "FyerX may use candidate and consultant information to evaluate fit for permanent, contract, project, remote, contract-to-hire or other opportunities; introduce suitable profiles to genuine prospective clients; arrange interviews; coordinate onboarding; and administer an assignment. A profile submission, discussion or database inclusion does not guarantee a job, interview, placement, rate, assignment duration or employment.",
          },
          {
            type: "p",
            text: "We may receive candidate data from the candidate, a client, referral, recruitment partner, job platform or professional source. We share relevant information with a prospective client only for a genuine opportunity and to the extent reasonably necessary. Candidates must provide accurate information and must not submit confidential employer data or another person’s data without authority.",
          },
        ],
      },
      {
        id: "legal-basis-and-consent",
        heading: "Legal Basis and Consent",
        blocks: [
          {
            type: "p",
            text: "We process personal data with consent where required, when you ask us to take steps before a contract or to perform an agreement, for legitimate business purposes that do not override your rights, to meet legal obligations, or on another basis permitted by applicable law. Where consent is used, it is intended to be free, specific, informed and based on clear affirmative action.",
          },
          {
            type: "p",
            text: "You may withdraw consent at any time. Withdrawal will not affect processing already undertaken or processing that FyerX is permitted or required to continue for another lawful purpose.",
          },
        ],
      },
      {
        id: "sharing-and-transfers",
        heading: "Sharing and Transfers",
        blocks: [
          {
            type: "p",
            text: "We do not sell personal data. We may share data with FyerX personnel; relevant clients and prospective clients; hosting, CRM, communication, analytics, scheduling, security, accounting, payroll, verification and professional-service providers; recruitment and delivery partners; and authorities or advisers where disclosure is required by law or needed to protect rights, safety, property or security.",
          },
          {
            type: "p",
            text: "FyerX may work with parties in India and other countries. Where data is processed across borders, we take safeguards appropriate to the data, relationship, provider and applicable law.",
          },
        ],
      },
      {
        id: "security-and-retention",
        heading: "Security and Retention",
        blocks: [
          {
            type: "p",
            text: "FyerX uses reasonable technical, organisational and administrative safeguards, including access restrictions, confidentiality obligations, supplier controls and security practices designed to reduce unauthorised access, misuse, loss or alteration. However, no Internet transmission or storage method is completely secure. Do not submit passwords, banking credentials, government identity documents or sensitive personal information through ordinary Website forms.",
          },
          {
            type: "p",
            text: "We keep data only for as long as reasonably needed for the relevant purpose, relationship, service, recruitment opportunity, contract, compliance, accounting, dispute resolution or legal claim. We then delete, anonymise or securely archive it as appropriate.",
          },
        ],
      },
      {
        id: "your-rights-and-contact",
        heading: "Your Rights and Contact",
        blocks: [
          {
            type: "p",
            text: "Subject to applicable law, you may request information about data we process about you, correction or completion of inaccurate data, erasure where appropriate, withdrawal of consent, restriction or objection where applicable, and opt-out from direct marketing. You may also raise a grievance or nominate another person to exercise available rights on your behalf where applicable.",
          },
          {
            type: "p",
            text: 'To make a request, email contact@fyerx.com with “Privacy Request” in the subject line. Please state your name, contact details and the request. We may ask for information needed to verify identity and protect other people’s privacy. We will address requests within the timeline required by applicable law.',
          },
        ],
      },
      {
        id: "children-third-parties-and-changes",
        heading: "Children, Third Parties and Changes",
        blocks: [
          {
            type: "p",
            text: "The Website is intended for professional and business users and is not directed at children. We do not knowingly collect personal data from children. The Website may link to third-party websites or tools; those parties have their own policies and FyerX is not responsible for their practices.",
          },
          {
            type: "p",
            text: "We may amend this Policy to reflect changes in our Website, services, technologies, practices or legal requirements. The current version will be available on the Website. Questions may be sent to contact@fyerx.com.",
          },
        ],
      },
    ],
  },

  refund: {
    key: "refund",
    title: "Payment, Cancellation & Refund Policy",
    href: "/refund-policy",
    lastUpdated: "August 2026",
    intro: [
      "This Policy applies when FyerX Global Private Limited (“FyerX”, “we”, “us” or “our”) accepts a payment directly through fyerx.com or a payment link issued by FyerX for an eligible service, learning programme, consultation, workshop, digital product or other offering. It should be read with our Terms of Service, Privacy Policy, the relevant offer page and any written proposal, order form, statement of work or client agreement.",
      "FyerX operates across marketing, technology, talent/staffing and learning. The payment, cancellation and refund position may differ by offering because services can involve reserved team capacity, external media spend, third-party tools, customised work, candidate activity, live learning delivery or digitally delivered material. If a signed agreement or offer-specific terms conflict with this Policy, those specific written terms will apply.",
    ],
    sections: [
      {
        id: "payment-terms",
        heading: "Payment Terms",
        blocks: [
          {
            type: "p",
            text: "Prices, inclusions, taxes, payment schedules, validity periods and delivery terms will be shown on the relevant checkout page, payment link, invoice, proposal or written agreement. All payments are in Indian Rupees unless we clearly state otherwise. Applicable taxes, including GST where applicable, will be charged as displayed or invoiced.",
          },
          {
            type: "p",
            text: "A payment is confirmed only when FyerX or its authorised payment provider receives successful confirmation. We may decline, cancel or hold an order or booking where payment fails, payment information cannot be verified, an obvious pricing or technical error occurs, the offering is unavailable, fraud is suspected or the transaction would breach law or our terms.",
          },
        ],
      },
      {
        id: "accepted-payment-methods",
        heading: "Accepted Payment Methods",
        blocks: [
          {
            type: "p",
            text: "FyerX may accept UPI, debit or credit cards, net banking, bank transfer, payment links or other methods made available at checkout. Payments are processed by authorised third-party payment providers or through FyerX’s approved banking channels. FyerX does not store full card details.",
          },
          {
            type: "p",
            text: "You must use a payment method that you are legally authorised to use. You are responsible for providing accurate billing details and for bank, card issuer, foreign-exchange or payment-provider charges that may apply.",
          },
        ],
      },
      {
        id: "service-categories",
        heading: "Service Categories",
        blocks: [
          {
            type: "p",
            text: "The following categories help explain when cancellations or refunds may be available. The precise terms will be shown before payment or in the relevant agreement.",
          },
          {
            type: "ul",
            items: [
              "Consultations, audits and workshops: time-bound professional sessions that may require advance preparation or reserved expert time.",
              "Learning programmes: live or recorded courses, cohort programmes, masterclasses, training sessions, certifications or workshops.",
              "Digital products: downloadable templates, reports, resources, recordings, toolkits or other digital content.",
              "Marketing, technology and creative services: custom work such as strategy, campaigns, branding, content, website development, app or technology delivery.",
              "Talent and staffing services: recruitment, contract deployment, project teams, RPO, hiring support or related solutions.",
            ],
          },
        ],
      },
      {
        id: "cancellations-by-you",
        heading: "Cancellations by You",
        blocks: [
          {
            type: "p",
            text: 'To cancel an eligible booking or order, email contact@fyerx.com with the subject “Cancellation Request”, include the purchaser’s name, registered email or phone number, payment reference, offering purchased and reason for cancellation. A request is treated as received only when FyerX acknowledges it.',
          },
          {
            type: "p",
            text: "For a consultation, audit or live workshop, you may request cancellation or rescheduling at least 48 hours before the scheduled start. FyerX may offer a reschedule, credit or refund after deducting non-recoverable transaction charges and preparation already completed, where applicable. Cancellations received less than 48 hours before a scheduled session may not be refundable because capacity has been reserved.",
          },
          {
            type: "p",
            text: "For learning programmes, cancellation eligibility will be shown at checkout or in the programme terms. If no programme-specific policy is displayed, a request received before access, programme materials or the first live session is provided may be considered for a refund less non-recoverable payment charges. Once digital access, recordings, downloadable resources, programme materials or a live session has been provided, fees are ordinarily non-refundable except where required by law or where FyerX agrees otherwise in writing.",
          },
        ],
      },
      {
        id: "custom-services-and-staffing",
        heading: "Custom Services and Staffing",
        blocks: [
          {
            type: "p",
            text: "Marketing, branding, technology, web, app, talent and staffing services are usually customised and may require FyerX to reserve people, begin discovery, activate sourcing, purchase tools or incur third-party costs after confirmation. Payments for completed work, time reserved, work in progress, approved milestones, media spend, third-party licences, domain/hosting, production, verification, travel or other committed costs are non-refundable unless the applicable written agreement says otherwise.",
          },
          {
            type: "p",
            text: "Any cancellation, pause, termination, replacement, refund or credit relating to a client project or staffing engagement will be governed by the signed proposal, statement of work, master services agreement, recruitment terms or purchase order. This Website Policy does not override bespoke commercial terms.",
          },
        ],
      },
      {
        id: "digital-products",
        heading: "Digital Products",
        blocks: [
          {
            type: "p",
            text: "Digital products and immediately accessible content are generally non-refundable after access, download, delivery or activation, because they cannot be returned. Before purchase, please review the description, compatibility requirements and inclusions carefully.",
          },
          {
            type: "p",
            text: "If a digital product is materially defective, inaccessible due to an FyerX-controlled technical issue, or substantially different from its description, contact us promptly. We will investigate and may provide a correction, replacement access, credit or refund as appropriate and as required by law.",
          },
        ],
      },
      {
        id: "when-refunds-are-available",
        heading: "When Refunds Are Available",
        blocks: [
          {
            type: "p",
            text: "FyerX will consider a refund, replacement, re-performance, credit or other appropriate remedy where an offering was wrongly charged, paid more than once, not delivered due to an FyerX error, materially different from the published or agreed description, defective, deficient, cancelled by FyerX without a reasonable substitute, or otherwise required under applicable law.",
          },
          {
            type: "p",
            text: "A refund is not available merely because a user changes their mind after receiving a completed, customised, live or digitally accessed service or product, except where applicable law or specific offer terms provide otherwise. We may request reasonable evidence to investigate a claim.",
          },
        ],
      },
      {
        id: "cancellations-by-fyerx",
        heading: "Cancellations by FyerX",
        blocks: [
          {
            type: "p",
            text: "FyerX may cancel or reschedule an offering because of trainer or consultant unavailability, insufficient registrations, technical issues, security concerns, force majeure, regulatory reasons or another operational necessity. Where FyerX cancels a paid standalone offering and cannot provide a reasonable substitute or rescheduled date, we will offer a refund of the amount paid for that undelivered offering or a credit, at your choice where reasonably practicable.",
          },
          {
            type: "p",
            text: "FyerX is not responsible for indirect losses such as travel, accommodation, lost opportunity, lost income or third-party costs resulting from a cancellation or rescheduling, except where liability cannot lawfully be excluded.",
          },
        ],
      },
      {
        id: "refund-processing",
        heading: "Refund Processing",
        blocks: [
          {
            type: "p",
            text: "Once a refund is approved, FyerX will initiate it to the original payment method unless you specifically agree to an alternate method permitted by the payment provider and applicable law. The time for the funds to appear depends on your bank, card issuer, UPI provider and payment gateway.",
          },
          {
            type: "p",
            text: "We aim to initiate approved refunds within 7 business days of approval, subject to payment-provider processing, verification and applicable legal requirements. FyerX may deduct only disclosed, reasonable and non-recoverable payment processing charges where permitted by law and the relevant offering terms. We will not charge cancellation fees in a manner inconsistent with applicable consumer law.",
          },
        ],
      },
      {
        id: "failed-duplicate-and-unauthorised-payments",
        heading: "Failed, Duplicate and Unauthorised Payments",
        blocks: [
          {
            type: "p",
            text: "If payment is debited but your order is not confirmed, do not make a repeated payment immediately. Contact us with the transaction reference, amount, date, time and payment method. We will verify the transaction with the payment provider and arrange a reversal, credit or refund where appropriate.",
          },
          {
            type: "p",
            text: "If you believe a payment was unauthorised, contact your bank or payment provider immediately and notify FyerX at contact@fyerx.com. We may assist with transaction information but cannot reverse a payment until the relevant payment provider or bank process permits it.",
          },
        ],
      },
      {
        id: "chargebacks-and-disputes",
        heading: "Chargebacks and Disputes",
        blocks: [
          {
            type: "p",
            text: "Before raising a payment dispute or chargeback, please contact FyerX so we can investigate and attempt a prompt resolution. You must not submit a false, misleading or duplicate chargeback claim. A chargeback does not cancel obligations under a valid signed client or staffing agreement.",
          },
          {
            type: "p",
            text: 'For customer complaints, write to contact@fyerx.com with “Payment Complaint” in the subject line. Include the payment reference and a clear explanation. We will acknowledge the complaint and seek to resolve it within a reasonable time. You may also use statutory consumer grievance channels available to you under applicable law.',
          },
        ],
      },
      {
        id: "changes-and-contact",
        heading: "Changes and Contact",
        blocks: [
          {
            type: "p",
            text: "FyerX may revise this Policy when it introduces new offerings, payment methods, service models or legal requirements. The current version will be available on the Website. This Policy is governed by the laws of India; subject to applicable law, courts in Theni, Tamil Nadu have jurisdiction over disputes.",
          },
          {
            type: "p",
            text: "For payment, cancellation or refund support: contact@fyerx.com | +91 75983 06999.",
          },
        ],
      },
    ],
  },

  cookie: {
    key: "cookie",
    title: "Cookie Policy",
    href: "/cookie-policy",
    lastUpdated: "August 2026",
    intro: [
      "This Cookie Policy explains how FyerX Global Private Limited (“FyerX”, “we”, “us” or “our”) uses cookies and similar technologies on fyerx.com and associated pages (the “Website”). FyerX is registered in Theni, Tamil Nadu, India. This Policy should be read with our Privacy Policy.",
      "Cookies are small files stored on a browser or device when a website is visited. Similar technologies include pixels, tags, embedded scripts, local storage, server-side identifiers and software development kits. They may enable Website functions, remember choices, protect forms, understand usage and, where enabled with appropriate permission, measure marketing effectiveness.",
    ],
    sections: [
      {
        id: "why-we-use-cookies",
        heading: "Why We Use Cookies",
        blocks: [
          {
            type: "p",
            text: "FyerX uses or may use cookies to operate the Website securely and reliably, remember privacy preferences, prevent spam and misuse, understand Website traffic and form interactions, improve content and performance, and measure marketing activity. We do not use cookie information to make automated decisions that produce legal or similarly significant effects on Website visitors.",
          },
          {
            type: "p",
            text: "The active technologies depend on the final Website build, hosting environment, plugins and service providers. FyerX will maintain a consent mechanism and will update the Cookie Register when a material technology is introduced, removed or changed.",
          },
        ],
      },
      {
        id: "cookie-categories",
        heading: "Cookie Categories",
        blocks: [
          {
            type: "p",
            text: "Strictly necessary cookies support essential features such as security, load balancing, form and spam protection, session management, accessibility and storage of your consent choices. The Website may not function properly if these are blocked.",
          },
          {
            type: "p",
            text: "Functional cookies remember choices that improve the visitor experience. Analytics cookies help us understand pages visited, traffic sources, browser and device patterns, navigation and form performance. Marketing cookies may measure ad performance, conversion events or audience interactions and can support relevant FyerX advertising on third-party platforms.",
          },
        ],
      },
      {
        id: "your-consent-and-choices",
        heading: "Your Consent and Choices",
        blocks: [
          {
            type: "p",
            text: "Where required by law, the Website will display a cookie banner allowing you to accept, reject or manage non-essential cookies. Necessary cookies may be active because they are required for Website functionality. Analytics, marketing, remarketing, session-recording, chat and comparable non-essential tools will be configured to activate only after the appropriate consent choice where required.",
          },
          {
            type: "p",
            text: "You may revise or withdraw choices at any time through the “Cookie Settings” link in the Website footer. You may also control cookies in your browser settings. Withdrawal does not undo prior processing but will stop further use of the relevant non-essential category where technically feasible.",
          },
        ],
      },
      {
        id: "browser-controls",
        heading: "Browser Controls",
        blocks: [
          {
            type: "p",
            text: "Most browsers allow you to inspect, delete and block cookies or set preferences for individual sites. Consult the help section of your browser or device for instructions. If you remove cookies, stored preferences—including the record of your consent choice—may be deleted and the Website may show the consent banner again.",
          },
          {
            type: "p",
            text: "Blocking all cookies can limit Website features, including the ability to retain preferences or submit forms reliably.",
          },
        ],
      },
      {
        id: "third-party-technologies",
        heading: "Third-Party Technologies",
        blocks: [
          {
            type: "p",
            text: "FyerX may use selected third-party providers for hosting, consent management, website security, analytics, advertising measurement, CRM forms, spam prevention, video, maps, social-media integration, scheduling, chat or related functions. Providers may process data through their technologies according to their own policies and their arrangements with FyerX.",
          },
          {
            type: "p",
            text: "Before any third-party technology is deployed, FyerX will assess its purpose and category. A tool will not be described in the Cookie Register unless it is actually active on the Website. Non-essential providers must be controlled by the consent mechanism.",
          },
        ],
      },
      {
        id: "cookie-register",
        heading: "Cookie Register",
        blocks: [
          {
            type: "p",
            text: "The Website developer must keep the following register accurate by scanning the live Website and all public landing, form, thank-you, talent, technology and marketing pages. The register will list every active cookie or similar technology, its provider, purpose, category, duration and consent status.",
          },
          {
            type: "table",
            headers: [
              "Cookie / technology",
              "Provider",
              "Purpose",
              "Category",
              "Duration",
              "Consent required",
            ],
            rows: [
              [
                "Consent-preference cookie",
                "FyerX consent platform",
                "Stores cookie choices",
                "Strictly necessary",
                "As configured",
                "No",
              ],
              [
                "Essential Website/session cookies",
                "FyerX hosting platform",
                "Security, Website delivery and form operation",
                "Strictly necessary",
                "Session or as configured",
                "No",
              ],
              [
                "Analytics, advertising and third-party tools",
                "Only if activated by FyerX",
                "Measurement or functionality described in consent settings",
                "Analytics / Marketing / Functional",
                "As configured",
                "Yes, where required",
              ],
            ],
          },
        ],
      },
      {
        id: "fyerx-configuration-standards",
        heading: "FyerX Configuration Standards",
        blocks: [
          {
            type: "p",
            text: "FyerX will use a footer-based Cookie Settings control and a consent banner designed to offer clear choices. Until FyerX confirms a final technology stack, only necessary Website technologies should be active by default. The developer must not add analytics pixels, advertising tags, session-recording scripts, embedded tracking technologies, chat widgets or similar non-essential tools without classifying and configuring them correctly.",
          },
          {
            type: "ul",
            items: [
              "Scan all public pages and subdomains before launch and after any material Website change.",
              "Configure non-essential tags to remain blocked until the relevant visitor choice is recorded.",
              "Test Accept All, Reject All, category-specific consent and withdrawal in a clean browser session.",
              "Do not pass sensitive candidate, client, project or form data through tracking URLs, event labels or advertising platforms.",
              "Maintain records of consent and update this Policy and the register when tools change.",
            ],
          },
        ],
      },
      {
        id: "international-processing-changes-and-contact",
        heading: "International Processing, Changes and Contact",
        blocks: [
          {
            type: "p",
            text: "A technology provider may process cookie-related data in India or other countries depending on its service infrastructure. FyerX will take measures appropriate to the processing and applicable law. We may amend this Cookie Policy as our Website, providers, practices or legal requirements change. The current version will be available on the Website.",
          },
          {
            type: "p",
            text: "Questions about cookies or privacy may be sent to contact@fyerx.com, by telephone at +91 75983 06999, or by post to FyerX Global Private Limited, Theni, Tamil Nadu, India.",
          },
        ],
      },
    ],
  },

  terms: {
    key: "terms",
    title: "Terms of Service",
    href: "/terms-of-service",
    lastUpdated: "August 2026",
    intro: [
      "These Terms of Service govern your access to and use of fyerx.com and associated pages, forms and content (the “Website”). The Website is operated by FyerX Global Private Limited (“FyerX”, “we”, “us” or “our”), registered in Theni, Tamil Nadu, India. By accessing or using the Website, you agree to these Terms. If you do not agree, do not use the Website.",
      "If you use the Website for a company or other entity, you confirm that you have authority to bind that entity. Contact FyerX at contact@fyerx.com or +91 75983 06999.",
    ],
    sections: [
      {
        id: "website-purpose",
        heading: "Website Purpose",
        blocks: [
          {
            type: "p",
            text: "The Website provides general information about FyerX’s marketing, branding, creative, web, technology, talent, staffing, project-delivery and learning capabilities. It may include service descriptions, role and technology information, industry information, case studies, client references, forms and contact channels.",
          },
          {
            type: "p",
            text: "Website content is informational only. It is not a binding proposal, quotation, employment offer, commitment to provide services, promise of candidate availability, guarantee of a result, or legal, financial, recruitment or technical advice.",
          },
        ],
      },
      {
        id: "permitted-use",
        heading: "Permitted Use",
        blocks: [
          {
            type: "p",
            text: "You may use the Website only for lawful, genuine personal or internal business evaluation of FyerX. You are responsible for your device, connection, security and all information you submit.",
          },
          {
            type: "ul",
            items: [
              "Do not access restricted systems or data, interfere with Website availability or security, introduce malware, or attempt to bypass technical safeguards.",
              "Do not use bots, scrapers, crawlers, data-mining tools or automated systems to extract Website material without FyerX’s written permission or a legal right.",
              "Do not submit spam, phishing, unlawful, abusive, defamatory, discriminatory, infringing or privacy-violating content.",
              "Do not impersonate any person or entity, misrepresent your authority, skills, work history, organisation or relationship with FyerX.",
            ],
          },
        ],
      },
      {
        id: "forms-and-enquiries",
        heading: "Forms and Enquiries",
        blocks: [
          {
            type: "p",
            text: "A form submission, call request, candidate application, partnership enquiry, supplier introduction or talent requirement does not create a client, employment, staffing, agency, partnership, fiduciary or other contractual relationship. FyerX may respond, seek more information, decline or choose not to proceed.",
          },
          {
            type: "p",
            text: "You must ensure submitted information is accurate, lawful and relevant, and that you are authorised to provide it. Information you submit is handled under the Privacy Policy. An ordinary enquiry does not create a confidentiality obligation; do not submit confidential information unless FyerX has agreed in writing to receive it.",
          },
        ],
      },
      {
        id: "services-and-engagements",
        heading: "Services and Engagements",
        blocks: [
          {
            type: "p",
            text: "FyerX’s client services, technology projects, marketing campaigns, staffing engagements, recruitment assignments, learning programmes and other commercial arrangements are governed only by a separate written agreement, accepted proposal or statement of work signed or approved by authorised parties. That agreement will address scope, fees, deliverables, timelines, client responsibilities, intellectual property, confidentiality, data protection, payment, warranties, termination and liability.",
          },
          {
            type: "p",
            text: "If a signed agreement conflicts with these Website Terms, the signed agreement controls for that engagement.",
          },
        ],
      },
      {
        id: "talent-and-recruitment",
        heading: "Talent and Recruitment",
        blocks: [
          {
            type: "p",
            text: "FyerX may support permanent hiring, contract talent, project teams, contract-to-hire, RPO, volume hiring, remote teams and related services. No Website content guarantees a role, candidate, shortlist, interview, selection, placement, compensation, work authorisation, engagement duration or result.",
          },
          {
            type: "p",
            text: "Candidates and consultants are responsible for accurate CVs, profiles, qualifications, references and statements. Clients are responsible for role specifications, final interviews, selection, workplace obligations, statutory compliance and final checks unless a written agreement says otherwise.",
          },
        ],
      },
      {
        id: "intellectual-property",
        heading: "Intellectual Property",
        blocks: [
          {
            type: "p",
            text: "The Website and its content—including FyerX names, logos, visual identity, text, graphics, layouts, designs, videos, case-study formats, software and compilations—are owned by or licensed to FyerX and protected by applicable intellectual-property law. All rights not expressly granted are reserved.",
          },
          {
            type: "p",
            text: "You may view and print reasonable extracts only for internal, non-commercial evaluation. You may not copy, adapt, reproduce, publish, distribute, sell, license, publicly display, create derivative works from, reverse engineer or commercially exploit Website content without FyerX’s prior written consent, except where mandatory law permits.",
          },
        ],
      },
      {
        id: "third-parties-and-user-material",
        heading: "Third Parties and User Material",
        blocks: [
          {
            type: "p",
            text: "Third-party names, logos, marks and links belong to their respective owners. Their inclusion does not by itself create endorsement, partnership or affiliation. FyerX is not responsible for third-party websites, tools, content, availability, security, terms or privacy practices.",
          },
          {
            type: "p",
            text: "You remain responsible for information and material you provide. If you voluntarily send non-confidential feedback or suggestions, you allow FyerX to use them without compensation or obligation, subject to applicable law.",
          },
        ],
      },
      {
        id: "disclaimers-and-liability",
        heading: "Disclaimers and Liability",
        blocks: [
          {
            type: "p",
            text: "The Website is provided on an “as is” and “as available” basis. To the maximum extent permitted by law, FyerX disclaims warranties of accuracy, completeness, uninterrupted availability, security, merchantability, fitness for a particular purpose and non-infringement. We may amend, suspend, restrict or discontinue Website content or functionality at any time.",
          },
          {
            type: "p",
            text: "To the maximum extent permitted by law, FyerX and its directors, employees, advisers, contractors, licensors and suppliers are not liable for indirect, incidental, special, consequential, exemplary or punitive loss, including lost profit, revenue, data, goodwill or opportunity arising from Website use. FyerX’s aggregate liability relating to the Website will not exceed INR 1,000, except where liability cannot lawfully be excluded or limited.",
          },
        ],
      },
      {
        id: "indemnity-law-and-contact",
        heading: "Indemnity, Law and Contact",
        blocks: [
          {
            type: "p",
            text: "You will indemnify FyerX and its directors, officers, employees and representatives from claims, losses, liabilities and reasonable costs arising from your unlawful Website use, breach of these Terms, infringement of another person’s rights or unauthorised information submission.",
          },
          {
            type: "p",
            text: "These Terms are governed by the laws of India. Subject to applicable law, courts in Theni, Tamil Nadu have exclusive jurisdiction. We may revise these Terms by publishing a revised version on the Website. Contact: contact@fyerx.com | +91 75983 06999.",
          },
        ],
      },
    ],
  },
};

export function getLegalDocument(key: LegalDocKey): LegalDocumentData {
  return LEGAL_DOCUMENTS[key];
}

export type TalentCapabilityTab = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  bullets: string[];
  roles: string[];
  tags: string[];
};

export const TALENT_CAPABILITY_TABS: TalentCapabilityTab[] = [
  {
    id: "servicenow",
    label: "ServiceNow",
    title: "ServiceNow Talent",
    subtitle:
      "Platform capability for implementation, enhancement, integration, governance, and support.",
    bullets: [
      "ITSM, ITOM, ITAM, ITBM and SPM",
      "CSM, HRSD, GRC, IRM and SecOps",
      "CMDB, Discovery, Service Mapping and Virtual Agent",
      "IntegrationHub, Flow Designer and MID Server",
      "Configuration, workflow development and integrations",
    ],
    roles: [
      "Business Analyst",
      "ServiceNow Consultant",
      "Administrator",
      "Developer",
      "Integration Developer",
      "QA Engineer",
      "Technical Architect",
      "Solution Architect",
    ],
    tags: ["ITSM", "ITOM", "CSM", "HRSD", "CMDB"],
  },
  {
    id: "engineering",
    label: "Engineering & Web",
    title: "Engineering Talent",
    subtitle:
      "Talent for product engineering, enterprise applications, integrations, and digital transformation.",
    bullets: [
      "Java, .NET, Node.js, Python, PHP and Ruby",
      "React, Next.js, Angular, Vue, Android and iOS",
      "REST APIs, GraphQL, microservices and event-driven architecture",
      "Kafka, MuleSoft, Boomi, TIBCO and enterprise integrations",
      "Web and mobile application development",
    ],
    roles: [
      "Full-Stack Developer",
      "Backend Developer",
      "Frontend Developer",
      "Mobile Developer",
      "Technical Architect",
      "Engineering Manager",
      "Product Manager",
      "Business Analyst",
    ],
    tags: ["Java", ".NET", "Node.js", "React", "APIs"],
  },
  {
    id: "data-ai",
    label: "Data, AI & Analytics",
    title: "Data, AI & Analytics Talent",
    subtitle:
      "Specialists across the data lifecycle—from engineering and business intelligence to AI delivery and governance.",
    bullets: [
      "Data engineering, ETL/ELT, data warehousing and lakehouses",
      "Databricks, Snowflake, BigQuery, Spark, Kafka and Airflow",
      "Power BI, Tableau, Qlik, Looker and analytics engineering",
      "Machine learning, deep learning, NLP, computer vision and GenAI",
      "LLMs, RAG, prompt engineering, MLOps and governance",
    ],
    roles: [
      "Data Engineer",
      "Data Analyst",
      "BI Developer",
      "Analytics Engineer",
      "Data Scientist",
      "ML Engineer",
      "GenAI Engineer",
      "MLOps Engineer",
      "Data Architect",
    ],
    tags: ["Data Engineering", "Power BI", "ML", "GenAI", "MLOps"],
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    title: "Cloud & DevOps Talent",
    subtitle:
      "Specialists for cloud transformation, reliable releases, platform operations, and modern infrastructure.",
    bullets: [
      "AWS, Microsoft Azure and Google Cloud Platform",
      "Kubernetes, Docker, OpenShift and container platforms",
      "Terraform, Ansible, CloudFormation and infrastructure automation",
      "Jenkins, GitHub Actions, GitLab CI/CD, Argo CD and GitOps",
      "SRE, observability, monitoring, reliability and FinOps support",
    ],
    roles: [
      "Cloud Architect",
      "Cloud Engineer",
      "DevOps Engineer",
      "Site Reliability Engineer",
      "Platform Engineer",
      "Infrastructure Engineer",
      "Network Engineer",
    ],
    tags: ["AWS", "Azure", "Kubernetes", "CI/CD", "SRE"],
  },
  {
    id: "enterprise",
    label: "Enterprise Platforms",
    title: "Enterprise Platform Talent",
    subtitle:
      "Functional, technical, integration, and architecture talent across leading enterprise systems.",
    bullets: [
      "SAP S/4HANA, ECC, Fiori, SuccessFactors, Ariba and BTP",
      "Salesforce Sales, Service, Experience, Marketing and Data Cloud",
      "Microsoft Dynamics 365, Power Platform, Power Apps and Power Automate",
      "Oracle Fusion, EBS, ERP, HCM, SCM and Oracle Cloud",
      "Pega, Siebel, OpenText and enterprise automation tools",
    ],
    roles: [
      "Functional Consultant",
      "Technical Consultant",
      "Administrator",
      "Developer",
      "Integration Specialist",
      "Solution Architect",
      "ERP/CRM Programme Manager",
    ],
    tags: ["SAP", "Salesforce", "Dynamics 365", "Oracle", "Automation"],
  },
  {
    id: "quality",
    label: "Quality Engineering",
    title: "Quality Engineering Talent",
    subtitle:
      "Quality, reliability, and testing capability for applications, platforms, and customer-facing products.",
    bullets: [
      "Manual, functional, regression, UAT and mobile testing",
      "Selenium, Cypress, Playwright and Appium",
      "Postman, Rest Assured, SoapUI and API testing",
      "JMeter, LoadRunner, Gatling and performance testing",
      "Test automation strategy and QA management",
    ],
    roles: [
      "SDET",
      "Automation QA Engineer",
      "Manual QA Engineer",
      "API QA Engineer",
      "Performance Test Engineer",
      "Mobile QA Engineer",
      "Test Lead",
    ],
    tags: ["SDET", "Selenium", "Playwright", "API Testing", "Performance QA"],
  },
  {
    id: "cybersecurity",
    label: "Cybersecurity",
    title: "Cybersecurity Talent",
    subtitle:
      "Security professionals for identity, cloud, application, operations, and governance requirements.",
    bullets: [
      "IAM, PAM, SOC, SIEM and SOAR",
      "Cloud security, application security, VAPT and GRC",
      "Okta, CyberArk, SailPoint and Azure AD",
      "Splunk, QRadar, Sentinel, Qualys and Nessus",
      "Network and endpoint security platforms",
    ],
    roles: [
      "Security Engineer",
      "SOC Analyst",
      "IAM Engineer",
      "Cloud Security Engineer",
      "Application Security Engineer",
      "GRC Consultant",
      "VAPT Specialist",
    ],
    tags: ["IAM", "SOC", "Cloud Security", "VAPT", "GRC"],
  },
  {
    id: "digital",
    label: "Digital & Business Talent",
    title: "Digital & Business Talent",
    subtitle:
      "Commercial and operational talent that helps businesses acquire, serve, and retain customers.",
    bullets: [
      "Growth marketing, demand generation, paid media, SEO and content",
      "Marketing automation, CRM, ABM, outbound and revenue operations",
      "UI/UX, graphic design, brand design, web development and video",
      "Sales development, inside sales, account management and customer success",
      "HR, finance, MIS, procurement, support and operations",
    ],
    roles: [
      "Growth Marketer",
      "Performance Marketer",
      "SEO Specialist",
      "Content Writer",
      "UI/UX Designer",
      "Sales Development Representative",
      "Customer Success Manager",
      "Operations Executive",
    ],
    tags: ["Marketing", "Sales", "Creative", "Customer Success", "Operations"],
  },
];

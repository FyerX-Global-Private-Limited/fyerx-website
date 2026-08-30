export type TechServiceGroup = {
  label: string;
  tags: string[];
};

export type TechServiceTab = {
  id: string;
  label: string;
  subtitle: string;
  description: string;
  groups: TechServiceGroup[];
  cta: string;
  ctaHref: string;
};

export const TECHNOLOGY_SERVICE_TABS: TechServiceTab[] = [
  {
    id: "enterprise-platforms",
    label: "Enterprise Platforms",
    subtitle: "Implement, integrate and optimise the systems at the core of operations.",
    description:
      "Support for enterprise service, CRM, ERP and automation platforms that connect people, processes and data across the organisation.",
    groups: [
      {
        label: "SERVICE & WORKFLOW PLATFORMS",
        tags: [
          "ServiceNow",
          "ITSM",
          "ITOM",
          "CSM",
          "HRSD",
          "GRC",
          "FSM",
          "Now Assist",
          "Integration Hub",
        ],
      },
      {
        label: "ERP & BUSINESS PLATFORMS",
        tags: [
          "SAP S/4HANA",
          "SuccessFactors",
          "Fiori",
          "ABAP",
          "BTP",
          "Oracle Fusion",
          "ERP",
          "HCM",
        ],
      },
      {
        label: "CRM & PRODUCTIVITY PLATFORMS",
        tags: [
          "Salesforce Sales Cloud",
          "Service Cloud",
          "Experience Cloud",
          "Dynamics 365",
          "Power Platform",
          "SharePoint",
          "Power BI",
        ],
      },
      {
        label: "AUTOMATION & INTEGRATION",
        tags: [
          "MuleSoft",
          "APIs",
          "UiPath",
          "Automation Anywhere",
          "Power Automate",
          "Workflow Orchestration",
        ],
      },
    ],
    cta: "Explore Enterprise Platforms",
    ctaHref: "#contact",
  },
  {
    id: "digital-transformation",
    label: "Digital Transformation",
    subtitle: "Modern applications and connected workflows for changing business needs.",
    description:
      "We modernise legacy processes, develop digital products and integrate the systems teams rely on every day.",
    groups: [
      {
        label: "APPLICATION MODERNISATION",
        tags: [
          "Legacy Modernisation",
          "Microservices",
          "API Development",
          "Application Re-engineering",
        ],
      },
      {
        label: "CONNECTED EXPERIENCES",
        tags: [
          "System Integration",
          "Web Applications",
          "Mobile App Development",
          "Customer and Employee Portals",
        ],
      },
      {
        label: "PROCESS AUTOMATION",
        tags: ["RPA", "Workflow Automation", "Low-Code / No-Code", "Process Digitisation"],
      },
      {
        label: "DELIVERY FOUNDATIONS",
        tags: ["Solution Architecture", "QA Engineering", "Release Planning", "Product Delivery"],
      },
    ],
    cta: "Explore Digital Transformation",
    ctaHref: "#contact",
  },
  {
    id: "data-ai",
    label: "Data & AI",
    subtitle: "Reliable data foundations and applied AI for better decisions and operations.",
    description:
      "We help teams organise data, create usable intelligence and apply AI to defined workflows with appropriate controls.",
    groups: [
      {
        label: "DATA FOUNDATIONS",
        tags: [
          "Data Engineering",
          "Data Warehousing",
          "ETL / ELT",
          "Data Quality",
          "Data Governance",
        ],
      },
      {
        label: "ANALYTICS & REPORTING",
        tags: [
          "BI Dashboards",
          "Power BI",
          "Tableau",
          "Looker",
          "Semantic Models",
          "Decision Reporting",
        ],
      },
      {
        label: "AI ENABLEMENT",
        tags: [
          "GenAI Integration",
          "AI Agent Development",
          "RAG",
          "Prompt Engineering",
          "Intelligent Automation",
        ],
      },
      {
        label: "ML OPERATIONS",
        tags: [
          "MLOps",
          "Model Deployment",
          "Monitoring",
          "Feature Pipelines",
          "Responsible AI Controls",
        ],
      },
    ],
    cta: "Explore Data & AI",
    ctaHref: "#contact",
  },
  {
    id: "cloud-devops",
    label: "Cloud & DevOps",
    subtitle: "Cloud foundations and engineering practices for dependable operations.",
    description:
      "We help organisations migrate, automate and operate cloud environments with stronger release discipline, reliability and cost visibility.",
    groups: [
      {
        label: "CLOUD TRANSFORMATION",
        tags: [
          "Cloud Migration",
          "AWS",
          "Microsoft Azure",
          "GCP",
          "Cloud Architecture",
          "Modernisation",
        ],
      },
      {
        label: "DEVOPS & DELIVERY",
        tags: [
          "CI/CD",
          "GitHub Actions",
          "GitLab CI/CD",
          "Azure DevOps",
          "GitOps",
          "Release Automation",
        ],
      },
      {
        label: "PLATFORM ENGINEERING",
        tags: [
          "Kubernetes",
          "Docker",
          "OpenShift",
          "Infrastructure as Code",
          "Terraform",
          "Ansible",
        ],
      },
      {
        label: "RELIABILITY & COST",
        tags: [
          "SRE",
          "Observability",
          "Monitoring",
          "Incident Readiness",
          "FinOps",
          "Cloud Cost Optimisation",
        ],
      },
    ],
    cta: "Explore Cloud & DevOps",
    ctaHref: "#contact",
  },
  {
    id: "strategic-advisory",
    label: "Strategic Advisory",
    subtitle: "Independent direction for high-stakes business and platform decisions.",
    description:
      "For leaders defining a roadmap, assessing readiness or selecting a vendor, FyerX provides a structured and commercially grounded view before delivery begins.",
    groups: [
      {
        label: "STRATEGY & ROADMAP",
        tags: [
          "Roadmap Advisory",
          "Digital Readiness Assessment",
          "Operating Model Review",
          "Investment Prioritisation",
        ],
      },
      {
        label: "ARCHITECTURE & LEADERSHIP",
        tags: [
          "Solution Architecture",
          "CTO-as-a-Service",
          "IT Due Diligence",
          "Governance",
        ],
      },
      {
        label: "VENDOR & PLATFORM DECISIONS",
        tags: [
          "Vendor Selection",
          "Platform Evaluation",
          "RFP Support",
          "Build-versus-Buy Assessment",
        ],
      },
      {
        label: "TRANSFORMATION PLANNING",
        tags: [
          "Programme Definition",
          "Delivery Roadmap",
          "Risk Assessment",
          "Change Planning",
        ],
      },
    ],
    cta: "Speak to an Advisor",
    ctaHref: "#contact",
  },
];

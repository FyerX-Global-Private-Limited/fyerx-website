-- Unified leads table for all 5 FyerX contact / application forms:
--   contact     = Contact our team
--   job         = Apply to FyerX
--   talent      = Contact Talent
--   marketing   = Contact Marketing
--   technology  = Contact Technology
--
-- Shared identity fields are NOT NULL. Form-specific fields are nullable;
-- required vs optional is enforced in the application per form.

CREATE TABLE leads (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,

  -- Which of the 5 forms submitted this row
  form_type ENUM('contact', 'job', 'talent', 'marketing', 'technology') NOT NULL,

  -- Identity (required on every form)
  first_name     VARCHAR(100)  NOT NULL,
  last_name      VARCHAR(100)  NOT NULL,
  email          VARCHAR(254)  NOT NULL,
  phone_country  CHAR(2)       NOT NULL DEFAULT 'IN' COMMENT 'ISO 3166-1 alpha-2, e.g. IN',
  phone          VARCHAR(20)   NOT NULL COMMENT 'National number or E.164',

  -- Professional / company (optional depending on form)
  job_title      VARCHAR(150)  NULL COMMENT 'Required on job form; optional elsewhere',
  company_name   VARCHAR(200)  NULL COMMENT 'Required on contact, talent, marketing, technology',
  company_size   VARCHAR(20)   NULL COMMENT 'Contact form only: 1-19, 20-49, 50-99, 100-250, 251-1500, 1500+',

  -- Job / career form only
  years_of_experience VARCHAR(50)  NULL COMMENT 'Job form: free-text years of experience',
  linkedin_url        VARCHAR(500) NULL COMMENT 'Job form: LinkedIn profile URL',
  resume_url          VARCHAR(1000) NULL COMMENT 'Job form: resume Drive/share link',

  -- Marketing form only
  monthly_budget VARCHAR(50) NULL COMMENT 'e.g. ₹1,00,000 - ₹1,99,999',

  -- Contact form only
  priority VARCHAR(100) NULL COMMENT 'e.g. generate-demand, hire-talent, modernise-technology',

  -- Services / team interest (single or multi-select)
  -- Stored as JSON array so one column works for chips and dropdowns
  -- Job: ["Marketing","Technology"]
  -- Talent: ["Contract Staffing","RPO"]
  -- Marketing: ["Demand & Lead Generation"]
  -- Technology: ["Cloud & DevOps","Cybersecurity"]
  -- Contact: ["talent-staffing"]
  help_with JSON NULL,

  -- Job, talent, marketing, technology
  expected_start VARCHAR(50) NULL COMMENT 'Immediately | Within 1–3 Months | Within 3–6 Months | Exploring for Later',

  -- Optional free text on every form
  message TEXT NULL,

  -- Lead workflow
  status ENUM('new', 'contacted', 'qualified', 'converted', 'closed') NOT NULL DEFAULT 'new',
  privacy_accepted TINYINT(1) NOT NULL DEFAULT 1,

  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (id),
  KEY idx_leads_form_type (form_type),
  KEY idx_leads_email (email),
  KEY idx_leads_phone (phone),
  KEY idx_leads_status (status),
  KEY idx_leads_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

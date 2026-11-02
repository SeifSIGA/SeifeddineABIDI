/**
 * Seifeddine ABIDI - Software Engineer Portfolio
 * Interactive Core Application Logic & Multilingual Engine (EN / FR)
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. INTERNATIONALIZATION (EN / FR) DICTIONARY & LOGIC
  // =========================================================================
  const translations = {
    en: {
      // Navbar
      nav_brand_role: "Software Engineer • DevOps",
      nav_about: "About",
      nav_skills: "Skills & Architecture",
      nav_experience: "Experience",
      nav_projects: "Projects",
      nav_certs: "Certifications",
      nav_contact: "Contact",
      status_available: "Open to Opportunities",
      btn_cli: ">_ CLI",
      btn_cv: "CV",

      // Hero
      hero_badge_ready: "PRODUCTION-READY",
      hero_badge_role: "FULL-STACK & DEVOPS / CLOUD ENGINEER",
      hero_chip_status: "Online • Available for Roles",
      hero_title: "Engineering Resilient <span class=\"text-gradient\">Distributed Systems</span> &amp; Automated Cloud Infrastructure.",
      hero_desc: "Hi, I’m <strong>Seifeddine ABIDI</strong>. I build high-availability enterprise web solutions and automated delivery pipelines with <strong>Spring Boot</strong>, <strong>Angular</strong>, <strong>Camunda BPM</strong>, and <strong>Kubernetes GitOps</strong>. Currently operating production platforms including <strong>tunisiainvestment.tn (TIA)</strong> and <strong>SIGMAP</strong>.",
      hero_btn_projects: "View Production Systems",
      hero_btn_cli: "Launch Terminal CLI",
      hero_btn_contact: "Get In Touch",
      hero_connect: "Connect & Verify:",
      hero_card_role: "Full-Stack & DevOps/Cloud Engineer",
      hero_card_badge_tia: "Prod: tunisiainvestment.tn (TIA)",
      hero_card_badge_sigmap: "Prod: sigmap.gov.mr (SIGMAP)",
      hero_card_badge_k8s: "Kubernetes & ArgoCD GitOps",

      // Terminal
      term_quick_label: "Quick Inspect:",

      // Stats
      stat_exp_num: "3+ Years",
      stat_exp_lbl: "Engineering Experience",
      stat_prod_num: "GOV & PROD",
      stat_prod_lbl: "Live National Platforms (TIA & SIGMAP)",
      stat_gitops_num: "GITOPS & K8S",
      stat_gitops_lbl: "Automated Cloud Delivery",
      stat_projects_num: "10+ Systems",
      stat_projects_lbl: "Distributed & Full-Stack Projects",

      // About
      about_tag: "ENGINEERING PROFILE",
      about_title: "Bridging Modern Full-Stack Development with Enterprise Cloud Operations",
      about_desc: "I design, build, and operate resilient software solutions end-to-end — from responsive, accessible Angular frontends to enterprise Spring Boot microservices, automated Camunda workflows, and GitOps-governed Kubernetes infrastructure.",
      about_role: "Full-Stack & DevOps/Cloud Engineer",
      about_loc_lbl: "Location",
      about_loc_val: "Tunis, Tunisia (Remote / Relocation)",
      about_edu_lbl: "Education",
      about_edu_val: "Esprit (Cloud) • ISTIC (Software)",
      about_lang_lbl: "Languages",
      about_lang_val: "French (Fluent) • English • Arabic",
      about_avail_lbl: "Availability",
      about_avail_val: "Immediate / Open for Roles",
      about_text: "My software engineering philosophy revolves around <strong>performance, automated reliability, and clear system architecture</strong>. Rather than treating frontend, backend, and infrastructure as isolated silos, I bridge them seamlessly — ensuring that code written for the browser runs reliably through containerized pipelines onto high-availability cloud clusters.",
      pillar1_title: "Full-Stack Architecture",
      pillar1_desc: "Building enterprise REST APIs with Spring Boot, FastAPI, and modular reactive user interfaces with Angular & React.",
      pillar2_title: "Cloud & GitOps Infrastructure",
      pillar2_desc: "Declarative Kubernetes cluster deployments using ArgoCD, containerization with Docker, and provisioning via Ansible & Jenkins.",
      pillar3_title: "Workflow Automation (BPM)",
      pillar3_desc: "Dynamic business process modeling using Camunda BPM, orchestrating complex approval paths with zero-code runtime adaptability.",
      pillar4_title: "Observability & Governance",
      pillar4_desc: "Continuous code quality scanning with SonarQube, artifact management with Nexus/Verdaccio, and telemetry via Splunk & Prometheus.",

      // Skills
      skills_tag: "TECHNICAL MATRIX",
      skills_title: "System Architecture &amp; Technology Stack",
      skills_desc: "Structured by architectural layers to highlight real-world production engineering competencies across the software lifecycle.",
      cat_backend_title: "Backend & Distributed Systems",
      cat_backend_desc: "Microservices, Enterprise APIs & Process Orchestration",
      cat_devops_title: "Cloud, DevOps & Site Reliability",
      cat_devops_desc: "Containers, GitOps Pipelines & Observability",
      cat_frontend_title: "Frontend Architecture & Interfaces",
      cat_frontend_desc: "Component-Driven SPAs, Reactive State & UI Systems",
      cat_db_title: "Databases & Software Engineering",
      cat_db_desc: "Data Modeling, Transactions & Agile Engineering",
      topology_title: "Live Production Architecture Topology",
      topology_desc: "End-to-end distributed request lifecycle across Seifeddine's production stack (TIA & SIGMAP)",

      // Experience
      exp_tag: "CAREER TRACK",
      exp_title: "Professional Experience & Engineering Journey",
      exp_desc: "Proven track record delivering mission-critical applications across government institutions, enterprise fintech environments, and agile software consultancies.",

      // Projects
      proj_tag: "ENGINEERING SHOWCASE",
      proj_title: "Production Systems & Verified Engineering Projects",
      proj_desc: "Every project listed below includes an actual, verified live production deployment or public repository link.",
      filter_all: "All Verified (10)",
      filter_enterprise: "Enterprise & Gov",
      filter_fullstack: "Full-Stack",
      filter_devops: "DevOps & Cloud",
      filter_ai: "AI & Distributed",
      btn_visit_prod: "Visit Live Site",
      btn_view_repo: "View GitHub Repo",
      btn_deepdive: "Architecture",

      // Certifications
      cert_tag: "VERIFIED CREDENTIALS",
      cert_title: "Certifications & Accreditations",
      cert_desc: "Industry-recognized credentials in cloud infrastructure, object storage, and cloud computing fundamentals.",
      cert_badge: "✓ VERIFIED CREDENTIAL",

      // Contact
      contact_tag: "COMMUNICATION ENDPOINTS",
      contact_title: "Let’s Build Something Resilient Together",
      contact_desc: "Interested in discussing a software engineering role, distributed systems architecture, or technical collaboration? Reach out directly.",
      contact_email_lbl: "Direct Email",
      contact_phone_lbl: "Direct Phone / WhatsApp",
      contact_loc_lbl: "Location & Mobility",
      contact_loc_val: "Tunis, Tunisia • Open to Remote & Relocation",
      contact_prof_lbl: "Profiles & Verification",
      contact_form_name_lbl: "Full Name / Organization *",
      contact_form_name_ph: "e.g. Alex Mercer, Tech Lead at ...",
      contact_form_email_lbl: "Email Address *",
      contact_form_email_ph: "e.g. alex@company.com",
      contact_form_msg_lbl: "Project / Role Inquiries *",
      contact_form_msg_ph: "Describe the technical requirements, architecture, or position...",
      contact_form_submit: "Transmit Message",
      copy_btn: "Copy",

      // Footer
      footer_copy: "© 2026 Seifeddine ABIDI. Crafted with passion for resilient software engineering.",
      footer_stack: "Stack: Vanilla HTML5 • Modern CSS System • ES6+ JS"
    },

    fr: {
      // Navbar
      nav_brand_role: "Ingénieur Logiciel • DevOps",
      nav_about: "À Propos",
      nav_skills: "Compétences & Architecture",
      nav_experience: "Expérience",
      nav_projects: "Projets Déployés",
      nav_certs: "Certifications",
      nav_contact: "Contact",
      status_available: "Disponible pour opportunités",
      btn_cli: ">_ Terminal",
      btn_cv: "CV",

      // Hero
      hero_badge_ready: "PRODUCTION-READY",
      hero_badge_role: "INGÉNIEUR FULL-STACK & DEVOPS / CLOUD",
      hero_chip_status: "En ligne • Disponible immédiatement",
      hero_title: "Conception de <span class=\"text-gradient\">Systèmes Distribués</span> Résilients &amp; Infrastructure Cloud Automatisée.",
      hero_desc: "Bonjour, je suis <strong>Seifeddine ABIDI</strong>. Je conçois des solutions logicielles d'entreprise à haute disponibilité et des pipelines de déploiement automatisés avec <strong>Spring Boot</strong>, <strong>Angular</strong>, <strong>Camunda BPM</strong> et <strong>Kubernetes GitOps</strong>. Actuellement en charge de plateformes en production dont <strong>tunisiainvestment.tn (TIA)</strong> et <strong>SIGMAP</strong>.",
      hero_btn_projects: "Découvrir les Systèmes en Prod",
      hero_btn_cli: "Lancer le Terminal CLI",
      hero_btn_contact: "Me Contacter",
      hero_connect: "Profils & Vérification :",
      hero_card_role: "Ingénieur Full-Stack & DevOps/Cloud",
      hero_card_badge_tia: "Prod : tunisiainvestment.tn (TIA)",
      hero_card_badge_sigmap: "Prod : sigmap.gov.mr (SIGMAP)",
      hero_card_badge_k8s: "Kubernetes & ArgoCD GitOps",

      // Terminal
      term_quick_label: "Inspection rapide :",

      // Stats
      stat_exp_num: "3+ Ans",
      stat_exp_lbl: "Pratique Ingénierie & Développement",
      stat_prod_num: "GOV & PROD",
      stat_prod_lbl: "Plateformes Nationales en Ligne (TIA & SIGMAP)",
      stat_gitops_num: "GITOPS & K8S",
      stat_gitops_lbl: "Déploiements Cloud Automatisés",
      stat_projects_num: "10+ Systèmes",
      stat_projects_lbl: "Solutions Distribuées & Full-Stack",

      // About
      about_tag: "PROFIL INGÉNIEUR",
      about_title: "Allier Développement Full-Stack Moderne et Opérations Cloud d'Entreprise",
      about_desc: "Je conçois, développe et opère des solutions logicielles de bout en bout — des interfaces Angular réactives et accessibles aux microservices Spring Boot, workflows Camunda et clusters Kubernetes gouvernés par GitOps.",
      about_role: "Ingénieur Full-Stack & DevOps/Cloud",
      about_loc_lbl: "Localisation",
      about_loc_val: "Tunis, Tunisie (Télétravail / Mobilité internationale)",
      about_edu_lbl: "Formation",
      about_edu_val: "Esprit (Cloud) • ISTIC (Génie Logiciel)",
      about_lang_lbl: "Langues",
      about_lang_val: "Français (Courant) • Anglais • Arabe",
      about_avail_lbl: "Disponibilité",
      about_avail_val: "Immédiate / À l'écoute d'opportunités",
      about_text: "Ma philosophie d'ingénierie logicielle repose sur <strong>la performance, la fiabilité automatisée et une architecture système claire</strong>. Plutôt que de cloisonner le frontend, le backend et l'infrastructure, je les unifie pour garantir que le code tourne de façon déterministe depuis les conteneurs jusqu'aux clusters cloud haute disponibilité.",
      pillar1_title: "Architecture Full-Stack",
      pillar1_desc: "Conception d'API REST d'entreprise avec Spring Boot, FastAPI, et interfaces réactives modulaires en Angular et React.",
      pillar2_title: "Infrastructure Cloud & GitOps",
      pillar2_desc: "Déploiements déclaratifs sur Kubernetes via ArgoCD, conteneurisation Docker et automatisation via Ansible et Jenkins.",
      pillar3_title: "Automatisation de Workflows (BPM)",
      pillar3_desc: "Modélisation dynamique de processus métiers avec Camunda BPM pour des circuits d'approbation souples et évolutifs.",
      pillar4_title: "Observabilité & Gouvernance",
      pillar4_desc: "Analyse continue de la qualité avec SonarQube, gestion des artefacts via Nexus/Verdaccio et télémétrie Splunk & Prometheus.",

      // Skills
      skills_tag: "MATRICE TECHNIQUE",
      skills_title: "Architecture Système &amp; Stack Technologique",
      skills_desc: "Organisé par couches architecturales pour valoriser les compétences réelles déployées sur le cycle de vie logiciel.",
      cat_backend_title: "Backend & Systèmes Distribués",
      cat_backend_desc: "Microservices, API d'Entreprise & Orchestration",
      cat_devops_title: "Cloud, DevOps & SRE",
      cat_devops_desc: "Conteneurs, Pipelines GitOps & Observabilité",
      cat_frontend_title: "Architecture Frontend & Interfaces",
      cat_frontend_desc: "SPAs par Composants, État Réactif & Design UI",
      cat_db_title: "Bases de Données & Génie Logiciel",
      cat_db_desc: "Modélisation de Données, Transactions & Méthodes Agiles",
      topology_title: "Topologie d'Architecture en Production",
      topology_desc: "Cycle de vie complet d'une requête distribuée sur l'infrastructure de production (TIA & SIGMAP)",

      // Experience
      exp_tag: "PARCOURS PROFESSIONNEL",
      exp_title: "Expérience Professionnelle &amp; Réalisations",
      exp_desc: "Expérience éprouvée dans la livraison d'applications critiques pour des institutions gouvernementales, des acteurs fintech et des éditeurs logiciels.",

      // Projects
      proj_tag: "VITRINE PROJETS",
      proj_title: "Systèmes en Production &amp; Projets Vérifiés",
      proj_desc: "Tous les projets ci-dessous disposent d'un lien réel et vérifiable vers un déploiement en production ou un dépôt public.",
      filter_all: "Tous Vérifiés (10)",
      filter_enterprise: "Entreprise & Gov",
      filter_fullstack: "Full-Stack",
      filter_devops: "DevOps & Cloud",
      filter_ai: "IA & Distribué",
      btn_visit_prod: "Visiter le Site Prod",
      btn_view_repo: "Voir Dépôt GitHub",
      btn_deepdive: "Architecture",

      // Certifications
      cert_tag: "CERTIFICATIONS VÉRIFIÉES",
      cert_title: "Certifications &amp; Accréditations",
      cert_desc: "Certifications reconnues par l'industrie en infrastructure cloud, stockage d'objets et fondamentaux du cloud computing.",
      cert_badge: "✓ CERTIFICAT VÉRIFIÉ",

      // Contact
      contact_tag: "POINTS DE CONTACT",
      contact_title: "Bâtissons Ensemble des Solutions Résilientes",
      contact_desc: "Vous souhaitez échanger sur un poste d'ingénieur logiciel, une architecture de systèmes distribués ou une collaboration technique ?",
      contact_email_lbl: "Email Direct",
      contact_phone_lbl: "Téléphone Direct / WhatsApp",
      contact_loc_lbl: "Localisation & Mobilité",
      contact_loc_val: "Tunis, Tunisie • Ouvert au télétravail & mobilité",
      contact_prof_lbl: "Profils & Réseaux",
      contact_form_name_lbl: "Nom complet / Entreprise *",
      contact_form_name_ph: "ex. Jean Dupont, Tech Lead chez ...",
      contact_form_email_lbl: "Adresse Email *",
      contact_form_email_ph: "ex. jean@entreprise.com",
      contact_form_msg_lbl: "Détails du projet / opportunité *",
      contact_form_msg_ph: "Précisez vos besoins techniques, l'architecture ou le poste...",
      contact_form_submit: "Envoyer le Message",
      copy_btn: "Copier",

      // Footer
      footer_copy: "© 2026 Seifeddine ABIDI. Développé avec passion pour l'ingénierie logicielle résiliente.",
      footer_stack: "Stack : HTML5 Natif • Système CSS Moderne • JS ES6+"
    }
  };

  let currentLang = localStorage.getItem('seif_lang') || 'en';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('seif_lang', lang);
    document.documentElement.setAttribute('lang', lang);

    // Update buttons in switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const dict = translations[lang] || translations.en;

    // Update all text nodes with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });
  }

  // Bind language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.lang;
      if (selected) applyLanguage(selected);
    });
  });

  applyLanguage(currentLang);


  // =========================================================================
  // 2. THEME SWITCHER (DARK / LIGHT)
  // =========================================================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('seif_theme') || 'dark';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('seif_theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }

  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }


  // =========================================================================
  // 3. HEADER SCROLL & MOBILE DRAWER NAVIGATION
  // =========================================================================
  const siteHeader = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader?.classList.add('scrolled');
    } else {
      siteHeader?.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }


  // =========================================================================
  // 4. ACTIVE NAVIGATION SPY ON SCROLL
  // =========================================================================
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });


  // =========================================================================
  // 5. INTERACTIVE HERO TERMINAL PREVIEW
  // =========================================================================
  const heroTerminalOutput = document.getElementById('heroTerminalOutput');
  const heroQuickCmds = document.querySelectorAll('[data-hero-cmd]');

  const heroResponses = {
    'status': {
      en: `<div class="terminal-line"><span class="val-cyan">⚡ Production Systems Status:</span></div>
<div class="terminal-line">◦ System 1: <span class="val-green">tunisiainvestment.tn (TIA) — Kubernetes Production Live</span></div>
<div class="terminal-line">◦ System 2: <span class="val-green">sigmap.gov.mr (SIGMAP) — National e-Procurement Live</span></div>
<div class="terminal-line">◦ Pipelines: <span class="val-green">ArgoCD GitOps & K8s Passing • Zero-Downtime Rollouts</span></div>`,
      fr: `<div class="terminal-line"><span class="val-cyan">⚡ Statut des Systèmes en Production :</span></div>
<div class="terminal-line">◦ Système 1: <span class="val-green">tunisiainvestment.tn (TIA) — En Ligne sur Cluster Kubernetes</span></div>
<div class="terminal-line">◦ Système 2: <span class="val-green">sigmap.gov.mr (SIGMAP) — e-Procurement National En Ligne</span></div>
<div class="terminal-line">◦ Pipelines: <span class="val-green">ArgoCD GitOps & K8s Opérationnels • Zéro Interruption</span></div>`
    },

    'skills': {
      en: `<div class="terminal-line"><span class="val-purple">📦 Technical Architecture Matrix:</span></div>
<div class="terminal-line">◦ Backend: Java (Spring Boot), Python (FastAPI), Camunda BPM</div>
<div class="terminal-line">◦ Cloud/DevOps: Docker, Kubernetes, ArgoCD GitOps, Ansible, Splunk, Traefik</div>
<div class="terminal-line">◦ Frontend: Angular (15+), React.js, TypeScript, WebSockets</div>`,
      fr: `<div class="terminal-line"><span class="val-purple">📦 Matrice d'Architecture Technique :</span></div>
<div class="terminal-line">◦ Backend: Java (Spring Boot), Python (FastAPI), Camunda BPM</div>
<div class="terminal-line">◦ Cloud/DevOps: Docker, Kubernetes, ArgoCD GitOps, Ansible, Splunk, Traefik</div>
<div class="terminal-line">◦ Frontend: Angular (15+), React.js, TypeScript, WebSockets</div>`
    },

    'experience': {
      en: `<div class="terminal-line"><span class="val-amber">💼 Engineering Journey:</span></div>
<div class="terminal-line">◦ 2025-Now: SIGMAP & TIA – Software Engineer (Full-Stack & DevOps/Cloud)</div>
<div class="terminal-line">◦ 2025: Enterprise Approval Portal (Spring Boot, Camunda BPM, K8s)</div>
<div class="terminal-line">◦ 2024: FNZ – DevOps & Full-Stack Intern (Docker, Jenkins, Splunk)</div>
<div class="terminal-line">◦ 2022: E-Build – Software Engineer Intern (FastAPI, Angular)</div>`,
      fr: `<div class="terminal-line"><span class="val-amber">💼 Parcours Ingénierie :</span></div>
<div class="terminal-line">◦ 2025-Présent: SIGMAP & TIA – Ingénieur Full-Stack & DevOps/Cloud</div>
<div class="terminal-line">◦ 2025: Portail d'Approbation (Spring Boot, Camunda BPM, K8s)</div>
<div class="terminal-line">◦ 2024: FNZ – Stagiaire DevOps & Full-Stack (Docker, Jenkins, Splunk)</div>
<div class="terminal-line">◦ 2022: E-Build – Stagiaire Ingénieur (FastAPI, Angular)</div>`
    },

    'contact': {
      en: `<div class="terminal-line"><span class="val-cyan">📫 Direct Endpoints:</span></div>
<div class="terminal-line">◦ Email: <a href="mailto:seifeddine.abidi@esprit.tn" style="color:#38bdf8;text-decoration:underline;">seifeddine.abidi@esprit.tn</a></div>
<div class="terminal-line">◦ Mobile: +216 56 549 887</div>
<div class="terminal-line">◦ Location: Tunis, Tunisia (Open to Remote & Relocation)</div>`,
      fr: `<div class="terminal-line"><span class="val-cyan">📫 Coordonnées Directes :</span></div>
<div class="terminal-line">◦ Email: <a href="mailto:seifeddine.abidi@esprit.tn" style="color:#38bdf8;text-decoration:underline;">seifeddine.abidi@esprit.tn</a></div>
<div class="terminal-line">◦ Mobile: +216 56 549 887</div>
<div class="terminal-line">◦ Lieu: Tunis, Tunisie (Télétravail & Mobilité)</div>`
    }
  };

  heroQuickCmds.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmdKey = btn.dataset.heroCmd;
      const cmdLabel = btn.dataset.cmdLabel || cmdKey;
      if (heroTerminalOutput && heroResponses[cmdKey]) {
        const resp = heroResponses[cmdKey][currentLang] || heroResponses[cmdKey].en;
        heroTerminalOutput.innerHTML = `
          <div class="terminal-line">
            <span class="terminal-prompt">seif@cloud:~$</span>
            <span class="terminal-cmd">${cmdLabel}</span>
          </div>
          <div class="terminal-output">
            ${resp}
          </div>
        `;
      }
    });
  });


  // =========================================================================
  // 6. INTERACTIVE DEV CLI TERMINAL MODAL
  // =========================================================================
  const cliModal = document.getElementById('cliModal');
  const openCliButtons = document.querySelectorAll('.open-terminal-btn');
  const closeCliBtn = document.getElementById('closeCliBtn');
  const cliOutput = document.getElementById('cliOutput');
  const cliInput = document.getElementById('cliInput');

  function openCLI() {
    cliModal?.classList.add('active');
    cliInput?.focus();
  }

  function closeCLI() {
    cliModal?.classList.remove('active');
  }

  openCliButtons.forEach(btn => btn.addEventListener('click', openCLI));
  closeCliBtn?.addEventListener('click', closeCLI);

  cliModal?.addEventListener('click', (e) => {
    if (e.target === cliModal) closeCLI();
  });

  const cliCommands = {
    'help': `Available Commands / Commandes Disponibles:
  • <span style="color:#38bdf8;">help</span>          - List commands
  • <span style="color:#38bdf8;">whoami</span>        - Summary of Seifeddine ABIDI
  • <span style="color:#38bdf8;">skills</span>        - Technical skills matrix
  • <span style="color:#38bdf8;">experience</span>    - Career timeline
  • <span style="color:#38bdf8;">projects</span>      - List verified projects & deployed sites
  • <span style="color:#38bdf8;">contact</span>       - Communication channels
  • <span style="color:#38bdf8;">download-cv</span>   - Download official CV PDF
  • <span style="color:#38bdf8;">sudo hire</span>     - [Easter Egg] Recruiter celebration
  • <span style="color:#38bdf8;">clear</span>         - Clear console`,

    'whoami': `Seifeddine ABIDI
Software Engineer — Full-Stack & DevOps / Cloud
Specialized in Java (Spring Boot), Angular, Camunda BPM, Docker, Kubernetes & GitOps ArgoCD.
Production Operator for tunisiainvestment.tn (TIA) and sigmap.gov.mr (SIGMAP).`,

    'skills': `--- ARCHITECTURE & SKILLS ---
[Backend]: Spring Boot (Java), Camunda BPM, FastAPI (Python), REST, GraphQL, WebSockets
[DevOps]:  Docker, Kubernetes, ArgoCD (GitOps), Jenkins, Ansible, Splunk, Prometheus/Grafana, Traefik
[Frontend]: Angular (15+), React.js, TypeScript, Responsive CSS3
[Databases]: PostgreSQL, MySQL, MongoDB, Firebase, PL/SQL`,

    'experience': `--- WORK EXPERIENCE ---
• TIA & SIGMAP (2025 - Present) | Software Engineer (Full-Stack & DevOps/Cloud)
  Live deployments for tunisiainvestment.tn and national e-procurement sigmap.gov.mr.
• Dynamic Approval Portal (2025) | Software Engineer Intern (PFE)
  Camunda BPM workflow engine, GitOps ArgoCD on Kubernetes, Ansible.
• FNZ (2024) | DevOps & Full-Stack Intern
  Full-stack Dockerization, Jenkins CI/CD pipelines, Splunk datacenter monitoring.
• E-Build (2022) | Software Engineer Intern
  CRM for Labvet International, Angular + FastAPI.`,

    'projects': `--- VERIFIED & DEPLOYED PROJECTS ---
1. TIA - Tunisia Investment Authority (https://tunisiainvestment.tn) [PROD]
2. SIGMAP - Mauritania Governmental e-Procurement (https://sigmap.gov.mr) [PROD]
3. Dynamic Approval Portal - Camunda BPM + K8s (GitHub: Approbation-frontend)
4. Labvet CRM - Angular, FastAPI, Automated PDF (https://www.labvet-international.com)
5. PetsStore Microservices - Spring Boot + Eureka + Keycloak (GitHub: AnimalerieMicroService)
6. CI/CD DevOps Pipeline - Jenkins, SonarQube, Nexus, Grafana (GitHub: DEVOPS)
7. HubEducator - Multimodal AI Platform (GitHub: HubEducator)
8. BookShare - Collaborative Library & Payments (GitHub: Bookshare)
9. Smart Hospital Emergency Triage - Real-time AI (GitHub: Twinners_PI)
10. MediConnect - Multi-Platform Medical Suite (GitHub: PIDev)`,

    'contact': `Email:    seifeddine.abidi@esprit.tn
Phone:    +216 56 549 887
Location: Tunis, Tunisia (Open to Remote & Relocation)
LinkedIn: https://www.linkedin.com/in/seifeddineabidi/
GitHub:   https://github.com/seifeddineABIDI`,

    'download-cv': `Triggering download: assets/cv.pdf...`
  };

  if (cliInput && cliOutput) {
    cliInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const rawCmd = cliInput.value.trim();
        const cmd = rawCmd.toLowerCase();
        cliInput.value = '';

        if (!cmd) return;

        const lineElem = document.createElement('div');
        lineElem.style.marginBottom = '8px';
        lineElem.innerHTML = `<span style="color:#38bdf8;">user@visitor:~$</span> <span style="color:#fff;">${rawCmd}</span>`;
        cliOutput.appendChild(lineElem);

        if (cmd === 'clear') {
          cliOutput.innerHTML = '';
          return;
        }

        if (cmd === 'download-cv') {
          const dlElem = document.createElement('div');
          dlElem.style.color = '#34d399';
          dlElem.style.marginBottom = '12px';
          dlElem.innerHTML = `✓ Initiating CV download...`;
          cliOutput.appendChild(dlElem);
          const link = document.createElement('a');
          link.href = 'assets/cv.pdf';
          link.download = 'Seifeddine_ABIDI_CV.pdf';
          link.click();
          cliOutput.scrollTop = cliOutput.scrollHeight;
          return;
        }

        if (cmd === 'sudo hire' || cmd === 'sudo hire seif') {
          const respElem = document.createElement('div');
          respElem.style.color = '#34d399';
          respElem.style.fontWeight = 'bold';
          respElem.style.marginBottom = '12px';
          respElem.innerHTML = `🎉 ACCESS GRANTED! Congratulations on choosing Seifeddine ABIDI.<br>Initiating interview handshake sequence... Please reach out via seifeddine.abidi@esprit.tn!`;
          cliOutput.appendChild(respElem);
          launchConfetti();
          cliOutput.scrollTop = cliOutput.scrollHeight;
          return;
        }

        const respElem = document.createElement('div');
        respElem.style.marginBottom = '14px';
        respElem.style.lineHeight = '1.6';

        if (cliCommands[cmd]) {
          respElem.innerHTML = cliCommands[cmd].replace(/\n/g, '<br>');
        } else {
          respElem.innerHTML = `<span style="color:#ef4444;">command not found: "${rawCmd}". Type '<span style="color:#38bdf8;">help</span>' to inspect valid commands.</span>`;
        }

        cliOutput.appendChild(respElem);
        cliOutput.scrollTop = cliOutput.scrollHeight;
      }
    });
  }


  // =========================================================================
  // 7. PROJECTS FILTER TABS
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const categories = (card.dataset.category || '').toLowerCase();
        if (filter === 'all' || categories.includes(filter.toLowerCase())) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });


  // =========================================================================
  // 8. PROJECT DEEP DIVE & CERTIFICATE LIGHTBOX MODAL
  // =========================================================================
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxMeta = document.getElementById('lightboxMeta');

  function openLightbox(data) {
    if (!lightboxModal) return;
    if (lightboxImg) {
      if (data.img) {
        lightboxImg.src = data.img;
        lightboxImg.style.display = 'block';
      } else {
        lightboxImg.style.display = 'none';
      }
    }
    if (lightboxTitle) lightboxTitle.textContent = data.title || '';
    if (lightboxDesc) lightboxDesc.innerHTML = data.desc || '';
    if (lightboxMeta) lightboxMeta.innerHTML = data.meta || '';

    lightboxModal.classList.add('active');
  }

  function closeLightbox() {
    lightboxModal?.classList.remove('active');
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxModal?.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  // Attach Lightbox to Certifications
  document.querySelectorAll('.cert-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a')) return;
      const img = card.querySelector('img')?.getAttribute('src');
      const title = card.querySelector('.cert-title')?.textContent;
      const issuer = card.querySelector('.cert-issuer')?.textContent;
      const badge = card.querySelector('.cert-badge')?.textContent;
      const metaHtml = card.querySelector('.cert-meta')?.innerHTML || '';
      const linkEl = card.querySelector('.cert-link-btn');
      const linkHref = linkEl?.getAttribute('href');

      let actionBtn = '';
      if (linkHref && linkHref !== '#') {
        actionBtn = `<div style="margin-top:18px;"><a href="${linkHref}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="font-size:0.85rem; padding:9px 18px;">Show Credential <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-left:6px;"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a></div>`;
      }

      openLightbox({
        img: img,
        title: title,
        desc: `<p style="margin-top:8px; font-weight:500; color:var(--accent-cyan);">${issuer}</p><div style="margin-top:12px; font-size:0.85rem; color:var(--text-secondary); line-height:1.7;">${metaHtml}</div>${actionBtn}`,
        meta: `<span class="badge-flag" style="margin-right:8px;">${badge}</span>`
      });
    });
  });

  // Attach Lightbox to Project Deep-Dive Triggers
  document.querySelectorAll('[data-project-details]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const card = btn.closest('.project-card');
      if (!card) return;

      const img = card.querySelector('.project-thumb img')?.getAttribute('src');
      const title = card.querySelector('.project-title')?.textContent;
      const desc = card.querySelector('.project-desc')?.innerHTML;
      const techStack = card.querySelector('.project-tech-stack')?.innerHTML;

      openLightbox({
        img: img,
        title: title,
        desc: desc,
        meta: `<div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:14px;">${techStack}</div>`
      });
    });
  });


  // =========================================================================
  // 9. COPY TO CLIPBOARD WITH TOAST NOTIFICATION
  // =========================================================================
  const copyButtons = document.querySelectorAll('[data-copy-target]');
  const toast = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimeout;

  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.dataset.copyTarget;
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(`Copied to clipboard: ${text}`);
        }).catch(() => {
          showToast(`Value: ${text}`);
        });
      }
    });
  });


  // =========================================================================
  // 10. CONTACT FORM SUBMISSION
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]')?.value;
      const email = contactForm.querySelector('[name="email"]')?.value;
      const message = contactForm.querySelector('[name="message"]')?.value;

      showToast(`Opening mail client...`);
      
      const mailtoLink = `mailto:seifeddine.abidi@esprit.tn?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 800);
    });
  }


  // =========================================================================
  // 11. PURE JS CONFETTI CANNON FOR 'SUDO HIRE'
  // =========================================================================
  function launchConfetti() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.zIndex = '99999';
    canvas.style.pointerEvents = 'none';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ['#38bdf8', '#6366f1', '#10b981', '#f59e0b', '#ec4899', '#a855f7'];

    for (let i = 0; i < 120; i++) {
      pieces.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.5) * 16 - 4,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vr: (Math.random() - 0.5) * 12,
        alpha: 1
      });
    }

    let animationFrame;
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;

      pieces.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.rotation += p.vr;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          alive = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      if (alive) {
        animationFrame = requestAnimationFrame(update);
      } else {
        cancelAnimationFrame(animationFrame);
        canvas.remove();
      }
    }
    update();
  }

  // Global helper
  window.openTerminal = openCLI;
});

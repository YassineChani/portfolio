/* ==========================================================================
   YASSINE CHANI — PORTFOLIO INTERACTIVE ENGINE (FR/EN, ESTIMATOR, AI BOT)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  // ---------- 1. BILINGUAL TRANSLATION DICTIONARY (FR / EN) ----------
  const i18n = {
    fr: {
      "topbar.status": "Disponible immédiatement pour missions Freelance & Remote (USA / EU / MENA)",
      "nav.services": "Services Freelance",
      "nav.projects": "Projets & IA",
      "nav.experience": "Expériences",
      "nav.skills": "Stack",
      "nav.estimator": "Simulateur Devis",
      "nav.contact": "Contact",
      "nav.hire": "Recruter / Devis",
      "hero.badge1": "Expert Full Stack & Ingénieur IA",
      "hero.badge2": "+5 ans d'Expérience Internationale (USA • Canada • Maroc)",
      "hero.title1": "Je conçois des applications Web",
      "hero.titleHighlight": "Scalables & Propulsées par l'IA",
      "hero.title2": "prêtes pour la production.",
      "hero.subtitle": "Développeur Full Stack Senior (React, Next.js, Node.js, Django), Ingénieur Machine Learning & Formateur. J'accompagne les startups et entreprises internationales de l'architecture technique au déploiement de solutions IA à fort ROI.",
      "hero.ctaPrimary": "Démarrer un Projet Freelance",
      "hero.ctaSecondary": "Estimer un Projet en 30s",
      "hero.ctaResume": "CV Exécutif (PDF)",
      "hero.termRun": "Tester Compatibilité",
      "stats.years": "Années d'Expérience",
      "stats.markets": "Marchés (USA, Canada, Maroc)",
      "stats.projects": "Apps Web & Modèles IA livrés",
      "stats.students": "Développeurs formés",
      "services.tag": "Offres Freelance & Consulting",
      "services.title": "Comment je peux accélérer vos produits",
      "services.desc": "Que vous soyez un recruteur cherchant un profil senior autonome ou un fondateur souhaitant lancer/scaler un produit Web & IA.",
      "services.s1.badge": "De A à Z • Clé en main",
      "services.s1.title": "Développement Full Stack Sur Mesure",
      "services.s1.desc": "Conception et développement d'applications web performantes (SaaS, plateformes métiers, dashboards) avec React, Next.js, Vue.js en Front et Node.js, Django ou FastAPI en Back.",
      "services.s2.ribbon": "Le Plus Demandé",
      "services.s2.badge": "IA Générative & Automation",
      "services.s2.title": "Intégration IA & Agents LLM en Production",
      "services.s2.desc": "Intégration de fonctionnalités IA à forte valeur ajoutée dans vos produits existants sans régression : chatbots intelligents, automatisation de processus et pipelines de données.",
      "services.s3.badge": "Data Science & Deep Learning",
      "services.s3.title": "Machine Learning, Computer Vision & MLOps",
      "services.s3.desc": "Développement de modèles prédictifs, systèmes de recommandation et détection d'objets, déployés via API REST avec monitoring de drift en production.",
      "services.s4.badge": "Audit, Rescue & Coaching",
      "services.s4.title": "Audit Technique, Debugging Critique & Formation",
      "services.s4.desc": "Intervention rapide sur des bugs critiques en production, refonte de performance, ou montée en compétence de vos équipes de développement aux standards Clean Code.",
      "services.estimateBtn": "Chiffrer ce besoin",
      "projects.tag": "Réalisations & Études de Cas",
      "projects.title": "Projets Phares & Impact en Production",
      "projects.desc": "Sélection de missions internationales et projets d'ingénierie IA illustrant ma capacité à livrer des systèmes robustes.",
      "projects.filterAll": "Tous les Projets (6)",
      "projects.filterFS": "Full Stack & Cloud",
      "projects.filterAI": "IA & LLM",
      "projects.filterML": "Machine Learning & Vision",
      "estimator.tag": "Outil Interactif pour Recruteurs & Clients",
      "estimator.title": "Simulateur de Mission & Devis Express",
      "estimator.desc": "Configurez votre besoin en quelques clics pour obtenir une estimation de la stack recommandée, du mode d'intervention et de la durée.",
      "estimator.step1": "1. Type de Projet ou Mission",
      "estimator.step2": "2. Format de Collaboration souhaité",
      "estimator.step3": "3. Briques Techniques à inclure",
      "estimator.resBadge": "Recommandation Technique",
      "estimator.durationLabel": "Durée Estimée",
      "estimator.availLabel": "Démarrage",
      "estimator.availVal": "Sous 48h",
      "estimator.stackLabel": "Architecture Recommandée :",
      "estimator.delivLabel": "Inclus dans chaque livraison :",
      "estimator.cta": "Envoyer cette configuration à Yassine",
      "exp.tag": "Parcours Professionnel & Académique",
      "exp.title": "Expériences Internationales & Formations",
      "exp.workTitle": "Expériences Professionnelles",
      "exp.eduTitle": "Diplômes & Formations",
      "skills.tag": "Compétences Techniques",
      "skills.title": "Stack Technologique Complète",
      "contact.tag": "Prêt à collaborer ?",
      "contact.title": "Discutons de votre prochain projet ou mission Freelance",
      "contact.desc": "Réponse garantie sous moins de 24h. Disponible pour des missions Freelance, des contrats à distance (USA, Canada, Europe, Maroc) ou du consulting technique.",
      "contact.formTitle": "Envoyer un Brief Rapide",
      "contact.sendEmail": "Envoyer par Email",
      "contact.sendWa": "Envoyer sur WhatsApp"
    },
    en: {
      "topbar.status": "Immediately available for Freelance & Remote Contracts (USA / Canada / EU / MENA)",
      "nav.services": "Freelance Services",
      "nav.projects": "Case Studies & AI",
      "nav.experience": "Experience",
      "nav.skills": "Tech Stack",
      "nav.estimator": "Project Estimator",
      "nav.contact": "Contact",
      "nav.hire": "Hire Me / Quote",
      "hero.badge1": "Senior Full Stack & AI/ML Engineer",
      "hero.badge2": "5+ Years International Remote Experience (USA • Canada • Morocco)",
      "hero.title1": "I architect & build",
      "hero.titleHighlight": "Scalable & AI-Powered Web Apps",
      "hero.title2": "engineered for production.",
      "hero.subtitle": "Senior Full Stack Developer (React, Next.js, Node.js, Django), Machine Learning Engineer & Tech Educator. Helping international startups and teams ship reliable web platforms and high-ROI AI integrations.",
      "hero.ctaPrimary": "Start a Freelance Project",
      "hero.ctaSecondary": "Estimate Your Project in 30s",
      "hero.ctaResume": "Executive Resume (PDF)",
      "hero.termRun": "Run Recruiter Match",
      "stats.years": "Years of Experience",
      "stats.markets": "Markets (USA, Canada, Morocco)",
      "stats.projects": "Web Apps & AI Models Shipped",
      "stats.students": "Developers Mentored",
      "services.tag": "Freelance Services & Consulting",
      "services.title": "How I Accelerate Your Engineering Roadmap",
      "services.desc": "Whether you're a recruiter seeking an autonomous senior engineer or a founder launching an AI-driven SaaS product.",
      "services.s1.badge": "End-to-End • Turnkey",
      "services.s1.title": "Custom Full Stack Web Development",
      "services.s1.desc": "Design and build high-performance SaaS apps, internal platforms, and dashboards with React, Next.js, Vue.js on the frontend and Node.js, Django, or FastAPI on the backend.",
      "services.s2.ribbon": "Most Popular",
      "services.s2.badge": "Generative AI & Automation",
      "services.s2.title": "Production AI & LLM Agent Integration",
      "services.s2.desc": "Embed high-value AI capabilities into existing production systems with zero regression: intelligent LLM chatbots, workflow automation, and data pipelines.",
      "services.s3.badge": "Data Science & Deep Learning",
      "services.s3.title": "Machine Learning, Computer Vision & MLOps",
      "services.s3.desc": "Predictive models, hybrid recommendation engines, and YOLO/CNN object detection exposed via REST APIs with drift monitoring.",
      "services.s4.badge": "Audit, Rescue & Training",
      "services.s4.title": "Architecture Audit, Critical Debugging & Mentoring",
      "services.s4.desc": "Rapid root-cause resolution for production incidents, performance optimization, or upskilling your engineering team on Clean Code & modern frameworks.",
      "services.estimateBtn": "Estimate this service",
      "projects.tag": "Featured Work & Case Studies",
      "projects.title": "Flagship Projects & Production Impact",
      "projects.desc": "Selected international contracts and AI engineering projects demonstrating end-to-end delivery.",
      "projects.filterAll": "All Projects (6)",
      "projects.filterFS": "Full Stack & Cloud",
      "projects.filterAI": "AI & LLM",
      "projects.filterML": "Machine Learning & Vision",
      "estimator.tag": "Interactive Tool for Recruiters & Clients",
      "estimator.title": "Instant Project & Freelance Scope Estimator",
      "estimator.desc": "Configure your requirements in seconds to get a recommended tech architecture, engagement model, and timeline.",
      "estimator.step1": "1. Project or Contract Type",
      "estimator.step2": "2. Preferred Engagement Format",
      "estimator.step3": "3. Technical Modules to Include",
      "estimator.resBadge": "Technical Recommendation",
      "estimator.durationLabel": "Estimated Timeline",
      "estimator.availLabel": "Availability",
      "estimator.availVal": "Within 48h",
      "estimator.stackLabel": "Recommended Architecture:",
      "estimator.delivLabel": "Included in every engagement:",
      "estimator.cta": "Send this configuration to Yassine",
      "exp.tag": "Career & Academic Track Record",
      "exp.title": "International Experience & Education",
      "exp.workTitle": "Professional Experience",
      "exp.eduTitle": "Education & Degrees",
      "skills.tag": "Technical Capabilities",
      "skills.title": "Complete Full Stack & AI Tech Stack",
      "contact.tag": "Ready to collaborate?",
      "contact.title": "Let's discuss your next project or freelance contract",
      "contact.desc": "Guaranteed response under 24h. Available for freelance contracts, long-term remote roles (USA, Canada, Europe, Morocco), or technical consulting.",
      "contact.formTitle": "Send a Quick Brief",
      "contact.sendEmail": "Send via Email",
      "contact.sendWa": "Send via WhatsApp"
    }
  };

  let currentLang = "fr";
  const langToggleBtn = document.getElementById("langToggle");
  const currentLangLabel = document.getElementById("currentLangLabel");

  function setLanguage(lang) {
    currentLang = lang;
    currentLangLabel.textContent = lang.toUpperCase();
    document.documentElement.lang = lang;
    const dict = i18n[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
    updateEstimator();
  }

  langToggleBtn?.addEventListener("click", () => {
    const nextLang = currentLang === "fr" ? "en" : "fr";
    setLanguage(nextLang);
    showToast(nextLang === "en" ? "Switched to English (Recruiter Mode)" : "Langue changée en Français");
  });

  // ---------- 2. DARK / LIGHT THEME TOGGLE ----------
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  themeToggle?.addEventListener("click", () => {
    const html = document.documentElement;
    const isLight = html.classList.toggle("light");
    html.classList.toggle("dark", !isLight);
    if (themeIcon) {
      themeIcon.setAttribute("data-lucide", isLight ? "moon" : "sun");
      if (window.lucide) lucide.createIcons();
    }
  });

  // ---------- 3. MOBILE MENU ----------
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  mobileMenuBtn?.addEventListener("click", () => {
    navLinks?.classList.toggle("open");
  });
  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  // ---------- 4. ONE-CLICK COPY EMAIL & TOAST ----------
  const toastEl = document.getElementById("toast");
  let toastTimer = null;

  function showToast(msg) {
    if (!toastEl) return;
    toastEl.textContent = msg;
    toastEl.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.hidden = true;
    }, 3200);
  }

  function copyEmail() {
    navigator.clipboard?.writeText("imparyassine@gmail.com");
    showToast(
      currentLang === "en"
        ? "Email imparyassine@gmail.com copied to clipboard!"
        : "Email imparyassine@gmail.com copié dans le presse-papiers !"
    );
  }

  document.getElementById("copyEmailTop")?.addEventListener("click", copyEmail);
  document.getElementById("copyEmailContact")?.addEventListener("click", copyEmail);

  // ---------- 5. TERMINAL PROFILE COMPATIBILITY TEST ----------
  document.getElementById("runProfileTest")?.addEventListener("click", () => {
    showToast(
      currentLang === "en"
        ? "✅ Match 99.4%: Full Stack + AI/ML + US/CA Remote Ready!"
        : "✅ Compatibilité 99.4% : Full Stack + IA/ML + Expérience Remote USA/Canada !"
    );
  });

  // ---------- 6. PROJECT FILTERING ----------
  const filterBtns = document.querySelectorAll("#projectFilters .filter-btn");
  const projectCards = document.querySelectorAll("#projectsGrid .project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      projectCards.forEach((card) => {
        const categories = card.getAttribute("data-category") || "";
        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // ---------- 7. INTERACTIVE FREELANCE PROJECT ESTIMATOR ----------
  const estTypeBtns = document.querySelectorAll("#estProjectType .est-opt");
  const estModeBtns = document.querySelectorAll("#estEngagement .est-pill");
  const estAddons = document.querySelectorAll("#estAddons input[type='checkbox']");
  const estResultTitle = document.getElementById("estResultTitle");
  const estDurationVal = document.getElementById("estDurationVal");
  const estStackOutput = document.getElementById("estStackOutput");

  const stackPresets = {
    fullstack: {
      titleFr: "Application Web Full Stack / SaaS",
      titleEn: "Full Stack Web Application / SaaS",
      baseStack: ["React / Next.js", "TypeScript", "Node.js / Django", "PostgreSQL"]
    },
    ai_llm: {
      titleFr: "Intégration IA & Agents LLM en Production",
      titleEn: "Production AI & LLM Agent Integration",
      baseStack: ["OpenAI / LLM API", "Python / FastAPI", "Next.js / React", "Vector / Pipeline"]
    },
    ml_cv: {
      titleFr: "Pipeline Machine Learning / Computer Vision",
      titleEn: "Machine Learning / Computer Vision Pipeline",
      baseStack: ["PyTorch / TensorFlow", "YOLOv8 / Scikit-Learn", "FastAPI REST", "Pandas"]
    },
    audit: {
      titleFr: "Renfort Senior, Audit Architecture & Debugging Prod",
      titleEn: "Senior Reinforcement, Architecture Audit & Prod Debugging",
      baseStack: ["Clean Architecture", "Root-Cause Analysis", "Performance Tuning", "Git / CI/CD"]
    }
  };

  let selectedType = "fullstack";
  let selectedBaseDays = 20;
  let selectedMode = "forfait";

  function updateEstimator() {
    let totalDays = selectedBaseDays;
    const preset = stackPresets[selectedType] || stackPresets.fullstack;
    const stackSet = new Set(preset.baseStack);

    estAddons.forEach((chk) => {
      if (chk.checked) {
        totalDays += parseInt(chk.getAttribute("data-days") || "0", 10);
        if (chk.value === "ai_agent") stackSet.add("LLM / Chatbot IA");
        if (chk.value === "api_db") stackSet.add("REST/GraphQL + JWT");
        if (chk.value === "cicd") stackSet.add("Docker + AWS/Vercel CI/CD");
        if (chk.value === "mlops") stackSet.add("MLflow + Drift Monitoring");
      }
    });

    if (estResultTitle) {
      estResultTitle.textContent = currentLang === "en" ? preset.titleEn : preset.titleFr;
    }

    if (estDurationVal) {
      if (selectedMode === "regie") {
        estDurationVal.textContent =
          currentLang === "en" ? "1 to 6+ Months (Flexible)" : "1 à 6+ Mois (Régie souple)";
      } else if (selectedMode === "parttime") {
        estDurationVal.textContent =
          currentLang === "en" ? "2–3 Days / Week" : "2 à 3 Jours / Semaine";
      } else {
        const minWeeks = Math.max(1, Math.round(totalDays / 6));
        const maxWeeks = minWeeks + 2;
        estDurationVal.textContent =
          currentLang === "en"
            ? `${minWeeks} to ${maxWeeks} weeks (~${totalDays} man-days)`
            : `${minWeeks} à ${maxWeeks} semaines (~${totalDays} j/h)`;
      }
    }

    if (estStackOutput) {
      estStackOutput.innerHTML = Array.from(stackSet)
        .map((s) => `<span>${s}</span>`)
        .join("");
    }
  }

  estTypeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      estTypeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedType = btn.getAttribute("data-type") || "fullstack";
      selectedBaseDays = parseInt(btn.getAttribute("data-base-days") || "15", 10);
      updateEstimator();
    });
  });

  estModeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      estModeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      selectedMode = btn.getAttribute("data-mode") || "forfait";
      updateEstimator();
    });
  });

  estAddons.forEach((chk) => {
    chk.addEventListener("change", updateEstimator);
  });

  // Service cards quick jump to estimator
  document.querySelectorAll("[data-service-select]").forEach((link) => {
    link.addEventListener("click", () => {
      const targetType = link.getAttribute("data-service-select");
      const matchingBtn = document.querySelector(`#estProjectType .est-opt[data-type="${targetType}"]`);
      if (matchingBtn) matchingBtn.click();
    });
  });

  // Apply estimator config into contact brief form
  document.getElementById("applyEstimateToContact")?.addEventListener("click", () => {
    const title = estResultTitle?.textContent || "";
    const duration = estDurationVal?.textContent || "";
    const stack = Array.from(estStackOutput?.querySelectorAll("span") || [])
      .map((s) => s.textContent)
      .join(", ");

    const msgArea = document.getElementById("clientMessage");
    if (msgArea) {
      msgArea.value =
        currentLang === "en"
          ? `Hi Yassine,\nWe are interested in: ${title}.\nEstimated timeline: ${duration}.\nRecommended Stack: ${stack}.\nLet's schedule a quick call to discuss!`
          : `Bonjour Yassine,\nNous sommes intéressés par une mission : ${title}.\nDurée estimée : ${duration}.\nStack : ${stack}.\nPouvez-vous nous partager vos disponibilités pour un échange ?`;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    showToast(
      currentLang === "en"
        ? "Configuration added to your message brief!"
        : "Configuration injectée dans le formulaire de contact !"
    );
  });

  updateEstimator();

  // ---------- 8. SMART CONTACT FORM (EMAIL & WHATSAPP) ----------
  const briefForm = document.getElementById("briefForm");
  const sendViaWhatsapp = document.getElementById("sendViaWhatsapp");

  function buildBriefText() {
    const name = document.getElementById("clientName")?.value || "Recruteur / Client";
    const email = document.getElementById("clientEmail")?.value || "";
    const mission = document.getElementById("missionType")?.value || "";
    const msg = document.getElementById("clientMessage")?.value || "";
    return {
      name,
      email,
      mission,
      fullText: `Bonjour Yassine,\n\nNom/Entreprise: ${name}\nEmail: ${email}\nType de mission: ${mission}\n\nDétails:\n${msg}`
    };
  }

  briefForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const { name, mission, fullText } = buildBriefText();
    const subject = encodeURIComponent(`[Portfolio Freelance] ${mission} — ${name}`);
    const body = encodeURIComponent(fullText);
    window.location.href = `mailto:imparyassine@gmail.com?subject=${subject}&body=${body}`;
    showToast("Ouverture de votre client Email...");
  });

  sendViaWhatsapp?.addEventListener("click", () => {
    const { fullText } = buildBriefText();
    const waUrl = `https://wa.me/212637248325?text=${encodeURIComponent(fullText)}`;
    window.open(waUrl, "_blank", "noopener");
  });

  // ---------- 9. FLOATING AI RECRUITER ASSISTANT ----------
  const aiToggleBtn = document.getElementById("aiToggleBtn");
  const aiCloseBtn = document.getElementById("aiCloseBtn");
  const aiWindow = document.getElementById("aiWindow");
  const aiMessages = document.getElementById("aiMessages");
  const aiForm = document.getElementById("aiForm");
  const aiInput = document.getElementById("aiInput");
  const aiQuickPrompts = document.querySelectorAll("#aiQuickPrompts button");

  function appendAiMessage(text, sender = "bot") {
    if (!aiMessages) return;
    const div = document.createElement("div");
    div.className = `ai-msg ${sender}`;
    div.innerHTML = text;
    aiMessages.appendChild(div);
    aiMessages.scrollTop = aiMessages.scrollHeight;
  }

  function getAiResponse(query) {
    const q = query.toLowerCase();
    if (q.includes("availability") || q.includes("disponib") || q.includes("remote") || q.includes("tarif")) {
      return "✅ <strong>Disponibilité :</strong> Yassine est disponible immédiatement pour des missions Freelance (Forfait ou Régie) et travaille à 100% en Remote avec les fuseaux horaires USA (EST), Canada, Europe (CET) et Maroc (basé à Casablanca, Permis B). Contact direct : <strong>imparyassine@gmail.com</strong> ou <strong>+212 637-248325</strong>.";
    }
    if (q.includes("ai_exp") || q.includes("ia") || q.includes("llm") || q.includes("ml") || q.includes("machine")) {
      return "🤖 <strong>Expertise IA & ML :</strong> Yassine intègre des LLM (OpenAI, chatbots intelligents, automatisation) dans des applications en production (chez Gloria USA et TGS Canada) et conçoit des modèles Deep Learning / Computer Vision (PyTorch, TensorFlow, YOLO/CNN, systèmes de recommandation Scikit-Learn) avec MLOps (MLflow, drift detection, FastAPI).";
    }
    if (q.includes("us_exp") || q.includes("usa") || q.includes("canada") || q.includes("gloria") || q.includes("tgs")) {
      return "🌎 <strong>Expérience Internationale :</strong><br>• <strong>Gloria (USA, 2023–2025)</strong> : Technical Expert Full Stack & IA à distance (architecture, intégration IA sans régression, résolution de bugs critiques en prod, synchronisation équipe US en anglais).<br>• <strong>TGS (Toronto, Canada, depuis 2021)</strong> : Full Stack & AI Freelance (apps web sur mesure, chatbots LLM, CI/CD cloud AWS/Vercel).";
    }
    if (q.includes("stack") || q.includes("react") || q.includes("python") || q.includes("node")) {
      return "💻 <strong>Stack Principale :</strong><br>• <strong>Front-End :</strong> React.js, Next.js, Vue.js, TypeScript, JS (ES6+)<br>• <strong>Back-End :</strong> Node.js/Express, Python/Django, FastAPI, Flask, GraphQL & REST<br>• <strong>DB & Cloud :</strong> PostgreSQL, MySQL, MongoDB, Firebase, Docker, AWS, Vercel, CI/CD.";
    }
    return "Merci pour votre question ! Yassine cumule <strong>+5 ans d'expérience</strong> en développement Full Stack (React, Next.js, Node, Django), ingénierie IA/ML (LLM, PyTorch, TensorFlow, YOLO) et formation supérieure. Voulez-vous lui envoyer un brief direct via WhatsApp (+212 637-248325) ou par email (imparyassine@gmail.com) ?";
  }

  aiToggleBtn?.addEventListener("click", () => {
    if (aiWindow) aiWindow.hidden = !aiWindow.hidden;
  });

  aiCloseBtn?.addEventListener("click", () => {
    if (aiWindow) aiWindow.hidden = true;
  });

  aiQuickPrompts.forEach((btn) => {
    btn.addEventListener("click", () => {
      const qKey = btn.getAttribute("data-q") || "";
      appendAiMessage(btn.textContent || "", "user");
      setTimeout(() => {
        appendAiMessage(getAiResponse(qKey), "bot");
      }, 250);
    });
  });

  aiForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = aiInput?.value.trim();
    if (!val) return;
    appendAiMessage(val, "user");
    aiInput.value = "";
    setTimeout(() => {
      appendAiMessage(getAiResponse(val), "bot");
    }, 300);
  });

  // ---------- 10. EXECUTIVE RESUME MODAL & PRINT ----------
  const resumeModal = document.getElementById("resumeModal");
  const openResumeModal = document.getElementById("openResumeModal");
  const openResumeFooter = document.getElementById("openResumeFooter");
  const closeResumeModal = document.getElementById("closeResumeModal");
  const printResumeBtn = document.getElementById("printResumeBtn");

  function toggleResume(show) {
    if (resumeModal) resumeModal.hidden = !show;
  }

  openResumeModal?.addEventListener("click", () => toggleResume(true));
  openResumeFooter?.addEventListener("click", () => toggleResume(true));
  closeResumeModal?.addEventListener("click", () => toggleResume(false));
  resumeModal?.addEventListener("click", (e) => {
    if (e.target === resumeModal) toggleResume(false);
  });
  printResumeBtn?.addEventListener("click", () => {
    window.print();
  });
});

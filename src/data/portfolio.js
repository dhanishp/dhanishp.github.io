export const portfolio = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Leadership", href: "#leadership" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "Data science recruiting portfolio",
    title: "I build machine learning and analytics systems that improve decisions, not just dashboards.",
    description:
      "Dhanish Parimalakumar is a UT Dallas data science student focused on applied machine learning, forecasting, and automation. His work spans production modeling, research forecasting, and reporting systems with clear business impact.",
    metrics: [
      { value: "19%", label: "approved-loan capture rate achieved at GoFi" },
      { value: "1.2M", label: "historical loan applications modeled" },
      { value: "$50M+", label: "expenses tracked in Verizon reporting automation" },
    ],
    primaryCta: {
      label: "Email me",
      href: "mailto:dhanishpari@gmail.com",
    },
    secondaryCta: {
      label: "See selected work",
      href: "#work",
    },
    quickFacts: [
      "B.S. Data Science with Honors, UT Dallas",
      "Graduating May 2026",
      "Seeking data science internships and new grad roles",
      "Based in Dallas, TX",
    ],
  },
  about: {
    image: "/profile-picture.jpeg",
    summary:
      "I’m a data science student interested in work where technical rigor has to hold up in real decisions. The projects I’m most proud of combine modeling, experimentation, and communication: improving loan capture, forecasting conflict fatalities, and redesigning reporting workflows so teams can move faster with more confidence.",
    details: [
      "I care about building models that can be explained, deployed, and trusted by the people using them.",
      "That means I think about feature quality, interpretability, and stakeholder adoption alongside raw model performance.",
    ],
  },
  education: {
    school: "The University of Texas at Dallas",
    degree: "B.S. Data Science with Honors",
    graduation: "May 2026",
    focus: "Data science recruiting",
  },
  featuredProjects: [
    {
      id: "gofi",
      role: "GoFi · Data Scientist Intern",
      title: "Loan Capture Modeling",
      summary:
        "Built and productionized an XGBoost classification workflow that identified substantially more approvable loans at scale.",
      outcome: "Raised approved-loan capture from 2.5% to 19% on 1.2M historical loan applications.",
      caseStudyIntro:
        "A production-facing classification project focused on finding more approvable loans while preserving rigor and stakeholder trust.",
      tags: ["Python", "XGBoost", "SHAP", "Azure DevOps", "CI/CD"],
      stats: [
        { label: "Baseline", value: "2.5%" },
        { label: "Improved capture", value: "19%" },
        { label: "Applications", value: "1.2M" },
      ],
      challenge:
        "GoFi needed a way to identify more approvable loans without sacrificing rigor, while aligning model inputs across business teams with different definitions of signal and risk.",
      approach: [
        "Designed and trained a binary classification model in Python using XGBoost.",
        "Led feature selection and interpretability analysis using correlation analysis, SHAP, mRMR, and RFE.",
        "Drove feature engineering across Sales, Dealer Relationship, Funding, Credit Policy, and Pricing teams.",
        "Built a production-ready ML pipeline with CI/CD automation and model interface APIs in GitHub and Azure DevOps.",
      ],
      impact: [
        "Improved approved-loan capture from 2.5% to 19% on historical evaluation.",
        "Evaluated performance on 1.2 million historical applications.",
        "Presented the model to the CEO, CFO, and executive stakeholders.",
        "Received the Exemplary Intern award.",
      ],
      whyItMatters:
        "This project shows end-to-end applied ML: model design, interpretability, deployment, and executive communication tied to a measurable business outcome.",
    },
    {
      id: "views",
      role: "VIEWS Lab · Assistant Researcher",
      title: "Conflict Fatality Forecasting",
      summary:
        "Developed country-level forecasting models for political conflict fatalities using a large spatio-temporal event dataset.",
      outcome: "Modeled 66,000+ event-level records and contributed findings later presented in Berlin.",
      caseStudyIntro:
        "A research forecasting project that combined statistical modeling with careful distributional analysis across a complex geopolitical dataset.",
      tags: ["R", "Forecasting", "Regression", "Spatio-temporal analysis"],
      stats: [
        { label: "Records analyzed", value: "66,000+" },
        { label: "Focus", value: "Africa" },
        { label: "Presented in", value: "Berlin" },
      ],
      challenge:
        "The research required careful distributional analysis and forecasting logic that could support country-level conflict estimation across varied conditions in Africa.",
      approach: [
        "Developed regression-based forecasting models in R to predict political conflict fatalities.",
        "Worked with more than 66,000 event-level records across African countries.",
        "Conducted distributional analysis to support country-level spatio-temporal forecasting.",
      ],
      impact: [
        "Contributed findings presented in Berlin.",
        "Supported research sponsored by the German Ministry for Foreign Affairs.",
      ],
      whyItMatters:
        "This work highlights statistical reasoning, research communication, and the ability to model messy real-world data in a high-stakes domain.",
    },
    {
      id: "verizon",
      role: "Verizon · Network Engineering Intern",
      title: "Reporting Automation & API Architecture",
      summary:
        "Turned a manual reporting workflow into an automation system and proposed the API architecture to scale it.",
      outcome: "Automated reporting around $50M+ in expenses and saved 80+ hours annually.",
      caseStudyIntro:
        "An operations-focused project that improved reporting speed and reliability while creating a path toward scalable server-side automation.",
      tags: ["Python", "Automation", "Reporting", "API design"],
      stats: [
        { label: "Expenses tracked", value: "$50M+" },
        { label: "Time saved", value: "80+ hrs" },
        { label: "Focus", value: "Automation" },
      ],
      challenge:
        "The team relied on manual reporting processes that consumed time, made updates harder to trust, and slowed how quickly leadership could work with the data.",
      approach: [
        "Built an expenditure-reporting tool tracking more than $50 million in expenses.",
        "Identified the operational bottlenecks in the existing workflow.",
        "Proposed a Python-based, API-driven architecture for autonomous server-side reporting.",
        "Presented the redesign to senior leadership while participating in broader business strategy discussions.",
      ],
      impact: [
        "Saved 80+ hours annually through reporting automation.",
        "Created a clearer path to server-side autonomy for recurring reporting tasks.",
      ],
      whyItMatters:
        "This project shows product thinking in a data context: identifying workflow pain, automating the right layer, and designing for scale instead of one-off reporting.",
    },
  ],
  secondaryProjects: [
    {
      title: "Bitcoin Price Prediction using LSTM",
      summary:
        "Implemented an LSTM from scratch in NumPy, including manual gate computations and gradient updates for 30-day OHLCV forecasting.",
      tags: ["NumPy", "LSTM", "Time series"],
    },
    {
      title: "Agentic AI Whiteboarding & Product Management Tool",
      summary:
        "Co-built a product management platform that turns sketches and text prompts into structured technical plans using NVIDIA Nemotron through the NIM API.",
      tags: ["Next.js", "TypeScript", "Supabase", "NVIDIA NIM"],
    },
    {
      title: "Automated Mortgage Lending Application",
      summary:
        "Built a lending workflow experience with Vue.js, Chart.js analytics, a Python backend, and a chatbot for lending terminology guidance.",
      tags: ["Vue.js", "Chart.js", "Python"],
    },
  ],
  experience: [
    {
      company: "GoFi",
      title: "Data Scientist Intern",
      period: "2025",
      points: [
        "Built a production-ready XGBoost model and deployment pipeline for loan capture modeling.",
        "Improved approved-loan capture from 2.5% to 19% across 1.2M historical applications.",
        "Drove feature engineering across business teams and presented findings directly to executive leadership.",
      ],
    },
    {
      company: "VIEWS Lab, UT Dallas",
      title: "Assistant Researcher",
      period: "2023–Present",
      points: [
        "Developed regression-based forecasting models in R for political conflict fatality prediction.",
        "Analyzed 66,000+ event-level records for country-level spatio-temporal forecasting.",
        "Contributed research later presented internationally in Berlin.",
      ],
    },
    {
      company: "Verizon",
      title: "Network Engineering Intern",
      period: "2024",
      points: [
        "Automated expenditure reporting tied to $50M+ in tracked expenses.",
        "Saved 80+ hours annually and proposed a Python API architecture for autonomous reporting workflows.",
        "Presented process improvements and strategic recommendations to leadership.",
      ],
    },
  ],
  leadership: [
    {
      organization: "Model United Nations",
      role: "Vice President of Behavior and Strategy",
      summary:
        "Developed public speaking and policy-writing curriculum, led weekly practices, and helped delegations earn awards across multiple conferences.",
    },
    {
      organization: "Data Science Club",
      role: "Vice President",
      summary:
        "Led undergraduate recruitment and helped organize guest speakers along with practical Python and SQL workshops.",
    },
  ],
  awards: ["National Merit Scholar", "Eagle Scout"],
  skillGroups: [
    {
      title: "Languages",
      items: ["Python", "SQL", "R", "C++", "Java", "JavaScript"],
    },
    {
      title: "Machine Learning & Analytics",
      items: ["NumPy", "Pandas", "scikit-learn", "TensorFlow", "Jupyter Notebook"],
    },
    {
      title: "Data & Workflow Tools",
      items: ["Snowflake", "Git", "Azure DevOps", "Bash", "UNIX"],
    },
  ],
  contact: {
    email: "dhanishpari@gmail.com",
    phone: "469-380-4464",
    location: "Dallas, TX",
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/dhanishp",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dhanish-parimalakumar-0b280527a/",
    },
  ],
};

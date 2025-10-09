export type Service = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  approachHighlights: {
    title: string;
    description: string;
  }[];
  features: string[];
  deliverables: string[];
  timeline: string;
  startingPrice: string;
  category: "vitrine" | "ecommerce" | "sur-mesure" | "maintenance";
  ctaLabel: string;
};

export const services: Service[] = [
  {
    slug: "site-vitrine",
    name: "Site vitrine clé en main",
    tagline: "Présentez votre activité avec une image professionnelle",
    summary:
      "Un site élégant en quelques semaines pour présenter vos services, attirer des prospects.",
    description:
      "Un site à votre image chaque vitrine est conçue sur mesure pour raconter votre histoire, renforcer votre crédibilité et séduire vos futurs clients.",
    approachHighlights: [
      {
        title: "Un parcours utilisateur calibré",
        description:
          "Nous structurons vos pages pour guider vos visiteurs vers l'action tout en valorisant vos points forts.",
      },
      {
        title: "Un accompagnement éditorial",
        description:
          "Nous vous aidons à trouver les bons mots pour incarner votre positionnement et rassurer vos prospects.",
      },
      {
        title: "Un déploiement express",
        description:
          "Nous livrons un site clé en main, optimisé techniquement et prêt à évoluer selon vos besoins.",
      },
    ],
    features: [
      "Design personnalisé aligné à votre identité",
      "Rédaction ou optimisation de vos contenus",
      "Référencement naturel optimisé (SEO)",
      "Intégration des outils analytics",
    ],
    deliverables: [
      "Maquettes interactives",
      "Développement Next.js / React",
      "Formation à la prise en main",
    ],
    timeline: "2 à 3 semaines",
    startingPrice: "À partir de 700 €",
    category: "vitrine",
    ctaLabel: "Demander un devis",
  },
  {
    slug: "site-ecommerce",
    name: "Boutique e-commerce",
    tagline: "Vendez en ligne sans friction",
    summary:
      "Une boutique performante, sécurisée et adaptée à votre stratégie de vente en ligne.",
    description:
      "Nous créons des sites e-commerce rapides et évolutifs, pensés pour optimiser votre catalogue, fluidifier l’expérience client pour générer plus de ventes",
    approachHighlights: [
      {
        title: "Des tunnels d'achat optimisés",
        description:
          "Chaque étape est mesurée et ajustée pour maximiser vos ventes et diminuer les abandons de panier.",
      },
      {
        title: "Un back-office intuitif",
        description:
          "Votre équipe gère facilement le catalogue, les stocks et les promotions depuis une interface claire.",
      },
      {
        title: "Une logistique connectée",
        description:
          "Nous intégrons vos outils de paiement, d'expédition et de facturation pour automatiser vos opérations.",
      },
    ],
    features: [
      "Gestion de catalogue avancée",
      "Ajout de modes de paiement sécurisés (Stripe, PayPal, etc.)",
      "Automation email",
      "Monitoring des performances en temps réel",
    ],
    deliverables: [
      "Architecture technique scalable",
      "Interface admin intuitive",
      "Optimisation SEO & Core Web Vitals",
      "Support au lancement",
    ],
    timeline: "6 à 8 semaines",
    startingPrice: "Sur devis",
    category: "ecommerce",
    ctaLabel: "Construire ma boutique",
  },
  {
    slug: "site-sur-mesure",
    name: "Expérience digitale sur-mesure",
    tagline: "Développez un produit unique qui reflète votre vision",
    summary:
      "Des interfaces et parcours personnalisés pour répondre à des besoins/métiers spécifiques.",
    description:
      "Nous vous accompagnons de la stratégie digitale jusqu'au développement technique complet d'une application ou d'un site complexe ",
    approachHighlights: [
      {
        title: "Cadrage produit approfondi",
        description:
          "Nous définissons ensemble vos objectifs, vos personas et les indicateurs qui mesureront la réussite du projet.",
      },
      {
        title: "Itérations pilotées par la valeur",
        description:
          "Chaque sprint livre une fonctionnalité testable afin de confronter rapidement vos idées au terrain.",
      },
      {
        title: "Architecture évolutive",
        description:
          "Nous concevons un socle technique robuste, prêt à intégrer vos futurs services et à supporter la montée en charge.",
      },
    ],
    features: [
      "Co-conception UX/UI",
      "Intégration d'API tierces",
      "Tests utilisateurs et itérations",
      "Plan de montée en charge",
    ],
    deliverables: [
      "Audit & cadrage",
      "Prototype interactif",
      "Développement multi-device",
      "Plan de maintenance évolutive",
    ],
    timeline: "Sur devis",
    startingPrice: "Sur mesure",
    category: "sur-mesure",
    ctaLabel: "Parler à un expert",
  },
  {
    slug: "maintenance-evolution",
    name: "Maintenance & optimisation",
    tagline: "Gardez un site rapide, sécurisé et à jour",
    summary:
      "Nous surveillons vos performances, corrigeons les bugs et faisons évoluer vos fonctionnalités en continu.",
    description:
      "Des forfaits flexibles pour assurer la fiabilité de votre site ou application Next.js, avec des indicateurs de performance suivis chaque mois.",
    approachHighlights: [
      {
        title: "Un suivi proactif",
        description:
          "Nous détectons les anomalies de performance et de sécurité avant qu'elles n'impactent vos utilisateurs.",
      },
      {
        title: "Des priorités partagées",
        description:
          "Chaque mois nous passons en revue vos objectifs business pour planifier les optimisations qui comptent.",
      },
      {
        title: "Une équipe à la demande",
        description:
          "Vous disposez d'un point d'entrée unique pour vos questions, vos évolutions et vos urgences.",
      },
    ],
    features: [
      "Surveillance uptime & sécurité",
      "Optimisation continue du SEO",
      "Mises à jour framework & dépendances",
      "Améliorations UX et AB testing",
    ],
    deliverables: [
      "Rapport mensuel détaillé",
      "Plan d'actions priorisé",
      "Support réactif",
      "Heures d'évolution incluses",
    ],
    timeline: "Contrat mensuel",
    startingPrice: "À partir de 80 €/mois",
    category: "maintenance",
    ctaLabel: "Choisir un forfait",
  },
];

export const serviceSlugs = services.map((service) => service.slug);

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

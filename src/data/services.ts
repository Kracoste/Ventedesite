export type Service = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
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
      "Un site élégant en quelques semaines pour présenter vos services, attirer des prospects et gagner en crédibilité.",
    description:
      "Nous concevons un site vitrine moderne, responsive et orienté conversion. L'objectif est de mettre en avant votre offre, rassurer vos visiteurs et générer des prises de contact.",
    features: [
      "Design personnalisé aligné à votre identité",
      "Rédaction ou optimisation de vos contenus",
      "Référencement naturel optimisé (SEO)",
      "Intégration des outils analytics et collecte de leads",
    ],
    deliverables: [
      "Maquettes interactives",
      "Développement Next.js / React",
      "Intégration CMS (si nécessaire)",
      "Formation à la prise en main",
    ],
    timeline: "3 à 4 semaines",
    startingPrice: "À partir de 700 €",
    category: "vitrine",
    ctaLabel: "Demander un devis vitrine",
  },
  {
    slug: "site-ecommerce",
    name: "Boutique e-commerce",
    tagline: "Vendez en ligne sans friction",
    summary:
      "Une boutique performante, sécurisée et adaptée à votre stratégie de vente en ligne.",
    description:
      "Nous créons des sites e-commerce rapides et évolutifs, pensés pour optimiser votre catalogue, fluidifier le tunnel d'achat et augmenter votre panier moyen.",
    features: [
      "Gestion de catalogue avancée",
      "Paiements sécurisés (Stripe, PayPal, etc.)",
      "Automation email & marketing",
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
      "Des interfaces et parcours personnalisés pour répondre à des besoins métiers spécifiques.",
    description:
      "Nous vous accompagnons de la stratégie digitale jusqu'au développement technique complet d'une application ou d'un site complexe basés sur Next.js.",
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

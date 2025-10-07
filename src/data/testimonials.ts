export type Testimonial = {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  highlight?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "atelier-elan",
    author: "Camille Dupont",
    role: "Fondatrice",
    company: "Atelier Élan",
    quote:
      "Une équipe à l'écoute qui a su traduire notre univers en un site élégant et performant. Les prospects arrivent maintenant par le web !",
    highlight: "+42 % de demandes de devis",
  },
  {
    id: "lune-boutique",
    author: "Inès Martin",
    role: "Head of Ecommerce",
    company: "Lune Boutique",
    quote:
      "L'accompagnement a été complet : design, technique, tracking. Nous avons pu lancer la boutique en un temps record.",
  },
  {
    id: "helios-platform",
    author: "Louis Bernard",
    role: "CTO",
    company: "Helios",
    quote:
      "Les dashboards sur-mesure développés avec Next.js répondent parfaitement à nos besoins métiers. Le suivi post-lancement est précieux.",
  },
];

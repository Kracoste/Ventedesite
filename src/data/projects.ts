export type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  url?: string;
  category: "vitrine" | "ecommerce" | "sur-mesure";
  results: string[];
  technologies: string[];
};

export const projectCategories: { value: Project["category"]; label: string }[] = [
  { value: "sur-mesure", label: "Projets sur-mesure" },
];

export const projects: Project[] = [
  {
    id: "lantunes",
    name: "L'Antunes",
    description:
      "Site sur mesure pour le restaurant L'Antunes : menus dynamiques, storytelling du chef et parcours de réservation optimisé.",
    image: "/images/projects/lantunes-site.png",
    url: "https://www.lantunes.fr",
    category: "sur-mesure",
    results: [
      "Réservations en ligne doublées en 2 mois",
      "Performance Lighthouse 92/100",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Headless CMS"],
  },
];

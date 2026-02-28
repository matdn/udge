export type Mesure = {
  number: number;
  slug: string;
  title: string;
  summary: string;
  des2026: string;
  details: string[];
  avecQui?: string[];
};

// 12 mesures « lecture rapide » cohérentes avec le programme déjà intégré.
export const mesures: Mesure[] = [
  {
    number: 1,
    slug: "assemblee-citoyenne-locale",
    title: "Création d’une Assemblée citoyenne locale",
    summary:
      "Redonner du pouvoir aux habitantes et habitants grâce à une instance tirée au sort, représentative et opérationnelle.",
    des2026:
      "Installation de l’Assemblée et lancement des premiers dossiers (marché, école, plan climat…).",
    details: [
      "30 habitants tirés au sort, représentatifs des quartiers et des âges.",
      "Mandat de 12 mois, renouvelé par moitié, avec indemnisation et remboursement des frais (garde d’enfants…).",
      "Pouvoirs : budget participatif, droit d’initiative, droit de regard et d’audit sur les grands projets.",
    ],
  },
  {
    number: 2,
    slug: "urgence-creches-ecoles",
    title: "Plan d’urgence crèches et écoles",
    summary:
      "Mieux anticiper l’arrivée de nouvelles familles et améliorer concrètement le quotidien des enfants.",
    des2026:
      "Lancement d’un plan petite enfance et d’une politique d’amélioration continue de la vie scolaire.",
    details: [
      "Augmenter les places en crèches municipales ou créer une nouvelle crèche municipale.",
      "Guichet unique petite enfance (physique et numérique) et RAM de proximité.",
      "Activités périscolaires, temps méridien de qualité, cours d’école sécurisées et végétalisées.",
      "Dispositif de lutte contre le harcèlement : écoute, signalement, formation.",
    ],
  },
  {
    number: 3,
    slug: "tarification-sociale-progressive",
    title: "Tarification sociale progressive",
    summary:
      "Garantir un accès plus juste aux services municipaux, en fonction du quotient familial.",
    des2026: "Refonte des grilles tarifaires avec un quotient familial plus progressif.",
    details: [
      "Tarification progressive pour les services municipaux, fondée sur le quotient familial.",
      "Révision de la tarification sociale des crèches municipales.",
      "Cours gratuits pour lutter contre la fracture numérique.",
    ],
  },
  {
    number: 4,
    slug: "menus-vegetariens",
    title: "Deux menus végétariens hebdomadaires",
    summary:
      "Une alimentation plus saine et locale : agir pour la santé, l’environnement et le pouvoir d’achat.",
    des2026:
      "Déploiement de deux menus végétariens par semaine et d’options végétariennes quotidiennes.",
    details: [
      "Introduire deux menus végétariens hebdomadaires et des options végétariennes quotidiennes.",
      "Former et accompagner le personnel de cuisine à la cuisine végétale.",
      "Monter progressivement vers une restauration scolaire 100 % bio et locale.",
    ],
  },
  {
    number: 5,
    slug: "tiers-lieu-culturel",
    title: "Création d’un tiers-lieu culturel et convivial",
    summary:
      "Créer un lieu de rencontre, de culture et d’engagement au cœur de la ville.",
    des2026:
      "Lancement du projet (place du marché) avec programmation associative et citoyenne.",
    details: [
      "Café-librairie associatif.",
      "Scène ouverte et espace modulable.",
      "Espace d’exposition pour artistes locaux.",
      "Atelier de réparation (vélos/objets) et espace de vente test.",
    ],
  },
  {
    number: 6,
    slug: "multisports-libre-acces",
    title: "Nouvel espace multisports en accès libre",
    summary:
      "Développer des équipements sportifs gratuits, en libre accès, inclusifs et sécurisés.",
    des2026: "Premiers aménagements sportifs en libre accès.",
    details: [
      "Équipements sportifs en libre accès (basket, skate park…).",
      "Occupation inclusive et mixte.",
      "Présence de terrain pour un cadre apaisé.",
    ],
  },
  {
    number: 7,
    slug: "soutien-commercants",
    title: "Soutien renforcé aux commerçants",
    summary:
      "Soutenir le commerce et l’artisanat locaux, pour une ville plus vivante au quotidien.",
    des2026:
      "Charte « Consommer local » + outils de concertation et accompagnement aux implantations.",
    details: [
      "Charte municipale « Consommer local ».",
      "Locaux commerciaux municipaux comme levier, avec loyers modérés.",
      "Accompagnement administratif et financier pour l’implantation.",
    ],
  },
  {
    number: 8,
    slug: "amap-municipale",
    title: "Mise en place d’une AMAP municipale",
    summary:
      "Accès équitable à une alimentation saine : paniers bio locaux avec tarifs adaptés aux revenus.",
    des2026: "Local municipal + lancement des partenariats producteurs.",
    details: [
      "Mise à disposition d’un local pour la distribution.",
      "Partenariats avec des producteurs des Yvelines.",
      "Tarifs adaptés aux revenus.",
    ],
  },
  {
    number: 9,
    slug: "mobilites-douces",
    title: "Plan mobilités douces ambitieux",
    summary:
      "Un réseau cyclable sécurisé et des rues plus sûres, notamment autour des écoles.",
    des2026: "Lancement du plan vélo et sécurisation des abords d’écoles.",
    details: [
      "Réseau cyclable sécurisé (axe Princesse - centre-ville – collège).",
      "Zones sécurisées aux abords des écoles (rues scolaires, circulation limitée).",
      "Révision du réseau de bus sous 6 mois sur recommandation citoyenne.",
    ],
  },
  {
    number: 10,
    slug: "renovation-energetique",
    title: "Rénovation énergétique des bâtiments municipaux",
    summary:
      "Réduire les émissions et les dépenses, améliorer le confort des équipements publics.",
    des2026: "Lancement du plan de rénovation énergétique (priorisation, premiers chantiers).",
    details: [
      "Isolation et rénovation énergétique des bâtiments communaux.",
      "Remplacement des chauffages fioul/gaz et solutions décarbonées.",
      "Recherche de subventions (État, Région, UE…).",
    ],
  },
  {
    number: 11,
    slug: "guichet-aide-administrative",
    title: "Guichet municipal d’accueil et d’aide administrative",
    summary:
      "Un service municipal gratuit, accessible et bienveillant pour l’accès aux droits.",
    des2026: "Création du guichet unique municipal d’aide administrative et sociale.",
    details: [
      "Aide administrative et sociale.",
      "Point d’accueil et d’écoute pour les jeunes.",
      "Actions contre l’isolement et la fracture numérique.",
    ],
  },
  {
    number: 12,
    slug: "police-municipale-mediation",
    title: "Police municipale + équipe de médiation",
    summary:
      "Une sécurité humaine : présence de terrain, prévention, médiation et cohésion sociale.",
    des2026:
      "Renforcement de la présence de terrain et mise en place d’une équipe de médiateurs de tranquillité publique.",
    details: [
      "Renforcement significatif de la police municipale (présence visible et pédestre).",
      "Création d’une petite équipe de médiateurs de tranquillité publique.",
      "Plan Lumière Communal : éclairage intelligent, réduction des nuisances lumineuses, protection du vivant.",
    ],
  },
];
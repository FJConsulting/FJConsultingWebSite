// packsData.js

export const pains = [
  [
    "Saisies manuelles interminables",
    "Tableaux connectés qui remplissent les champs pour vous",
  ],
  ["Données éparpillées", "Vues centralisées et filtres par équipe"],
  [
    "Suivi de projets flou",
    "Tableaux de bord en temps réel avec indicateurs clairs",
  ],
  [
    "« Copier-coller » à gogo",
    "Robots qui déplacent les infos automatiquement",
  ],
  ["Oublis de relance clients", "Rappels programmés et messages automatiques"],
  [
    "Rapports faits à la main",
    "Emails et PDF générés tout seuls chaque semaine",
  ],
];

export const examples = [
  [
    "Création d’un dossier client",
    "Processus “one-click” – tout est généré et relié",
    "≈ 15 min/dossier → 10 h/mois",
  ],
  [
    "Relances clients devis expirés",
    "Règles + messages automatiques",
    "≈ 4 h/semaine",
  ],
  [
    "Reporting hebdo KPI",
    "Dashboard live + email automatique",
    "≈ 3 h/semaine",
  ],
  [
    "Archivage dossiers terminés",
    "Tag “Terminé” ➜ auto-archivage",
    "≈ 30 min/semaine",
  ],
  [
    "Export comptable mensuel",
    "Excel généré & envoyé à la comptable",
    "≈ 5 h/mois",
  ],
];

export const exampleImages = [
  "/popup-creation-dossier.png",
  "/popup-relances-clients.png",
  "/popup-reporting-kpi.png",
  "/popup-archivage-dossier.png",
  "/popup-export-compta.png",
];

export const exampleTitles = [
  "Création d’un dossier client",
  "Relances clients devis expirés",
  "Reporting hebdo KPI",
  "Archivage dossiers terminés",
  "Export comptable mensuel",
];

export const exampleDescriptions = [
  "Lorsqu’un nouveau dossier est créé, tout le processus est automatisé : génération des documents, création de l’espace de stockage, attribution des identifiants, et envoi des emails associés. L’utilisateur saisit simplement les informations essentielles ; tout le reste est instantanément orchestré en back office, sans tâches manuelles répétitives.",
  "Un système de suivi surveille les devis arrivés à expiration. Les clients concernés reçoivent automatiquement des relances personnalisées par email ou message, et toutes les actions sont tracées dans le suivi commercial. Les oublis de relance sont impossibles : tout est géré de façon fluide et autonome.",
  "Les indicateurs clés de performance sont actualisés en temps réel et compilés chaque semaine dans un rapport automatique. Ce reporting détaillé est envoyé par email, accessible à tout moment, sans aucune intervention manuelle. La visibilité sur l’activité et les résultats devient immédiate.",
  "Dès qu’un dossier est finalisé, il passe automatiquement en archive : les documents sont déplacés dans un espace dédié, le suivi est mis à jour, et une confirmation est envoyée. Cela élimine tout risque de perte d’information ou de dossiers non traités, et garantit un classement optimal.",
  "En fin de mois, un export de toutes les données comptables est généré d’un simple clic : factures, paiements, et mouvements sont rassemblés dans un fichier prêt à transmettre à la comptabilité. Plus besoin de compilation fastidieuse ou de ressaisies : l’ensemble du process est centralisé et fiabilisé.",
];

export const packs = [
  {
    title: "Starter",
    desc: "1 base, 3 automatisations, 2 h de formation",
    price: "1 500 €",
    featured: false,
  },
  {
    title: "Power",
    desc: "3 bases, 10 automatisations, tableau de bord, ½ journée workshop",
    price: "3 500 €",
    featured: false,
  },
  {
    title: "Full Automation",
    desc: "Bases illimitées, scénarios complexes, IA, support mensuel",
    price: "Sur devis",
    featured: true,
  },
];

export const steps = [
  { number: "1", title: "Appel découverte", duration: "1 h" },
  { number: "2", title: "Proposition", duration: "en moins d’une semaine" },
  { number: "3", title: "Go-live", duration: "2 à 6 semaines" },
];

export const fullPacks = [
  {
    title: "Starter",
    price: "1 500 €",
    desc: "Pour digitaliser un process ou une équipe sans complexité.",
    inclus: [
      "1 base (gestion clients, tâches, ou projet simple)",
      "Jusqu’à 3 automatisations (ex : génération de documents, notifications email, rappels automatiques, exports de données)",
      "Personnalisation de l’interface pour un usage intuitif",
      "2 utilisateurs inclus",
      "2 heures de formation personnalisée en visio",
      "Assistance à la prise en main",
    ],
    exclus: [
      "Workflows multi-équipe ou multi-base",
      "Automatisations avancées ou sur plusieurs outils",
      "Tableaux de bord personnalisés",
      "Support continu (hors option maintenance)",
    ],
  },
  {
    title: "Power",
    price: "3 500 €",
    desc: "Pour les PME ou structures avec plusieurs équipes/process à connecter.",
    inclus: [
      "3 bases (ex : ventes, production, RH, ou multi-équipes)",
      "Jusqu’à 10 automatisations (ex : synchronisation de données entre bases, alertes multi-canal, relances, exports avancés)",
      "Dashboard centralisé avec indicateurs personnalisés",
      "½ journée de workshop",
      "Assistance à la prise en main",
    ],
    exclus: [
      "Développements spécifiques complexes (API sur mesure, intégrations hors du scope standard)",
      "Bases supplémentaires",
      "Support mensuel (hors option maintenance)",
    ],
  },
  {
    title: "Full Automation",
    price: "Sur devis",
    desc: "Pour ceux qui veulent le mode pilotage automatique… avec IA et évolutivité maximale.",
    inclus: [
      "Bases illimitées (tous vos process centralisés)",
      "Automatisations complexes (cross-outils, intelligence artificielle, API personnalisées, génération automatique de rapports, gestion multi-sites ou multi-marques)",
      "Accompagnement de la digitalisation A à Z",
      "Support mensuel réactif",
      "Évolutions incluses selon les besoins",
    ],
    exclus: [
      "Développements propriétaires très spécifiques hors périmètre",
      "Prestations hors cadre (création de contenus, marketing, etc.)",
    ],
  },
];

export const maintenancePacks = [
  {
    title: "Maintenance Essentielle",
    price: "300 € / mois",
    desc: "Gardez votre solution à jour : corrections, petits ajustements, évolutions mineures. Pratique pour rester flexible et réactif.",
    inclus: [
      "Corrections de bugs mineurs",
      "Modification de champs, labels, filtres ou vues",
      "Ajustements d’interface, de présentation ou d’exports",
      "2 interventions incluses chaque mois",
      "Assistance email dédiée",
    ],
    exclus: [
      "Création de nouveaux modules/process",
      "Évolutions majeures (nouvelles automatisations, changements structurels importants)",
      "Support week-end & urgence",
    ],
  },
  {
    title: "Pack Évolution Majeure",
    price: "450 € (ponctuel)",
    desc: "Un projet d’évolution ? Ajoutez une grosse fonctionnalité ou faites évoluer votre process avec un seul achat.",
    inclus: [
      "Étude de l’existant et des besoins",
      "Développement d’une nouvelle automatisation ou vue avancée",
      "Livraison clé en main",
      "Test, correction et documentation rapide",
    ],
    exclus: [
      "Projets nécessitant plusieurs interventions successives",
      "Refonte globale d’une base complète",
      "Intervention sur plusieurs entités/sites à la fois",
    ],
  },
];

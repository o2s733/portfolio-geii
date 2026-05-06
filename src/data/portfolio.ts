import {
  Cpu,
  Gauge,
  RadioTower,
  Thermometer,
  Zap,
  PenTool,
  SearchCheck,
  Bolt,
  Code2,
  Cog,
  Layers,
} from "lucide-react";

export const profile = {
  firstName: "Oussama",
  lastName: "El Messaoudi",
  intro:
    "Étudiant en première année de BUT GEII à l'IUT de Troyes. Je recherche un stage en électronique et systèmes embarqués à partir de janvier 2027.",
  contact: {
    email: "elmessaoudi.oussama212@gmail.com",
    phone: "07 49 40 30 78",
    location: "Troyes (Aube), Grand Est",
    linkedin: "https://www.linkedin.com/in/oussama-el-messaoudi-a301b132b/",
  },
};

export const skillBlocks = [
  {
    title: "Électronique & Énergie",
    icon: Bolt,
    items: [
      "Mesures électriques (oscilloscope, multimètre)",
      "Circuits électroniques analogiques et numériques",
      "Notions en électrotechnique",
      "Conception de PCB et soudure",
    ],
  },
  {
    title: "Programmation",
    icon: Code2,
    items: ["Langages C++ et Arduino", "Algorithmique"],
  },
  {
    title: "Automatisme",
    icon: Cog,
    items: [
      "Logique combinatoire et séquentielle",
      "Automates programmables (M340, M221)",
      "Langage automate (Unity Pro, Twido, EcoStruxure)",
    ],
  },
  {
    title: "CAO & Simulation",
    icon: Layers,
    items: ["KiCad", "Simulide", "LtSpice"],
  },
];

export const ues = [
  {
    code: "",
    title: "Concevoir",
    icon: PenTool,
    items: [
      {
        code: "AC11.01",
        label: "Produire une analyse fonctionnelle d'un système simple",
      },
      {
        code: "AC11.02",
        label:
          "Réaliser un prototype pour des solutions techniques matériel et/ou logiciel",
      },
      {
        code: "AC11.03",
        label:
          "Rédiger un dossier de fabrication à partir d'un dossier de conception",
      },
    ],
  },
  {
    code: "",
    title: "Vérifier",
    icon: SearchCheck,
    items: [
      { code: "AC12.01", label: "Appliquer une procédure d'essais" },
      { code: "AC12.02", label: "Identifier un dysfonctionnement" },
      { code: "AC12.03", label: "Décrire un dysfonctionnement" },
    ],
  },
];

export const projects = [
  {
    slug: "shield-nano",
    title: "Conception du shield NANO",
    label: "SAE",
    icon: Cpu,
    summary:
      "Carte d'extension pour Arduino Nano facilitant les connexions et le prototypage.",
    skills: ["AC11.02", "AC12.01"],
    route: "/projects/shield-nano" as const,
  },
  {
    slug: "multimetre",
    title: "Conception du multimètre",
    label: "SAE",
    icon: Gauge,
    summary:
      "Appareil de mesure : conditionnement du signal, acquisition et affichage.",
    skills: ["AC11.02", "AC12.01"],
    route: "/projects/multimetre" as const,
  },
  {
    slug: "regulation-temperature",
    title: "Régulation de température",
    label: "SAE",
    icon: Thermometer,
    summary:
      "Boucle de régulation pour maintenir une température autour d'une consigne.",
    skills: ["AC11.01", "AC11.02", "AC11.03", "AC12.01"],
    route: "/projects/regulation-temperature" as const,
  },
];

export const projectDetails = {
  "shield-nano": {
    title: "Conception du shield NANO",
    subtitle: "Carte d'extension pour Arduino Nano.",
    icon: Cpu,
    context:
      "Dans le cadre des travaux pratiques d'informatique, nous avons réalisé un shield Arduino Nano. Ce shield regroupe plusieurs composants (LEDs, boutons-poussoirs, potentiomètre, CTN) sur une carte PCB, facilitant le prototypage et les connexions.",
    challenge:
      "Souder des composants CMS et traversants sur un PCB, vérifier l'intégrité des soudures, puis tester chaque composant par programmation.",
    method: [
      "Mise en place des composants CMS sur le PCB, passage au four à refusion pour une soudure homogène.",
      "Soudure manuelle des composants traversants (connecteurs, boutons, CTN, potentiomètre).",
      "Vérification des soudures avec le professeur pour valider la qualité et la propreté.",
      "Téléversement de programmes de test pour valider le bon fonctionnement de chaque composant.",
    ],
    recruiterValue:
      "Maîtrise des techniques de soudure CMS et traversante, lecture de schémas de câblage, et validation fonctionnelle par programmation Arduino.",
    tools: ["Arduino Nano", "Four à refusion", "Fer à souder"],
    highlights: ["Soudure CMS", "Tests fonctionnels", "PCB"],
    skills: ["AC11.02", "AC12.01"],
    images: [
      "https://samycalist-boop.github.io/portfolio/images/sae_shield_1.jpg",
      "https://samycalist-boop.github.io/portfolio/images/sae_shield_2.jpg",
    ],
  },
  multimetre: {
    title: "Conception du multimètre",
    subtitle: "Chaîne de mesure d'une grandeur électrique.",
    icon: RadioTower,
    context:
      "Conception complète d'un multimètre numérique sur carte PCB : étude théorique, routage sur KiCad, soudure et programmation d'un Arduino Nano avec multiplexage d'afficheur 4 digits.",
    challenge:
      "Concevoir un appareil de mesure fonctionnel (voltmètre, ampèremètre, ohmmètre) avec calibrage automatique, en gérant le conditionnement du signal et le multiplexage de l'affichage.",
    method: [
      "Première journée : étude théorique, calculs et choix des composants.",
      "Conception du PCB et design des pistes sur KiCad.",
      "Soudure des composants, puis tests pour vérifier l'intégrité des soudures.",
      "Programmation du microcontrôleur Arduino Nano : multiplexage de l'afficheur 4 digits, sélection du mode (Voltmètre / Ampèremètre / Ohmmètre) via un bouton.",
      "Mise en place du calibrage automatique pour adapter la précision aux valeurs mesurées.",
    ],
    recruiterValue:
      "Capacité à concevoir un système de mesure complet : de la théorie à la réalisation, en passant par le routage PCB, la soudure et la programmation embarquée.",
    tools: ["KiCad", "Arduino Nano", "Fer à souder", "Oscilloscope"],
    highlights: ["Routage PCB", "Multiplexage", "Calibrage auto"],
    skills: ["AC11.02", "AC12.01"],
    images: [
      "https://samycalist-boop.github.io/portfolio/images/multimetre_1.jpg",
      "https://samycalist-boop.github.io/portfolio/images/multimetre_2.jpg",
      "https://samycalist-boop.github.io/portfolio/images/multimetre_3.jpg",
    ],
  },
  "regulation-temperature": {
    title: "Régulation de température",
    subtitle: "Boucle fermée autour d'une consigne.",
    icon: Zap,
    context:
      "Projet le plus complet de la première année : analyse fonctionnelle complète d'un régulateur de température, conception et soudure du prototype sur plaque pastillée, rédaction d'un dossier de fabrication détaillé.",
    challenge:
      "Décomposer le système en fonctions, concevoir chaque bloc (capteur, conditionnement, commande, actionneur), réaliser le prototype et documenter chaque étape selon un cahier des charges.",
    method: [
      "Analyse fonctionnelle : décomposition de toutes les étapes et fonctions en schéma fonctionnel.",
      "Conception des schémas et prototypes de chaque bloc du régulateur.",
      "Réalisation sur plaque pastillée : soudure de chaque fonction.",
      "Rédaction d'un compte rendu détaillé de chaque fonction réalisée.",
      "Validation : procédure d'essai après chaque étape pour vérifier le bon fonctionnement.",
    ],
    recruiterValue:
      "Démarche complète d'ingénierie : analyse fonctionnelle, prototypage, réalisation, documentation et validation — le tout dans un projet autonome de bout en bout.",
    tools: ["Plaque pastillée", "Fer à souder", "Oscilloscope", "Multimètre"],
    highlights: ["Analyse fonctionnelle", "Prototype", "Documentation"],
    skills: ["AC11.01", "AC11.02", "AC11.03", "AC12.01"],
    images: [],
    pdfReport: true,
  },
};

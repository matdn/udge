export type Candidate = {
  number: number;
  slug: string;
  name: string;
  profession: string;
};

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function candidate(number: number, name: string, profession: string): Candidate {
  return {
    number,
    slug: slugify(name),
    name,
    profession,
  };
}

export const candidats: Candidate[] = [
  candidate(1, "Matis Dené", "développeur Web"),
  candidate(2, "Nabila Kéramane", "assistante parlementaire"),
  candidate(3, "Apollinaire Darpas", "étudiant"),
  candidate(4, "Angela Fiorito", "avocate honoraire"),
  candidate(5, "Jamy Chahal", "docteur en intelligence artificielle et robotique"),
  candidate(6, "Diane Le Gall", "étudiante"),
  candidate(7, "Yoan-Alexis Ribeiro", "employé de la fonction publique"),
  candidate(
    8,
    "Constance Le Gall",
    "profession intermédiaire de la santé et du travail social",
  ),
  candidate(9, "Emmanuel Descola", "consultant"),
  candidate(10, "Viviane Presle", "thérapeute"),
  candidate(11, "Yves Grenu", "agent d’entretien des espaces verts"),
  candidate(12, "Agathe Duval", "designer de service"),
  candidate(13, "Huot Srun", "ingénieur, expert international de l’eau"),
  candidate(
    14,
    "Sophia Hammadache",
    "consultante en relations internationales et affaires publiques",
  ),
  candidate(15, "Mariano Boni", "consultant en système d’information"),
  candidate(16, "Anne-Sophie Tzeuton Kandjia", "cadre en tech et artiste chanteuse"),
  candidate(17, "Bertrand Le Gorrec", "juriste"),
  candidate(18, "Héloïse Presle", "contrôleuse de gestion"),
  candidate(19, "Olivier Mawas", "urbaniste du domaine public de l’État"),
  candidate(20, "Nikolina Domacinovic", "ingénieur d’études"),
  candidate(21, "Philippe Colliat", "consultant"),
  candidate(22, "Catherine Simoutre", "ingénieure dans le secteur de la construction"),
  candidate(23, "Jean-Luc Dené", "ingénieur consultant en informatique, retraité"),
  candidate(24, "Anne Crestey", "cadre, retraitée"),
  candidate(25, "Antoine Lorenzi", "cadre, retraité"),
  candidate(26, "Isabel Le Goff", "maîtresse de conférences"),
  candidate(27, "Michel Soffer", "chef de service d’imagerie médicale"),
  candidate(28, "Catherine Droual", "professeure certifiée d’arts plastiques, retraitée"),
  candidate(29, "Jean-Louis Lorenzi", "réalisateur, retraité"),
  candidate(30, "Valérie Deponge", "cheffe d’entreprise, retraitée"),
  candidate(31, "Philippe Descola", "professeur émérite du Collège de France"),
  candidate(32, "Eveline Ehrhard", "enseignante, retraitée"),
  candidate(33, "Vincent de Gaulejac", "professeur émérite à l’Université Paris-Cité"),
  candidate(34, "Elisabeth Johnson", "professeure, retraitée"),
];

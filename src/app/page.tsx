import Image from "next/image";

type TocItem = {
  href: string;
  label: string;
  description?: string;
};

export default function Home() {
  const toc: TocItem[] = [
    {
      href: "#democratie",
      label: "1. Démocratie locale & citoyenneté",
      description: "Pouvoir citoyen, transparence, convivialité",
    },
    {
      href: "#jeunesse",
      label: "2. Jeunesse, culture & sport",
      description: "Espaces jeunes, conseils, accès équitable",
    },
    {
      href: "#social",
      label: "3. Politique économique & sociale",
      description: "Budget, commerce, logement, droits, santé",
    },
    {
      href: "#ecologie",
      label: "4. Écologie, mobilités & alimentation",
      description: "Biodiversité, énergie, vélo, alimentation",
    },
    {
      href: "#securite",
      label: "5. Prévention & sécurité",
      description: "Présence humaine, médiation, accessibilité",
    },
    { href: "#conclusion", label: "Conclusion" },
    { href: "#contact", label: "Rejoindre / contacter" },
  ];

  return (
    <main className="bg-programme min-h-dvh">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <header className="grid items-end gap-8 md:grid-cols-2 md:gap-10">
          <div className="space-y-6">
            <p className="kicker">PROGRAMME</p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-white">Le Vésinet pour tous</span>
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Liste citoyenne d’Union de la gauche et des écologistes
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Une ville démocratique, solidaire, écologique et vivante – pour toutes les générations
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#table-des-matieres"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-white/90"
              >
                Table des matières
              </a>
              <a
                href="#contact"
                className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
              >
                Rejoindre / contacter
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="card overflow-hidden">
              <Image
                src="/imageListe.jpeg"
                alt="Photo de la liste Le Vésinet pour tous"
                width={1200}
                height={1400}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
            </div>
            <p className="mt-3 text-xs text-white/70">
              Photo — tu peux la remplacer quand tu veux.
            </p>
          </div>
        </header>

        <section id="table-des-matieres" className="mt-12 md:mt-16">
          <div className="card p-7 md:p-9">
            <p className="kicker">TABLE DES MATIÈRES</p>
            <h2 className="section-title mt-2">Programme</h2>
            <nav aria-label="Table des matières" className="mt-6">
              <ul className="grid gap-3 md:grid-cols-2">
                {toc.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block rounded-2xl bg-black/20 p-4 ring-1 ring-white/10 transition hover:bg-black/25"
                    >
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      {item.description ? (
                        <p className="mt-1 text-sm text-white/75">{item.description}</p>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <article className="programme mt-6 grid gap-6 md:mt-8">
          <section id="democratie" className="card p-7 md:p-9">
            <h2 className="programme-h2">1. DÉMOCRATIE LOCALE & CITOYENNETÉ</h2>
            <p className="programme-lead">
              <strong>Redonner du pouvoir aux citoyens, recréer du lien et du consensus.</strong>
            </p>
            <p className="programme-p">
              La démocratie municipale ne doit pas se limiter à un vote tous les six ans et se contenter de simples
              consultations qui ne mobilisent que les personnes déjà engagées. Nous voulons une démocratie quotidienne,
              ouverte et intergénérationnelle, qui associe réellement les citoyens aux décisions qui transforment leur
              ville.
            </p>

            <h3 className="programme-h3">1.1. Le respect des droits de l’opposition</h3>
            <p className="programme-p">
              Au Vésinet, aucun élu de gauche ni écologiste n’est aujourd’hui au conseil municipal. Cette absence de
              pluralité prive une partie des habitants d’une voix. Nous défendons une opposition respectée au conseil
              municipal, quel que soit son bord :
            </p>
            <ul className="programme-ul">
              <li>
                <strong>Débats non biaisés :</strong> accès rapide aux documents, temps de parole équitable, représentation dans
                les commissions, locaux et moyens matériels dignes.
              </li>
              <li>
                <strong>Transparence :</strong> publication en ligne systématique des questions des élus d’opposition et des réponses
                apportées par le maire.
              </li>
            </ul>

            <h3 className="programme-h3">1.2. Une démocratie locale et participative repensée</h3>
            <p className="programme-p">
              Pour renforcer la participation citoyenne, nous constituerons une <strong>Assemblée citoyenne locale</strong>, tirée au
              sort, représentative de tous les quartiers et âges. Elle aura pour mission de construire avec les élus des
              politiques publiques municipales et de faire émerger un consensus local.
            </p>

            <div className="programme-grid">
              <div className="programme-panel">
                <p className="programme-panel-title">Composition et fonctionnement</p>
                <ul className="programme-ul">
                  <li>30 habitants tirés au sort, représentatifs de la diversité de la ville (par âges et par quartiers).</li>
                  <li>
                    Mandat de 12 mois, renouvelé par moitié, avec indemnisation et remboursement des frais (notamment de
                    garde d’enfants) pour assurer la participation.
                  </li>
                  <li>
                    Secrétariat et organisation gérés par des agents municipaux dédiés (2 personnes permanentes);
                    continuité assurée par la rotation progressive et un adjoint à la vie démocratique.
                  </li>
                </ul>
              </div>
              <div className="programme-panel">
                <p className="programme-panel-title">Pouvoirs et prérogatives</p>
                <ul className="programme-ul">
                  <li>
                    <strong>Budget participatif :</strong> décision sur 20 % du budget d’investissement communal.
                  </li>
                  <li>
                    <strong>Droit d’initiative politique :</strong> possibilité d’imposer un débat au Conseil municipal sur des sujets
                    définis par l’Assemblée.
                  </li>
                  <li>
                    <strong>Droit de regard et d’audit :</strong> contrôle et évaluation des grands projets municipaux, mission de rendre
                    lisible pour les citoyens tous les choix budgétaires de la commune.
                  </li>
                </ul>
              </div>
            </div>

            <p className="programme-p">
              La consultation sur les attentes des citoyens pour la place du marché sera le premier dossier confié à
              l’Assemblée citoyenne, afin de mettre fin aux dérives actuelles : surcoûts d’études, recours excessif à des
              cabinets privés, tentative d’imposer des solutions non concertées.
            </p>
            <p className="programme-p">
              Seront également priorisés les travaux participatifs sur l’école, le plan climat, l’évolution du réseau de
              transport en commun et la transparence budgétaire (voir chapitres dédiés du programme).
            </p>

            <h3 className="programme-h3">1.3. De nouveaux lieux de convivialité et d’engagement intergénérationnel</h3>
            <p className="programme-p">
              Pour recréer du lien social, dynamiser l’économie locale et favoriser les échanges entre générations, nous
              développerons des espaces ouverts, accessibles et innovants :
            </p>
            <ul className="programme-ul">
              <li>
                <strong>Création d’un tiers-lieu / Maison pour tous</strong> (place du marché), à l’architecture ouverte, incluant :
                <ul className="programme-ul programme-ul-nested">
                  <li>Un café-librairie associatif.</li>
                  <li>Une scène ouverte et un espace aménageable en salle de bal.</li>
                  <li>Un espace d’exposition pour les artistes locaux.</li>
                  <li>Un atelier de réparation de vélos et d’objets du quotidien.</li>
                  <li>
                    Un espace de vente test pour les néo-commerçants du Vésinet (vente de produits avant installation
                    permanente).
                  </li>
                </ul>
              </li>
              <li>
                Création de bars et restaurants à but non lucratif dans chaque quartier, avec organisation de cafés
                citoyens, cafés-philo et espaces de débat (éducation populaire).
              </li>
              <li>
                <strong>Lancement d’une AMAP municipale</strong> (Association pour le Maintien de l’Agriculture Paysanne) :
                <ul className="programme-ul programme-ul-nested">
                  <li>
                    Mise à disposition d’un local pour la distribution régulière de paniers bio (en partenariat avec des
                    producteurs des Yvelines, par exemple maraîchers à Montesson, Sartrouville, Houilles).
                  </li>
                  <li>Tarifs adaptés aux revenus pour garantir un accès équitable à une alimentation saine.</li>
                  <li>Guinguette annuelle pour célébrer les producteurs locaux et renforcer le lien avec le monde paysan.</li>
                </ul>
              </li>
            </ul>

            <div className="programme-callout">
              <p className="programme-callout-title">Ça se fait ailleurs, donc c’est possible !</p>
              <ul className="programme-ul">
                <li>
                  Sartrouville et Chatou : budgets participatifs ayant permis la réalisation de projets citoyens concrets
                  (espaces verts, équipements de proximité).
                </li>
                <li>
                  AMAP de Saint-Germain-en-Laye (qui distribue des œufs bio de Feucherolles, des champignons de Montesson,
                  ou des fruits rouges des Alluets-le-Roi) ou du Pecq.
                </li>
                <li>
                  Conventions citoyennes nationales (climat, fin de vie) : démonstration qu’un tirage au sort bien encadré
                  permet des débats de qualité et des consensus sur des sujets complexes.
                </li>
              </ul>
            </div>
          </section>

          <section id="jeunesse" className="card p-7 md:p-9">
            <h2 className="programme-h2">2. JEUNESSE, CULTURE & SPORT</h2>
            <p className="programme-lead">
              <strong>Donner une place réelle à la jeunesse, en harmonie avec les autres générations.</strong>
            </p>
            <p className="programme-p">
              Une ville qui n’investit pas dans sa jeunesse se prive de dynamisme, de créativité et d’avenir. Au Vésinet,
              nous voulons faire des jeunes des acteurs à part entière de la vie locale, tout en favorisant les échanges
              entre générations.
            </p>

            <h3 className="programme-h3">2.1. Des espaces dédiés, en libre accès et non marchands</h3>
            <p className="programme-p">
              Nous voulons promouvoir la création de véritables espaces municipaux pour les jeunes, gratuits, en accès
              libre et non marchands, favorisant le sport, l’autonomie, la créativité et la rencontre :
            </p>
            <ul className="programme-ul">
              <li>
                Développement de nouveaux équipements sportifs en libre accès (basket, paddle, beach volley, skate park),
                conçus pour une occupation inclusive et mixte. La présence régulière de la police municipale garantira un
                cadre sécurisé et apaisé.
              </li>
              <li>
                Création d’espaces de pratique musicale, avec des studios municipaux accessibles à toutes et tous via un
                système de réservation simple.
              </li>
              <li>
                Aménagement d’une scène ouverte et d’un espace d’exposition sur la place du marché, destinés aux jeunes,
                aux artistes locaux et aux initiatives citoyennes.
              </li>
              <li>
                Implication renforcée des équipements existants (cinéma, théâtre, bibliothèque, conservatoire, MJC) pour
                accueillir davantage de projets portés par les jeunes.
              </li>
            </ul>

            <h3 className="programme-h3">2.2. Une participation des jeunes à la vie municipale</h3>
            <p className="programme-p">
              Nous renforcerons la participation des jeunes à la vie locale en créant des conseils adaptés à chaque âge :
            </p>
            <ul className="programme-ul">
              <li>maintien et valorisation du Conseil municipal des enfants,</li>
              <li>création d’un Conseil des adolescents pour les collégiens,</li>
              <li>création d’un Conseil des jeunes pour les lycéens et jeunes adultes.</li>
            </ul>
            <p className="programme-p">
              Chaque instance disposera d’un accompagnement et d’un budget dédiés pour mener des projets concrets liés à
              leur quotidien.
            </p>
            <ul className="programme-ul">
              <li>Nous ouvrirons l’Assemblée citoyenne locale aux jeunes dès 15 ans.</li>
              <li>Le journal municipal réservera un espace dédié aux jeunes.</li>
            </ul>

            <h3 className="programme-h3">2.3. Un accès équitable au sport et à la culture</h3>
            <p className="programme-p">Nous lèverons les freins à la pratique sportive et culturelle, par :</p>
            <ul className="programme-ul">
              <li>des subventions municipales aux clubs, et des tarifs d’adhésion modulés selon le quotient familial</li>
              <li>
                la création d’un pass sport/culture pour les 15–25 ans, utilisable dans les équipements municipaux et
                partenaires.
              </li>
            </ul>

            <h3 className="programme-h3">2.4. Une action engagée pour la petite enfance</h3>
            <p className="programme-p">
              La majorité actuelle n’a pas suffisamment anticipé l’arrivée de familles avec enfants notamment dans le
              quartier Princesse. L’éco-quartier a fait augmenter la population vésigondine de près de 10% sans qu’aucune
              nouvelle crèche n’ait été créée par la municipalité sortante.
            </p>
            <p className="programme-p">Nous proposons donc :</p>
            <ul className="programme-ul">
              <li>Augmenter le nombre de places en crèches municipales ou créer une nouvelle crèche municipale.</li>
              <li>
                Soutenir fortement les initiatives privées et associatives par la mise à disposition gratuite ou à tarif
                symbolique de locaux communaux et/ou des subventions ciblées.
              </li>
              <li>
                Développer un relais d’assistantes maternelles (RAM) de proximité, avec des lieux d’accueil, de formation
                et de mise en relation parents/professionnels.
              </li>
              <li>
                Instaurer un guichet unique petite enfance à la mairie - physique et numérique - assurant
                l’accompagnement personnalisé des familles, l’inscription centralisée, l’information en temps réel sur
                les disponibilités, l’assistance aux démarches d’aides (CAF et dispositifs locaux).
              </li>
              <li>
                Réviser la tarification sociale des crèches municipales avec un quotient familial plus progressif et
                instaurer des aides ponctuelles.
              </li>
              <li>
                Encourager des partenariats intercommunaux renforcés pour récupérer et sécuriser des places dans les
                crèches voisines et envisager de nouvelles mutualisations.
              </li>
            </ul>

            <h3 className="programme-h3">2.6. Un engagement fort pour améliorer la vie scolaire</h3>
            <p className="programme-p">
              La ville du Vésinet doit prendre des engagements forts en concertation et/ou en partenariat notamment pour
              créer ou améliorer :
            </p>
            <ul className="programme-ul">
              <li>l’organisation d’activités artistiques et sportives dans l’école, y compris sur les temps périscolaire,</li>
              <li>le soutien scolaire et les activités périscolaires avec un encadrement formé,</li>
              <li>
                l’organisation d’un temps méridien de qualité avec la mise en place d’ateliers (culturels, artistiques,
                sportifs, linguistiques ou scientifiques),
              </li>
              <li>l’aménagement des cours d’école sécurisées et végétalisées avec des zones de repos et d’activités,</li>
              <li>l’accompagnement des élèves en difficulté,</li>
              <li>
                la lutte contre le harcèlement (sensibilisation, dispositif d’écoute et de signalement accessible à tous
                tenu par des professionnels formés, formation du personnel éducatif et communal),
              </li>
              <li>la sécurisation des abords des établissements avec généralisation des dépose-minute sécurisés,</li>
              <li>
                l’organisation de formations pour le personnel éducatif et les agents communaux sur l’accueil et
                l’accompagnement des élèves en situation de handicap.
              </li>
            </ul>
            <p className="programme-p">
              L’Assemblée citoyenne locale lancera, dès son installation, l’élaboration d’une politique d’amélioration
              continue de la vie scolaire. Une consultation de l’ensemble des parents d’élèves sera notamment entreprise
              dès le début du mandat.
            </p>
          </section>

          <section id="social" className="card p-7 md:p-9">
            <h2 className="programme-h2">3. POLITIQUE ÉCONOMIQUE & SOCIALE</h2>
            <p className="programme-lead">
              <strong>Une ville responsable, protectrice et juste.</strong>
            </p>
            <p className="programme-p">
              Une ville agréable ne peut l’être que si personne n’est laissé de côté. Au Vésinet, nous défendons une
              politique sociale ambitieuse, une économie locale soutenue et une gestion budgétaire rigoureuse.
            </p>

            <h3 className="programme-h3">3.1. Une gestion budgétaire responsable et transparente</h3>
            <ul className="programme-ul">
              <li>
                Assurer un budget communal équilibré, sans dérive financière, garantissant la pérennité des services
                publics municipaux.
              </li>
              <li>
                Transparence totale des choix budgétaires, avec une commission budgétaire au sein de l’Assemblée citoyenne
                locale.
              </li>
              <li>
                Priorité budgétaire donnée aux grands axes : services publics communaux, transition écologique, solidarité
                et cohésion sociale.
              </li>
              <li>
                Recherche systématique de subventions (État, Région, Union européenne, partenaires institutionnels).
              </li>
            </ul>

            <h3 className="programme-h3">3.2. Un soutien au commerce et à l’artisanat locaux</h3>
            <ul className="programme-ul">
              <li>
                Charte municipale “Consommer local”, favorisant le recours aux commerces et artisans locaux pour les achats
                et événements de la Ville.
              </li>
              <li>
                Locaux commerciaux municipaux comme levier pour maintenir la diversité commerciale, avec des loyers
                modérés.
              </li>
              <li>
                Faciliter l’implantation de nouveaux commerces et artisans via un accompagnement administratif et financier.
              </li>
              <li>
                Outils de concertation et de transparence, avec un élu chargé du commerce et une rencontre a minima par
                semestre.
              </li>
            </ul>

            <h3 className="programme-h3">3.3. Logement et solidarité</h3>
            <ul className="programme-ul">
              <li>
                Développement de logements sociaux et intermédiaires : priorité aux travailleur·euses essentiel·les, aux
                agent·es des services publics et aux jeunes.
              </li>
              <li>
                Mobilisation du foncier communal et des outils existants pour répondre aux besoins locaux.
              </li>
              <li>
                Action avec les partenaires intercommunaux pour respecter les obligations légales, notamment par la
                réhabilitation ou reconversion de bâtiments existants.
              </li>
              <li>
                Politique foncière cohérente pour éviter la spéculation et favoriser l’intérêt général.
              </li>
              <li>
                Soutien à l’habitation partagée inter-générationnelle pour lutter contre l’isolement et la spéculation.
              </li>
            </ul>

            <h3 className="programme-h3">3.3. Accès aux droits et accompagnement social</h3>
            <ul className="programme-ul">
              <li>
                Création d’un guichet unique municipal d’aide administrative et sociale, gratuit et bienveillant.
              </li>
              <li>
                Point d’accueil et d’écoute pour les jeunes dans un espace municipal confidentiel et accessible.
              </li>
              <li>
                Tarification sociale progressive pour les services municipaux, fondée sur le quotient familial.
              </li>
              <li>
                Réintroduction de la bourse communale et création d’un fonds municipal d’aide à l’acquisition de matériel
                informatique.
              </li>
              <li>
                Lutte contre l’isolement des personnes âgées et lutte contre la fracture numérique (cours gratuits).
              </li>
            </ul>

            <h3 className="programme-h3">3.4. Accès aux soins pour toutes et tous</h3>
            <p className="programme-p">
              La santé n’est pas une marchandise, c’est un droit fondamental. Nos propositions :
            </p>
            <ul className="programme-ul">
              <li>Renforcer le guichet unique santé au CCAS pour orienter rapidement tous les habitants.</li>
              <li>
                Développer des consultations médicales préventives dans les écoles primaires (sommeil, hygiène de vie,
                addictions, santé mentale, vaccination, alimentation…).
              </li>
              <li>Renforcer le plan canicule et créer des îlots de fraîcheur.</li>
              <li>Intégrer la santé dans toutes les politiques : cantine, sport-santé, lutte contre l’isolement.</li>
            </ul>
            <p className="programme-p">
              La Maison médicale du Parc est sous-occupée. Notre priorité : attirer et retenir des praticiens en nombre
              suffisant.
            </p>
            <ul className="programme-ul">
              <li>accompagnement des nouveaux installés (logement, famille, démarches),</li>
              <li>amélioration des locaux et meilleure visibilité,</li>
              <li>partenariat CPTS Boucle de Seine pour un exercice partagé et attractif,</li>
              <li>aide à la transmission pour les médecins seniors.</li>
            </ul>
            <p className="programme-p">
              Ces mesures coûtent relativement peu et peuvent être financées en partie par des subventions ARS / Région.
            </p>

            <div className="programme-callout">
              <p className="programme-callout-title">Ça se fait ailleurs, donc c’est possible !</p>
              <ul className="programme-ul">
                <li>Nanterre : maisons d’accès aux droits, facilitant l’accompagnement administratif et social.</li>
                <li>
                  Les communes de la Boucle (Chatou, Montesson, Croissy, Sartrouville) : coopérations déjà engagées sur les
                  politiques de l’habitat.
                </li>
              </ul>
            </div>
          </section>

          <section id="ecologie" className="card p-7 md:p-9">
            <h2 className="programme-h2">4. ÉCOLOGIE, MOBILITÉS & ALIMENTATION</h2>
            <p className="programme-lead">
              <strong>Protéger la nature, le vivant et améliorer durablement le cadre de vie.</strong>
            </p>

            <h3 className="programme-h3">4.1. Espaces verts vivants et biodiversité</h3>
            <ul className="programme-ul">
              <li>
                <strong>Entretien écologique :</strong> poursuivre et renforcer l’entretien écologique des espaces verts communaux;
                remplacer chaque arbre mort ou en mauvais état.
              </li>
              <li>
                <strong>Un arbre par habitant :</strong> offrir un arbre à planter à chaque naissance ou arrivée d’un nouvel
                habitant.
              </li>
              <li>Protection des arbres privés : mesures de préservation et accompagnement des propriétaires.</li>
              <li>Jardins partagés et agriculture urbaine : potagers, permaculture, autonomie alimentaire.</li>
              <li>Pédagogie de la biodiversité : projets éducatifs avec écoles et associations.</li>
              <li>Pisciculture écologique : étudier une création expérimentale et pédagogique.</li>
              <li>Zéro bétonisation : viser zéro bétonisation supplémentaire des espaces naturels.</li>
              <li>Composteurs collectifs : déployer dans les quartiers.</li>
              <li>
                Interdiction des engins thermiques : interdire l’usage dans l’espace public et accompagner la conversion.
              </li>
            </ul>

            <h3 className="programme-h3">4.2. Climat et sobriété énergétique</h3>
            <ul className="programme-ul">
              <li>Réaliser un bilan carbone communal et viser -50 % d’émissions de GES à horizon 2030.</li>
              <li>
                Plan de rénovation énergétique des bâtiments communaux : isolation, remplacement des chauffages fioul/gaz,
                réseaux de chaleur décarbonés.
              </li>
              <li>
                Accompagner les habitants (guichet unique rénovation, informations, aides MaPrimeRénov’ et CEE).
              </li>
              <li>
                Installer du photovoltaïque sur les toits (objectif 400 à 700 kWc d’ici 2030) avec aides et éventuellement
                coopérative citoyenne.
              </li>
              <li>
                Confier à l’Assemblée citoyenne la mission d’un rapport « Vésinet zéro carbone 2050 ».
              </li>
            </ul>

            <p className="programme-p">
              <strong>S’adapter aux impacts déjà présents :</strong> élaborer un Plan communal d’adaptation au changement
              climatique (avec habitants et CASGBS).
            </p>
            <ul className="programme-ul">
              <li>protection et renouvellement du patrimoine arboré (arrosage raisonné, paillage, essences adaptées),</li>
              <li>création d’îlots de fraîcheur (cours d’écoles, squares, parcs, abords des équipements publics),</li>
              <li>plan canicule renforcé (repérage, lieux frais ouverts, communication),</li>
              <li>politique de prévention des risques d’inondation.</li>
            </ul>
            <ul className="programme-ul">
              <li>Gestion plus sobre de l’eau : récupération des eaux de pluie, limitation de l’arrosage, sensibilisation.</li>
              <li>
                Réseau de volontaires du climat (citoyens formés) pour sensibilisation et aide en cas de crise.
              </li>
            </ul>

            <h3 className="programme-h3">4.3. Respect du vivant et éthique écologique</h3>
            <ul className="programme-ul">
              <li>Créer un poste d’Adjoint·e au maire au respect du vivant.</li>
              <li>Créer une Maison des animaux : information, sensibilisation, médiation.</li>
              <li>Refuser les spectacles/pratiques impliquant l’exploitation animale sur le territoire communal.</li>
              <li>
                Intégrer l’éducation au respect du vivant dans les écoles, avec une demi-journée ou journée pédagogique
                annuelle.
              </li>
            </ul>

            <h3 className="programme-h3">4.4. Mobilités apaisées et durables</h3>
            <ul className="programme-ul">
              <li>
                Journées sans voiture : organiser deux journées dès 2026 lors d’événements festifs, en concertation avec
                les commerçants.
              </li>
              <li>Sécurité aux abords des écoles : déployer des zones sécurisées (rues scolaires, circulation limitée).</li>
              <li>
                Mise en place d’un plan vélo : réseau cyclable sécurisé (axe Princesse - centre-ville – collège),
                “tranquilliser” les ponts au-dessus du RER, contresens cyclables.
              </li>
              <li>
                Réseau de bus : réviser sous 6 mois, sur recommandation de l’Assemblée Citoyenne Locale.
              </li>
              <li>
                Flotte de petits véhicules électriques réservables (médical, courses, personnes âgées, enfants).
              </li>
              <li>Zones 30 : concertation sur le boulevard Carnot.</li>
              <li>Connexions avec les communes voisines : améliorer les connexions cyclables et vers les bassins d’emploi.</li>
            </ul>

            <h3 className="programme-h3">4.5. Alimentation durable et santé</h3>
            <p className="programme-p">
              En végétalisant l’alimentation, nous agissons pour la santé et l’environnement :
            </p>
            <ul className="programme-ul">
              <li>Introduire deux menus végétariens hebdomadaires et des options végétariennes quotidiennes.</li>
              <li>Monter progressivement vers une restauration scolaire 100 % bio et locale.</li>
              <li>Former et accompagner le personnel de cuisine à la cuisine végétale.</li>
              <li>Intégrer des clauses durables dans les marchés publics.</li>
              <li>Garantir des repas sains et durables financièrement accessibles.</li>
              <li>Soutenir les filières locales de protéines végétales et les filières courtes.</li>
              <li>Sensibilisation et ateliers pratiques auprès du grand public, des écoles et des équipements municipaux.</li>
              <li>Encourager les restaurateurs à proposer des options végétales accessibles.</li>
              <li>Organiser des événements municipaux 100 % végétariens et/ou végétaliens.</li>
            </ul>

            <div className="programme-callout">
              <p className="programme-callout-title">Ça se fait ailleurs donc c’est possible !</p>
              <ul className="programme-ul">
                <li>Sartrouville : gestion écologique des espaces verts (vergers urbains, éco-pâturage).</li>
                <li>
                  Montesson : labellisée Territoire Engagé pour la Nature, Agenda 21 participatif.
                </li>
                <li>Strasbourg : réseau cyclable protégé et structurant.</li>
                <li>
                  Fribourg-en-Brisgau : écoquartier exemplaire, référence pour repenser le quartier Princesse.
                </li>
              </ul>
            </div>
          </section>

          <section id="securite" className="card p-7 md:p-9">
            <h2 className="programme-h2">5. PRÉVENTION & SÉCURITÉ</h2>
            <p className="programme-lead">
              <strong>
                Garantir la tranquillité publique et le sentiment de sécurité par la présence humaine et la prévention.
              </strong>
            </p>
            <p className="programme-p">
              Nous choisissons une sécurité fondée sur le lien social, la confiance et la présence humaine : davantage de
              présence rassurante, davantage de prévention et de dialogue, plutôt que de multiplier les caméras.
            </p>

            <h3 className="programme-h3">5.1. Priorité à la présence humaine et à la prévention</h3>
            <ul className="programme-ul">
              <li>
                Renforcement significatif de la police municipale (en complémentarité avec la Police nationale) :
                augmentation des effectifs, présence visible et pédestre, priorisation des quartiers, équipements adaptés
                sans armement létal.
              </li>
              <li>
                Création d’une petite équipe de médiateurs de tranquillité publique : intervention sur incivilités,
                conflits, nuisances, stationnement gênant; dialogue et désamorçage.
              </li>
              <li>
                Actions de prévention contre les vols et cambriolages : conseils, campagnes d’information, coordination.
              </li>
              <li>
                Présence préventive et pédagogique aux abords des écoles, collèges et lycées.
              </li>
              <li>
                Plan Lumière Communal : éclairage intelligent et ciblé, réduction des nuisances lumineuses, protection de
                la biodiversité nocturne.
              </li>
            </ul>

            <h3 className="programme-h3">5.2. Refus de la surveillance de masse</h3>
            <ul className="programme-ul">
              <li>
                Moratoire sur toute extension de la vidéosurveillance généralisée (hors vidéo-verbalisation ciblée).
              </li>
              <li>Refus de l’usage des drones de surveillance par la commune.</li>
              <li>
                Réaffectation des moyens vers la présence humaine et des aménagements préventifs simples.
              </li>
            </ul>

            <h3 className="programme-h3">5.3. Respect de la loi républicaine et égalité</h3>
            <ul className="programme-ul">
              <li>
                Respect strict de la loi pour toutes et tous, sans distinction d’origine, de genre, d’orientation sexuelle,
                de religion ou de situation sociale.
              </li>
              <li>
                Prise en charge digne et rapide des victimes en lien avec le commissariat, les services municipaux et les
                associations d’aide aux victimes.
              </li>
            </ul>

            <h3 className="programme-h3">5.4. La sécurité, c’est aussi des engagements concrets pour tous</h3>
            <ul className="programme-ul">
              <li>
                Faire strictement respecter le code de la route pour tous les usagers (voitures, vélos, trottinettes,
                piétons).
              </li>
              <li>Soutien aux associations locales qui développent le lien social.</li>
              <li>Appui au CCAS pour accompagner les personnes âgées, les familles en difficulté et le handicap.</li>
              <li>
                Amélioration de l’accessibilité des cheminements piétons et des zones éclairées pour les personnes à
                mobilité réduite ou malvoyantes.
              </li>
              <li>
                Développement d’un plan communal de sauvegarde (risques climatiques, crises) et formation aux premiers
                secours.
              </li>
            </ul>
            <p className="programme-p">
              Notre vision de la sécurité et de la prévention pour Le Vésinet repose sur l’humain et la proximité.
            </p>
          </section>

          <section id="conclusion" className="card p-7 md:p-9">
            <h2 className="programme-h2">Conclusion</h2>
            <p className="programme-p">
              Démocratie, solidarité, culture, jeunesse et écologie ne sont pas des politiques séparées. Elles se
              renforcent mutuellement pour construire une ville du Vésinet plus juste, plus vivante, plus ouverte et
              tournée vers l’avenir.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#table-des-matieres"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-white/90"
              >
                Retour à la table des matières
              </a>
              <a
                href="#contact"
                className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
              >
                Rejoindre / contacter
              </a>
            </div>
          </section>
        </article>

        <section id="contact" className="mt-12 md:mt-16">
          <div className="card p-7 md:p-9">
            <h2 className="section-title">Participer</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Pour améliorer ce programme, proposer une idée, rejoindre le collectif ou signaler un besoin : écris-nous.
              (Adresse email à personnaliser.)
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:contact@exemple.fr"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-white/90"
              >
                contact@exemple.fr
              </a>
              <a
                href="#table-des-matieres"
                className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-white/15"
              >
                Retour en haut
              </a>
            </div>
          </div>
        </section>

        <footer className="pb-6 pt-12 text-center text-xs text-white/70">
          <p>© {new Date().getFullYear()} — Page programme (Next.js)</p>
        </footer>
      </div>
    </main>
  );
}

# Académie de l'Ingénieur d'Affaires

Site de formation **« L'excellence commerciale pour les Ingénieurs d'affaires »**.

Une seule page, autonome, sans dépendance : ouvrir `index.html` dans un navigateur.

## Parcours de lecture

Sept sections qui se suivent au défilement, avec un sommaire fixe à gauche
(bouton « Sommaire » sur mobile) pour aller directement où l'on veut.

| # | Section | Contenu |
|---|---|---|
| 01 | Le parcours | La promesse du programme en trois idées |
| 02 | Les 5 leviers | Cibler, Ouvrir, Comprendre, Convaincre, Conclure — dépliables |
| 03 | Les 8 modules | Objectifs, atelier et livrable de chaque module |
| 04 | Les méthodes | 10 fiches affichées une par une : ICP, séquence de prospection, accroche, découverte, MEDDPICC, carte du pouvoir, proposition de valeur, ACRAC, honoraires, closing |
| 05 | Les objections | 12 objections tirées une par une, avec ce qu'elles cachent et la réponse modèle |
| 06 | S'évaluer | Auto-diagnostic sur les 5 leviers + quiz de 12 questions, une question à la fois |
| 07 | Piloter | Les 6 indicateurs, lecture d'entonnoir |

## Fonctionnement

- Navigation au défilement, sommaire actif qui suit la lecture, jauge de progression en haut
- Contenu replié par défaut : on ne déplie que ce qu'on veut lire
- Thème clair / sombre (mémorisé), respect des préférences système
- Bouton « Imprimer » : tout le contenu est déplié à l'impression
- Responsive mobile / tablette / desktop

## Modifier le contenu

Tout le texte est regroupé en haut du `<script>`, dans des tableaux :

| Tableau | Ce qu'il pilote |
|---|---|
| `LEVIERS` | les 5 leviers (aussi utilisés par l'auto-diagnostic) |
| `MODULES` | les 8 modules — `p` objectifs, `a` atelier, `l` livrable |
| `METHODES` | les fiches — `c` libellé du bouton, `b` blocs (`text`, `list`, `steps`, `pairs`, `said`, `rule`) |
| `OBJECTIONS` | `q` l'objection, `b` ce qu'elle cache, `h` la réponse, `s` la phrase modèle |
| `QUIZ` | `o` les réponses, `a` l'index de la bonne, `w` l'explication |
| `KPIS`, `FUNNEL`, `CONSEILS` | indicateurs, entonnoir, conseils du diagnostic |

Ajouter une entrée à un tableau suffit : l'affichage se met à jour tout seul.

## Identité visuelle

Bleu `#002C49` dominant, orange `#FF6633` réservé aux accents (sommaire actif,
ponctuation, boutons). Montserrat via Google Fonts, Avenir Next pour les titres
quand la police est installée. Les couleurs sont des variables CSS en tête de
fichier (`--blue`, `--orange`) : les changer suffit à rehabiller tout le site.

## Mise en ligne

Le site est publié sur GitHub Pages par `.github/workflows/pages.yml` à chaque
push sur `main`.

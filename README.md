# Académie de l'Ingénieur d'Affaires

Site de formation **« L'excellence commerciale pour les Ingénieurs d'affaires »**.

Page unique, autonome (aucune dépendance à installer) : ouvrir `index.html` dans un navigateur.

## Contenu

| Section | Ce qu'on y trouve |
|---|---|
| **01 · Le parcours** | Promesse du programme, les 5 leviers de l'excellence commerciale, déroulé sur 8 semaines |
| **02 · Les 8 modules** | Programme détaillé : objectifs, contenu, atelier, livrable — avec suivi de progression |
| **03 · Boîte à outils** | 10 fiches méthode : ICP, séquence de prospection, accroche téléphonique, trame de découverte, MEDDPICC, carte du pouvoir, proposition de valeur, ACRAC, honoraires, closing |
| **04 · Entraînement** | Simulateur d'objections (12 objections + réponses modèles), 3 jeux de rôle, grille d'observation |
| **05 · Évaluation** | Auto-diagnostic sur les 5 leviers + quiz de 12 questions avec corrigé commenté |
| **06 · Pilotage** | Les 6 indicateurs à suivre, lecture d'entonnoir, rituels d'équipe, glossaire |

## Fonctionnalités

- Navigation par onglets (lien direct possible : `index.html#outils`)
- Thème clair / sombre, avec respect des préférences système
- Progression des modules mémorisée dans le navigateur (localStorage)
- Simulateur d'objections et quiz interactifs
- Mise en page d'impression : le bouton « Imprimer » sort l'intégralité du support en PDF
- Responsive mobile / tablette / desktop

## Identité visuelle

Charte Leyton V01.2026 : bleu `#002C49` dominant, orange `#FF6633` en accent uniquement,
titres en Avenir Next (repli Montserrat), corps de texte en Montserrat (Google Fonts).

## Modifier le contenu

Tout est dans `index.html` :

- les **objections** du simulateur : tableau `OBJECTIONS` dans le `<script>`
- les **questions du quiz** : tableau `QUIZ` (`a` = index de la bonne réponse)
- l'**entonnoir** de la section Pilotage : tableau `FUNNEL`
- les **modules**, **fiches** et **jeux de rôle** : directement dans le HTML

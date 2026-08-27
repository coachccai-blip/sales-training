# Sales Academy — consignes du dépôt

## Déploiement : règle permanente

**Toute modification validée doit être mise en ligne sur le site GitHub Pages
dans la foulée.** Concrètement, à chaque changement :

1. Commiter sur la branche de travail et la pousser.
2. Fusionner en avance rapide dans `main` et pousser `main` :
   `git checkout main && git merge --ff-only <branche> && git push origin main`
3. Le workflow `.github/workflows/pages.yml` déploie automatiquement `main`
   sur https://coachccai-blip.github.io/sales-training/ — vérifier que le run
   se termine en succès avant d'annoncer la mise en ligne.

Ne jamais laisser `main` en retard sur la branche de travail en fin de tâche.
Le déploiement ne fonctionne que depuis `main` (restriction de l'environnement
`github-pages`) ; en cas de run bloqué en file, relancer via
`workflow_dispatch` plutôt que par un commit vide.

## PDF téléchargeables (FR + EN)

Le bouton « Télécharger le PDF » pointe vers `sales-academy-fr.pdf` ou
`sales-academy-en.pdf` selon la langue active. Ils sont générés depuis le
site lui-même en mode `index.html?print&lang=xx` (rendu complet, fiches
dépliées, quiz corrigé). **Après toute modification du contenu, régénérer
les deux PDF avant de fusionner** : `node tools/build-pdf.mjs` (Chromium de
Playwright requis), puis commiter les PDF avec le reste. Le workflow Pages
les copie dans le site publié.

## Bilingue FR / EN

Le contenu vit en double dans `index.html` : tableaux `SECTIONS_FR`/`_EN`,
`SONCAS_FR`/`_EN`, `OBJECTIONS_FR`/`_EN`, `QUIZ_FR`/`_EN`, et les textes
d'interface dans `STR` (paires [fr, en]). Toute modification de contenu se
fait dans les deux langues — l'anglais doit rester naturel et natif, pas
traduit mot à mot. La langue se choisit par le bouton du sommaire
(mémorisée) ou `?lang=en`.

## Architecture

- `index.html` : tout le site (page unique autonome, sans dépendance).
  Le contenu de la formation vit dans les tableaux `SECTIONS`, `SONCAS`,
  `OBJECTIONS`, `QUIZ` en tête du `<script>` ; les icônes dans `ICONS`.
- Palette : bleu `#002C49` dominant, orange `#FF6633` en accent — variables
  CSS `--blue` / `--orange` en tête de fichier.
- Vérifier avant de pousser : rendu clair/sombre, mobile 390 px, aucune
  erreur JS, aucun débordement horizontal.

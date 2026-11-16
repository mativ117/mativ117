# Instructions pour la vitrine de Mathieu Orfila

## Descriptions des projets

- Lors de tout ajout ou changement d’objectif, de périmètre ou de disponibilité d’un projet présenté, vérifier sa description sur la vitrine.
- Lire le README actuel du dépôt source et, si nécessaire, sa documentation de conception. Expliquer en une ou deux phrases le but du projet, à qui ou à quoi il sert, puis son principe. Ne pas copier une liste de fonctionnalités ni un numéro de version dans le texte public.
- Distinguer l’objectif, les fonctionnalités effectivement livrées et les pistes futures. Ne pas annoncer une démo ou une publication non vérifiée.
- Mettre à jour ensemble `docs/projects.js` et `docs/projects.en.json`, y compris le statut si nécessaire. Lancer `node build.cjs` et committer les deux pages HTML régénérées avec les sources.
- Vérifier l’alignement français/anglais et préserver les noms propres des projets.
- Si une demande concerne l’évolution d’un autre dépôt, inclure cette vitrine dans le suivi lorsque l’accès est disponible. Si la mise à jour ne peut pas être faite, signaler précisément ce qui reste à aligner. Cette consigne est un processus éditorial, pas une synchronisation automatique.

## Présentation personnelle

Mathieu Orfila souhaite mentionner le basket, la F1, la musique et la science-fiction, avec discrétion. Ne pas inventer d’artistes favoris, de genres musicaux, d’expériences biographiques ou d’informations personnelles.

## Direction artistique

Conserver le bleu nuit, l’ambre et les références orbitales subtiles. Garder le parcours court : introduction, projets, quelques repères personnels. Toute modification visible doit être cohérente en français et en anglais.

## Ton des descriptions et cohérence GitHub

- Privilégier une formulation naturelle centrée sur la promesse, l’usage et les bénéfices. Laisser les détails d’architecture au README technique.
- Aligner le sens entre vitrine FR/EN, introduction des README et champ About/Description des dépôts. Mettre à jour ce dernier lorsque les outils le permettent ; sinon fournir le texte exact et signaler la limite, sans prétendre l’avoir changé.
- Calque : simplicité et confidentialité (FR : « Transformez vos PDF et scans en documents Word, simplement et en toute confidentialité. » ; EN : « Turn PDFs and scans into Word documents, simply and privately. »).
- Ne pas qualifier Calque d’outil d’anonymisation : il ne supprime pas les données personnelles du document. Éviter les garanties absolues de sécurité ou d’anonymat.
- Illustrations CoachOS : conserver une géométrie cohérente de demi-terrain ou terrain complet, anneau centré, arc à trois points centré sur l’anneau et raccordé aux segments de coin.

## Liens des projets

Pour chaque projet publié, afficher d’abord un lien direct vers l’application ou le site, avec un libellé adapté au projet et traduit en FR/EN ; afficher ensuite le lien GitHub « Code source » / « Source code ». Conserver les adresses de publication vérifiées dans `docs/projects.js` et les libellés anglais dans `docs/projects.en.json`. Pour un projet non publié, ne pas inventer de lien : garder le lien source jusqu’à sa publication.

## Positionnement Processarium

Présenter explicitement Processarium comme un atelier pour comprendre les processus de travail avec l’IA (rôles, échanges, parallélisme, validations humaines), et non le travail en général. Garder cette précision dans la catégorie et la première phrase, en français et en anglais. L’atelier illustre des scénarios ; ne pas prétendre qu’il exécute réellement des agents IA.

## Statut visible obligatoire

Chaque fiche doit afficher sous son titre une ligne « Statut » / « Status » avec un badge explicite et lisible (au moins 12 px), sur ordinateur et mobile. La génération doit refuser une valeur manquante. Vérifier le README du projet avant de changer son état ; utiliser exclusivement la nomenclature définie ci-dessous. Maintenir les deux langues en même temps.

## Nomenclature fixe des statuts

Source unique : `docs/statuses.json`. Dans `docs/projects.js`, utiliser uniquement les codes `development`, `prototype`, `candidate`, `stable`. Ne pas ajouter de statut libre ni de traduction d’état dans `docs/projects.en.json` : le build traduit le code commun pour les deux langues et refuse les codes inconnus.

- `development` — En développement / In development : fonctionnalités ou validations encore en chantier, même si une version est accessible.
- `prototype` — Prototype disponible / Prototype available : première expérience pour essayer le concept, périmètre limité.
- `candidate` — Version candidate / Release candidate : périmètre prévu livré, dernières validations avant stabilisation.
- `stable` — Version stable / Stable release : périmètre annoncé validé pour un usage courant. Ne pas déduire la stabilité de la seule publication.

Cette nomenclature remplace les anciens libellés « Application publiée » et « Démonstration interactive ». Attribution actuelle : Calque et CoachOS `development`, Processarium `prototype`, Les Royaumes de l’Éclipse `candidate`. Revoir l’attribution sur preuves lors des évolutions, sans multiplier les libellés.

## Signature personnelle discrète

Mathieu ne veut pas son prénom/nom en très grand. Garder `mo.` comme signature visuelle, et « Créer. Explorer. Affiner. » / « Create. Explore. Refine. » comme titre d’accueil. Le nom peut rester discret dans le pied de page et les métadonnées.

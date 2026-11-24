# Sorties anime

Le calendrier des sorties d'animes : tous les épisodes qui sortent chaque jour dans le monde, pas seulement ceux que tu regardes. Suis les animes qui t'intéressent pour avoir un compte à rebours jusqu'au prochain épisode, leurs sorties dans ton emploi du temps NeoDex et un rappel 10 minutes avant. Les horaires viennent d'AniList.

*English version: [README.en.md](README.en.md)*

## Épisodes vus et liste AniList (nouveau en 1.4.0)

Un clic sur ✓ ÉP. 8 VU note l’épisode vu, chaque anime dit combien il en reste à rattraper, et LIER MA LISTE ANILIST suit ta liste « en cours » avec tes épisodes vus. La liste du jour s’adapte aussi aux petites fenêtres.

## Jour par jour

- Toutes les sorties d'une journée (sans le contenu adulte), avec l'heure, le numéro d'épisode et l'affiche. On change de jour avec les flèches ; **Aujourd'hui** revient au jour même.
- Tri **par heure** ou **les plus populaires d'abord**, et une case **seulement mes animes**.
- **+ SUIVRE** ajoute un anime à ta liste ; un nouveau clic arrête de le suivre.

## Mes animes

- Une carte par anime suivi, avec son affiche, le prochain épisode et le temps qui reste (« dans 3 j 4 h », « dans 1 h 30 ») ou le retard si l'épisode attendu n'est pas encore annoncé.
- Deux groupes : **Cette semaine** et **Plus tard et annoncés** (replié au départ ; chaque groupe se replie d'un clic).
- Sur chaque carte : **Ouvrir** sa page dans un onglet, **Masquer** (le cacher de la liste sans l'oublier) ou **Ne plus suivre**.
- Les animes masqués sont rangés en bas : **Réafficher** ou **Supprimer** définitivement.
- La liste se met à jour toute seule toutes les 15 minutes ; **Actualiser** force une mise à jour. Le haut indique le nombre d'animes suivis et l'heure de la dernière mise à jour.

## Emploi du temps et rappels

- **Ajouter les sorties de mes animes à mon emploi du temps** : chaque épisode des 45 prochains jours devient un événement dans l'agenda de NeoDex (« Titre · ép. 7 »). Les événements sont revérifiés toutes les 5 minutes et suivent les changements d'horaire ; un anime suivi sous deux noms n'apparaît qu'une fois.
- **Me prévenir 10 min avant chaque épisode** : une notification avec l'affiche, « Sort dans 10 min » ou « Vient de sortir ». Un clic dessus ouvre le plugin.

Les deux fonctionnent en arrière-plan tant que NeoDex est ouvert.

## Importer une liste

- **Depuis FRAnime** : le plugin donne une commande à coller dans la console du navigateur (Ctrl+Maj+J) sur la page de ta liste. Elle parcourt toutes les pages toute seule (environ 3 secondes par page) et copie les liens de tes animes ; reviens les coller dans le plugin.
- **Sinon**, colle une liste de titres, un par ligne.

Le plugin cherche ensuite chaque titre sur AniList. Si AniList limite les requêtes, il attend et réessaie ; les recherches ratées sont refaites une heure plus tard.

## Données et synchronisation

Tes animes suivis et masqués et tes réglages (agenda, rappels) sont enregistrés par NeoDex, sauvegardés et synchronisés entre tes PC si la synchro est activée. Au premier lancement, le plugin reprend ce que tu avais déjà dans NeoDex.

Accès réseau : seulement AniList (graphql.anilist.co pour les horaires, s4.anilist.co pour les affiches).

## Installer

Dans NeoDex : **NeoStore → À découvrir → Sorties anime → Installer**.

Développer un plugin : voir le [SDK NeoDex](https://github.com/NDesumeur/neodex-sdk).

## Épisodes vus et liste AniList (1.4.0)

- Dans **Mes animes**, chaque carte dit où tu en es : « vu jusqu’à l’ép. 7 · 2 à rattraper », « à jour » ou « pas encore commencé ».
- **✓ ÉP. 8 VU** note l’épisode suivant en un clic (jamais au-delà des épisodes déjà sortis). **−1** revient en arrière en cas d’erreur.
- **LIER MA LISTE ANILIST** : donne ton pseudo AniList (ta liste doit être publique). Les animes de ta liste « en cours » sont suivis et tes épisodes vus repris. La liste est relue à chaque mise à jour des sorties (au plus une fois par heure) ; un épisode vu n’est jamais reculé.
- Cocher un épisode ici ne le coche pas encore sur AniList : il faudrait te connecter à AniList, ce qui viendra plus tard.
- Les épisodes vus sont synchronisés entre tes appareils avec le reste de tes animes.

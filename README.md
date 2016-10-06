# Node JS - TP P2019 - Twitter

Configurer votre .json pour la database + npm i pour les dépendencies
npm run db:sync pour synchroniser la BDD.

=== ROUTES USERS ===
POST /user -> models.user.create() ==> OK
GET /users -> models.user.findAll() ==> OK
GET / users/:id -> models.user.findById() ==> OK
GET /users/:id/tweets -> models.tweet.findAll({ where: { user_id: }}) ==> OK

DELETE /users/:id -> models.user.update()

=== ROUTES TWEETS ===
POST /tweets -> models.tweet.create() ==> OK
GET / -> models.tweet.findAll() ==> OK
GET /tweets/:id -> models.tweet.findById() ==> OK

DELETE /tweets/:id -> models.tweet.del() OR models.tweet.update({ id: , state: 0 })

=== A FAIRE COMME TP ===
RETWEET
GET /users/{id}/following (on récup les abonnés)
POST /users/{id}/following
GET /users/{id}/followers (on récup nos abonnés)

== BONUS POINT ==
PM2 module
N'utiliser pas de throw new error en prod:
if (process.env.NODE_ENV === 'development') {
  throw new Error(err)
} else {
  console.log(Error)
}
Mentions, hashtags, retweets, favoris
Encryption du mot de passe (1 ligne de code askip)

=== GLOBALEMENT ON DOIT AVOIR ===
GET / => Liste des tweets des users qu'on follow
POST /tweets => Post d'un nouveau tweet
DELETE /tweets => Delete d'un tweet
GET /tweets/{id} => Single view d'un tweet

GET /users => Liste de tous les users
POST / users => Creation d'un nouveau user
PUT /users => Update de user
DELETE /users => Delete un user
GET /users/{user_id} => Single view d'un user

GET /users/{user_id}/following => Liste des users qu'on following
POST /users/following/{following_id} => Follow d'un nouveau user

GET /users/{user_id}/followers => Liste des users qui nous follow

Creation d'une API hashtag avec un model hashtag
Lors d'un nouveau tweet (hook beforeCreate), parser le contenu (regex)
Enregistrer dans la table hashtag (models.hashtag.create)
Associer le tweet au tag (dans les hooks)

=== NOTATION ===
Fonctionnalités du projet
Fonctionnement du projet
Qualité du code (indentation, commentaire, nom etc)
Optimisation du code et des requêtes

# Node JS - TP P2019 - Twitter

Configurer votre .json pour la database + npm i pour les dépendencies
npm run db:sync pour synchroniser la BDD.

ROUTES USERS
POST /user -> models.user.create() ==> OK
GET /users -> models.user.findAll() ==> OK
GET / users/:id -> models.user.findById() ==> OK

DELETE /users/:id -> models.user.update()
GET /users/:id/tweets -> models.tweet.findAll({ where: { user_id: }})

ROUTES TWEETS
POST /tweets -> models.tweet.create() ==> OK
GET / -> models.tweet.findAll() ==> OK
GET /tweets/:id -> models.tweet.findById() ==> OK

DELETE /tweets/:id -> models.tweet.del() OR models.tweet.update({ id: , state: 0 })

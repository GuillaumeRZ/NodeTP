# Node JS - TP P2019 - Twitter

Configurer votre .json pour la database + npm i pour les dépendencies
npm run db:sync pour synchroniser la BDD.

Tips:
ROUTES USERS
GET /users -> models.user.findAll()
GET / users/:id -> models.user.findById()
POST /user -> models.user.create()
DELETE /users/:id -> models.user.update() 

ROUTES TWEETS
GET / -> models.tweet.findAll()
GET /tweets/:id -> models.tweet.findById()
POST /tweets -> models.tweet.create()
DELETE /tweets/:id -> models.tweet.del() OR models.tweet.update({ id: , state: 0 })

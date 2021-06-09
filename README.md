### This repository is no longer maintained!

**For the most up to date test app to get you started on Heroku, head on over to [`node-js-getting-started`](https://github.com/heroku/node-js-getting-started).**

---

# node-js-sample

A barebones Node.js app using [Express](http://expressjs.com/).

## First Time Running

Make sure you have [Node.js](http://nodejs.org/) and the [PostgreSQL](https://www.postgresql.org/) installed.

```sh
git clone git@github.com:3akram/cm-backend-challenge.git # or clone your own fork
cd cm-backend-challenge
npm install
npm run craete                  # for creating database
npm run migrate                 # for running all migrations
npm run seed                    # for seeding database
npm run dev
```

Your app should now be running on [localhost:3000](http://localhost:5000/).

## Docker RECOMMENDED

```
git clone git@github.com:3akram/cm-backend-challenge.git # or clone your own fork
cd cm-backend-challenge
docker-compose build
dokcer-compose run cm npm run db:create
docker-compose run cm npm run db:migrate
docker-compose run cm npm run db:seed:all
docker-compose up
```


# Endpoints

/api/coffee-machines

/api/coffee-pods







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

Coffee Machine Endpoint:- 

````
All
/api/coffee-machines

Large Coffee Machines
/api/coffee-machines?product_type=COFFEE_MACHINE_LARGE

Small Coffee Machines
/api/coffee-machines?product_type=COFFEE_MACHINE_SMALL

Espresso
/api/coffee-machines?product_type=ESPRESSO_MACHINE

Water Line Compatible 
/api/coffee-machines?water_line=true


Compined
/api/coffee-machine?water_line=true&product_type=COFFEE_MACHINE_SMALL

````


Coffee Pods Endpoint:- 

````
All
/api/coffee-pods

Product Types
/api/coffee-pods?product_type=COFFEE_POD_LARGE
/api/coffee-machines?product_type=COFFEE_POD_SMALL
/api/coffee-machines?product_type=ESPRESSO_POD

Coffee Flavors
/api/coffee-machines?coffee_flavor=COFFEE_FLAVOR_VANILLA
/api/coffee-machines?coffee_flavor=COFFEE_FLAVOR_CARAMEL
/api/coffee-machines?coffee_flavor=COFFEE_FLAVOR_PSL
/api/coffee-machines?coffee_flavor=COFFEE_FLAVOR_MOCHA
/api/coffee-machines?coffee_flavor=COFFEE_FLAVOR_HAZELNUT

Pack Sizes
/api/coffee-machines?pack_size=1
/api/coffee-machines?pack_size=3
/api/coffee-machines?pack_size=5
/api/coffee-machines?pack_size=7
````






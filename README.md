# 20MD: Redux / Animal Filter

This repository contains 2 different projects.
One uses local storage for saving items, but second uses backend db and RTK Query

## Animal Filter using only Redux

To start run `npm install` and `npm run dev` commands.


## Animal Filter using RTK Query

### backend

Create Docker container for db.
Run `docker pull mongo` and `docker run --name animalsApp -d -p 27017:27017 mongo`

To start server run `npm install` and then `npm run start:nodemon`

### frontend

To start frontend run `npm install` and `npm run dev` commands.

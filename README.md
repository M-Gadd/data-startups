# Metrics API

A simple data presenting app.

## Features

- [x] Docker containers
- [x] React Hooks
- [x] Node.js API
- [x] Heroku Deployment
- [x] CI/CD Travis integration

## Getting started:

- Starting the app with docker-compose

```bash
$ clone the repo
$ cd into the repo
$ docker-compose up
```

Then you can open the React frontend at localhost:3000 and the Node API at localhost:5000

Changing any frontend (React) code locally will cause a hot-reload in the browser with updates and changing any backend (Node) code locally will also automatilly update any changes.

- Starting the app without docker-compose

```bash
$ clone the repo
$ cd into the repo
$ cd client && yarn start && cd .. && cd server && npm run dev
```

Then you can open the React frontend at localhost:3000 and the Node API at localhost:5000

## TODO:

- Fix misalignment and padding of elements
- Make the app responisve on screens
- Choose different color schema
- Improve pagination logic (on frontend or directly sending pagination requests to the backend)
- Add materialize pagination style
- Integrate database to keep track of records
- Read company logo's from a database rather than frontend
- Update correct icons
- Implement the search logic

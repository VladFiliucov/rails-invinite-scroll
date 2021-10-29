# Rails infinite scroll

Infinite scroll with rails using stimulusjs

## Documentation

This README describes the purpose of this repository and how to set up a development environment.

## Prerequisites

This project requires:

* Ruby 2.7.2, preferably managed using [rbenv][]
* PostgreSQL must be installed and accepting connections
* [Redis][] must be installed and running on localhost with the default port

## Getting started

### bin/setup

Run the `bin/setup` script. This script will:

* Check you have the required Ruby version
* Install dependencies using Bundler and Yarn
* Create a `.env.development` file
* Create, migrate, and seed the database

### Run it!

1. Run `bin/rake` to run all tests and lint checks.
2. Start the app with `yarn start` or run these processes individually:
   - Rails: `bin/rails s -b 0.0.0.0`
   - Webpack: `bin/webpack-dev-server`
   - Sidekiq: `bin/sidekiq`

Access the app at <http://localhost:3000/>.

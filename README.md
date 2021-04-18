# goodgame-empire-api

API for expose data storage in database and consume in other future application.

## Important environment variables (.env)

* PORT: port to deploy app
* DB_USER: Database username
* DB_NAME: Database name
* DB_PASSWORD: Database user password
* DB_HOST: Server of the database

## Commands

* Run nodemon: npm run dev
* Run application: node src/index.js
* Run tests: npm run test
* Run linter: npm run lint
* Run lint and fix issues: npm run lint:fix
* Run pre-commit task: npm run precommit. Execute "lint-staged" command.

## Cors

Cors is enabled for all requests.

## Make with

* Core
  * express
  * mysql
  * dotenv
  * winston
  * cors
* Dev
  * nodemon
* Git
  * husky
  * lint-staged
* Test
  * jest
  * chai
  * sinon

## Routes

* Soldiers
  * /soldiers: returns all soldiers in the repository.
  * /soldiers/id: returns the soldier with the id received by parameter.


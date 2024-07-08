<div align="center">
  <h1>CRUD</h1>
</div>
<div align="center">
  <strong>for RESTful APIs built with NestJs</strong>
</div>

<br />

<div align="center">
  <a href="https://travis-ci.org/gid-oss/dataui-nestjs-crud">
    <img src="https://github.com/gid-oss/dataui-nestjs-crud/workflows/Tests/badge.svg" alt="Build" />
  </a>
  <a href="https://coveralls.io/github/gid-oss/dataui-nestjs-crud?branch=master">
    <img src="https://coveralls.io/repos/github/gid-oss/dataui-nestjs-crud/badge.svg" alt="Coverage" />
  </a>
  <a href="https://github.com/gid-oss/dataui-nestjs-crud/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/gid-oss/dataui-nestjs-crud.svg" alt="License" />
  </a>
  <a href="https://www.npmjs.com/package/@mavric/crud">
    <img src="https://img.shields.io/npm/v/@mavric/crud.svg" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/org/nestjsx">
    <img src="https://img.shields.io/npm/dm/@mavric/crud.svg" alt="npm downloads" />
  </a>
  <a href="https://renovatebot.com/">
    <img src="https://img.shields.io/badge/renovate-enabled-brightgreen.svg" alt="Renovate" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs welcome" />
  </a>
  <a href="https://github.com/marmelab/awesome-rest#nodejs">
    <img src="https://raw.githubusercontent.com/gid-oss/dataui-nestjs-crud/master/img/awesome-rest.svg?sanitize=true" alt="Awesome REST" />
  </a>
  <a href="https://github.com/juliandavidmr/awesome-nestjs#components--libraries">
    <img src="https://raw.githubusercontent.com/gid-oss/dataui-nestjs-crud/master/img/awesome-nest.svg?sanitize=true" alt="Awesome Nest" />
  </a>
  <a href="https://github.com/nestjs/nest">
    <img src="https://raw.githubusercontent.com/gid-oss/dataui-nestjs-crud/master/img/nest-powered.svg?sanitize=true" alt="Nest Powered" />
  </a>
</div>

<div align="center">
  <sub>Built with :purple_heart: by
  <a href="https://twitter.com/MichaelYali">@MichaelYali</a> and
  <a href="https://github.com/gid-oss/dataui-nestjs-crud/graphs/contributors">
    Contributors
  </a>
  <div align="center">
    :star2: :eyes: :zap: :boom:
  </div>
</div>

<br />

We believe that everyone who's working with NestJs and building some RESTful services and especially some CRUD functionality will find `@mavric/crud` microframework very useful.

## Features

<img align="right" src="https://raw.githubusercontent.com/gid-oss/dataui-nestjs-crud/master/img/crud-usage2.png" alt="CRUD usage" />

- :electric_plug: Super easy to install and start using the full-featured controllers and services :point_right:

- :octopus: DB and service agnostic extendable CRUD controllers

- :mag_right: Reach query parsing with filtering, pagination, sorting, relations, nested relations, cache, etc.

- :telescope: Framework agnostic package with query builder for a frontend usage

- :space_invader: Query, path params and DTOs validation included

- :clapper: Overriding controller methods with ease

- :wrench: Tiny config (including globally)

- :gift: Additional helper decorators

- :pencil2: Swagger documentation

## Install

yarn add @mavric/crud-typeorm

## Packages

- [**@mavric/crud**](https://www.npmjs.com/package/@mavric/crud) - core package which provides `@Crud()` decorator for endpoints generation, global configuration, validation, helper decorators ([docs](https://gid-oss.github.io/dataui-nestjs-crud/controllers/#description))
- [**@mavric/crud-request**](https://www.npmjs.com/package/@mavric/crud-request) - request builder/parser package which provides `RequestQueryBuilder` class for a frontend usage and `RequestQueryParser` that is being used internally for handling and validating query/path params on a backend side ([docs](https://gid-oss.github.io/dataui-nestjs-crud/requests/#frontend-usage))
- [**@mavric/crud-typeorm**](https://www.npmjs.com/package/@mavric/crud-typeorm) - TypeORM package which provides base `TypeOrmCrudService` with methods for CRUD database operations ([docs](https://gid-oss.github.io/dataui-nestjs-crud/service-typeorm/))

## Documentation

- :dart: [General Information](https://gid-oss.github.io/dataui-nestjs-crud/)
- :video_game: [CRUD Controllers](https://gid-oss.github.io/dataui-nestjs-crud/controllers/#description)
- :horse_racing: [CRUD ORM Services](https://gid-oss.github.io/dataui-nestjs-crud/services/)
- :trumpet: [Handling Requests](https://gid-oss.github.io/dataui-nestjs-crud/requests/#description)

## Build library and run tests

```
yarn install
yarn clean
yarn build
docker compose up -d
yarn test:coverage
```

## Make a release

- Merge a PR on master.
- Pull and checkout master
- Update Changelog and commit
- Run tests `docker-compose up -d && yarn rebuild && yarn test:coverage`
- Run `yarn pub` - this will publish on the npm repo (need to be logged under dataui `yarn login`)

## Support

Any support is welcome. At least you can give us a star :star:

## Contributors

### Code Contributors

This project exists thanks to all the people who contributed. [[Contribute](CODE_OF_CONDUCT.md)].
<a href="https://github.com/gid-oss/dataui-nestjs-crud/graphs/contributors"><img src="https://opencollective.com/nestjsx/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

#### Organizations

Currently this project is NOT sponsored by anybody. Get in touch if you want to become a sponsor.

## License

[MIT](LICENSE)

# webpack-angular-material Starter
[![devDependency Status](https://david-dm.org/merlosy/webpack-angular-material/dev-status.svg)](https://david-dm.org/merlosy/webpack-angular-material#info=devDependencies)
[![Dependency Status](https://david-dm.org/merlosy/webpack-angular-material.svg)](https://david-dm.org/merlosy/webpack-angular-material)

## Features

- Webpack 2
- Angular 1.5.x
- Angular Material Design
- ES6 with Babel transpiler

## Install
```
npm install
```

## Commands
- Run as dev
```
npm run start
```
- Build sources (generate a /target folder)
```
npm run build
```
- Serve up the /target folder to test the production build (requires docker)
```
docker run -v $(pwd)/target:/usr/share/nginx/html:ro --rm -p 8080:80 nginx
```

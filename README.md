# JavaScript Orienteering Application
> An exploratory Vue.js project with an orienteering theme

Note that this is my first foray into full-stack JavaScript development and so I am likely making many faux pas. My approach here is to get something working functionally and then refine and apply best principles. However, if you wish to help me develop, then you are welcome to raise an issue against something I am doing wrong and let me know why it is wrong.

## Introduction
JavaScript webstacks have surged in popularity recently and, recognising the need to stay current, I have had it on my radar for a while to build such a webstack. The idea being that the JavaScript webstack I create would be used as a foundation for me trying out new ideas.

Initially, I decided to go with a ReactJS frontend, based on a recommendation from a colleague and its popularity, following a MERN (MongoDB, Express, React and Node) stack. But after many attempts over a long timespan, I decided that I was spending far too much time trying to get the tools working, which was detracting from the time I could be spending using my webstack to explore new and cool ideas.

After a tad of research (JavaScript fatigue is real), I switched to VueJS. My initial impression was very positive, it was very easy to get started with the excellent CLI and documentation. Based on the [Vue.JS webpack template](http://vuejs-templates.github.io/webpack/).

## Usage
Currently, several services have to be started to run the application. Ideally these should be combined into a single one.

``` bash
# Start the MongoDB daemon process
mongod

# Start the server
node server/index.js

# Start the main application
npm run dev

# --------------------------------------------------------
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test

```

## Future Work
 - Incorporate server code into dev-tools and hot reloading
 - Decide how to handle database errors i.e. how should they be presented to the user? (include retry if server is not around)
 - Mock MongoDB such that the application can be started without it (at least in a minimal state)

 - Switch to using `rem` as CSS sizing, avoid pixels

# JavaScript Orienteering Application
> An exploratory Vue.js project with an orienteering theme

Note that this is my first foray into full-stack JavaScript development and so I am likely making many faux pas. My approach here is to get something working functionally and then refine and apply best principles. However, if you wish to help me develop, then you are welcome to raise an issue against something I am doing wrong and let me know why it is wrong.

## Introduction
JavaScript webstacks have surged in popularity recently and, recognising the need to stay current, I have had it on my radar for a while to build such a webstack. The idea being that the JavaScript webstack I create would be used as a foundation for me trying out new ideas.

Initially, I decided to go with a ReactJS frontend, based on a recommendation from a colleague and its popularity, following a MERN (MongoDB, Express, React and Node) stack. But after many attempts over a long timespan, I decided that I was spending far too much time trying to get the tools working, which was detracting from the time I could be spending using my webstack to explore new and cool ideas.

After a tad of research (JavaScript fatigue is real), I switched to VueJS. My initial impression was very positive, it was very easy to get started with the excellent CLI and documentation. Based on the [Vue.JS webpack template](http://vuejs-templates.github.io/webpack/).

## Usage
Currently, several services have to be started to run the application. Ideally these should be combined into a single one. It doesn't seem possible to do using NPM scripts. NPM scripts can use `&&` but the `mongod` command runs until it is killed. [Pre and post hooks](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/#pre-and-post-hooks) seemed like an option, but here there are 3 commands to merge, plus [shutting down the database when finished](http://antrikshy.com/blog/run-mongodb-automatically-nodejs-project), which is too many. Perhaps some other task runner is needed like Gulp or Grunt?

``` bash
# Start the MongoDB daemon process
mongod

# Start the API server
node api/index.js

# Start the main application
npm run dev

```

## Future Work
 - Incorporate server code into dev-tools and hot reloading
 - Decide how to handle database errors i.e. how should they be presented to the user? (include retry if server is not around)
 - Mock MongoDB such that the application can be started without it (at least in a minimal state)

 - Switch to using `rem` as CSS sizing, avoid pixels

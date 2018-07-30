<template>
  <div id="app">
    <Top></Top>
    <main>
      <router-view></router-view>
    </main>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Top from './components/common/Top.vue'
import Bottom from './components/common/Bottom.vue'

export default {
  name: 'app',
  components: {Top, Bottom}
}
</script>

<style>
/* --------------------------------- Common -------------------------------- */
html, body {
  height: 100%;
  background-color: #333;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #EEE;

  min-height: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

h1 {
  text-align: left;
  font-size: 3em;
}

main {
  display: grid;
  /* grid-template-columns: repeat(12, 1fr); */

  align-items: center;
  min-height: calc(100vh - 10em);
}

main, header, footer {
  grid-column: 2 / 12;
  align-self: center;
}

main {
  margin-bottom: 1em;
}

a, a:visited {
  color: darkorange;
}

a:hover, a:focus {
  color: orangered;
}

button, input[type='submit'] {
  background-color: darkorange;
  box-shadow: 5px 5px 0px rgba(255, 115, 0, 0.2);
}

button:hover, button:focus,
input[type='submit']:hover, input[type='submit']:focus {
  background-color: orangered;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.267);
  cursor: pointer;
}

button:active, input[type='submit']:active {
  box-shadow: inset 5px 5px 0 rgba(0, 0, 0, 0.6), 5px 5px 0px orangered;
}

.dark {
  background-color: #111;
  color: #EEE;
}

/* ------------------------------- Navigation ------------------------------ */
nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

nav li {
    display: inline;
}

nav li a {
    text-align: center;
    padding: 8px 16px;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
}

nav a:hover, nav a:focus {
  border-bottom: 5px solid orangered;
}

/* ------------------------- headlines with lines -------------------------- */
/* From: https://stackoverflow.com/a/23155413/1433614 */
.decorated{
     overflow: hidden;
     text-align: center;
     line-height: 2em;
     font-size: 1.25em;
 }
.decorated > span{
    position: relative;
    display: inline-block;
}
.decorated > span:before, .decorated > span:after{
    content: '';
    position: absolute;
    top: 50%;
    border-bottom: 2px solid;
    width: 591px; /* half of limiter*/
    margin: 0 20px;
}
.decorated > span:before{
    right: 100%;
}
.decorated > span:after{
    left: 100%;
}
</style>

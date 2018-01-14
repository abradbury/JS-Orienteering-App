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
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #333;

  min-height: 100%;
}

main {
  display: grid;
  align-items: center;
  min-height: calc(100vh - 10em);
}

.dark {
  background-color: #333;
  color: #EEE;
}

.dark a {
  color: #EEE;
}

/* ------------------------------- Navigation ------------------------------ */
nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

nav li {
    display: inline;
}

nav li a {
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

nav a:hover, nav a:focus {
  border-bottom: 5px solid red;
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

<template>
  <div id="app">
    <Top></Top>
    <main>
      <p>Something from app</p>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

div, footer, header, main {
  border: 1px solid red;
}

/* https://stackoverflow.com/a/23155413/1433614 */
/* headlines with lines */
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

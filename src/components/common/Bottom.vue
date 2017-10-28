<template>
  <footer class="bottom dark">
    <div class="aboveFold">
        <h1>{{ msg }} (above fold)</h1>
    </div>
    <div class="belowFold">
        <h1>{{ msg }} (below fold)</h1>
        <nav>
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/club">Club</router-link></li>
            <li><router-link to="/event">Event</router-link></li>
            <li><router-link to="/person">Person</router-link></li>
            <li><router-link to="/login">Login</router-link></li>
          </ul>
        </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {
      msg: 'footer'
    }
  }
}
</script>

<<style>
/* Below fold from: https://stackoverflow.com/a/8993666/1433614 */
/* footer .belowFold {
    position: absolute;
    top:100%;
    left:0px;
    right:0px;
} */

footer .belowFold nav ul {
  background-color: red;
  /* display: grid; */
  /* grid-template-rows: 1fr 1fr; */
  /* grid-template-columns: auto; */
}
</style>

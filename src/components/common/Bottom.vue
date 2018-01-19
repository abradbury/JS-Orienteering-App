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
            <li><router-link to="/clubs">Clubs</router-link></li>
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
footer {
  display: grid;
  align-items: center;
}

footer .aboveFold {
  background-color: green;
  height: 5em;
}

footer .belowFold {
  background-color: blue;
}

footer .belowFold nav ul {
  background-color: red;
  /* display: grid; */
  /* grid-template-rows: 1fr 1fr; */
  /* grid-template-columns: auto; */
}
</style>

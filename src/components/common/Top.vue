<template>
  <header class="top">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/club/syo">Club</router-link></li>
        <li><router-link to="/event">Event</router-link></li>
        <li style="float:right"><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      msg: 'Da head, dis be'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: #EEE;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}


/* Change the link color to #111 (black) on hover */
li a:hover {
    background-color: #111;
}
</style>

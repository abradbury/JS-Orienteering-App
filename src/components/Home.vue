<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <SearchBar></SearchBar>
  </div>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'home',
  components: {SearchBar},
  data () {
    return {
      msg: 'DIS IS DA HOME PAGE'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <footer class="bottom">
    <h1>{{ msg }}</h1>
  </footer>
</template>

<script>
export default {
  name: 'bottom',
  data () {
    return {
      msg: 'Da foot, dis be'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

footer {
  background-color: #333;
  color: #EEE;
}

</style>

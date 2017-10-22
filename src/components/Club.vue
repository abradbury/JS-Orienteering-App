<template>
  <div class="club">
    <h1>{{ id.toUpperCase() }}</h1>
  </div>
</template>

<!-- FIXME: Isn't printing the URI props like this a risk? -->

<script>
export default {
  name: 'club',
  props: ['id'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div class="fourOhFour">
    <h1>Oops</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<!-- FIXME: Isn't printing the URI props like this a risk? -->

<script>
export default {
  name: 'fourOhFour',
  data () {
    return {
      msg: this.$route.path + ' does not exist'
    }
  }
}
</script>

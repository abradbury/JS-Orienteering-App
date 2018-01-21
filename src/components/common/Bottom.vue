<template>
  <footer class="bottom dark">
    <div class="aboveFold">
        <h1>{{ msg }} (above fold)</h1>
    </div>
    <div class="belowFold">
        <h1>{{ msg }} (below fold)</h1>
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
  height: 5em;
}

footer .belowFold {
  border-top: 0.5px solid darkorange;
}
</style>

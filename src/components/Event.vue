<template>
  <div class="events">
    <h1>{{ msg }}</h1>
    <h2>Value from store: {{str}}</h2>
    <p>Simulating delay...</p>

    <table>
      <thead>
        <tr>
          <th scope="col">Venue</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="venue in allVenues" v-bind:key="venue">
          <td>{{ venue }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'events',
  data () {
    return {
      msg: 'Events'
    }
  },
  mounted: function () {
    this.getAllVenues()
  },
  methods: {
    getAllVenues () {
      this.$store.dispatch('getAllVenues').then(() => {
        console.log('actions completed')
      }).catch((e) => {
        console.error('oops: %o', e)
      })
    }
  },
  computed: {
    // if gets too complex, check out mapState, mapGetters
    str () {
      return this.$store.state.a.counter
    },
    allVenues () {
      return this.$store.state.venues.allVenues
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
}

tr {
  line-height: 2em;
}

thead {
  background-color: #CCC;
}

tbody tr:hover {
  background-color: #EEE;
}

table, th, td {
  border: 1px solid #333;
}

</style>

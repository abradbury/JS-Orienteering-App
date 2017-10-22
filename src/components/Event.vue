<template>
  <div class="events">
    <h1>{{ msg }}</h1>
    <h2>From store: {{str}}</h2>
    <!-- <h2>From AJAX store: {{allVenues}}</h2> -->
    <!-- <button @click="getAllVenues">AJAX Test</button> -->

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
      msg: '\'vents paaage init'
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

  table {
    width: 100%;
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
    border: 1px solid red;
  }

</style>

<template>
  <div class="clubs">
    <h1>{{ msg | capitalize }}</h1>
    <p>{{ allClubs.length }} clubs found</p>

    <table>
      <thead>
        <tr>
          <th scope="col">Clubs</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="club in allClubs" v-bind:key="club.id">
          <td class="club-result">
            <div class="club-result-image">
              <img v-if="club.name === 'AIRE'" src="../assets/img/club/logos/full/159474f9ff503ef6f77ef885262bf52bb8a1b49a.jpg" />
              <img v-else src="http://via.placeholder.com/150x150" />
            </div>
            <div class="club-result-text">
              <h2>{{ club.name }}</h2>
              <small>{{ club.fullName }}</small>
              <p>Club website: <a v-bind:href="club.website">{{ club.website }}</a></p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<!-- FIXME: Isn't printing the URI props like this a risk? -->

<script>
export default {
  name: 'clubs',
  props: ['id'],
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  data () {
    return {
      msg: 'clubs'
    }
  },
  mounted: function () {
    this.getAllClubs()
  },
  methods: {
    getAllClubs () {
      this.$store.dispatch('getAllClubs').then(() => {
        console.log('actions completed')
      }).catch((e) => {
        console.error('oops: %o', e)
      })
    }
  },
  computed: {
    allClubs () {
      return this.$store.state.clubs.allClubs
    }
  }
}
</script>

<style scoped>
table {
  margin: 0 auto;
}

.club-result {
  padding: 1em;
  margin: 1em;
  border-bottom: 1px solid darkorange;
  border-top: 1px solid darkorange;
}

.club-result-image, .club-result-text {
  text-align: initial;
}

.club-result-image {
  float: left;
  margin-right: 1em;
}

.club-result-image img {
  max-width: 150px;
}

</style>

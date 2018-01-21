<template>
  <div class='person'>
    <h1>{{ person.name }}</h1>
    <table>
      <caption class="decorated"><span>{{caption}}</span></caption>
      <thead>
        <tr>
          <th v-for="key in columns" v-bind:key="key" scope="col">
            {{ key | capitalize }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="run in runs" v-bind:key="run.id">
          <td v-for="key in columns" v-bind:key="key">
            {{ run[key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'person',
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  data () {
    return {
      person: {
        name: 'John Smith',
        current_club: 'SYO',
        current_age_class: 'M50'
      },
      caption: 'Your runs',
      columns: ['date', 'name', 'venue'],
      runs: [
        {
          date: '2012-04-23T18:25:43.511Z',
          name: 'Evening Event',
          venue: 'Canklow Woods',
          level: 'D',
          type: 'Classic',
          organisingClub: 'SYO',
          course: 'Green',
          ageClass: 'W50',
          time: '00:39:12.000Z',
          id: 12346
        }, {
          date: '2012-04-23T18:25:43.511Z',
          name: 'Evening Event',
          venue: 'Canklow Woods',
          level: 'D',
          type: 'Classic',
          organisingClub: 'SYO',
          course: 'Green',
          ageClass: 'W50',
          time: '00:39:12.000Z',
          id: 12347
        }, {
          date: '2012-04-23T18:25:43.511Z',
          name: 'Evening Event',
          venue: 'Canklow Woods',
          level: 'D',
          type: 'Classic',
          organisingClub: 'SYO',
          course: 'Green',
          ageClass: 'W50',
          time: '00:39:12.000Z',
          id: 12348
        }, {
          date: '2012-04-23T18:25:43.511Z',
          name: 'Evening Event',
          venue: 'Canklow Woods',
          level: 'D',
          type: 'Classic',
          organisingClub: 'SYO',
          course: 'Green',
          ageClass: 'W50',
          time: '00:39:12.000Z',
          id: 12349
        }, {
          date: '2012-04-23T18:25:43.511Z',
          name: 'Evening Event',
          venue: 'Canklow Woods',
          level: 'D',
          type: 'Classic',
          organisingClub: 'SYO',
          course: 'Green',
          ageClass: 'W50',
          time: '00:39:12.000Z',
          id: 12340
        }, {
          date: '2012-04-23T18:25:43.511Z',
          name: 'Evening Event',
          venue: 'Canklow Woods',
          level: 'D',
          type: 'Classic',
          organisingClub: 'SYO',
          course: 'Green',
          ageClass: 'W50',
          time: '00:39:12.000Z',
          id: 12341
        }

      ]
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  table {
    width: 100%;
    padding: 5px;
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
</style>

<template>
  <div class='club'>
    <h1>{{ club.name }}</h1>
    <div class="intro">
      <img src='../assets/img/club/logos/full/syo_logo.svg'/>
      <dl>
        <dt>Founded</dt>
        <dd>1962</dd>
        <dt>Association</dt>
        <dd><abbr title="Yorkshire and Humberside Orienteering Association">YHOA</abbr></dd>
        <dt>Area covered</dt>
        <dd>South Yorkshire (Sheffield, Rotherham, Doncaster)</dd>
      </dl>
    </div>

    <div class='stats graph'>
      <h2>Estimated Active Membership Over Time</h2>
      <!-- <BarChart :data='club_member_agg'></BarChart> -->
      <LineChart :data='club_member_agg'></LineChart>
    </div>

    <div class='stats numberWithHistory'>
      <h2>Current Estimated Active Membership</h2>
      <p>203</p>
      <div class='statsMoreInfo'>
        <span>Last updated March 2018</span>
        <span><a href=''>View change over time</a></span>
      </div>
    </div>

    <div class='stats'>
      <h2>Club tourists</h2>
      <!-- A map showing the club boundary and where the club's
      member's often go to orienteer i.e. tourist-->
      <p>Members of {{club.shortName}}</p>
    </div>

  </div>
</template>

<script>
import BarChart from './stats/BarChart.vue'
import LineChart from './stats/LineChart.vue'

export default {
  name: 'club',
  components: {BarChart, LineChart},

  data () {
    return {
      club: {
        name: 'South Yorkshire Orienteers',
        shortName: 'SYO',
        intro:
          'SYO is the local orienteering club for the Sheffield, Doncaster, Rotherham and Barnsley area. Orienteering is an adventure sport for all ages.'
      },
      // An estimate of the active club membership
      // Based on members running X times per year
      club_member_agg: [
        { date: new Date('1973-01-01'), count: 26 },
        { date: new Date('1974-01-01'), count: 29 },
        { date: new Date('1975-01-01'), count: 29 },
        { date: new Date('1976-01-01'), count: 45 },
        { date: new Date('1977-01-01'), count: 44 },
        { date: new Date('1978-01-01'), count: 66 },
        { date: new Date('1979-01-01'), count: 105 },
        { date: new Date('1980-01-01'), count: 171 },
        { date: new Date('1981-01-01'), count: 187 },
        { date: new Date('1982-01-01'), count: 225 },
        { date: new Date('1983-01-01'), count: 227 },
        { date: new Date('1984-01-01'), count: 208 },
        { date: new Date('1985-01-01'), count: 217 },
        { date: new Date('1986-01-01'), count: 232 },
        { date: new Date('1987-01-01'), count: 225 },
        { date: new Date('1988-01-01'), count: 256 },
        { date: new Date('1989-01-01'), count: 376 },
        { date: new Date('1990-01-01'), count: 441 },
        { date: new Date('1991-01-01'), count: 457 },
        { date: new Date('1992-01-01'), count: 450 },
        { date: new Date('1993-01-01'), count: 460 },
        { date: new Date('1994-01-01'), count: 425 },
        { date: new Date('1995-01-01'), count: 390 },
        { date: new Date('1996-01-01'), count: 388 },
        { date: new Date('1997-01-01'), count: 396 },
        { date: new Date('1998-01-01'), count: 386 },
        { date: new Date('1999-01-01'), count: 347 },
        { date: new Date('2000-01-01'), count: 388 },
        { date: new Date('2001-01-01'), count: 332 },
        { date: new Date('2002-01-01'), count: 254 },
        { date: new Date('2003-01-01'), count: 237 },
        { date: new Date('2004-01-01'), count: 263 },
        { date: new Date('2005-01-01'), count: 208 },
        { date: new Date('2006-01-01'), count: 228 },
        { date: new Date('2007-01-01'), count: 236 },
        { date: new Date('2008-01-01'), count: 234 },
        { date: new Date('2009-01-01'), count: 224 },
        { date: new Date('2010-01-01'), count: 217 },
        { date: new Date('2011-01-01'), count: 240 },
        { date: new Date('2012-01-01'), count: 238 }
      ]
    }
  }
}
</script>

<style scoped>
.club {
  display: grid;
}
.club img {
  height: 10em;
  width: auto;
}
.club > * {
  display: inline;
}
.stats {
  border: 1px solid red;
  grid-column: 1fr 1fr;
}
</style>

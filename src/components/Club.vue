<template>
  <div class='club'>
    <h1>{{ club.name }}</h1>
    <img src='https://via.placeholder.com/150x150'/>

    <div class='graph'>
      <h2>Estimated Active Membership Over Time</h2>
      <BarChart></BarChart>
    </div>

    <div class='numberWithHistory'>
      <h2>Current Estimated Active Membership</h2>
      <p>203</p>
      <div class='statsMoreInfo'>
        <span>Last updated March 2018</span>
        <span><a href=''>View change over time</a></span>
      </div>
    </div>

    <div>
      <h2>Club tourists</h2>
      <!-- A map showing the club boundary and where the club's
      member's often go to orienteer i.e. tourist-->
      <p>Members of {{club.shortName}}</p>
    </div>

  </div>
</template>

<script>
import BarChart from './stats/BarChart.vue'

export default {
  name: 'club',
  components: {BarChart},

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
        { year: '2018', count: 200 },
        { year: '2017', count: 192 },
        { year: '2016', count: 198 },
        { year: '2015', count: 187 },
        { year: '2014', count: 203 },
        { year: '2013', count: 184 },
        { year: '2012', count: 188 },
        { year: '2011', count: 178 },
        { year: '2010', count: 182 },
        { year: '2009', count: 167 },
        { year: '2008', count: 169 },
        { year: '2007', count: 164 },
        { year: '2006', count: 200 },
        { year: '2005', count: 200 },
        { year: '2004', count: 200 },
        { year: '2003', count: 200 },
        { year: '2002', count: 200 },
        { year: '2001', count: 200 },
        { year: '2000', count: 200 },
        { year: '1999', count: 200 },
        { year: '1998', count: 200 },
        { year: '1997', count: 200 },
        { year: '1996', count: 200 }
      ]
    }
  }
}
</script>

<style scoped>

</style>

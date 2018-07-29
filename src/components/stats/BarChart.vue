<template>
  <div class="mm">
    <svg class="chart"></svg>
    <svg class="chart2"></svg>
  </div>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'vue-line-chart',
  data () {
    return {
      data: [
        {date: Date('2018-01-01'), count: 99},
        {date: Date('2017-01-01'), count: 71},
        {date: Date('2016-01-01'), count: 78},
        {date: Date('2015-01-01'), count: 25},
        {date: Date('2014-01-01'), count: 36},
        {date: Date('2013-01-01'), count: 90}
      ],
      line: '',

      points: [],
      lastUpdated: ''
      // multiple series...
    }
  },
  mounted () {
    this.createBarChart()
    this.createLineChart()
  },
  methods: {
    createScales (data, width, height) {
      const xScale = d3.scaleTime()
        .domain([
          d3.min(data, function (d) { return d.date }),
          d3.max(data, function (d) { return d.date })
        ])
        .range([0, width])

      const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) { return d.count })])
        .range([0, height])
        .clamp(true)  // restrict to domain values

      return {xScale, yScale}
    },

    createAxis () {

    },

    createLineChart () {
      var width = 500
      var height = 400

      var [xScale, yScale] = this.createScales(this.data, width, height)

      var chart = d3.select('.chart2')
        .attr('width', width)
        .attr('height', height)

      var point = chart.selectAll('g')
        .data(this.data)
        .enter().append('g')
        .attr('transform', function (d, i) { return 'translate(0,20)' })

      point.append('path')
        .attr('d', d3.line()
          .x((d, i) => xScale(i))
          .y(d => yScale(d)))
    },

    createBarChart () {
      var width = 420
      var barHeight = 20

      // When the data is changed, this entire function is
      // executed again... this *could* be ok, given that
      // the data shouldn't change often, but I don't like it
      console.log('create bar chart called')

      var x = d3.scaleLinear()
          .domain([0, d3.max(this.data.map(a => a.count))])
          .range([0, width])

      var chart = d3.select('.chart')
          .attr('width', width)
          .attr('height', barHeight * this.data.length)

      var bar = chart.selectAll('g')
          .data(this.data.map(a => a.count))
        .enter().append('g')
          .attr('transform', function (d, i) { return 'translate(0,' + i * barHeight + ')' })

      bar.append('rect')
          .attr('width', x)
          .attr('height', barHeight - 1)

      bar.append('text')
          .attr('x', function (d) { return x(d) - 3 })
          .attr('y', barHeight / 2)
          .attr('dy', '.35em')
          .text(function (d) { return d })
    }
  }
}
</script>
<style>
/* svg {
  margin: 25px;
}
path {
  fill: none;
  stroke: #76BF8A;
  stroke-width: 3px;
} */

.chart rect {
  fill: steelblue;
}

.chart text {
  fill: white;
  font: 10px sans-serif;
  text-anchor: end;
}
</style>

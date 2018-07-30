<template>
  <svg class='chart'></svg>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'vue-bar-chart',
  props: {
    data: {
      required: true
    }
  },
  mounted () {
    this.createBarChart()
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

      return [xScale, yScale]
    },

    createAxis () {

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

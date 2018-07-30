<template>
  <svg class='chart'></svg>
</template>

<script>
import * as d3 from 'd3'

export default {
  name: 'vue-line-chart',
  props: {
    data: {
      required: true
    }
  },
  mounted () {
    this.createLineChart()
  },
  methods: {
    createScales (data, width, height) {

    },

    createAxis () {

    },

    createLineChart () {
      // var width = 420
      // var height = 150

      // var [x, y] = this.createScales(this.data, width, height)
      // console.log(xScale(12), yScale)

      var svg = d3.select('.chart')
          .attr('width', 400)
          .attr('height', 200)

      // var parsedData = this.data.map(element => {
      //   return {date: element.date, count: element.count}
      // })

      var margin = {top: 30, right: 30, bottom: 30, left: 40}
      var width = +svg.attr('width') - margin.left - margin.right
      var height = +svg.attr('height') - margin.top - margin.bottom

      var g = svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

      var x = d3.scaleTime()
          // extent returns the min and max for the given data
          .domain(d3.extent(this.data, function (d) { return d.date }))
          .rangeRound([0, width])

      var y = d3.scaleLinear()
          .domain([0, d3.max(this.data, function (d) { return d.count })])
          .rangeRound([height, 0])

      var line = d3.line()
          .x(function (d) { return x(d.date) })
          .y(function (d) { return y(d.count) })

      // Create x axis (bottom)
      g.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x))
        .append('text') // Axis name
          .attr('fill', '#EEE')
          .attr('x', width)
          .attr('dy', '-0.5em')
          .attr('text-anchor', 'end')
          .text('Year')
        .select('.domain')

      // Create y axis (left)
      g.append('g')
          .call(d3.axisLeft(y))
        .append('text') // Axis name
          .attr('fill', '#EEE')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '0.7em')
          .attr('text-anchor', 'end')
          .text('Number of members')

      // Create line
      g.append('path')
          .datum(this.data)
          .attr('fill', 'none')
          .attr('stroke', 'darkorange')
          .attr('stroke-width', 2)
          .attr('d', line)

      // Create points/dots
      g.selectAll('.dot')
        .data(this.data)
      .enter().append('circle')
        .attr('class', 'dot')
        .attr('cx', line.x())
        .attr('cy', line.y())
        .attr('stroke-width', 2)
        .attr('r', 3.5)
    }
  }
}
</script>
<style>
svg text {
  fill: #EEE;
}

svg .tick line, svg .domain {
  stroke: #EEE;
}

.dot {
  fill: #333;
  stroke: darkorange;
  stroke-width: 1.5px;
}
</style>

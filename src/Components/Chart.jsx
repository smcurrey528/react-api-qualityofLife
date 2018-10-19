import React, { Component } from 'react';
import * as d3 from "d3";


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score,
      width: 100,
      height: 50
    };
  }


  componentDidMount() {
   console.log('this is from D3', this.props.score)
    this.renderChart();
  }

  renderChart() {
    // xScale
    let colorScale = d3.scaleLinear().range(['lightgreen', 'green'])
    colorScale.domain(d3.extent(this.props.score, d => d.frequency))

    let scaleBandX = d3
      .scaleBand()
      .domain(d3.range(this.props.score.length))
      .range([10, this.state.width])
      .paddingInner(0.05);
    // yScale
    let scaleLinearY = d3.scaleLinear()
      .domain([0, d3.max(this.props.score, d => d.value)])
      .range([this.state.height, 0]);

    let scaleSequentialColor = d3
      .scaleSequential(d3.interpolatePiYG)
      .domain([0, this.props.score.length - 1]);

    let scaleLinearColor = d3.scaleLinear()
      .domain([0, d3.max(this.props.score, d => d.value)])
      .range(["green", "lightgreen"]);

    // create an svg
    let svg = d3
      .select(this.chart)
      .attr("width", this.state.width + 20)
      .attr("height", this.state.height);

    // DATA BIND
    let rects = svg.selectAll("rect").data(this.props.score);
    // ENTER
    rects
      .enter()
      .append("rect")
      .attr("x", d => scaleLinearY(d.value))
      .attr("y", (d, i) => scaleBandX(i))
      .attr("width", scaleBandX.bandwidth())
      .attr("height", d => this.state.height - scaleLinearY(d.value))
      .style("fill", (d,i) => scaleLinearColor(d.frequency))
      .style("fill", (d,i) => scaleLinearColor(d.value));

  }

  render() {
    return (
      <svg
        ref={node => (this.chart = node)}
        className="chart"
        width={this.state.width}
        height={this.state.height}
      />
    );
  }
}

export default Chart;

import React, { Component } from 'react';
import * as d3 from "d3";


class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score,
      width: 100,
      height: 10
    };
  }


  componentDidMount() {
   console.log('this is from D3', this.props.score)
    this.renderChart();
  }

  componentDidUpdate() {
    this.renderChart()
  }

  renderChart() {
    // xScale
    let colorScale = d3.scaleLinear().range(['lightgreen', 'green'])
    colorScale.domain(d3.extent(this.props.score, d => d.frequency))

    let scaleBandX = d3
      .scaleBand()
      .domain([0, 10])
      .range([10, this.state.width])
      // .paddingInner(0.05);



    let scaleSequentialColor = d3
      .scaleSequential(d3.interpolatePiYG)
      .domain([0, 10]);

    let scaleLinearColor = d3.scaleLinear()
      .domain([0, 10])
      .range(["lightblue", "blue"]);

    // create an svg
    let node = this.node
    // let svg = d3
    //   .select(node)
    //   .attr("width", this.state.width + 20)
    //   .attr("height", this.state.height);

    // DATA BIND
    let rects = d3.select(node).selectAll("rect").data([this.props.score])
    // ENTER
    rects
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", d => d*10)
      .attr("height", 10)

      .style("fill", (d,i) => scaleLinearColor(d))


  }

  render() {
    return (
      <svg
        ref={node => this.node = node}

        width='100'
        height='10'
      />
    );
  }
}

export default Chart;

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

    let scaleLinearColor = d3.scaleLinear()
      .domain([0, 10])
      .range(["red", "blue"]);

    // create an svg
    let node = this.node

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

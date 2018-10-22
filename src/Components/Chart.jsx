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
   console.log('this is from did Mount', this.props.score)
    this.renderChart();
  }

componentDidUpdate() {
  console.log('inside did update', this.props.score)
  this.renderChart();
}

renderChart() {
    let scaleLinearColor = d3.scaleLinear()
      .domain([0, 10])
      .range(["red", "blue"]);
    // create an svg
    let node = this.node
    // DATA BIND
    let oldrects= d3.select(node).selectAll("rect").remove()
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
      //Update
    rects
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

// import React, { Component } from 'react';
// import * as d3 from "d3";

// class Chart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataset: this.props.dataset,
//       width: 600,
//       height: 250
//     };
//   }

//   componentDidMount() {
//     this.renderChart();
//   }

//   renderChart() {
//     // xScale
//     let scaleBandX = d3
//       .scaleBand()
//       .domain(d3.range(dataset.length))
//       .range([20, this.state.width])
//       .paddingInner(0.05);
//     // yScale
//     let scaleLinearY = d3
//       .scaleLinear()
//       .domain([0, d3.max(dataset, d => d.value)])
//       .range([this.state.height, 0]);

//     let scaleSequentialColor = d3
//       .scaleSequential(d3.interpolatePiYG)
//       .domain([0, dataset.length - 1]);

//     let scaleLinearColor = d3
//       .scaleLinear()
//       .domain([0, d3.max(dataset, d => d.value)])
//       .range(["lightblue", "lightgreen"]);

//     // create an svg
//     let svg = d3
//       .select(this.chart)
//       .attr("width", this.state.width + 20)
//       .attr("height", this.state.height);
//     // DATA BIND
//     let rects = svg.selectAll("rect").data(dataset);
//     // ENTER
//     rects
//       .enter()
//       .append("rect")
//       .attr("x", (d, i) => scaleBandX(i))
//       .attr("y", d => scaleLinearY(d.value))
//       .attr("width", scaleBandX.bandwidth())
//       .attr("height", d => this.state.height - scaleLinearY(d.value))
//       .style("fill", (d,i) => scaleSequentialColor (i));
//       // .style("fill", d => scaleLinearColor(d.value));
//   }

//   render() {
//     return (
//       <svg
//         ref={node => (this.chart = node)}
//         className="chart"
//         width={this.state.width}
//         height={this.state.height}
//       />
//     );
//   }
// }

// export default Chart;

import React, { Component } from 'react';
import Chart from './Chart';

class CategoryItem extends Component {


  render() {
    return(
      <div className="info">
      <div className="score-summary">
      <h6 className="qolType"> {this.props.name}: </h6>
      <h6> {Math.floor(this.props.score)} </h6>

        <Chart score={this.props.score} />
      </div>

      </div>

      )
  }
}

export default CategoryItem;



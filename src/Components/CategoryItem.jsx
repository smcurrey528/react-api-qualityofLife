import React, { Component } from 'react';
import CityImage from './CityImage';

class CategoryItem extends Component {
  render() {
    return(
      <div>
      <CityImage />
      <div className="score-summary">
      <h3> {this.props.name} </h3>
       <h3> {this.props.score} </h3>
      </div>
      </div>

      )
  }
}

export default CategoryItem;

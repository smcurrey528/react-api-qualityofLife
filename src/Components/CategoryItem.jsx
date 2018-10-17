import React, { Component } from 'react';
import CityImage from './CityImage';

class CategoryItem extends Component {
  render() {
    return(
      <div>
      <CityImage />
      <div className="score-summary">
      <h3> {this.props.categories.name} </h3>
       <h3> {this.props.categories.score_out_of_10} </h3>
      </div>
      </div>

      )
  }
}

export default CategoryItem;

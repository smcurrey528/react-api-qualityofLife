import React, { Component } from 'react';
import CategoryItem from './CategoryItem.jsx';
import Chart from './Chart';

class Categories extends Component {
  render() {

    console.log('this is from categories', this.props.categories)
    let allScores = this.props.categories.map((d,index) => {
      return(
        <CategoryItem name={d.name} score={d.score_out_of_10} key={index} />

        )
    })
    return(
      <div>
      <h1> {allScores}  </h1>
      <Chart score={this.props.score} categories={this.props.categories}/>
      </div>

      )
  }
}

export default Categories;

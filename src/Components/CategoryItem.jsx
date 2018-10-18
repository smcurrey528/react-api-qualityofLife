import React, { Component } from 'react';


class CategoryItem extends Component {


  render() {
    // let roundUpScore = Math.floor({this.props.score})
    return(
      <div>
      <div className="score-summary">
      <h3> {this.props.name} </h3>
       <h3> {this.props.score} </h3>
      </div>
      </div>

      )
  }
}

export default CategoryItem;

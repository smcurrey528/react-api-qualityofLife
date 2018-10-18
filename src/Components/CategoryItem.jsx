import React, { Component } from 'react';


class CategoryItem extends Component {


  render() {
    // let roundUpScore = Math.floor({this.props.score})
    return(
      <div className="info">
      <div className="score-summary">
      <h6 className="qolType"> {this.props.name}: </h6>
       <h6> {Math.floor(this.props.score)} </h6>
      </div>
      </div>

      )
  }
}

export default CategoryItem;

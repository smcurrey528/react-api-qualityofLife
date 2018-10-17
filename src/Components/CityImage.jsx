import React, { Component } from 'react';

class CityImage extends Component {
  state ={
    value: ''
  }

  onInput(e) {
    this.setState({
      value: e.target.value
    })
  }

    onEnter(e) {
      e.preventDefault()
      this.getAPI()
    }

 getAPI() {
    let url =`https://api.teleport.org/api/urban_areas/slug:${this.props.value}/images/`
    fetch(url)
      .then(res => res.json() )
      .then(data => {
        console.log('this is from CityImage', data.image)
        this.setState(prevState => ({
          image: data.photos.image.web,

        }),

        )
      })
    }



  render() {
    return(
      <img src={this.props.image} alt="Cityscape"/>
      )
  }
}

export default CityImage;

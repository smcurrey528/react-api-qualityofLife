import React, { Component } from 'react';

class CityImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image:''
    }
  }

 getAPI() {
    let location= this.state.place;
    let url =`https://api.teleport.org/api/urban_areas/slug:san-francisco-bay-area/images/`
    fetch(url)
      .then(res => res.json() )
      .then(data => {
        this.setState(prevState => ({
          image: data.photos.image.web,

        }),

        )
      })
    }



  render() {
    return(
      <img src={this.state.image}/>
      )
  }
}

export default CityImage;

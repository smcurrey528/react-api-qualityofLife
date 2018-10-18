import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/Nav.jsx";
import Categories from './Components/Categories.jsx';
// import Chart from './Components/Chart';
// import * as d3 from "d3";

class App extends Component {
 constructor(props) {
  super(props)
  this.state = {
    summary: '',
    score: '',
    value: '',
    categories: [],
    location: '',
    init: true,



  }
 }

 getData() {
    let url =`https://api.teleport.org/api/urban_areas/slug:${this.state.value}/scores/`
    fetch(url)
      .then(res => res.json() )
      .then(data => {
        console.log('this is from getData', data.categories)
        this.setState(prevState => ({
          summary: data.summary,
          scoreTotal: Math.floor(data.teleport_city_score),
          name: data.categories.name,
          score: data.categories.score_out_of_10,
          value: '',
          categories: data.categories


        }),

        )
      })
    }

 getAPI() {
    let url =`https://api.teleport.org/api/urban_areas/slug:${this.state.value}/images/`
    fetch(url)
      .then(res => res.json() )
      .then(data => {
        console.log('this is from CityImage', data)
         this.setState(prevState => ({
        image: data.photos[0].image.web,

        }),

        )
       })
    }

  onInput(e) {
    this.setState({
      value: e.target.value
    })
  }

    onEnter(e) {
      e.preventDefault()
      this.getData()
      this.getAPI()
    }


  render() {

    let description = this.state.summary;
    description = description.replace(/<p>/g, ' ').replace(/<b>/g, ' ').replace(/</g, ' ').replace(/>/g, ' ').replace(/\/p/g, ' ').replace(/\/b/g, ' ')
    let cityName = this.state.value
    cityName= cityName.replace(/ /g, "-");


    return (
      <div className="App">
      <header>
      <Nav/>
       <img src="https://i.imgur.com/yxCvhFE.png" alt='background sunset'/>

      </header>

        <section>
       <h1> Pick A World Class City </h1>
        </section>
      <form className="form">
            <input
            value={cityName}
            onChange={(e) => this.onInput(e)}
            placeholder="Enter city name here..."
            />
         <button
            onClick={(e) => this.onEnter(e)}> SUMBIT
          </button>
     </form>
          <img className="cityImage" src={this.state.image} alt="Cityscape"/>
          <div> {cityName.toUpperCase()} </div>
            <h2> Overall Quality of Life Score: {this.state.scoreTotal}</h2>
            <p> {description} </p>
         <Categories categories={this.state.categories}/>

      </div>
    );
  }
}


export default App;



import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/Nav.jsx";
import Categories from './Components/Categories.jsx';


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
//data fetch for city scores and category names
 getData() {
    let url =`https://api.teleport.org/api/urban_areas/slug:${this.state.value}/scores/`
    fetch(url)
      .then(res => res.json() )
      .then(data => {
        console.log('this is from getData', data.categories)
        this.setState(prevState => ({
          summary: data.summary? data.summary : '',
          scoreTotal: Math.floor(data.teleport_city_score),
          name: data.categories ? data.categories.name : '',
          score: data.categories? data.categories.score_out_of_10 : '',
          value: '',
          categories: data.categories? data.categories : '',


        }),

        )
      })
    }
//data fetch for city images
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
//function for input
  onInput(e) {
    this.setState({
      value: e.target.value
    })
  }
//function for submit
    onEnter(e) {
      e.preventDefault()
      this.getData()
      this.getAPI()
    }

  render() {
    let description = this.state.summary;
    description = description.replace(/<p>/g, ' ').replace(/<b>/g, ' ').replace(/</g, ' ').replace(/>/g, ' ').replace(/\/p/g, ' ').replace(/\/b/g, ' ')
    let cityName = this.state.value
    cityName= cityName.replace(/ /g, "-")

    const cityImg = !this.state.image ? '' : <img className="cityImage" src={this.state.image} alt="Cityscape"/>
    const lifeScore = !this.state.score ? '' :  <h2> Overall Quality of Life Score: {this.state.scoreTotal}</h2>
     return (
      <div className="App">
        <header>
          <Nav/>
          <img className="logo" src="https://i.imgur.com/yxCvhFE.png" alt='background sunset'/>
        </header>
        <section>
          <h1> Pick A World Class City </h1>
        </section>
        <form className="form">
          <input
            className="enter"
            value={cityName}
            onChange={(e) => this.onInput(e)}
            placeholder="Enter city name here..."
          />
         <button
            className="button"
            onClick={(e) => this.onEnter(e)}> SUMBIT
          </button>
        </form>
            <section className="cityImage">
              { cityImg }
            </section>
          {lifeScore}
          <p> {description} </p>
          <Categories categories={this.state.categories}/>
        </div>

    );
  }
}


export default App;

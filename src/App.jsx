import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/Nav.jsx";
// import Categories from './Components/Categories.jsx';
import CityImage from './Components/CityImage'

class App extends Component {
 constructor(props) {
  super(props)
  this.state = {
    summary: '',
    score: '',
    value: '',
    categories: '',
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
    }


  render() {

    let description = this.state.summary;
    let cityName = this.state.value;

    return (
      <div className="App">
      <header>
      <Nav/>
       <img src="https://i.imgur.com/yxCvhFE.png" alt='background sunset'/>

      </header>

        <section>
       <h1> Pick A City </h1>
        </section>
          <form>
          <input value={this.state.value} onChange={(e) => this.onInput(e)}  placeholder="Enter city name here..."/>
         <button onClick={(e) => this.onEnter(e)}> SUMBIT
          </button>
          </form>
          <CityImage value={this.state.value} onChange={(e) => this.onInput(e)}/>
          <div> {cityName.toUpperCase()} </div>


         <ul>
          <li> Overall Quality of Life: {this.state.scoreTotal}</li>
          <li> {cityName} </li>
          <li> {description} </li>
          <div className="Housing">
          <li>  {this.state.housing}</li>
          <li> {this.state.housingScore}</li>
          </div>

          </ul>
      </div>
    );
  }
}


export default App;

 //<Categories categories={this.state.categories}/>

import React, { Component } from 'react';
import './App.css';
import Nav from "./Components/Nav.jsx";
import Categories from './Components/Categories.jsx';
import CityImage from './Components/CityImage'

class App extends Component {
 constructor(props) {
  super(props)
  this.state = {
    summary: '',
    score: '',
    place: '',
    categories: '',
    location: '',



  }
 }

 getData() {
    let location= this.state.value;
    let url =`https://api.teleport.org/api/urban_areas/slug:nashville/scores/`
    fetch(url)
      .then(res => res.json() )
      .then(data => {
        console.log(data.categories)
        this.setState(prevState => ({
          summary: data.summary,
          score: Math.floor(data.teleport_city_score),
          categories: data.categories,

        }),

        )
      })
    }



  onInput(e) {
    this.setState({
      location: e.target.value
    })
  }

    onEnter(e) {
      e.preventDefault()
      this.getData()
    }


  render() {
 console.log(this.state.categories)
    let description = this.state.summary
      let allScores = this.props.categories.map((d,index) => {
      return(
        <div> categories= {d.name} key={index} </div>
        )
    })
    return (
      <div className="App">
      <header>
      <Nav/>
       <img src="https://i.imgur.com/yxCvhFE.png"/>

      </header>

        <section>
       <h1> Pick A City </h1>
        </section>
          <form>
          <input onChange={(e) => this.onInput(e)}  placeholder="Enter city name here..."/>
         <button onClick={(e) => this.onEnter(e)}> SUMBIT
          </button>
          </form>
          <CityImage />
          <li> {this.state.categories[0]}</li>

         <ul>
          <li> {description} </li>
          <li> Overall Quality of Life: {this.state.score}</li>
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

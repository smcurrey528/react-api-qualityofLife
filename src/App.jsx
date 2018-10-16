import React, { Component } from 'react';
import './App.css';
import Nav from "./Nav.jsx";
import Categories from './Categories';

class App extends Component {
 constructor(props) {
  super(props)
  this.state = {
    summary: '',
    score: '',
    place: '',
    housing: '',
    location: '',
    housingScore: '',


  }
 }

 getData() {
    let location= this.state.place;
    let url =`https://api.teleport.org/api/urban_areas/slug:nashville/scores/`
    fetch(url)
      .then(res => res.json() )
      .then(data => {
        this.setState(prevState => ({
          summary: data.summary,
          score: Math.floor(data.teleport_city_score),
          housing: data.categories[0].name,
          housingScore: Math.floor(data.categories[0].score_out_of_10)
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

    let description = this.state.summary
    return (
      <div className="App">
      <header>
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
         <ul>
          <li> {description} </li>
          <li> Overall Quality of Life: {this.state.score}</li>
          <div className="Housing">
          <li>  {this.state.housing}</li>
          <li> {this.state.housingScore}</li>
          </div>
          <Categories summary={this.props.summary}/>
          </ul>
      </div>
    );
  }
}


export default App;

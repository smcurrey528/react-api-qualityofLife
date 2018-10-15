import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor(props) {
  super(props)
  this.state = {
    summary: '',
    score: '',
    place: '',
    housing: '',
    location: '',

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
          score: data.teleport_city_score,
          housing: data.categories[0].name})
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
    return (
      <div className="App">
          <h1> Quality of Life </h1>
          <form>
          <input onChange={(e) => this.onInput(e)}  placeholder="Enter city name here..."/>
         <button onClick={(e) => this.onEnter(e)}> SUMBIT
          </button>
          </form>
         <ul>
          <li> {this.state.summary} </li>
          <li> {this.state.score}</li>
          <li>  {this.state.housing}</li>
          </ul>
      </div>
    );
  }
}


export default App;

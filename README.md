# QualLi Project Overview
![](https://i.imgur.com/yxCvhFE.png)

## Project Schedule

This is my schedule I will use to keep track of my progress throughout the week and align with my client's expectations.  


|  Day | Deliverable | Status
|---|---| ---|
|Monday, Oct 15th| Project Description | Complete 
|Tuesday, Oct 16th| Wireframes / Priority Matrix / Functional Components | Complete
|Wednesday, Oct 17th| Core Application Structure (HTML, CSS, etc.) | Complete
|Thursday, Oct 18th| Pseudocode / actual code | Complete
|Friday, Oct 19th| Initial Clickable Model  | Complete
|Sunday, Oct 21st| MVP | Complete
|Monday, Oct 22nd| Present | Complete


## Project Description

QualLi is a web application built in React.js, which the user will be able to select a top city in the world from a dropdown, and the site will return Quality of Life score. This information will be feteched from the Teleport Public Api and will incorporate 25 components. 

## Wireframes

Overview of Priorities/Wireframes/MVP 
</br> 
https://i.imgur.com/Z0mZGkM.jpg

Priority Matrix: 
</br> 
https://i.imgur.com/I4T0SX6.jpg

Wireframe: 
</br> 
https://i.imgur.com/YArAgKB.jpg

MVP/Post-MVP: 
</br> 
https://i.imgur.com/aMivvqN.jpg


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.  

### MVP/PostMVP - 5min

The functionality is divided into two separate lists: MPV and PostMVP.  The Minimimum Viable Product (MVP) will be the items that are incorporated into the application, and the Post-MVP items will be added if there is enough time.

Image of MVP and Post-MVP:
</br> 
https://i.imgur.com/aMivvqN.jpg

#### MVP 

- Find and use external api 
- Render data on page 
- Minimum 3 components
- Conditional Rendering
- CRA Built
- Deployed via GitHub

#### PostMVP 

- D3
- CSS Animations
- Routing
- Local Storage
- Comparsions

## React Architectural Design

Architectural Design:
</br> 

https://i.imgur.com/0Xkwjvy.jpg

The main component will be the APP which will contain the "Header", "Menu", and "Categories." The Header will contain the Nav. The Menu will contain the Hero Image. The Categories will hold the following components: 
Catergory Items
D3 Chart
Compare

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will render the app and include the API fetch call and other components | 
| Nav | This will render the header include the nav |
| Categories | This will render the mapped category list |  
| CategoryItems | This will render the mapped category items individual sections | 
| CityImage | This will render the input value's background image |   
| Chart | This will render the D3 of the data from the API | 
| Compare | This will render a comparision page of different cities |


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Menu| H | 1hrs| .5hrs | .5hrs |
| Fetch API| H | 1hrs| 1hrs | 1hrs |
| Creating Components| H | 3hrs| 3hrs | 3hrs |
| Working with API | H | 4hrs| 5hrs | 5 |
| Conditional Rendering| L | 2hrs| 1hrs | 1hrs |
| HTML and CSS| L | 3hrs| 5hrs | 5hrs |
| CRA Built| H | .10hrs| .10hrs | .10hrs |
| Deployed via GitHub| H | .05hrs| .05hrs | .05hrs |
| D3| L | 3hrs| 8hrs | 7hrs |
| CSS Animations| L | 3hrs| 0hrs | 0hrs |
| Routing| L | 3hrs| 1hrs | 1hrs |
| Mobile Responsive| H | 3hrs| 2hrs | 2hrs |
| Comparisons| L | 5hrs| 8hrs | 8hrs |
| Total | H | 36.15hrs| 34.65hrs | 34.65hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This capitalized the first letter in a string of text |
| Replace | This replaced the html tags in the summary rendering |  


## Additional Libraries
D3: D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of the widely implemented SVG, HTML5, and CSS standards. This will be used to better visualize the data of the quality of life scores. 

## Code Snippet

This is a code snippet of my D3.js functionality, and this is being passed the this.props.score from the App all the way down. I'm using 

```
import React, { Component } from 'react';
import * as d3 from "d3";



class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.score,
      width: 100,
      height: 10
    };
  }


componentDidMount() {
   console.log('this is from D3', this.props.score)
    this.renderChart();
  }

renderChart() {
    let scaleLinearColor = d3.scaleLinear()
      .domain([0, 10])
      .range(["red", "blue"]);
    // create an svg
    let node = this.node
    // DATA BIND
    let rects = d3.select(node).selectAll("rect").data([this.props.score])
    // ENTER
    rects
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", d => d*10)
      .attr("height", 10)
      .style("fill", (d,i) => scaleLinearColor(d))
  }

  render() {
    return (
      <svg
        ref={node => this.node = node}
        width='100'
        height='10'
      />
    );
  }
}

export default Chart;
```

## Change Log
 The main changes were cutting down on my components since I mapped through the array so I used two main components to render the data list. I also decided to use an input form field instead of the dropdown menu with the 300 options.

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: App.jsx:26 Uncaught (in promise) SyntaxError: Unexpected token S in JSON at position 0
    at App.jsx:26                               
**RESOLUTION**: 


**ERROR**: this.props.categories.map is not a function                              
**RESOLUTION**: The props were not being passed all the way through from the App so needed to go back and console.log

**ERROR**: Broken image tag on the city                              
**RESOLUTION**: I used conditional rendering to ensure that the broken image tag showed an empty string if it was not being called or there was no input. 

**ERROR**: Misspelling the value input causing it to break                              
**RESOLUTION**: I went through and solved a lot of the errors but it would error off in different ways like no S in Json and this.props.maps not a function the city                              


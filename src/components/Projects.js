import React, { Component } from 'react';
import { Tabs, Tab, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
  // React projects in tab 1
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '300px', margin: '2rem', borderRadius: '10px'}}>
            <CardTitle style={{color: '#fff', height: '220px', background: 'url(./music.jpg) top, center / cover'}} >Music From My Year</CardTitle>
            <CardText>
            A React App that uses Spotify API. Summer Project 2020, Helsinki Business College. Team: Laura Pohjanpalo, Elisabet Laitinen, Katariina Vuorinen.
            </CardText>
            <CardActions border>
            <a href="https://github.com/lapohjan/music-app/tree/dev-branch" target="__blank">
              <Button colored>GitHub</Button>
            </a>
            <a href="https://lauratellervo.fi/mymusic/" target="__blank">
              <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '300px', margin: '2rem', borderRadius: '10px'}}>
            <CardTitle style={{color: '#000000', height: '220px', background: 'url(./socialnetwork.jpg) center / cover'}} >Social Network</CardTitle>
            <CardText>
              A social network app for messaging. Using React with Redux, Firebase and Materialize. Key features: Firebase Authentication, Firebase database, message board, new post -form, timestamp and notifications.
            </CardText>
            <CardActions border>
            <a href="https://github.com/lapohjan/social-network" target="__blank">
              <Button colored>GitHub</Button>
              </a>
              <a href="https://network-3c607.web.app/" target="__blank">
              <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '300px', maxWidth: '500px', margin: '2rem', borderRadius: '10px'}}>
            <CardTitle style={{color: '#fff', height: '220px', background: 'url(./speedgame.jpg) center / cover'}} >Speed Game</CardTitle>
            <CardText>
              A speed game done with React. Catch the hamster as the speed goes up. Score is shown when the game is over. Includes a custom cursor. 
            </CardText>
            <CardActions border>
            <a href="https://github.com/lapohjan/reactjs_sandbox/tree/master/5_task" target="__blank">
              <Button colored>GitHub</Button>
              </a>
              <a href="https://www.lauratellervo.fi/speedgame/" target="__blank">
              <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
      )

  // Node projects in tab 2
  }
  else if(this.state.activeTab === 1){
    return(
      <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '300px', margin: '2rem', borderRadius: '10px'}}>
          <CardTitle style={{color: '#000000', height: '220px', background: 'url(./weather.jpg) center / cover'}} >Weather App</CardTitle>
          <CardText>
          A Node weather app that uses two different APIs from Mapbox and Weatherstack. Working application deployed to Heroku. A project that I did following The Complete Node.js Developer Course from Udemy.
          </CardText>
          <CardActions border>
          <a href="https://github.com/lapohjan/node-weather-website" target="__blank">
            <Button colored>GitHub</Button>
          </a>
          <a href="https://northern-light-weather.herokuapp.com/" target="__blank">
            <Button colored>Live Demo</Button>
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={5} style={{minWidth: '300px', margin: '2rem', borderRadius: '10px'}}>
          <CardTitle style={{color: '#000000', height: '220px', background: 'url(./icecreams.jpg) top / cover'}} >Ice-creams and Dreams</CardTitle>
          <CardText>
            An ice-cream app. Choose your flavor and get a nice picture of an ice-cream cone with the price. A Node database exercise. Ice-creams drawn by me.
          </CardText>
          <CardActions border>
          <a href="https://github.com/lapohjan/ice-cream-app" target="__blank">
            <Button colored>GitHub</Button>
            </a>
            <a href="https://northern-light-ice-cream-app.herokuapp.com/" target="__blank">
            <Button colored>Live Demo</Button>
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
        </Card>

        {/* Project 3
        <Card shadow={5} style={{minWidth: '300px', maxWidth: '500px', margin: '2rem', borderRadius: '10px'}}>
          <CardTitle style={{color: '#fff', height: '220px', background: 'url(./xxx.jpg) center / cover'}} >Speed Game</CardTitle>
          <CardText>
            An app...
          </CardText>
          <CardActions border>
          <a href="https://github.com/">
            <Button colored>GitHub</Button>
            </a>
            <a href="https://www.lauratellervo.fi/">
            <Button colored>Live Demo</Button>
            </a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
        </Card> */}
      </div>
    )

    }
    else if(this.state.activeTab === 2){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '300px', margin: '2rem', borderRadius: '10px'}}>
            <CardTitle style={{color: '#000000', height: '220px', background: 'url(./population.jpg) center / cover'}} >Population Graph</CardTitle>
            <CardText>
            A population graph app done at Mimmitkoodaa MOOC by Sympa. Using HTML, CSS, Javascript and JSON data from a World Bank API. 
            </CardText>
            <CardActions border>
            <a href="https://github.com/lapohjan/Mimmit_koodaa" target="__blank">
              <Button colored>GitHub</Button>
            </a>
            <a href="https://lauratellervo.fi/population/" target="__blank">
              <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
      )
    
  } else if(this.state.activeTab === 0) {
    return (
      <div><h1>This is React</h1></div>
    )
  } else if(this.state.activeTab === 1) {
    return (
      <div><h1>This is Node</h1></div>
    )
  } else if(this.state.activeTab === 2) {
    return (
      <div><h1>This is HTML/CSS</h1></div>
    )
  }

}



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Node</Tab>
          <Tab>HTML/CSS</Tab>
        </Tabs>


          <div className="myGrid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </div>


      </div>
    )
  }
}

export default Projects;




















// import React, { useState } from 'react'
// import { Tabs, Tab, Grid, Cell } from 'react-mdl'

// function Projects() {

//     const [activeTab, setActiveTab] = useState(0);
//     const [content, setContent] = useState('');

//     const handleChange = e => {
//         const index = parseInt(e.target.id, 0);
//         if (index !== activeTab) {
//           setActiveTab(index);
//         }
//       };

//    const toggleCategories = e => {
//         if(activeTab === 0) {
//             return(
//                 <div><h1>This is React</h1></div>
//             )
//         }
//         else if(activeTab === 1) {
//             return(
//                 <div><h1>This is Node</h1></div> 
//             )
//         }
//         else if(activeTab === 2) {
//             return(
//                 <div><h1>This is HTML/CSS</h1></div> 
//             )
//         }
//     }

//     return (
//         <div className="category-tabs">
//             {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple></Tabs> */}
//             <Tabs ripple>
//                 <Tab onChange={handleChange} activeTab={activeTab === 0} id={0}>
//                     React
//                 </Tab>
//                 <Tab onChange={handleChange} activeTab={activeTab === 1} id={1}>
//                     Node
//                 </Tab>
//                 <Tab onChange={handleChange} activeTab={activeTab === 2} id={2}>
//                     HTML/CSS
//                 </Tab>
//             </Tabs>

//             <Grid>
//             <Cell col={12}>
//               <div className="content">{toggleCategories} activeTab={activeTab === 0}></div>
//             </Cell>
//           </Grid>        
//         </div>
//     );
// }

// // <Content activeTab={activeTab === 0}>
// // <h1>This is React</h1>
// // </Content>
// // <Content activeTab={activeTab === 1}>
// // <h1>This is Node</h1>
// // </Content>
// // <Content activeTab={activeTab === 2}>
// // <h1>This is HTML/CSS</h1>
// // </Content>

// export default Projects;
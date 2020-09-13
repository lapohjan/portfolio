import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
         
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is React</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is Node</h1></div>
      )
    } else if(this.state.activeTab === 3) {
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


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


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

// export default Projects;
import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Education extends Component {
    render() {
        return(
         <Grid>
             <Cell col={4}>
                 <p>{this.props.endYear}</p>
             </Cell>
             <Cell col={8}>
                 <h4 style={{marginTop:'0px'}}>{this.props.schoolName}</h4>
                 <p>{this.props.schoolDescription}</p>
             </Cell>
         </Grid>
        )
    }
}

export default Education



// function Education() {
//     return (
//         <div>
//             <h1>Education</h1>
//         </div>
//     )
// }

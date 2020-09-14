import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                            src="https://cdn2.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sporty-brunette-2-512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Laura Pohjanpalo</h2>
                        <h4 style={{color:'grey'}}>Junior Full Stack Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam animi vitae, molestias quisquam odit velit autem atque non debitis necessitatibus!</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                        <h5>Phone</h5>
                        <p>040 413 7477</p>
                        <h5>Email</h5>
                        <p>lauratellervo@gmail.com</p>
                        <h5>Web</h5>
                        <p>lauratellervo.fi</p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
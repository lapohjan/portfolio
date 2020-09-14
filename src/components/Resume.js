import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'

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
                        <h4 style={{color:'grey'}}>Full Stack Developer</h4>
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
                        <Education
                        endYear={'2020 - 2021'}
                        schoolName="Helsinki Business College"
                        schoolDescription="A Full Stack Web Developer program. An intensive 1,5-year-program with focus on practical skills in HTML, CSS, JavaScript, React, Node and different kinds of databases. All lectures held in English."
                        />
                        <Education
                        endYear={2005}
                        schoolName="University of Jyväskylä"
                        schoolDescription="Master of Arts (Journalism)"
                        />
                        <Education
                        endYear={2003}
                        schoolName="University of Helsinki"
                        schoolDescription="The diciplines of Education, Subject studies"
                        />
                        <Education
                        endYear={2003}
                        schoolName="University of Vaasa"
                        schoolDescription="Marketing, Basic studies (web-based courses)"
                        />
                         <Education
                        endYear={2000}
                        schoolName="University of Tampere"
                        schoolDescription="Social Psychology, Subject studies"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        
                       

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
import React from 'react'
import { Grid, Cell } from 'react-mdl'
import '../App.css';

export default function LandingPage() {
    return (
        <div style={{width:'100%', margin:'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <img
                    // src="https://source.unsplash.com/xw69fz33sKg"
                    // alt="lake view at night"
                    src="../../laura.jpg"
                    alt="profile img"
                    className="profile_pic" 
                    style={{height:'200px', borderRadius: '50%', marginTop:'5em'}}
                    />
                    <div className="banner-text">
                        <h1>Laura Pohjanpalo</h1>

                        <hr/>

                        <p>HTML/CSS | JavaScript | React | Node </p>
                            {/* | Express | Firebase | MongoDB </p> */}
                    <div className="social-links">
                    
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/laura-pohjanpalo/" rel="noopener noreferrer" target="_blank">
                        <i class="fa fa-linkedin-square"  aria-hidden="true" />
                    </a>
                     {/* GitHub */}
                     <a href="https://github.com/lapohjan?tab=repositories" rel="noopener noreferrer" target="_blank">
                        <i class="fa fa-github-square"  aria-hidden="true" />
                    </a>
                    {/* Portfolio */}
                    <a href="https://lauratellervo.fi/" rel="noopener noreferrer" target="_blank">
                        {/* <i class="fas fa-desktop"  aria-hidden="true" /> */}
                        <i class="fa fa-home" aria-hidden="true" />
                    </a>
                    </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}
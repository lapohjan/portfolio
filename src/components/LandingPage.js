import React from 'react'
import { Grid, Cell } from 'react-mdl'
import '../App.css';

export default function LandingPage() {
    return (
        <div style={{width:'100%', margin:'auto'}}>
            <Grid className='landing-grid'>
                <Cell col={12}>
                    <img
                    src="https://source.unsplash.com/xw69fz33sKg"
                    alt="lake view at night"
                    className="lake" style={{height:'250px', paddingTop:'5em'}}
                    />
                    <div className="banner-text">
                        <h1>Laura Pohjanpalo</h1>

                        <hr/>

                        <p>HTML/CSS | JavaScript | React | Node | Express | MongoDB </p>
                    <div className="social-links">
                        
                    </div>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}
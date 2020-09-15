import React from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export default function Contact() {
    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h3>Laura Pohjanpalo</h3>
                    <img
                        src="../../laura.jpg"
                        alt="profile img"
                        style={{height:'200px', borderRadius: '50%'}}
                        // src="https://cdn2.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sporty-brunette-2-512.png"
                        // alt="avatar pic of a brunette woman"
                        // style={{height:'250px'}}
                    />
                    <p style={{ width:'75%', margin:'auto', paddingTop:'1em'}}>
                        A fresh-from-the-oven full stack developer with a strong background in journalism. Eager to learn more.</p>
                </Cell>
                <Cell col={6} style={{background: 'white', borderRadius: '10px'}}>
                    <h3>Contact Me</h3>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'calc(20px + .10vw)', fontFamily:'Roboto', fontWeight:'bold', textAlign: 'center', justifyContent: 'center'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true" style={{paddingBottom: '0.2em'}}/>
                                    <br/>
                                    040 413 7477
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:'calc(20px + .10vw)', fontFamily:'Roboto', fontWeight:'bold', textAlign: 'center', justifyContent: 'center'}}>
                                    <i className="fa fa-envelope" aria-hidden="true" style={{paddingBottom: '0.2em'}}/>
                                    <br/>
                                    lauratellervo@gmail.com
                                </ListItemContent>
                            </ListItem>
                            {/* <ListItem>
                                <ListItemContent style={{fontSize:'2vw', fontFamily:'Roboto', fontWeight:'bold', textAlign: 'center', justifyContent: 'center'}}>
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                    www.linkedin.com/in/laura-pohjanpalo
                                </ListItemContent>
                            </ListItem> */}
                        </List>   
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}
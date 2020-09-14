import React from 'react'
import { Grid, Cell, List, ListItem } from 'react-mdl';

export default function Contact() {
    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Laura Pohjanpalo</h2>
                    <img
                    // src="../../laura.jpg" alt="profile img"
                        src="https://cdn2.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sporty-brunette-2-512.png"
                        alt="avatar pic of a brunette woman"
                        style={{height:'250px'}}
                    />
                    <p style={{ width:'75%', margin:'auto', paddingTop:'1em'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos eos iusto vel error harum exercitationem tempore distinctio itaque animi quae quis natus est, sit vero incidunt atque architecto officia aliquam eligendi et nostrum? Itaque tenetur deserunt id, excepturi, facere tempore atque, aliquid sunt sequi voluptate laborum vero optio corrupti ratione.</p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <List>
                        <ListItem>
                            <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="person">Aaron Paul</ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                        </ListItem>
                    </List>   
                </Cell>
            </Grid>
        </div>
    )
}
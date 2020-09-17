import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid className="resume-grid">
                    <Cell col={4} className="resume-left-col">
                        <div style={{textAlign: 'center'}}>
                            <img
                            src="../../laura.jpg"
                            // src="https://cdn2.iconfinder.com/data/icons/female-avatars-vol-1/256/female-portrait-avatar-profile-woman-sporty-brunette-2-512.png"
                            // alt="avatar"
                            alt="profile img"
                            // style={{height: '200px'}}
                            style={{height:'200px', borderRadius: '50%'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'1em'}}>Laura Pohjanpalo</h2>
                        <h4 style={{color:'grey'}}>Full Stack Web Developer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width:'95%'}}/>
                        <p>After working as a journalist and sub-editor for over 10 years I craved for new challenges. I was always curious about programming and finally decided to go for it. Now I'm studying in the Full Stack Web Developer program in Helsinki Business College. My studies include JavaScript, React, Node and much more. All lectures are in English. Making things happen just by writing code is amazing. I can't wait to learn more! </p>
                        <hr style={{borderTop:'3px solid #833fb2', width:'95%'}}/>
                        <h3>Technologies</h3>
                        <Skills 
                            skill="HTML5"
                            progress={90}
                        />
                        <Skills 
                            skill="CSS"
                            progress={90}
                        />
                        <Skills 
                            skill="React"
                            progress={80}
                        />
                        <Skills 
                            skill="Redux"
                            progress={40}
                        />
                          <Skills 
                            skill="JavaScript"
                            progress={70}
                        />
                        <Skills 
                            skill="Node"
                            progress={65}
                        />
                         <Skills 
                            skill="Firebase"
                            progress={50}
                        />
                        <Skills 
                            skill="MongoDB"
                            progress={25}
                        />
                        <Skills 
                            skill="MariaDB"
                            progress={20}
                        />
                       
                        <hr style={{borderTop:'3px solid #833fb2', width:'95%'}}/>
                        <h3>Other Skills</h3>
                        <Skills 
                            skill="Scrum"
                            progress={90}
                        />
                        <Skills 
                            skill="Git and GitHub"
                            progress={80}
                        />
                        <Skills 
                            skill="UI design and prototyping"
                            progress={75}
                        />
                         <Skills 
                            skill="Journalism"
                            progress={100}
                        />
                        <Skills 
                            skill="Page Layout"
                            progress={90}
                        />
                         <Skills 
                            skill="Photography"
                            progress={75}
                        />
                        <Skills 
                            skill="Photo Editing"
                            progress={70}
                        />
                        <Skills 
                            skill="Customer Service Skills"
                            progress={95}
                        />
                         <hr style={{borderTop:'3px solid #833fb2', width:'95%'}}/>
                        <h3>Language Skills</h3>
                        <Skills 
                            skill="Finnish"
                            progress={100}
                        />
                         <Skills 
                            skill="English"
                            progress={95}
                        />
                         <Skills 
                            skill="Swedish"
                            progress={80}
                        />
                          <Skills 
                            skill="French"
                            progress={60}
                        />
                          {/* <Skills 
                            skill="Japanese"
                            progress={10}
                        /> */}
                        
                        


                        {/* <h5>Phone</h5>
                        <p>040 413 7477</p>
                        <h5>Email</h5>
                        <p>lauratellervo@gmail.com</p>
                        <h5>Web</h5>
                        <p>www.lauratellervo.fi</p> */}
                        <hr style={{borderTop:'3px solid #833fb2', width:'95%'}}/>
                        {/* <h4 style={{color:'grey'}}>Skills</h4> */}

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                        endYear={'2020 - 2021'}
                        schoolName="Helsinki Business College"
                        schoolDescription="A Full Stack Web Developer program. An intensive program with focus on practical skills in HTML, CSS, JavaScript, React, Node and different kinds of databases. All lectures held in English."
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
                        endYear={2000}
                        schoolName="University of Tampere"
                        schoolDescription="Social Psychology, Subject studies"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}}/>
                        
                        <h2>Experience</h2>

                        <Experience
                            startYear={2008}
                            endYear={'present'}
                            jobName="Etelä-Suomen Media"
                            jobDescription="Sub-editor, journalist. Writing news stories, editing other people's texts, taking care of the page layout, taking photos, publishing news stories to the company's webpages and social media sites."
                        />
                        <Experience
                            startYear={2007}
                            endYear={2008}
                            jobName="Kouvolan Sanomat"
                            jobDescription="Journalist. Writing news stories, sub-editing the newspaper pages containing signed articles, taking photos, maintaining the company's website."
                        />
                        <Experience
                            startYear={'Jun 2007'}
                            endYear={'Aug 2007'}
                            jobName="Turun Sanomat"
                            jobDescription="Journalist. Writing local and national news stories for the newspaper."
                        />
                             <Experience
                            startYear={'Oct 2006'}
                            endYear={'Mar 2007'}
                            jobName="Handelsbanken"
                            jobDescription="Archivist, office assistant. Taking care of the bank's debit card contract archive. Ordering office supplies and sending them to remote offices."
                        />
                         <Experience
                            startYear={'Jun 2006'}
                            endYear={'Aug 2007'}
                            jobName="Länsi-Savo"
                            jobDescription="Journalist. Writing stories for the newspaper, taking photos for my own stories."
                        />
                            <Experience
                            startYear={'Oct 2005'}
                            endYear={'Dec 2005'}
                            jobName="Select Appointments"
                            jobDescription="HR Trainee. Learning about the recruiting process, registering applicants information and pictures in the company's database."
                        />
                            <Experience
                            startYear={'May 2004'}
                            endYear={'Sep 2004'}
                            jobName="Opetushallitus"
                            jobDescription="Trainee. Writing a report on the Lumipallo-project. The aim of the project was to encourage Finnish shcools to embrace new technology in teaching and learning."
                        />
                         <Experience
                            startYear={'Jun 2003'}
                            endYear={'Aug 2003'}
                            jobName="Hämeen Sanomat"
                            jobDescription="Journalist. Writing stories about local events and people, taking photos."
                        />
                         <Experience
                            startYear={'Jun 2002'}
                            endYear={'Aug 2002'}
                            jobName="Hyvinkään Sanomat"
                            jobDescription="Journalist. Writing stories and taking photos for the newspaper."
                        />
                          <Experience
                            startYear={'Nov 2001'}
                            endYear={'Dec 2001'}
                            jobName="Stockmann"
                            jobDescription="Salesperson. Selling small interior decorations at Stockmann's Helsinki centre department store. I have also worked at Stockmann for shorter periods during Christmas and Hullut Päivät sales events."
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
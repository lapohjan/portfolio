import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom'
import Main from './components/Main'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
                {/* <Link to="/" className="toplink">Home</Link> */}
                <Link to="/resume" className="toplink">Resume</Link>
                {/* <Link to="/aboutme" className="toplink">About Me</Link> */}
                <Link to="/projects" className="toplink">Projects</Link>
                <Link to="/contact" className="toplink">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none', color:'black'}} to="/">My Portfolio</Link>}>
            <Navigation>
            {/* <Link to="/" className="toplink">Home</Link> */}
            <Link to="/resume">Resume</Link>
            {/* <Link to="/aboutme">About Me</Link> */}
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
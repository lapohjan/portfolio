import React, { useState } from 'react'
import { Tabs, Tab } from 'react-mdl'

function Projects() {

    const [active, setActive] = useState(0);

    const handleClick = e => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
          setActive(index);
        }
      };

    return (
        <div className="category-tabs">
            {/* <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple></Tabs> */}
            <Tabs>
                <Tab onClick={handleClick} active={active === 0} id={0}>
                    React
                </Tab>
                <Tab onClick={handleClick} active={active === 1} id={1}>
                    Node
                </Tab>
                <Tab onClick={handleClick} active={active === 2} id={2}>
                    HTML/CSS
                </Tab>
            </Tabs>
            {/* <>
        <Content active={active === 0}>
          <h1>React</h1>
        </Content>
        <Content active={active === 1}>
          <h1>Node</h1>
        </Content>
        <Content active={active === 2}>
          <h1>HTML/CSS</h1>
        </Content>
      </> */}
            <section className="projects-gird"></section>
        </div>
    );
}

export default Projects;
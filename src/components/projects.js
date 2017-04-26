import React from 'react';

const Projects = () => {
  return (
    <section id="Projects">
      <h4 className="ui horizontal divider header">
        <a href="#">Projects</a>
      </h4>

      <div className="ui container divided items">

        <div className="item">
          <div className="image">
            <img src="http://lorempixel.com/250/250/"></img>
          </div>
          <div className="content">
            <a className="header">Portfolio Website</a>
            <div className="meta">
              <span className="cinema">React / Redux demo</span>
            </div>
            <div className="description">

              <div className="ui bulleted list">

                <div className="item">Put my React / Redux skills to the test</div>
                <div className="item">Custom API to display data</div>
                <div className="item">Sketches drawn on graph paper</div>

              </div>

            </div>
            <div className="extra">
              <div className="ui label">React</div>
              <div className="ui label">Node.js</div>
              <div className="ui label">Express</div>
              <div className="ui label">TDD</div>
              <div className="ui label">Javascript</div>
              <div className="ui label">Semantic UI</div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Projects;

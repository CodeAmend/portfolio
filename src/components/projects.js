import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';

class Projects extends Component {

  renderProjects() {
    return this.props.projects.map((project) => {

      function renderProjectBullets() {
        return project.bullets.map((bullet) => {
          return (
            <div className="item">{bullet}</div>
          )
        })
      }

      function renderProjectSkills() {
        return project.skills.map((skill) => {
          return (
            <div className="ui label">{skill.name}</div>
          )
        })
      }

      return (
        <div className="item">
          <div className="image">
            <img src="http://lorempixel.com/250/250/"></img>
          </div>
          <div className="content">
            <a className="header">{project.name}</a>
            <div className="meta">
              <span className="cinema">{project.tagline}</span>
            </div>
            <div className="description">

              <div className="ui bulleted list">
                {renderProjectBullets()}
              </div>

            </div>
            <div className="extra">
              {renderProjectSkills()}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {

    return (
      <section id="Projects">
        <h4 className="ui horizontal divider header">
          <a href="#">Projects</a>
        </h4>

        <div className="ui container divided items">

          {this.renderProjects()}

        </div>

      </section>
    );
  }
};

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

export default connect(mapStateToProps)(Projects);

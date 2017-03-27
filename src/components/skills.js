import React, {Component} from 'react';
import {connect} from 'react-redux';

class Skills extends Component {

  renderSkills() {
    return this.props.skills.map((skill) => {
        return (

          <article key={skill.title} className="ui centered card">
            <section className="content">
              <a href="#" className="right floated meta">
                projects: 5
              </a>
              <h5 className="header">
                {skill.title}
              </h5>
              {/* <div className="description">
                 One of my favorite inventions...
              </div> */}
            </section>
            <aside className="extra">
              Skill
              <section className="ui heart rating" data-rating={skill.level}></section>
            </aside>
          </article>
        );
      });
  }

  render() {
    return (
      <section id="skills">
        <h4 className="ui horizontal divider header">
          <a href="#">Skills</a>
        </h4>
        <article className="ui container">
          <section className="ui four doubling cards">

            {this.renderSkills()}

          </section>
        </article>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {skills: state.skills}
}

export default connect(mapStateToProps)(Skills);

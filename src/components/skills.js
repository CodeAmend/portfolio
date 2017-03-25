import React, {Component} from 'react';
import {connect} from 'react-redux';

class Skills extends Component {

  renderSkills() {
    return this.props.skills.map((skill) => {
      return (

        <div className="ui centered card">
           <div className="content">
              <a href="#" className="right floated meta">
                 projects: 5
              </a>
              <div className="header">
                 {skill.title}
              </div>
              {/* <div className="description">
                 One of my favorite inventions...
              </div> */}
           </div>
           <div className="extra">
              Skill
              <div className="ui heart rating" data-rating={skill.level}></div>
           </div>
        </div>
      )

    });
  }
  render() {
    return(
      <section id="skills">
         <h4 className="ui horizontal divider header">
            <a href="#">Skills</a>
         </h4>
         <article className="ui container">
            <div className="ui four doubling cards">

            {this.renderSkills()}

            </div>
         </article>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return { skills: state.skills }
}

export default connect(mapStateToProps)(Skills);

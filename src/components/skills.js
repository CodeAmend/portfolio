import React from 'react';

const Skills = () => {
  return(
    <section id="skills">
       <h4 className="ui horizontal divider header">
          <a href="#">Skills</a>
       </h4>
       <article className="ui container">
          <div className="ui cards">

             <div className="card">
                <div className="content">
                   <a href="#" className="right floated meta">
                      projects: 5
                   </a>
                   <div className="header">
                      Node.js
                   </div>
                   {/* <div className="description">
                      One of my favorite inventions...
                   </div> */}
                </div>
                <div className="extra">
                   Skill
                   <div className="ui heart rating" data-rating="5"></div>
                </div>
             </div>

          </div>
       </article>
    </section>
  );
};

export default Skills;

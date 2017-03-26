import React, {Component} from 'react';

class Hero extends Component {

  renderLatestGitCommits() {
    return (
      <p>Commit 1</p>
    );
  }
  render() {

    return (
      <section id="hero">
        <div className="ui container">

          <section className="ui equal width stackable grid">

            <article className="column">

              <nav className="ui internally celled grid quad">
                <section className="equal width row">
                  <article className="column project">Projects</article>
                  <article className="column courses">Courses</article>
                </section>

                <section className="equal width row">
                  <article className="column skills">Skills</article>
                  <article className="column me">Me</article>
                </section>
              </nav>

              <section className="row">
                <article className="column">
                  <h1>Michael Bruce Allen</h1>
                  <p>I have a strong interest to build booking systems, schedulars and social connection apps. Yeah! Stuff like that!</p>
                  <p>I am a novice but...</p>
                  <p>Here is what I am doing to get me to the next level.</p>
                </article>
              </section>

            </article>

            <aside className="column">
              <section className="updates ui segment">
                <article className="current-course">
                  <h3>Current Course...</h3>
                  <p>Advanced React and Redux</p>
                </article>
                <article className="latest-course">
                  <h3>Last Finished Course...</h3>
                  <p>Understanding React and Redux</p>
                </article>
                <article className="latest-commits">
                  <h3>Latest Git Commits</h3>
                  {this.renderLatestGitCommits()}
                </article>
              </section>
            </aside>

          </section>

        </div>
      </section>

    );
  }
}

export default Hero;

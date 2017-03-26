import React, {Component} from 'react';
import {connect} from 'react-redux';

class Commit extends Component {
  renderLatestGitCommits() {
    return (
      <p>Commit 1</p>
    );
  }
  render() {
    return (
      <article className="latest-commits">
        <h3>Latest Git Commits</h3>
        {this.renderLatestGitCommits()}
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {commits: state.commits}
}

export default connect(mapStateToProps)(Commit);

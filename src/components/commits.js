import React, {Component} from 'react';
import {connect} from 'react-redux';

class Commits extends Component {

  renderLatestGitCommits() {
    console.log(this.props);
    return this.props.commits.map((commit) => {
      return (
        <div>{commit.title}</div>
      );
    });
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

export default connect(mapStateToProps)(Commits);

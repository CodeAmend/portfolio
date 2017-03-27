import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCommits} from '../actions/index';

class Commits extends Component {

  componentWillMount() {
    this.props.fetchCommits();
  }

  renderLatestGitCommits() {
    console.log(this.props.commits);
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

export default connect(mapStateToProps, {fetchCommits})(Commits);

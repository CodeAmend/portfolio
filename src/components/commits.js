import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCommits} from '../actions/index';

class Commits extends Component {

  renderLatestGitCommits(numberOfCommits) {
    this.props.fetchCommits(numberOfCommits);
    const {commits} = this.props;
    if( commits.length === 0 ) {
      return <div>Loading...</div>;
    }
    return commits[0].map((commit) => {
      return (
        <div className="item">
          <i className="large github middle aligned icon"></i>
          <div className="content">
            <a className="header">{commit.name}</a>
            <div className="description">{commit.pushed_at}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <article className="latest-commits ui ralaxed divided list">
        <h3>Latest Git Commits</h3>
        {this.renderLatestGitCommits(3)}
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {commits: state.commits}
}

export default connect(mapStateToProps, {fetchCommits})(Commits);

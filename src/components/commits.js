import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCommits} from '../actions/index';

class Commits extends Component {

  componentWillMount() {
    this.props.fetchCommits();
  }

  renderLatestGitCommits() {
    const {commits} = this.props;
    if( commits.length === 0 ) {
      return <div>Loading...</div>;
    }
    const latestCommits = [];
    function isCommitTheLatest(amount) {
      
    }
    return this.props.commits[0].map((commit) => {
      return (
        <div key={commit.id}>
          <h5>{commit.name}</h5>
          <p>{commit.pushed_at}</p>
        </div>
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

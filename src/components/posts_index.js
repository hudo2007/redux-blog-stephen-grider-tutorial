import React, { Component } from 'react';
import { connect } from 'react-redux';
// do not need to import bindActionCreators when we use the shortcut below
// import { bindActionCreators } from 'redux';

// import the action creator
import { fetchPosts } from '../actions/index';

// react-router's link helper
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    console.log("componentWillMount called")
    this.props.fetchPosts();
  }

  renderPosts() {
    console.log("renderPosts this.props.posts: ", this.props.posts)
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`posts/${post.id}`} >
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps var state: ",state)
  return { posts: state.posts.all };
}

// this construct gives us access to this.props.fetchPosts
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts}, dispatch);
// }
//
// export default connect(null, mapDispatchToProps)(PostsIndex);
//
// we can shortcut the above boilerplate with:
// export default connect(null, {fetchPosts: fetchPosts})(PostsIndex);
//
// and further simplifying with ES6 syntax:
//
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);


import React, { PropTypes } from 'react';

// Import Components
// import PostListItem from './PostListItem/PostListItem';
// function PostList(props)
function PostList() {
  return (
    <div className="listView">
      <h1>Placeholder</h1>
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostList;

import React from 'react';
import Post from "./Post";
import Posts from "./Data";
import '../styles/PostList.css';

function PostList({}) {
  return (
    <div className="blog">
      {Posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          description={post.description}
          imageUrl={post.image}
        />
      ))}
    </div>
  );
}

export default PostList;
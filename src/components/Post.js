
import React from "react";

const Post = ({ title, description, imageUrl }) => {
  return (
    <div className="post">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Post;

import React from "react";
import Post from "./Post/Post.jsx";
import "./style.css";

function Posts() {
  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <Post />
      <Post />
    </div>
  );
}

export default Posts;

import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post.jsx";
import "./style.css";

function Posts() {
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <Post />
      <Post />
    </div>
  );
}

export default Posts;

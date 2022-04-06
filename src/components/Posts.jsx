import React from "react";
import { usePostsData } from "../hooks/usePostsData";
import "../styles/Posts.css";
import Preloader from "../utils/Preloder";

export default function Posts() {
  const { data, isLoading } = usePostsData();

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="row posts">
      <h2>Posts Details</h2>

      {data.data.map((post) => {
        return (
          <div key={post.id} className="col-lg-3 col-md-4 col-sm-6">
            <div className="card postItem">
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

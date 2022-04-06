import React from "react";
import { usePostData } from "../hooks/usePostData";

export default function Post() {
  const postId = 1;
  const { data, isError, error } = usePostData(postId);
  console.log(data);
  console.log(error);

  if (isError) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>{data?.data.title}</h2>
          <p>{data?.data.body}</p>
        </div>
      </div>
    </div>
  );
}

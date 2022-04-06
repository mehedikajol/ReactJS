import React from "react";
import { usePostCommnets } from "../hooks/usePostComments";
import Comment from "./Comment";

export default function Comments() {
  const postId = 1;
  const { data } = usePostCommnets(postId);
  return (
    <div>
      {data?.data.map((comment) => {
        return (
          <div key={comment.id}>
            <Comment comment={comment} />
          </div>
        );
      })}
    </div>
  );
}

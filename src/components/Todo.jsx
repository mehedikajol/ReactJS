import React from "react";
import { Card } from "react-bootstrap";
import { useTodo } from "../hooks/useTodo";
import "./../styles/Todo.css";

export default function Todo({ todoId }) {
  const { data } = useTodo(todoId);

  //   const toggoleCompleted = () => {
  //     isComplete = isComplete ? false : true;
  //   };

  let isComplete = data?.data.completed;

  return (
    <Card.Body
      className={`todo text-white ${isComplete ? "bg-success" : "bg-danger"}`}
    >
      <span className="flag">{isComplete ? "Incomplete" : "Complete"}</span>
      <Card.Title className="todoTitle">{data?.data.title}</Card.Title>
    </Card.Body>
  );
}

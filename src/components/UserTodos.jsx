import React from "react";
import { Card, Col } from "react-bootstrap";
import { useUserTodos } from "../hooks/useUserTodos";
import Preloader from "../utils/Preloder";
import Todo from "./Todo";

export default function UserTodos({ userId }) {
  const { data, isLoading, isError, error } = useUserTodos(userId);
  if (isLoading) {
    return <Preloader />;
  }
  if (isError) {
    return <h2>{error.meesage}</h2>;
  }

  return (
    <>
      <h2>All Todos</h2>
      {data.data.map((todo) => {
        return (
          <Col key={todo.id} className="mt-2 mb-2" lg={3} md={4} sm={6}>
            <Card>
              <Todo todoId={todo.id} />
            </Card>
          </Col>
        );
      })}
    </>
  );
}

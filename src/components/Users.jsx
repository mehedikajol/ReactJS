import { Card, Col, Row } from "react-bootstrap";
import { useUsersData } from "../hooks/useUsersData";
import "../styles/Users.css";

export default function Users() {
  const { data } = useUsersData();
  console.log(data?.data);
  return (
    <Row>
      {data?.data.map((user) => {
        return (
          <Col className="mt-2 mb-2" lg={3} md={4} sm={6}>
            <Card>
              <div className="userItem" key={user.id}>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {user.username}
                  </Card.Subtitle>
                  <Card.Text>{user.phone}</Card.Text>
                  <Card.Text className="text-primary">{user.email}</Card.Text>
                </Card.Body>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

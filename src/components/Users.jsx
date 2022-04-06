import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUsersData } from "../hooks/useUsersData";
import "../styles/Users.css";

export default function Users() {
  const { data } = useUsersData();

  return (
    <Row>
      {data?.data.map((user) => {
        return (
          <Col key={user.id} className="mt-2 mb-2" lg={4} sm={6}>
            <Card>
              <div className="users">
                <Link className="anyLink" to={`/users/${user.id}`}>
                  <Card.Body>
                    <Card.Title className="name">{user.name}</Card.Title>
                    <Card.Subtitle className="username">
                      @{user.username}
                    </Card.Subtitle>
                  </Card.Body>
                </Link>
              </div>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

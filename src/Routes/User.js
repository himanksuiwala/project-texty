import React, { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from "react-bootstrap";
import axios from "axios";
import styled from "styled-components";
import Note from "../Components/Note";
const User = () => {
  const [user, setUser] = useState("");
  let [notes, setNotes] = useState(null);
  const [show, setShow] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    setNotes(null);
    setNotFound(false);
    axios.get(`https://texty-backend.herokuapp.com/user?userId=${user}`).then(
      (res) => {
        setNotes(res.data);
        console.log(res.data);
      },
      (e) => {
        setNotFound(true);
      }
    );
  };
  return (
    <>
      <MainContainer>
        <UserContainer>
          <div className="title">
            <h1>MY NOTES</h1>
          </div>
          <Container style={{ width: "390px" }}>
            <Row>
              <Col>
                <Form onSubmit={sumbitHandler}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                    />{" "}
                    <Form.Text className="text-muted">
                      Enter email to get your saved Texts
                    </Form.Text>
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button variant="primary" type="Submit">
                      Get Notes
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Container>
        </UserContainer>
        <Container style={{ padding: "5px" }}>
          {notFound && show && (
            <AlertContainer>
              <Alert
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
              >
                <Alert.Heading>User Not Found</Alert.Heading>
                <p>You've entered a wrong email address</p>
              </Alert>
            </AlertContainer>
          )}
        </Container>
        {notes && (
          <NoteContainer>
            <div className="title">
              <h1>Retreived Notes:</h1>
              <hr></hr>
            </div>
            
            <Notes>{notes && <Note data={notes} />}</Notes>
          </NoteContainer>
        )}
      </MainContainer>
    </>
  );
};
const AlertContainer = styled.div`
  margin: 0 auto;
  padding-top:30px;
  width:350px;
`;

const Notes = styled.div`
  padding: 10px 35px 20px 35px;
`;

const MainContainer = styled.div`
${'' /* height:480px; */}
  h1 {
    font-weight: 700;
    font-size: 50px;
  }
`;

const NoteContainer = styled.div`
  margin-top: 90px;
  .title {
    margin: 30px 30px 5px 60px;
  }
  h1 {
    font-weight: 500;
    font-size: 40px;
  }
`;

const UserContainer = styled.div`
  .title {
    margin: 30px 30px 30px 60px;
  }
`;

export default User;

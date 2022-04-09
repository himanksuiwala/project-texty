import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import styled from "styled-components";
import axios from "axios";

export default function Home() {
  const [noteBody, setNoteBody] = useState("");
  const [noteTitle, setNotetitle] = useState("");
  const [noteEmail, setNoteemail] = useState("");
  const [show, setShow] = useState(true);
  let [acknow, setAcknow] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    setNoteBody("");
    setNotetitle("");
    setNoteemail("");

    axios
      .post("https://texty-backend.herokuapp.com/add", {
        title: noteTitle,
        body: noteBody,
        email: noteEmail,
      })
      .then(
        (res) => {
          console.log("From Axios", res);
          setAcknow(res.request.status);
        },
        (e) => {
          console.log(e);
        }
      );
  };

  return (
    <>
      <MainContainer>
        <FormContainer>
          <Container style={{ padding: "10px" }}>
            <Form onSubmit={submitHandler}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Title for the Note"
                  value={noteTitle}
                  onChange={(e) => setNotetitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  value={noteEmail}
                  onChange={(e) => setNoteemail(e.target.value)}
                />
                  <Form.Text className="text-muted">
      Do remember your email while adding the note
    </Form.Text>
              </Form.Group>
              <Form.Group
                style={{}}
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Text</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Text to save For"
                  value={noteBody}
                  onChange={(e) => setNoteBody(e.target.value)}
                />
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" type="Submit">
                  Add Note
                </Button>
              </div>
            </Form>
          </Container>
        </FormContainer>
        <Container style={{ padding: "5px" }}>
          {acknow && show && (
            <AlertContainer style={{ width: "350px" }}>
              <Alert
                variant="success"
                onClose={() => setShow(false)}
                dismissible
              >
                <Alert.Heading>Text Snippet Saved</Alert.Heading>
                <p>You've successfully saved the snippet</p>
                <hr />
                <p className="mb-0">To retreive snippet get into My Notes</p>
              </Alert>
            </AlertContainer>
          )}
        </Container>
      </MainContainer>
    </>
  );
}

const AlertContainer = styled.div`
  margin: 0 auto;
`;
const MainContainer = styled.div`
  height: 462px;
  margin-top: 50px;
`;

const FormContainer = styled.div`
  width: 392px;
  margin: 0 auto;
  padding: 5px;
`;

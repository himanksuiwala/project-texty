import React from "react";
import styled from "styled-components";
var moment = require("moment");
const Note = ({ data }) => {
  let count = 1;
  return (
    <NoteContainer>
      {data.map((i) => {
        return (
          <>
            <NoteItem key={i._id}>
              <div key={i._id}>
                <h3>
                  {count++}.<span></span>
                  {i.title}
                </h3>
                <div className="date">
                  <i>
                    {" "}
                    <span>Created on: </span>
                    <span>
                      {moment(i.created, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
                        "DD"
                      )}
                      -
                    </span>
                    <span>
                      {moment(i.created, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
                        "MM"
                      )}
                      -
                    </span>
                    <span>
                      {moment(i.created, "YYYY-MM-DDTHH:mm:ss.SSS[Z]").format(
                        "YYYY"
                      )}
                    </span>
                  </i>
                </div>
                <div className="note-body">
                  <p>{i.body}</p>
                </div>
              </div>
            </NoteItem>
            <hr></hr>
          </>
        );
      })}
    </NoteContainer>
  );
};
const NoteItem = styled.div`
  padding: 15px 0px 15px 0px;
  span {
    padding: 0px 1px 1px 0px;
  }
  .date {
    padding-left: 10px;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .note-body {
    padding-left: 15px;
  }
`;

const NoteContainer = styled.div`
  margin-top: 30px;
  min-height: 100vh;

  padding: 0 calc(0vw + 30px);
  h3 {
    font-weight: 590;
  }
`;

export default Note;

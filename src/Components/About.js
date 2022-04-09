import React from "react";
import styled from "styled-components";
import { GoMarkGithub } from "react-icons/go";

const About = () => {
  return (
    <Footer>
      <div className="title">
        <h1>
          {" "}
          textY <span>📝</span>
        </h1>
        <h5>
          <a
            target="_blank"
            href="https://github.com/himanksuiwala/project-texty"
          >
            <GoMarkGithub />
          </a>
          Jot down your thoughts quickly!!
        </h5>
      </div>

      <Signature>
        <span>Made with 💗 by Himank Suiwala </span>
        <p>
          {" "}
          <a target="_blank" href="https://github.com/himanksuiwala/">
            <GoMarkGithub />
          </a>
        </p>
      </Signature>
    </Footer>
  );
};

const Signature = styled.div`
  display: flex;
  margin-top: 5px;
  align-items: center;
  height: 50px;
  justify-content: center;
  padding-bottom: 5px;
  span {
    line-height: 170%;
    padding-left: 5px;
  }
  p {
    padding-top: 4px;
    padding-left: 7px;
  }
  a {
    font-size: 25px;
  }
`;
const Footer = styled.div`
  height: 180px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin-bottom: 0px;
  background: #aaa;
  margin-top: 50px;
  padding: 10px;
  h3 {
    line-height: 100%;
  }
  a,
  a:hover,
  a:active,
  a:visited {
    color: white;
  }
  .title {
    padding: 5px 20px 2px 20px;
  }
  a {
    font-size: 30px;
    padding: 0px 8px 0px 5px;
  }
  h5 {
    font-size: 19px;
  }
`;

export default About;

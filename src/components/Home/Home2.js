import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
                I’m a Data Science enthusiast who enjoys turning data into meaningful insights and intelligent solutions. I have hands-on experience in Machine Learning, Deep Learning, and Generative AI, and I love building real-world projects that solve practical problems.Over time, I’ve worked on projects like Fake News Detection, AI Chatbots, Resume Analyzer, and Emotion Detection, which helped me strengthen my understanding of data-driven systems.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Machine Learning, Deep Learning, and libraries like NumPy, Pandas, Scikit-learn, and TensorFlow.{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Machine Learning, Natural Language Processing (NLP), Computer Vision, and Generative AI.,{" "}
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              I’m always eager to learn new technologies and build impactful AI solutions that make a difference.{" "}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

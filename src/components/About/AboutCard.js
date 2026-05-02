import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Heran</span>{" "}
            from <span className="purple">Tamil Nadu, India</span>.
            Aspiring Data Scientist with strong knowledge in Python, Machine Learning, and Deep Learning. Passionate about solving real-world problems using data.
            Worked on projects like Cricket Shot Prediction using OpenCV and ML.
            Currently learning advanced AI concepts and looking for opportunities in Data Science.

          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 
            </li>
            <li className="about-activity">
              <ImPointRight />  Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech Videos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Turning data into meaningful insights."{" "}
          </p>
          <footer className="blockquote-footer">Heran J</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

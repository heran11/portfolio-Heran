import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import attendance from "../../Assets/Projects/attendance.png";
import news from "../../Assets/Projects/news.png";
import iris from "../../Assets/Projects/iris.jpg";
import face from "../../Assets/Projects/face.jpg";
import airesume from "../../Assets/Projects/Resume.jpg";
import sports from "../../Assets/Projects/sports.jpg";
import chatbot from "../../Assets/Projects/Chatbot.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={face}
              isBlog={false}
              title="Emotion Detection System"
              description="Developed a real-time emotion detection system using DeepFace and OpenCV to identify facial expressions such as happy, sad, and neutral from live video input."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sports}
              isBlog={false}
              title="Sports Injury Prediction & Performance Analysis"
              description="Developed a machine learning system using Kaggle datasets to predict player injury risk. Processed video input to analyze movement and highlight high-risk areas such as ligaments, bones, and joints for potential injuries."
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iris}
              isBlog={false}
              title="Iris Flower Classification"
              description="Built a machine learning model to classify iris flower species using the Iris dataset. Used algorithms such as KNN, SVM, and Decision Tree and evaluated performance using accuracy metrics."
              //ghLink="https://github.com/soumyajit4419/Editor.io"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={attendance}
              isBlog={false}
              title="Attendance Management System"
              description="Built an automated attendance system using face recognition by capturing user images, storing face data, and verifying identities in real-time to mark attendance accurately."
              //ghLink="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Text Generation Chatbot"
              description="Developed an AI chatbot using Ollama and the LLaMA model to generate human-like responses and handle real-time user interactions."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="Fake News & True News Detection"
              description="Developed a fake news detection system using a RAG approach with HuggingFace embeddings and FAISS for retrieval. Integrated LLaMA (via Ollama) to classify news as real or fake and generate explanations through a Streamlit-based UI.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airesume}
              isBlog={false}
              title="AI Resume Analyzer"
              description="Developed an AI-powered resume analyzer using Streamlit and Ollama (LLaMA 3.2) to evaluate resumes against job descriptions. Extracted text from PDF resumes and used prompt-based analysis to generate summaries, skill matching, missing skills, and match scores."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

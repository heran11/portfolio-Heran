import { DiPython, DiGit } from "react-icons/di";
import { Col, Row } from "react-bootstrap";
import { SiNextdotjs,SiTensorflow, SiOpencv, SiNumpy, SiPandas, SiScikitlearn, SiPlotly, SiMysql, SiGithub,SiJavascript, SiMongodb} from "react-icons/si";
import { FaReact,FaNodeJs } from "react-icons/fa";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
       <SiTensorflow />
        <div className="tech-icons-text">Machine Learning</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <SiTensorflow />
        <div className="tech-icons-text">Deep Learning</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <SiTensorflow />
        <div className="tech-icons-text">Natural Language Processing</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv />
        <div className="tech-icons-text">OpenCV</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
         <SiTensorflow />
        <div className="tech-icons-text">Generative AI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiNumpy />
        <div className="tech-icons-text">NumPy</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiPandas />
        <div className="tech-icons-text">Pandas</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
       <SiScikitlearn />
        <div className="tech-icons-text">Scikit-learn</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div className="tech-icons-text">TensorFlow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlotly />
        <div className="tech-icons-text">Matplotlib</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="tech-icons-text">GitHub</div>
      </Col> 
     <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div className="tech-icons-text">MySql</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs />
        <div className="tech-icons-text">Node.Js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
        <div className="tech-icons-text">React.Js</div>
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <FaReact />
        <div className="tech-icons-text">React Native</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <div className="tech-icons-text">Mongo DB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs fontSize={"24px"} />
        <div className="tech-icons-text">Next.js</div>
      </Col>
    </Row>
  );
}

export default Techstack;

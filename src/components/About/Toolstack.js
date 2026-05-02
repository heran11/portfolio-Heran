import { Col, Row } from "react-bootstrap";
import { SiGooglechrome, SiPostman } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { SiExpo } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons ">
        <SiGooglechrome />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <VscCode />
        <div className="tech-icons-text">Vs Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
         <SiPostman />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <SiExpo />
        <div className="tech-icons-text">Expo</div>
      </Col>
    </Row>
  );
}

export default Toolstack;

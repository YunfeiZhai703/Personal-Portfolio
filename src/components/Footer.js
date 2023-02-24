import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/main-logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://uk.linkedin.com/in/yunfei-zhai-13b04a212" target="_blank" ><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://www.facebook.com/people/Yunfei-Zhai/100073832881900/" target="_blank"><img src={navIcon2} alt="facebook" /></a>
              <a href="https://www.instagram.com/fraaank_zhai/" target="_blank"><img src={navIcon3} alt="instagram" /></a>
            </div>
            <p>&copy;2022 Yunfei Zhai. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/profile.jpg";
import bannerImg from "../assets/img/banner-animation.svg";
import { ArrowDownCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
//   const period = 2000;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => { clearInterval(ticker) };
//   }, [text])

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex(prevIndex => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex(prevIndex => prevIndex + 1);
//     }
//   }

return (
  <section className="banner" id="home">
    <Container>
      <Row className="row1 aligh-items-center">
        <Col xs={12} md={6} xl={7}>
          <span className="tagline">Welcome to my Portfolio</span>
          <h1>Hi! I'm Yunfei Zhai</h1>
          <p>I am currently persuing my penultimate year of my undergraduate study in University of Cambridge in Information and Computing Engineering. I am interested in full-stack development, quantitative analysing strategy, and data science.</p>
          
        </Col>
        <Col xs={12} md={6} xl={5}>
        <img className="profileP" src={headerImg} alt="Header Img"/>
            
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} xl={6}> 
          <div>
            <img className="animationPh" src={bannerImg} alt="Header Img"/>  
          </div>   
        </Col>
        <Col xs={12} md={6} xl={6}>
          <p>Personality wise, I consider myself a creative thinker. I think it’s important to approach tasks and issues from different angles, rather than just doing what has always been done. By having an open mind and taking a different approach, I believe you can find new and improved ways of doing things. I am also a drummer, a gamer and a gym person. If you are feeling connected, let's connect!</p>
        </Col>
      </Row> 
        
    </Container>
  </section>
)
}
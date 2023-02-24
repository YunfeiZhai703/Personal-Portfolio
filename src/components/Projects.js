import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projMl1 from "../assets/img/projectMl1.png";
import projR1 from "../assets/img/projectR1.jpg";
import projR2 from "../assets/img/projectR2.jpg";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
/***define business card arrays***/

/*project card for Machine learning tab*/
  const projectsMl = [
    {
      title: "Image classifier",
      description: "Classify pictures uploaded with percentage of confidence",
      imgUrl: projMl1,
    },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     title: "Business Startup",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   }
  ];

  /*project card for full-stack tab*/
  const projectsFs = [
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];
  /*project card for Robotics tab*/
  const projectsR = [
    {
      title: "Minibots",
      description: "Line following and rescue robot",
      imgUrl: projR1,
    },
    {
      title: "Integrated Design project",
      description: "Self-navigation and block sorting robot",
      imgUrl: projR2,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>The projects are mainly software-based, including multiple areas of interest like robotics, machine learning and full-stack development. The tabs show some of the projects I have done. Click on tabs to see the project image and click on the project image to see project description.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">   {/* Define tabs container*/} 
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="machineLearn">Machine learning</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fullStack">Full-stack</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="robotics">Robotics</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">  {/*Define attributes of the tab content including animation and relevant tab index */}
                  <Tab.Pane eventKey="machineLearn">
                    <Row>
                      {
                        projectsMl.map((project, index) => {     
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fullStack">
                    <Row>
                        {
                          projectsFs.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="robotics">
                   <Row>
                      {
                        projectsR.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
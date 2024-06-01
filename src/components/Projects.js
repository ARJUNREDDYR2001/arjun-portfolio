import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/img1.png";
import projImg2 from "../assets/img/img2.jpg";
import projImg3 from "../assets/img/img3.png";
import projImg4 from "../assets/img/img4.png";
import projImg5 from "../assets/img/img5.jpg";
import projImg6 from "../assets/img/img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Weather website",
      description: "React.js",
      imgUrl: projImg1,
    },
    {
      title: "Ecommerce website",
      description: "MERN",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio",
      description: "My portfolio",
      imgUrl: projImg3,
    },
    {
      title: "Bank management system",
      description: "Java, SQL",
      imgUrl: projImg4,
    },
    {
      title: "News automator",
      description: "Python",
      imgUrl: projImg5,
    },
    {
      title: "Amazon clone",
      description: "Frontend",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have developed a range of projects, including a Weather App using React and Material-UI, and an APMC Management System utilizing C++ inheritance principles. My creative portfolio showcases skills in React and JavaScript, while my Bank Management System integrates Java Swing and MySQL. Additionally, I replicated an Amazon website using HTML, CSS, and JavaScript, demonstrating my frontend development capabilities.</p>
                <Row>
                  {
                    projects.map((project, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          {...project}
                        />
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}

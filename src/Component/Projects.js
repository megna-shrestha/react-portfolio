import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import indrajatra from "../assets/img/indrajatra.png";
import escooty from "../assets/img/escooty.png";
import tihar from "../assets/img/tihar.png";
import travel from "../assets/img/travel.png";
import wellness from "../assets/img/wellness.png";
import mobileapp from "../assets/img/mobileapp.png";
import admin from "../assets/img/admin.png";
import refurbished from "../assets/img/refurbished.png";
import tempo from "../assets/img/tempo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Visiting Card (freelance)",
      description: "Logo design & Branding",
      imgUrl: projImg1,
      link: "https://dribbble.com/shots/23817483-Simple-and-Elegant-Visiting-card"
    },
    {
      title: "AI project manager ad campaign",
      description: "Social media ad campaign",
      imgUrl: projImg2,
       link: "https://www.behance.net/gallery/220701291/AI-project-manager-ad-campaign"
    },
    {
      title: "Christmas Offer Banner",
      description: "Social media ad bannner",
      imgUrl: projImg3,
       link: "https://www.behance.net/gallery/219108961/Christmas-Offer-Banner"
    },
    {
      title: "Indra Jatra",
      description: "Social media post",
      imgUrl: indrajatra,
       link: "https://www.behance.net/gallery/212755751/Indra-Jatra"
    },
    {
      title: " Ryan E-Scooty Brochure Design(freelance)",
      description: "Brochure design",
      imgUrl: escooty,
       link: "https://dribbble.com/shots/23942588-e-scooty-brochure-design"
    },

    {
      title: " Ryan E-tempo Brochure Design(freelance)",
      description: "Brochure design",
      imgUrl: tempo,
       link: "https://dribbble.com/shots/23817330-Brochure-Design"
    },
    
    {
      title: "Tihar social media Posts",
      description: "Festive greetings",
      imgUrl: tihar,
       link: "https://www.behance.net/gallery/212755219/Happy-Tihar-Tihar-greetings"
    },
  ];

  const project1 = [
    {
      title: "Tours & Travels",
      description: "Web design(UIUX) for a travel agency",
      imgUrl: travel,
      link: "https://dribbble.com/shots/25617693-Travel-Website-Design"
    },
    {
      title: "Wellness Company",
      description: "  Web design(UIUX) for a wellness company",
      imgUrl: wellness,
       link: "https://dribbble.com/shots/25618596-Wellness-website-UI-Design-SaaS-Website-Design"
    },
    {
      title: "Deerwalk Automobiles",
      description: "Mobile app UI/UX design for deerwalk automobile company",
      imgUrl: mobileapp,
       link: "https://dribbble.com/shots/23813999-Mobile-UI-UX"
    },
    {
      title: "Admin Site",
      description: "Web design for deerwalk's admin site",
      imgUrl: admin,
       link: "https://dribbble.com/shots/23816476-Admin-Side-Web-UI-UX-Design-Sample"
    },
    {
      title: "wellness company",
      description: "Christmas themed landing page UI design",
      imgUrl: refurbished,
       link: "https://dribbble.com/shots/25618344-Christmas-Themed-Landing-Page-UI-design-Revamped"
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
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Graphics</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">UI/UX </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
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
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
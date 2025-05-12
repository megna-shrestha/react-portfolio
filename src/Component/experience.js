import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  const experiences = [
    {
      title: "UI/UX Designer",
      company: "Deerwalk Services",
      duration: "July 2023 - Present",
      description: [
        "Lead UI/UX design initiatives for web and mobile applications",
        "Create wireframes, prototypes and high-fidelity designs using Figma",
        "Collaborate with development team to ensure design implementation",
        "Conduct user research and usability testing"
      ]
    },
    {
      title: "Freelance Designer",
      company: "Self-Employed", 
      duration: "2022 - Present",
      description: [
        "Design branding materials, social media content and marketing collateral",
        "Work directly with clients to understand requirements and deliver solutions",
        "Create logos, business cards, brochures and other print materials",
        "Manage multiple projects and deadlines independently"
      ]
    }
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Experience</h2>
                  <div className="experience-timeline">
                    {experiences.map((experience, index) => (
                      <div className="experience-item" key={index}>
                        <h3>{experience.title}</h3>
                        <h4>{experience.company}</h4>
                        <p className="duration">{experience.duration}</p>
                        <ul>
                          {experience.description.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

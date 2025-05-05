import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import { FaCode, FaPaintBrush, FaLaptopCode, FaPencilRuler } from "react-icons/fa";
import figma from "../assets/img/figma.png";
import photoshop from "../assets/img/ps.png";
import illustrator from "../assets/img/illus.png";
import react from "../assets/img/react.png";
import premiere from "../assets/img/pre.png";


export const Skills = () => {
  const skillItems = [
    { icon: <FaCode size={60} color="#fff" />, title: "Web Development", desc: "Building responsive and scalable websites." },
    { icon: <FaPaintBrush size={60} color="#fff" />, title: "UI/UX Design", desc: "Designing user-friendly interfaces and experiences." },
    { icon: <FaLaptopCode size={60} color="#fff" />, title: "Graphic Design", desc: "Creating visually appealing graphics and branding." },
    { icon: <FaPencilRuler size={60} color="#fff" />, title: "Branding", desc: "Developing unique brand identities." },
  ];

  const tools = [
    { name: 'Figma', icon: figma },
    { name: 'Photoshop', icon: photoshop },
    { name: 'Illustrator', icon: illustrator },
    { name: 'React', icon: react },
    { name: 'Premiere Pro', icon: premiere },
    { name: 'Premiere Pro', icon: premiere },
    { name: 'Premiere Pro', icon: premiere },
    { name: 'Premiere Pro', icon: premiere },
  
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pt-5">
            <h2>What I do</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum has been the industry's standard dummy text.</p>
          </div>

          {skillItems.map((item, index) => (
            <div className="col-lg-3 col-md-6 mb-4" key={index}>
              <div className="card h-100 text-center p-3 shadow-sm border-0">
                {/* <img src={item.img} alt="Skill Icon" className="card-img-top mx-auto " style={{ width: "80px", height: "100px" }} /> */}
                <div className="icon mb-3">{item.icon}</div>
                <div className="card-body-skills">
                  <h5 className="card-title"style={{ color: 'white' }}>{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}


<div className="col-12 text-center pt-5">
            <h3 className="text-white mb-5 pb-4">Tools I Use</h3>
            <div className="row justify-content-center">
              {tools.map((tool, index) => (
                <div className="col-3 col-md-1  mb-4" key={index}>
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto"
                    style={{
                      width: '70px',
                      height: '70px',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                      backgroundColor: 'white',
                    }}
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      style={{ width: '35px', height: '35px' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

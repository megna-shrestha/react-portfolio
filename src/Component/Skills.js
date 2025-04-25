import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import { FaCode, FaPaintBrush, FaLaptopCode, FaPencilRuler } from "react-icons/fa";


export const Skills = () => {
  const skillItems = [
    { icon: <FaCode size={60} color="#fff" />, title: "Web Development", desc: "Building responsive and scalable websites." },
    { icon: <FaPaintBrush size={60} color="#fff" />, title: "UI/UX Design", desc: "Designing user-friendly interfaces and experiences." },
    { icon: <FaLaptopCode size={60} color="#fff" />, title: "Graphic Design", desc: "Creating visually appealing graphics and branding." },
    { icon: <FaPencilRuler size={60} color="#fff" />, title: "Branding", desc: "Developing unique brand identities." },
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

        </div>
      </div>
    </section>
  );
};

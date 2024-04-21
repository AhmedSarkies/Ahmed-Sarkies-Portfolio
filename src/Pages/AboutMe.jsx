import { motion } from "framer-motion";
import aboutMe from "../assets/About-me.jpg";
import { Title } from "../Component";
import { Link } from "react-router-dom";

const AboutMe = () => {
  const welcomeTitle = {
    hidden: {
      x: "200%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <section className="container">
      <Title title="About me" />
      <div className="d-flex justify-content-center align-items-center flex-column flex-lg-row text-center">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
        >
          <img
            src={aboutMe}
            className="img order-1 order-lg-0 rounded about-img"
            alt="about me"
          />
        </motion.div>
        <div className=" ps-lg-5 pb-3 pt-3 ">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="text-start"
          >
            My name is <span className="about-name fw-bold">Ahmed Sarkies</span>
            , and I am a dedicated front-end web developer from Egypt. I have a
            passion for learning and creating new applications with fast,
            secure, and clean code.
            {/* I obtained certificates of completion and
            proficiency from
            <span className="about-cert fw-bold">
              ( Udemy, Udacity, Hacker Rank, Maharah Tech, Coderbte, W3 Schools,
              Solo Learn ).
            </span> */}
            {/* <br /> */} I specialize in programming and maintaining
            responsive websites that provide seamless user experiences.I take
            pride in crafting dynamic and engaging interfaces by writing
            optimized and clean code. I stay up-to-date with the latest
            development tools and techniques to ensure that I deliver
            cutting-edge web applications.
          </motion.p>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-start justify-content-lg-center">
            {[
              {
                text: "Download CV",
                link: "https://drive.google.com/file/d/1J4zIkkHWFWWhheJPmeMpaglEJ0j1tDTu/view?usp=sharing",
                target: "_blank",
              },
              {
                text: "Get in touch",
                link: "/contact",
                target: "_self",
              },
              {
                text: "Show Skills",
                link: "/skills",
                target: "_self",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="me-4"
                variants={welcomeTitle}
                initial={"hidden"}
                animate={"visible"}
                transition={{ delay: 0.05 + index * 0.05 }}
                exit={{ opacity: 0, y: "200%" }}
              >
                <Link to={item.link} target={item.target}>
                  <button type="button" className="btn">
                    {item.text}
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

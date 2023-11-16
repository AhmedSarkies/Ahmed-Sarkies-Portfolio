import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mainImg from "../assets/ahmedsarkies.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { HomeSocial, MobileHomeSocial } from "../Component";
import { FaDownload } from "react-icons/fa";
import { Fragment } from "react";
const Home = () => {
  const homeTitle = useTypewriter({
    words: ["Developer", "Engineer", "Designer", "Freelancer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 80,
  });
  const welcomeTitle = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <Fragment>
      <HomeSocial />
      <section className="page-container container d-grid place-items-center">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="welcome">
              <motion.h6
                variants={welcomeTitle}
                initial={"hidden"}
                animate={"visible"}
                exit={{ x: "-100%", opacity: 0 }}
              >{`Hi There, it's`}</motion.h6>
              <motion.h1
                variants={welcomeTitle}
                initial={"hidden"}
                animate={"visible"}
                transition={{ delay: 0.1 }}
                exit={{ x: "-100%", opacity: 0 }}
                className="homeName mb-2"
              >{`Ahmed Sarkies`}</motion.h1>
              <motion.h3
                variants={welcomeTitle}
                initial={"hidden"}
                animate={"visible"}
                transition={{ delay: 0.2 }}
                exit={{ x: "-100%", opacity: 0 }}
              >
                {`I'm a Front-End ${homeTitle[0]}`}
                <Cursor cursorStyle="|" />
              </motion.h3>
              {[
                "Need a professional web developer?",
                "You've come to the best place.",
              ].map((text, index) => (
                <motion.p
                  key={index}
                  variants={welcomeTitle}
                  initial={"hidden"}
                  animate={"visible"}
                  transition={{ delay: 0.25 + index * 0.05 }}
                  exit={{ x: "-100%", opacity: 0 }}
                >
                  {text}
                </motion.p>
              ))}
              <MobileHomeSocial />
              <div className="d-flex gap-3 mt-4 btn-container justify-content-lg-start justify-content-center align-items-center">
                <motion.a
                  variants={welcomeTitle}
                  initial={"hidden"}
                  animate={"visible"}
                  transition={{ delay: 0.38 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  href="https://drive.google.com/file/d/1uGbjJQ50O9Xthb7g3s6IMkwFmu7N278q/view?usp=sharing"
                >
                  <button className="button rounded" type="button">
                    <span className="button__text">Download CV</span>
                    <span className="button__icon">
                      <FaDownload className="text-light" />
                    </span>
                  </button>
                </motion.a>
                {[
                  {
                    text: "Contact me",
                    link: "/contact",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={welcomeTitle}
                    initial={"hidden"}
                    animate={"visible"}
                    transition={{ delay: 0.35 + index * 0.03 }}
                    exit={{ x: "-100%", opacity: 0 }}
                  >
                    <Link to={item.link}>
                      <button type="button" className="btn">
                        {item.text}
                      </button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 second-col">
            <motion.div
              initial={{ x: "130%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "130%", opacity: 0 }}
              className="home-avatar-box"
            >
              <div className="home-avatar-in">
                <img
                  src={mainImg}
                  className="img rounded"
                  alt="Ahmed Sarkies"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;

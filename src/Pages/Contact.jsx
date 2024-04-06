import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { social } from "../data";
import { Title } from "../Component";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          toast.success("Message Sent Successfully");
        },
        () => {
          setLoading(false);
          toast.error("Message Not Sent");
        }
      );
  };
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
    <section className="container">
      <Title title="Contact" />
      <div className="row justify-content-center d-flex gap-4 row-gap-0">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{ x: "-100vw" }}
          className="col col-lg-4 my-3 rounded contact-cont p-4 flex-grow-1"
        >
          <div className="contact-info">
            <div className="contact-name">
              <div className="sm-title">
                <h3>Email</h3>
              </div>
              <p>
                <a href="mailto:AhmedSarkies@gmail.com">
                  AhmedSarkies@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-name">
              <div className="sm-title mt-4">
                <h3>Phone</h3>
              </div>
              <p>
                <Link to={"https://wa.me/+201098397413"} target="_blank">
                  +20 0109 839 7413
                </Link>
                <br />
                {/* <Link to={"https://wa.me/+201014270521"} target="_blank">
                  +20 0101 427 0521
                </Link> */}
              </p>
            </div>
            <div className="d-flex gap-1 gap-xs-3 mt-3">
              {social.map((item, index) => {
                return (
                  <motion.span
                    key={item.id}
                    variants={welcomeTitle}
                    initial={"hidden"}
                    animate={"visible"}
                    transition={{ delay: index * 0.03 }}
                    exit={{ x: -100, opacity: 0 }}
                  >
                    <Link
                      to={item.link}
                      className="fs-2 p-2 rounded contact-icon"
                      target="_blank"
                    >
                      {item.icon}
                    </Link>
                  </motion.span>
                );
              })}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x: "100vw" }}
          className="col-lg-7 my-3 rounded contact-cont p-4 flex-grow-1"
        >
          <div className="contact-form">
            <div className="sm-title">
              <h3>Get In Touch</h3>
            </div>
            <form
              id="contact-form"
              method="POST"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="from_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      placeholder="Name *"
                      className="form-control"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="user_email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email *"
                      className="form-control"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      id="subject"
                      placeholder="Subject *"
                      className="form-control"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      id="message"
                      placeholder="Your message *"
                      rows="3"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="send">
                    <button
                      className={`btn`}
                      type="submit"
                      value="Send"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="spinner-border" role="status"></span>
                      ) : (
                        <span>Contact Us</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

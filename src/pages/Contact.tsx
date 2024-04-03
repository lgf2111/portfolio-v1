import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import anime from "animejs";

const Contact = () => {
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_29ss0un",
        "template_809nbqj",
        e.target,
        "UNCtgHQfbRqGb8CUA"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent, I'll get back to you ASAP!");
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );
  }

  const [, setA1Ref] = useState<ReturnType<typeof anime> | undefined>();
  const [, setA2Ref] = useState<ReturnType<typeof anime> | undefined>();
  const [, setA3Ref] = useState<ReturnType<typeof anime> | undefined>();

  useEffect(() => {
    setA1Ref(
      anime({
        targets: "#contactMeBox",
        scale: [0, 1],
        duration: 1500,
      })
    );
    setA2Ref(
      anime({
        targets: "#contactMe",
        scaleX: [1.25, 1],
        translateX: [-40, 0],
        duration: 1500,
        easing: "spring(1, 100, 100, 0)",
        delay: 1500,
      })
    );
    setA3Ref(
      anime({
        targets: "#myInformationBox",
        translateX: [-100, "-10rem"],
        translateY: ["-2.5rem", "-2.5rem"],

        duration: 1500,
        easing: "spring(1, 100, 100, 0)",
        delay: 1200,
      })
    );
  }, []);

  const [contactMeId, setContactMeId] = useState("");

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 768) {
        setContactMeId("contactMe");
      } else {
        setContactMeId("");
      }
    };

    handleWindowResize(); // Set initial value on component mount

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Layout>
      <div className="flex items-center justify-center h-screen mx-5">
        <div
          className="bg-green-100 rounded-lg p-6 flex relative"
          id="contactMeBox"
        >
          <div
            className="w-64 absolute invisible md:visible"
            id="myInformationBox"
          >
            <div className="bg-green-300 rounded-lg p-6 me-3">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-300 bg-[length:100%_3px] bg-no-repeat bg-bottom">
                My Information
              </h2>
              <h3 className="text-lg font-semibold">Jeff Lee</h3>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="me-1 w-4" />
                <a className="underline" href="tel:+6588128123">
                  88128123
                </a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faEnvelope} className="me-1 w-4" />
                <a className="underline" href="mailto:lgf2111@gmail.com">
                  lgf2111@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faLocationDot} className="me-1 w-4" />
                <p>Woodlands, Singapore</p>
              </div>
            </div>
          </div>
          <div className="md:ms-24 md:w-96" id={contactMeId}>
            <h2 className="text-2xl font-bold mb-4 pe-24 bg-gradient-to-r from-green-500 to-green-100 bg-[length:100%_3px] bg-no-repeat bg-bottom">
              Contact Me
            </h2>
            <form className="flex flex-col" onSubmit={sendEmail}>
              <input
                className="border ps-2 py-1"
                placeholder="Name*"
                name="name"
              />
              <div className="my-1 flex">
                <input
                  className="border me-1 ps-2 py-1 w-1/2"
                  placeholder="Email Address*"
                  name="email"
                />
                <input
                  className="border ps-2 py-1 w-1/2"
                  placeholder="Phone Number"
                  name="phone"
                />
              </div>
              <textarea
                className="border ps-2 py-1"
                placeholder="Message*"
                name="message"
              ></textarea>
              <div className="grid md:grid-cols-2 mt-1">
                <input
                  className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm py-1.5 text-center md:w-1/2"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

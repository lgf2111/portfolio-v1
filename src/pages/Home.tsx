import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import anime from "animejs";

const Home = () => {
  const [, setA1Ref] = useState<ReturnType<typeof anime> | undefined>();
  const [, setA2Ref] = useState<ReturnType<typeof anime> | undefined>();

  useEffect(() => {
    setA1Ref(
      anime({
        targets: "#landing-text",
        translateX: [-250, 0],
        duration: 1000,
        easing: "spring(1, 100, 100, 0)",
      })
    );
  }, []);

  useEffect(() => {
    setA2Ref(
      anime({
        targets: "#landing-image",
        translateX: [250, 0],
        duration: 1000,
        easing: "spring(1, 100, 100, 0)",
      })
    );
  }, []);

  return (
    <Layout>
      <div className="flex items-center h-screen">
        <div
          className="sm:w-1/2 flex flex-col justify-center items-start sm:items-end pl-10 sm:pr-5 sm:text-right"
          id="landing-text"
        >
          <h1 className="text-2xl text-green-400 font-semibold">
            Hi, I'm Jeff Lee!
          </h1>
          <p className="text-gray-100 sm:w-3/5 mt-3">
            I am from <b>Singapore🇸🇬</b> and I love <b>coding👨🏻‍💻</b>. My passion
            is creating beautiful and functional websites and web applications
            using various programming languages such as <b>HTML</b>, <b>CSS</b>,
            <b>JavaScript</b>, and <b>Python</b>. I strive to stay up-to-date
            with the latest industry trends and always focus on writing clean
            and efficient code. Let's build something amazing together!
          </p>
        </div>
        <div className="invisible sm:visible sm:w-1/2 pl-5" id="landing-image">
          <img
            src={require("../assets/images/landing.jpg")}
            alt="Landing"
            className="w-80 h-80 object-cover rounded-lg"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

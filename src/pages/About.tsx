import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import anime from "animejs";
import timelineData from "../assets/data/timeline.json";

const About = () => {
  const [, setA1Ref] = useState<ReturnType<typeof anime> | undefined>();
  const [, setA2Ref] = useState<ReturnType<typeof anime> | undefined>();
  const [, setA3Ref] = useState<ReturnType<typeof anime> | undefined>();
  const [, setA4Ref] = useState<(ReturnType<typeof anime> | undefined)[]>([]);

  useEffect(() => {
    setA1Ref(
      anime({
        targets: "#line",
        duration: 1000,
        height: "100%",
        easing: "linear",
      })
    );
  }, []);

  useEffect(() => {
    setA2Ref(
      anime({
        targets: "#arrow",
        duration: 1000,
        height: "100%",
        delay: 1000,
      })
    );
  }, []);

  useEffect(() => {
    setA3Ref(
      anime({
        targets: ".data",
        translateY: ["5px", "-5px"],
        duration: 2000,
        direction: "alternate",
        loop: true,
        easing: "easeInOutSine",
        delay: 2000,
      })
    );
  }, []);

  useEffect(() => {
    const refs = timelineData.map(() => undefined);
    setA4Ref(refs);
  }, []);

  useEffect(() => {
    timelineData.forEach((item, index) => {
      setA4Ref((prevRefs) => {
        if (prevRefs[index]) {
          // Skip if animation reference already exists
          return prevRefs;
        }

        const animationRef = anime({
          targets: `#data-${index}`,
          translateX: index % 2 === 0 ? [-1000, 0] : [1000, 0],
          duration: 1000,
          easing: "spring(1, 100, 100, 0)",
          delay: index * 500, // Delay each animation based on index
        });

        return prevRefs.map((ref, refIndex) =>
          refIndex === index ? animationRef : ref
        );
      });
    });
  }, []);

  return (
    <Layout>
      <div className="container mx-auto w-full h-full mt-20">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2 absolute border-green-400 h-full left-16 translate-x-1 sm:translate-x-0 sm:left-1/2"
            id="line"
          ></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-start sm:justify-between ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              } items-center w-full ${
                index % 2 === 0 ? "left-timeline" : "right-timeline"
              }`}
            >
              <div className="order-1 sm:w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-green-400 shadow-xl rounded-lg px-2 py-1">
                <h1 className="mx-auto text-gray-100 font-semibold text-lg">
                  {item.year}
                </h1>
              </div>
              <div
                className="ms-5 sm:ms-0 order-1 bg-green-200 rounded-lg shadow-xl sm:w-5/12 px-6 py-4 data"
                id={"data-" + index.toString()}
              >
                <h3 className="font-bold text-gray-700 text-xl">
                  {item.title}
                </h3>
                {item.company && (
                  <h4 className="font-semibold text-gray-700 text-sm">
                    {item.company}
                  </h4>
                )}
                {item.school && (
                  <h4 className="font-semibold text-gray-700 text-sm">
                    {item.school}
                  </h4>
                )}
                <h5 className="mb-3 font-medium text-gray-700 text-xs">
                  {item.duration}
                </h5>
                <p className="text-sm font-medium leading-snug tracking-wide text-gray-700 text-opacity-100">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden h-3">
          <div
            className="absolute bg-gray-200  h-3 w-3 left-16 sm:left-1/2 sm:-translate-x-1 rotate-45 -translate-y-1/2"
            id="arrow"
          ></div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

import React, { useState, useEffect } from "react";
import { MapPin, Dot, Github, MoveRight } from "lucide-react";

function MainContent() {
  const text =
    "A Full-Stack developer fueled by curiosity and creativity. Step into my world where imagination meets innovation, and together, let's embark on a journey to redefine digital experiences. From crafting pixel-perfect front-end designs to engineering robust back-end solutions, I'm here to turn dreams into code and aspirations into reality.  Join me as we explore the boundless possibilities of the digital realm and make waves in the ever-evolving landscape of technology.";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const typingSpeed = 15;

  useEffect(() => {
    const interval = setInterval(() => {
      setTypedText(text.slice(0, index));
      setIndex((prevIndex) =>
        prevIndex === text.length ? text.length : prevIndex + 1
      );
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [index, text.length]);

  return (
    <div className="flex h-main flex-col-reverse gap-10 lg:flex-row py-16">
      <div className="lg:w-2/3 flex flex-col gap-6">
        <div>
          <div className="font-extrabold lg:font-bold text-5xl lg:text-6xl heading1 text-center lg:text-left">
            Hi, I'm Jai Srivastava
          </div>
          <div className="py-7 text-justify lg:pr-16">{typedText}</div>
        </div>
        <div className="flex  flex-col gap-7">
          <div
            className={`flex flex-col gap-2 ${
              text.length === index ? "opacity-100" : "opacity-0"
            } transition-opacity ease-in duration-100`}
          >
            <div className="flex items-center gap-3">
              <MapPin className="text-red-500" /> Lucknow, India.
            </div>
            <div className="flex items-center gap-3">
              <Dot className="text-green-600" /> Available for new
              opportunities.
            </div>
          </div>
          <div
            className={`flex items-center ${
              text.length === index ? "opacity-100" : "opacity-0"
            } transition-opacity ease-in duration-1000`}
          >
            <button className="contact text-lg font-bold">Contact Me</button>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 flex justify-center lg:items-center ">
        <img
          className="img-shadow h-60 lg:h-96 fade-in-image hover:scale-110 transition ease-in-out duration-500"
          alt="img"
          src="../../assets/DSC_0110.png"
        />
      </div>
    </div>
  );
}

export default MainContent;

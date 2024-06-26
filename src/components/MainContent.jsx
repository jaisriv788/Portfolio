import React, { useState, useEffect } from "react";
import { MapPin, Dot, ArrowDownToLine } from "lucide-react";
import pdf from "../../assets/CV_Developer__1_.pdf";

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
    <div className="flex h-main flex-col-reverse gap-10 items-center lg:flex-row py-16">
      <div className="lg:w-2/3 flex flex-col gap-6">
        <div>
          <div className=" font-extrabold lg:font-bold text-5xl lg:text-6xl  text-center lg:text-left">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-orange-600  to-yellow-400 text-transparent bg-clip-text">
              Jai Srivastava
            </span>{" "}
          </div>
          <div className="py-7 text-justify lg:pr-16">{typedText}</div>
        </div>
        <div
          className={`flex flex-col sm:flex-row sm:items-center gap-7 items-center ${
            text.length === index ? "opacity-100" : "opacity-0"
          } transition-opacity ease-in duration-1000`}
        >
          <button className="contact text-lg font-bold">Contact Me</button>
          <a
            href={pdf}
            className="lg:hidden contact text-lg font-bold flex justify-center items-center"
            download="Resume"
          >
            Download CV <ArrowDownToLine size={20} className="animate-pulse" />
          </a>
        </div>
      </div>
      <div className="lg:w-1/3 flex justify-center ">
        <img
          loading="lazy"
          className="img-shadow fade-in-image h-96 hover:scale-110 transition ease-in-out duration-500"
          alt="img"
          src="https://images.pexels.com/photos/23506516/pexels-photo-23506516.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
        />
      </div>
    </div>
  );
}

export default MainContent;

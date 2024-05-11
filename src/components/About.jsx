import React from "react";

function About() {
  return (
    <div className="bg2 text-white px-10 lg:px-20">
      <div className="pt-8 flex justify-center items-end ">
        <div className="bg-about h-fit px-5 py-1 rounded-3xl w-fit text-xl">
          About
        </div>
      </div>
      <div className="pt-10 pb-10 lg:pb-0 flex flex-col lg:flex-row gap-16 lg:gap-0">
        <div className="lg:w-1/3 flex justify-center ">
          <img
            loading="lazy"
            className="hover:scale-110 h-96 lg:h-5/6 img2-shadow transition ease-in-out duration-500"
            src="https://images.pexels.com/photos/23730134/pexels-photo-23730134.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="img"
          />
        </div>
        <div className="flex flex-col gap-5 lg:w-2/3 lg:px-10">
          <div className="text-2xl font-bold">
            Curious about me? Here ou have it:{" "}
          </div>
          <div className="flex flex-col gap-3 text-justify">
            <div>
              {" "}
              I'm a dedicated Full Stack Developer specializing in bridging the
              gap between design and functionality. With a Bachelor's degree in
              Electronics and Communication Engineering, I've cultivated a
              versatile skill set that allows me to excel in all aspects of web
              development.
            </div>
            <div>
              As a Full Stack Developer, I thrive on the challenge of crafting
              cohesive digital solutions from end to end. From designing
              captivating user interfaces to architecting robust backend
              systems, I relish every opportunity to blend creativity with
              technical precision. My expertise extends across a wide range of
              technologies and frameworks, including but not limited to HTML,
              CSS, JavaScript, React, Node.js, and MongoDB.{" "}
            </div>
            <div>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </div>
            <div>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or linkedin, witnessing the journey of early
              startups or enjoying some free time. You can follow me on{" "}
              <a
                href="https://www.linkedin.com/in/jai-srivastava-a4b174191/"
                className="underline underline-offset-2 cursor-pointer hover:text-gray-300"
              >
                Linkedin
              </a>{" "}
              or you can follow my{" "}
              <a
                href="https://github.com/jaisriv788"
                className="underline underline-offset-2 cursor-pointer hover:text-gray-300"
              >
                Github
              </a>
              .
            </div>
            <div>
              Finally, some quick bits about me:
              <ul className="mt-3 list-disc grid lg:grid-rows-2 lg:grid-cols-2 gap-2 lg:gap-x-5">
                <li>B.Tech in Electronics and Communication</li>
                <li>Quick Learner</li>
                <li>Adaptive</li>
                <li>Problem Solver</li>
              </ul>
            </div>
            <div>
              One last thing, I am available for new opportunites, so feel free
              to reach out.<span className="text-lg">😀</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

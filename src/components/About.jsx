import React from "react";

function About() {
  return (
    <div className="bg2 h-screen text-white px-10 lg:px-20">
      <div className="h-nav flex justify-center items-end ">
        <div className="bg-about h-fit px-5 py-1 rounded-3xl w-fit text-xl">
          About
        </div>
      </div>
      <div className="h-main py-8 flex">
        <div className="w-1/3 flex justify-center">
          <img
            loading="lazy"
            className="fade-in-image h-5/6 img2-shadow transition ease-in-out duration-500"
            src="https://images.pexels.com/photos/23730134/pexels-photo-23730134.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="img"
          />
        </div>
        <div className="w-2/3 px-16">brother</div>
      </div>
    </div>
  );
}

export default About;

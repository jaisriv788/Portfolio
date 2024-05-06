import React from "react";
import Navbar from "./Navbar";
import MainContent from "./MainContent";

function Main() {
  return (
    <div className="lg:h-screen text-white bg1 py-4 px-10  lg:px-20">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default Main;

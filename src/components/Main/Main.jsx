import React from "react";
import HoverableNavbar from "../HoverableNavbar/HoverableNavbar";
import Navbar from "../Navbar/Navbar";
import style from "./style.module.scss";
import AgileBoard from "./AgileBoard/AgileBoard";

const Main = () => {
  return (
    <div className={style.main}>
      <div>
        <HoverableNavbar />
        <Navbar />
      </div>
      <AgileBoard />
    </div>
  );

};

export default Main;

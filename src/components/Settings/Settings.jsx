import React from "react";
import Navbar from "./../Navbar/Navbar";
import HoverableNavbar from "./../HoverableNavbar/HoverableNavbar";
import "./Settings.scss";
import SettingForm from "./SettingForm/SettingForm";

const Settings = () => {
  return (
    <div className="settings">
      <div>
        <HoverableNavbar />
        <Navbar />
      </div>
      <SettingForm />
    </div>
  );
};

export default Settings;

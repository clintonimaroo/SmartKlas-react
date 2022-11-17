import React from "react";
import smartklas from "../../assets/PNGs/tools/smartklas.png";
import slack from "../../assets/PNGs/tools/slack.png";
import office from "../../assets/PNGs/tools/office.png";
import lazerpay from "../../assets/PNGs/tools/lazerpay.png";
import kahoot from "../../assets/PNGs/tools/kahoot.png";
import github from "../../assets/PNGs/tools/github.png";
import butterfly from "../../assets/PNGs/tools/butterfly.png";

const Tools = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-black text-center fw-bold mt-5">
        SmartKlas works great with the tools you love
      </h1>
      <p className="w-75 mx-auto text-center mt-2 text-super-light dm-sans">
        SmartKlas is the perfect tool for your organisation. Which ensures that
        everyone can work together smoothly within one safe environment.
      </p>
      <div className="p-5">
        <div className="tools-one mt-5">
          <div className="kahoot">
            <img src={kahoot} alt="Kahoot" />
          </div>
          <div className="slack">
            <img src={slack} alt="Slack" />
          </div>
        </div>
        <div className="tools-two mx-auto mb-5">
          <div className="lazerpay">
            <img src={lazerpay} alt="Lazerpay" />
          </div>
          <div className="smartklas">
            <img src={smartklas} alt="Smartklas" />
          </div>

          <div className="office">
            <img src={office} alt="office" />
          </div>
        </div>
        <div className="tools-three">
          <div className="butterfly">
            <img src={butterfly} alt="Butterfly" />
          </div>

          <div className="github">
            <img src={github} alt="Github" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;

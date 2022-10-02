import React from "react";
import tools from "../../assets/PNGs/tools.png";

const Tools = () => {
  return (
    <div className="container-fluid mt-5">
      <h1 className="text-black fw-bold text-center">
        SmartKlas works great with the tools you love
      </h1>
      <p className="text-muted dm-sans text-center w-50 mx-auto mb-5">
        SmartKlas is the perfect tool for your organisation. Which ensures that
        everyone can work together smoothly within one safe environment.
      </p>

			<div className="col-9 mt-3 mx-auto">
				<img src={tools} className="w-100" alt="Tools" />
			</div>
    </div>
  );
};

export default Tools;

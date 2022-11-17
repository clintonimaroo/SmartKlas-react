import React from "react";

const Community = () => {
  return (
    <div className="container rounded-9 mt-5 mb-5 community">
      <h1 className="text-white fw-bold mt-3">Join our amazing community</h1>
      <p className="col-xl-6 col-11 text-center mt-2 text-super-light text-light dm-sans">
        Be a part of our ever growing community by joining our Telegram channel
        and getting periodic updates
      </p>
      <button
        style={{ width: "160px", height: "50px" }}
        className="fw-bold btn btn-light btn-lg text-black shadow-none text-capitalize mt-3 rounded-6"
      >
        Join Us
      </button>
    </div>
  );
};

export default Community;

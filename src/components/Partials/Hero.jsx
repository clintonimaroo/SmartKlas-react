import React from "react";
import smartklasLogo from "../../assets/PNGs/logo-header.png";
import headerBg from "../../assets/PNGs/Header-Bg.png";

const Hero = () => {
  return (
    <header className="container-fluid">
      <div className="bg-image">
        <img
          src={headerBg}
          className="d-flex ms-auto"
          style={{ minHeight: "100vh !important" }}
          alt="Header background"
        />
        <div className="mask">
          <nav className="navbar navbar-light shadow-none mt-4">
            <div className="container-fluid">
              <a className="navbar-brand">
                <img src={smartklasLogo} height="30px" alt="Smartklas" />
              </a>

              <button className="btn btn-dark shadow-none rounded-4 fw-normal bg-black">
                Join Waitlist
              </button>
            </div>
          </nav>

          <div className="header-content text-center mt-5 mb-5">
            <span className="dm-sans fw-bold text-black bg-light px-3 py-2 rounded-6">
              Coming Soon! 🎉
            </span>
            <h1 className="text-black fw-bold display-4 mt-3">
              Building creator's <br /> and student understanding through <br />{" "}
              SmartKlas
            </h1>
            <p className="text-muted mx-auto dm-sans w-50">
              What do you want to{" "}
              <span className="fw-bold">
                [code, build, debug, deploy, collaborate on, analyze, learn]
              </span>{" "}
              today? Manage all your work as a Gen Z
            </p>

            <form
              className="input-group mx-auto input-group-xl pt-4"
              action="/"
            >
              <input
                placeholder="Enter your email"
                type="email"
                className="form-control ps-4 input-light remove-outline rounded-6"
              />
              <button className="fw-bold btn btn-dark btn-lg shadow-none text-capitalize bg-black ms-2 rounded-6">
                Join Waitlist
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

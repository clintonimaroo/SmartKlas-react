import React, { useEffect, useState, useId } from "react";
import smartklasLogo from "../../assets/PNGs/logo.png";
import headerBg from "../../assets/PNGs/background_circles.png";
import Modal from "./Modal";
import { db } from "../../firebase";
import { set, ref } from "firebase/database";

const Hero = () => {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const handleSubmit = async () => {
    if (!ValidateEmail(email)) return setError("Invalid email address");
    set(ref(db, `/${id}`), {
      email,
      id,
    });
  };

  return (
    <header className="container-fluid">
      <div className="bg-image">
        <img src={headerBg} className="w-100" alt="Header background" />
        <div className="mask">
          <nav className="navbar navbar-light shadow-none">
            <div className="container-fluid">
              <a className="navbar-brand mt-3">
                <img src={smartklasLogo} height="30px" alt="Smartklas" />
              </a>

              <button className="btn text-white mt-1 btn-lg shadow-none rounded-5 fw-normal text-capitalize bg-primary-blue">
                Join Waitlist
              </button>
            </div>
          </nav>

          <div className="header-content text-justify text-xl-center mt-5 mb-5">
            <span
              className="dm-sans fw-bold px-3 py-2 rounded-6"
              style={{ backgroundColor: "#FFFBF0", color: "#CD9605" }}
            >
              Introducing SmartKlas 🎉
            </span>
            <h1 className="text-black fw-bold display-3 mt-3">
              One platform, <br />
              Learn <span className="primary-blue">everywhere</span>
            </h1>
            <p className="text-muted mx-xl-auto dm-sans col-xl-6 col-11">
              SmartKlas is an excellent tool for any business. It guarantees
              that students around the enterprise can study, interact, and
              integrate their preferred tools on the same platform.
            </p>

            <div className="col-xl-5 col-md-11 mx-xl-auto">
              <form className="input-group pt-4">
                <input
                  placeholder="Enter your email"
                  type="email"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  value={email}
                  className="form-control ps-4 input-light remove-outline rounded-6"
                />
                <button
                  type="button"
                  onClick={() => handleSubmit()}
                  className="fw-bold wait-btn btn btn-dark bg-primary-blue btn-lg shadow-none text-capitalize bg-black ms-2 rounded-6"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;

import React from "react";
import Community from "../Partials/Community";
import Features from "../Partials/Features";
import Footer from "../Partials/Footer";
import Hero from "../Partials/Hero";
// import Tools from "../Partials/Tools";
import people from "../../assets/PNGs/group-people.png";
import LiveLearning from "../Partials/LiveLearning";
const Home = () => {
  return (
    <div>
      <Hero />
      <LiveLearning />
      <Features />
      {/* <Tools /> */}
      <div>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary"
          data-mdb-toggle="modal"
          data-mdb-target="#exampleModal"
        >
          Launch demo modal
        </button>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          data-mdb-backdrop="static"
          data-mdb-keyboard="false"
          // style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header" style={{ border: "none" }}>
                <button
                  type="button"
                  className="btn-close"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body text-center px-5">
                <img
                  src={people}
                  className="mb-3"
                  style={{ height: "80px" }}
                  alt="People"
                />
                <h1 className="dm-sans text-black fw-bold">
                  Yaay! You’re on the Waitlist!
                </h1>
                <p className="mx-auto mt-3 mb-4 small">
                  Congratulations boss! You have successfully joined the
                  waitlist and will be among the first users to try our
                  services. We just sent you a email confirmation.
                </p>

                <button className="w-100 btn btn-lg bg-black text-light rounded-5 fw-bold dm-sans text-capitalize">
                  Share with friends
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Community />
      <Footer />
    </div>
  );
};

export default Home;

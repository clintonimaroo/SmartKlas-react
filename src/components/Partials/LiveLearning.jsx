import React from "react";
import office from "../../assets/JPGs/office.png";

const LiveLearning = () => {
  return (
    <div className="container-fluid d-xl-block d-none mt-5 px-4">
      <div className="row">
        <div className="col-lg-5">
          <img src={office} className="w-100" alt="Lady operating her laptop" />
        </div>
        <div className="col-lg-6 ms-lg-4 ms-0">
          <h2 className="fw-bold display-5 text-black">
            Powering live learning globally
          </h2>
          <p className="dm-sans text-muted col-md-9 mt-4">
            SmartKlas does not only help you keep track of your work, we are
            here to open your business up to the world.
          </p>

          <div className="features mt-4">
            <div>
              <div className="row">
                <div className="col-auto" style={{ position: "relative" }}>
                  <div
                    className="ms-2 bg-black rounded-circle d-flex"
                    style={{
                      height: "50px",
                      width: "50px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="text-white fw-bold fs-4 dm-sans">1</span>
                  </div>
                  <span className="border border-1" style={{ height: "100%" }}></span>

                  <div
                    className="icon d-lg-block d-none"
                    style={{ position: "absolute", right: "45%" }}
                  ></div>
                </div>
                <div className="col-md-10">
                  <h5 className="fw-bold my-auto dm-sans text-dark mt-2">
                    Communication
                  </h5>
                  <p className="dm-sans text-muted">
                    A number of modules fall under the heading of communication.
                    This includes a secure messaging system.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-auto" style={{ position: "relative" }}>
                  <div
                    className="ms-2 bg-black rounded-circle d-flex"
                    style={{
                      height: "50px",
                      width: "50px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="text-white fw-bold fs-4 dm-sans">2</span>
                  </div>

                  <div
                    className="icon d-lg-block d-none"
                    style={{ position: "absolute", right: "45%" }}
                  ></div>
                </div>
                <div className="col-md-10">
                  <h5 className="fw-bold my-auto dm-sans text-dark mt-2">
                    Administrative
                  </h5>
                  <p className="dm-sans text-muted">
                    Another set of modules has been specifically developed to
                    ease administrative tasks. Sharing files is much smoother
                    via Intradesk
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-auto" style={{ position: "relative" }}>
                  <div
                    className="ms-2 bg-black rounded-circle d-flex"
                    style={{
                      height: "50px",
                      width: "50px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="text-white fw-bold fs-4 dm-sans">3</span>
                  </div>

                  <div
                    className="icon d-lg-block d-none"
                    style={{ position: "absolute", right: "45%" }}
                  ></div>
                </div>
                <div className="col-md-10">
                  <h5 className="fw-bold my-auto dm-sans text-dark mt-2">
                    Educational
                  </h5>
                  <p className="dm-sans text-muted">
                    The electronic learning environment offers teachers numerous
                    options to support their learning process via SmartKlas.g
                    system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveLearning;

import React from "react";
import tick from "../../assets/SVG/tick.svg";

// Tools
import smartklas from "../../assets/PNGs/tools/smartklas.png";
import slack from "../../assets/PNGs/tools/slack.png";
import office from "../../assets/PNGs/tools/office.png";
import lazerpay from "../../assets/PNGs/tools/lazerpay.png";
import kahoot from "../../assets/PNGs/tools/kahoot.png";
import github from "../../assets/PNGs/tools/github.png";
import twikey from "../../assets/PNGs/tools/twikey.png";
import netsupport from "../../assets/PNGs/tools/netsupport.png";

const Features = () => {
  return (
    <div className="container mt-3">
      <h1 className="text-black fw-bold text-center mt-5">
        Some of our unique features
      </h1>
      <p className="text-muted dm-sans text-center col-xl-6 col-11 mx-auto mb-5">
        SmartKlas does not only help you keep track of your work, we are here to
        open your business up to the world.
      </p>

      <div className="row">
        <div className="col-xl-4 col-md-6 p-2 equal">
          <div
            className="card rounded-9 shadow-none"
            style={{ background: "#FFEFFF" }}
          >
            <div className="card-body">
              <img
                src={slack}
                className="mb-3"
                alt="slack"
                style={{ height: "70px" }}
              />

              <h5 className="dm-sans text-dark mb-3">Slack</h5>
              <p className="dm-sans text-dark">
                Slack is a new way to communicate with your team. It's faster,
                better organized, and more secure than email.
              </p>
            </div>
          </div>
        </div>

        <div className="col-xl-4 equal col-md-6 p-2">
          <div
            className="card rounded-9 shadow-none"
            style={{ background: "#F5F9FF" }}
          >
            <div className="card-body">
              <img
                src={lazerpay}
                className="mb-3"
                alt="lazerpay"
                style={{ height: "70px" }}
              />

              <h5 className="dm-sans text-dark mb-3">Lazerpay</h5>
              <p className="dm-sans text-super-light">
                Lazerpay is specially crafted for product and service businesses
                who need to get paid across borders for the value they provide.
                Creators.
              </p>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 p-2 equal">
          <div
            className="card rounded-9 shadow-none"
            style={{ background: "#F9F9F9" }}
          >
            <div className="card-body">
              <img
                src={office}
                className="mb-3"
                alt="Microsoft 365"
                style={{ height: "70px" }}
              />

              <h5 className="dm-sans text-dark mb-3">Microsoft 365</h5>
              <p className="dm-sans text-super-light">
                Is Microsoft 365 native security enough? Close the gaps to
                protect against new threats. 70% of companies expect an
                email-borne attack.
              </p>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 p-2 equal">
          <div
            className="card rounded-9 shadow-none"
            style={{ background: "#F2FBFF" }}
          >
            <div className="card-body">
              <img
                src={netsupport}
                className="mb-3"
                alt="NetSupport"
                style={{ height: "70px" }}
              />

              <h5 className="dm-sans text-dark mb-3">NetSupport</h5>
              <p className="dm-sans text-super-light">
                NetSupport School is the market-leading and most feature-rich
                classroom instruction and monitoring solution
              </p>
            </div>
          </div>
        </div>

        <div className="col-xl-4 col-md-6 p-2 equal">
          <div
            className="card rounded-9 shadow-none"
            style={{ background: "#FFEEE6" }}
          >
            <div className="card-body">
              <img
                src={twikey}
                className="mb-3"
                alt="Twikey"
                style={{ height: "70px" }}
              />

              <h5 className="dm-sans text-dark mb-3">Twikey</h5>
              <p className="dm-sans text-super-light">
                NetSupport School is the market-leading and most feature-rich
                classroom instruction and monitoring solution
              </p>
            </div>
          </div>
        </div>

        <div className="col-xl-5 col-md-6 p-2 equal">
          <div
            className="card rounded-9 shadow-none"
            style={{ background: "#F9F9F9" }}
          >
            <div className="card-body">
              <img
                src={kahoot}
                className="mb-3"
                alt="Kahoot"
                style={{ height: "70px" }}
              />
              <h5 className="dm-sans text-dark mb-3">Kahoot!</h5>
              <p className="dm-sans text-super-light">
                NetSupport School is the market-leading and most feature-rich
                classroom instruction and monitoring solution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

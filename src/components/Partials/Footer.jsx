import smartklas from "../../assets/PNGs/logo-header.png";
import facebook from "../../assets/SVG/socials/facebook.svg";
import twitter from "../../assets/SVG/socials/twitter.svg";
import instagram from "../../assets/SVG/socials/instagram.svg";
import tiktok from "../../assets/SVG/socials/tik_tok.svg";
import line from "../../assets/SVG/line.svg";

const Footer = () => {
  return (
    // <!-- Footer -->
    <footer className="text-lg-left">
      <div className="container">
        <img className="mw-100" src={line} />
      </div>
      {/* <!-- Grid container --> */}
      <div className="container px-3 py-5 mt-4">
        <p className="text-center text-black fs-5 fw-bold dm-sans">
          © 2022 SmartKlas Technologies.
        </p>
        <p className="col-xl-7 col-11 text-center fs-5 text-super-light mx-auto dm-sans">
          SmartKlas is the perfect tool for your organisation. Which ensures
          that everyone can work together smoothly within one safe environment.
        </p>

        <img
          src={smartklas}
          width="200px"
          className="d-flex mt-5 mx-auto"
          alt="Smartklas"
        />
      </div>
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      <div className="text-center mb-3">
        <div className="social-icons">
          <span className="facebook ms-3 p-1">
            <img src={facebook} alt="Facebook" />
          </span>
          <span className="twitter ms-3 p-1">
            <img src={twitter} alt="Twitter" />
          </span>
          <span className="instagram ms-3 p-1">
            <img src={instagram} alt="Instagram" />
          </span>
          <span className="tiktok ms-3 p-1">
            <img src={tiktok} alt="TikTok" />
          </span>
        </div>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
    // <!-- Footer -->
  );
};

export default Footer;

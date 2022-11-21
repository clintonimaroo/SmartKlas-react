import { useState, useId } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import smartklasLogo from "../../assets/PNGs/logo.png";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Modal from "./Modal";
import { db } from "../../firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";

const MySwal = withReactContent(Swal);

const submit = () => {
  confirmAlert({
    childrenElement: () => <Modal />,
    customUI: ({ onClose }) => {
      return (
        <div className="container">
          <div className="custom-ui mx-auto col-md-6 bg-white shadow rounded-9">
            <div className="card-body" style={{ flexDirection: "column" }}>
              <Modal onClose={onClose} />
            </div>
          </div>
        </div>
      );
    },
    overlayClassName: "backdrop-blur",
  });
};

const toast = (title, text, icon, html) => {
  MySwal.fire({
    title: title,
    text: text,
    icon: icon,
    html: html,
  });
};

const Hero = () => {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const emailCollectionRef = collection(db, "waitlist_emails");

  function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const handleSubmit = async () => {
    const emailDoc = doc(emailCollectionRef, email);
    const emailSnap = await getDoc(emailDoc);

    if (!emailSnap.exists()) {
      const newEmail = email;
      const createdAt = new Date();

      try {
        await addDoc(emailDoc, {
          email: newEmail,
          createdAt,
        });
        submit();
      } catch (_err) {
        console.log("====================================");
        console.log(_err);
        console.log("====================================");
        setError("Internal server error");
      }
    }
  };

  return (
    <header className="container-fluid">
      <div className="bg" style={{ minHeight: "100vh" }}>
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
            SmartKlas is an excellent tool for any business. It guarantees that
            students around the enterprise can study, interact, and integrate
            their preferred tools on the same platform.
          </p>

          <div className="col-xl-5 col-md-11 mx-xl-auto">
            <form className="input-group pt-4 gap-2">
              <input
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setEmail(e.currentTarget.value)}
                value={email}
                className="form-control col-xl-8 col-md-8 col-lg-8 col-12 ps-4 input-light remove-outline rounded-6"
              />
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="fw-bold col-xl-4 col-md-4 col-lg-4 col-12 wait-btn btn btn-dark bg-primary-blue btn-lg shadow-none text-capitalize bg-black rounded-6"
              >
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

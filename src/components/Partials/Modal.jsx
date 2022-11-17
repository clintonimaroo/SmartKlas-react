import { RWebShare } from "react-web-share";
import people from "../../assets/PNGs/group-people.png";
const Modal = ({ onClose }) => {
  return (
    <>
      <button
        type="button"
        className="btn-close d-flex ms-auto"
        onClick={() => onClose()}
      ></button>
      <img
        src={people}
        className="mb-3 d-block mx-auto mw-100"
        style={{ height: "80px" }}
        alt="People"
      />
      <h1 className="dm-sans text-black text-center fw-bold">
        Yaay! You’re on the Waitlist!
      </h1>
      <p className="mx-auto col-md-10 text-black text-center mt-3 mb-4 small">
        Congratulations boss! You have successfully joined the waitlist and will
        be among the first users to try our services. We just sent you a email
        confirmation.
      </p>

      <RWebShare
        data={{
          text: "Hello, I am inviting you to smartklas, SmartKlas is an excellent tool for any brand. Students can study, interact, and integrate their preferred tools on the same platform.",
          url: "http://smartklas.com/",
          title: "Smartklas",
        }}
      >
        <button className="col-md-9 d-block mx-auto text-center fs-5 btn btn-lg bg-black text-light rounded-5 fw-bold dm-sans text-capitalize">
          Share with friends
        </button>
      </RWebShare>
    </>
  );
};

export default Modal;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const Landing = () => {
  const [modalOpen, setModalOpen] = useState(true); // add state for modal

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={`landing ${modalOpen ? 'modal-open' : ''}`}>
      <Modal isOpen={modalOpen} onRequestClose={closeModal}>
        <div className="modal-content">
          <h2>User Manual</h2>
          <p>Welcome! These are few Guidelines for user :</p>
          <ol>
            <li><u>Voter Registration</u></li>
            <p>
              For casting the vote user needs to first register himself. For
              this registration purpose , the user will be provided a voter
              registration form on this website. The voter can only register in
              the registration phase. After the registration phase is over the
              user can not register and thus will not be able to vote. For
              registration , the user will have to enter his Aadhar card number
              and the account address which the user will be using for voting
              purpose. At the first stage the user’s age will be checked. If
              the user is 18 or above 18 years of age then only he is eligible
              to vote. The second stage is Email verification. This stage is
              required to validate the voter itself. After entering the aadhar
              number and successful age verification. After verifying the email 
              user will get successfully registered.
            </p>
            <li><u>Voting Process</u></li>
            <p>
              Overall , voting process is divided into three phases. All of
              which will be initialized and terminated by the admin. User have
              to participate in the process according to current phase.
              Registration Phase: During this phase the registration of the
              users (which are going to cast the vote) will be carried out.
              Voting Phase: After initialization of voting phase from the
              admin, user can cast the vote in voting section.The casting of
              vote can be simply done by clicking on “VOTE” button, after which
              transaction will be initiated and after confirming transaction
              the vote will get successfully casted. After voting phase gets
              over user will not be able to cast vote. Result Phase: This is
              the final stage of whole voting process during which the results
              of election will be displayed at “Result” section.
            </p>
          </ol>
          <button onClick={closeModal}>Okay</button>
        </div>
      </Modal>

      <div className="left">
        <div className="logo">
          <img src="logo.png" />
        </div>

        <div className="title-large">Online</div>
        <div className="title-large">Voting System</div>
        <div className="title-small">based on blockchain</div>

        <div className="button-wrapper">
          <Link to="/login">
            <button className="button-black">Login</button>
          </Link>

          <Link to="/view">
            <button>Result</button>
          </Link>
        </div>
      </div>

      <div className="right">
        <img className="frontvote" src="vote.png" />
      </div>
    </div>
  );
};

export default Landing;
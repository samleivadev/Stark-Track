import "../aaInterface/Modal.css";

import React, { useState } from "react";

import Modal from "../aaInterface/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="userApp">
      <h1>Hey, click on the button to open the modal.</h1>
      <div className='actions'>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Need CTDI Support
      </button>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Need Supplies
      </button>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Need a PA
      </button>
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
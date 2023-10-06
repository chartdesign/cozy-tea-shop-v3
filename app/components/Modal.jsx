import React from "react";
// import "../components/styles/modal.css";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className=''>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=''
      >
        <p className='' onClick={onClose}>
          X
        </p>
      </div>
    </div>
  );
};

export default Modal;

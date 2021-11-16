import React from 'react';
import ReactDom from "react-dom";
import "@styles/components/Modal.scss";

function Modal({ children }) {
  return ReactDom.createPortal(
    <div className="Portal-container">{children}</div>,
    document.getElementById("modal")
  );
}

export { Modal };

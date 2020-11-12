import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

var Modal = ({ children }) => {
  var elRef = useRef(null);

  if (!elRef.current) {
    const div = document.createElement("div");
    elRef.current = div;
  }

  // remove <div> once Modal is no longer being rendered:
  useEffect(() => {
    var modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;

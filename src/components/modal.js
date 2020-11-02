import React, { forwardRef, useState, useImperativeHandle } from "react";

const Modal = (props, ref) => {
  const [visible, setVisible] = useState(false);

  function openModal(ref) {
    setVisible(true);
    console.log("s");
  }

  useImperativeHandle(ref, () => {
    return {
      openModal,
    };
  });

  function handleCloseModal({ ...rest }, ref) {
    setVisible(false);
  }

  if (!visible) {
    return null;
  }

  return (
    <div className="modal">
      Modal aberto
      <button onClick={handleCloseModal}>Fechar modal</button>
    </div>
  );
};

export default forwardRef(Modal);

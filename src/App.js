import React, { useRef } from "react";

import Input from "./components/input";
import Modal from "./components/modal";

const App = React.forwardRef(() => {
  const nameInputRef = useRef(null);
  const acceptTermsRef = useRef({ value: false });
  const modalRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    nameInputRef.current?.focus();
    console.log(nameInputRef.current.value);
  }
  function handleAcceptTerms() {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }
  function handleOpenModal() {
    modalRef.current?.openModal();
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input
          name="name"
          label="Nome completo"
          placeholder="digite o seu nome"
          ref={nameInputRef}
        />
        <button type="button" onClick={handleAcceptTerms}>
          Aceitar Termos
        </button>

        <button type="submit">Realizar focus</button>
      </form>

      <button onClick={handleOpenModal}>Abrir modal</button>

      <Modal ref={modalRef} />
    </div>
  );
});

export default App;

import React from 'react';
import './FormPage.css'; // Assuming you will create this CSS file

const FormPage = () => {
  return (
    <div className="form-container">
      <h1>Formulário</h1>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSemT_3W2cXTi_-deRo6rh-8aOqNRBaBHSq_l4HQj88HCH2EyA/viewform"
        className="form-iframe"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Formulário"
      >
        Carregando…
      </iframe>
    </div>
  );
};

export default FormPage;

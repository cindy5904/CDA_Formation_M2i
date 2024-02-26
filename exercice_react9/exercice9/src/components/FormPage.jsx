import React from "react";

const FormPage = () => {
  return (  
    <>
      <h1>Formulaire</h1>
      <form>
        <label>
          Nom:
          <input type="text" />
        </label>
        <br />
        <label>
          Prénom:
          <input type="text" />
        </label>
        <br />
        <label>
          Adresse:
          <input type="text" />
        </label>
        <br />
        <label>
          Numéro de téléphone:
          <input type="text" />
        </label>
        <br />
        <button type="submit">Soumettre</button>
      </form>
    </>
  );
}

export default FormPage;

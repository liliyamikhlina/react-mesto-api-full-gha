import React from "react";

function InfoTooltip({ result, text, isOpen, onClose }) {
  
  const handleClose = () => {
    onClose();
  };

  return (
    <div className={`popup ${isOpen ? "popup_active" : ""}`}>
      <div className="popup__container">
        <img className="popup__result" alt={result} src={result} />
        <h2 className="popup__text">{text}</h2>
        <button className="popup__close-button" type="button" onClick={handleClose} />
      </div>
    </div>
  );
}

export default InfoTooltip;
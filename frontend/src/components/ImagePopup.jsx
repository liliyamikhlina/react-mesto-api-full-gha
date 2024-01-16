import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup popup-photo ${card ? "popup_active" : ""}`}>
      {card && (
        <div className="popup__photo-container">
          <img className="popup__image" src={card.link} alt={card.name} />
          <button
            className="popup__close-button"
            type="button"
            onClick={onClose}
          />
          <p className="popup__photo-text">{card.name}</p>
        </div>
      )}
    </div>
  );
}

export default ImagePopup;

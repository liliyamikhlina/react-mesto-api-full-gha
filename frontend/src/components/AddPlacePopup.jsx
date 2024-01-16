import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [place, setPlace] = useState("");
  const [link, setLink] = useState("");

  function handlePlaceChange(e) {
    setPlace(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      place,
      link,
    });
  }

  useEffect(() => {
    if (isOpen) {
      setPlace("");
      setLink("");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="card"
      title="Новое Место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonLabel="Создать"
    >
      <input
        className="popup__input"
        id="input-place"
        type="text"
        name="place"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
        value={place}
        onChange={handlePlaceChange}
      />
      <span className="popup__input-error input-place-error" />
      <input
        className="popup__input"
        id="input-link"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={handleLinkChange}
      />
      <span className="popup__input-error input-link-error" />{" "}
    </PopupWithForm>
  );
}

export default AddPlacePopup;

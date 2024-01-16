import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const currentUser = React.useContext(CurrentUserContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleJobChange(e) {
    setJob(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      job,
    });
  }

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setJob(currentUser.about);
    }
  }, [isOpen, currentUser]);

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonLabel="Сохранить"
    >
      <input
        className="popup__input"
        id="input-name"
        type="text"
        name="name"
        placeholder="Ваше имя"
        minLength="2"
        maxLength="40"
        required
        value={name !== undefined ? name : ""}
        onChange={handleNameChange}
      />
      <span className="popup__input-error input-name-error"></span>
      <input
        className="popup__input"
        id="input-job"
        type="text"
        name="job"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
        value={job !== undefined ? job : ""}
        onChange={handleJobChange}
      />
      <span className="popup__input-error input-job-error"/>{" "}
    </PopupWithForm>
  );
}

export default EditProfilePopup;

import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      link: inputRef.current.value,
    });
  }

  useEffect(() => {
    if (isOpen) {
      inputRef.current.value = "";
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonLabel="Сохранить"
    >
      <input
        ref={inputRef}
        className="popup__input"
        id="input-avatar"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span className="popup__input-error input-avatar-error"/>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

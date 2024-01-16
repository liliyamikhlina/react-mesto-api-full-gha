import React, { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onDeleteClick, onCardLike }) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  function handleClick() {
    onCardClick(card);
  }

  function handleDeleteClick() {
    onDeleteClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <div className="card">
      {isOwn && (
        <button
          className={`card__trash ${isOwn ? "card__trash_active" : ""}`}
          type="button"
          onClick={handleDeleteClick}
        />
      )}
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="card__box">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-box">
          <button
            className={`card__like ${isLiked ? "card__like_active" : ""}`}
            type="button"
            onClick={handleLikeClick}
          />
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

function Api(data) {
  const _baseUrl = data.baseUrl;
  const _headers = data.headers;

  // Проверяем, все ли в порядке с ответом
  const checkResponseStatus = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

  // Загружаем информацию о пользователе с сервера
  const getUserInfo = () => {
    return fetch(`${_baseUrl}/users/me`, {
      headers: _headers,
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  // Загружаем карточки с сервера
  const getInitialCards = () => {
    return fetch(`${_baseUrl}/cards`, {
      headers: _headers,
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  // Редактируем профиль
  const editProfile = (data) => {
    return fetch(`${_baseUrl}/users/me`, {
      method: 'PATCH',
      headers: _headers,
      body: JSON.stringify({
        name: data.name,
        about: data.job,
      }),
    }).then(checkResponseStatus);
  };

  // Добавляем новую карточку
  const addCard = (data) => {
    return fetch(`${_baseUrl}/cards`, {
      method: "POST",
      headers: _headers,
      body: JSON.stringify({
        name: data.place,
        link: data.link,
      }),
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  // Удаляем добавленную нами карточку
  const deleteCard = (id) => {
    return fetch(`${_baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: _headers,
    }).then(checkResponseStatus);
  };

  // Ставим лайк карточке
  const likeCard = (id) => {
    return fetch(`${_baseUrl}/cards/${id}/likes`, {
      method: 'PUT',
      headers: _headers,
    }).then(checkResponseStatus);
  };

  // Снимаем лайк с карточки
  const dislikeCard = (id) => {
    return fetch(`${_baseUrl}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: _headers,
    }).then(checkResponseStatus);
  };

  // Обновляем аватар пользователя
  const changeAvatar = (data) => {
    return fetch(`${_baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: _headers,
      body: JSON.stringify({
        avatar: data.link,
      }),
    }).then(checkResponseStatus);
  };

  return {
    getUserInfo,
    getInitialCards,
    editProfile,
    addCard,
    deleteCard,
    likeCard,
    dislikeCard,
    changeAvatar,
  };
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-71',
  headers: {
      authorization: '9c1cf152-056e-4431-8276-6546daba52e3',
      'Content-Type': 'application/json'
  }
});

export default api;
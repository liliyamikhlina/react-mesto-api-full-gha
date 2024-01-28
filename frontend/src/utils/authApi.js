function AuthApi() {
  const baseUrl = "http://api.liliya.mikhlina.nomoredomainsmonster.ru";
  const headers = {
    "Content-Type": "application/json",
  };

  const checkResponseStatus = (res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };
  
  const registerUser = (email, password) => {
    return fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  const loginUser = (email, password) => {
    return fetch(`${baseUrl}/signin`, {
      method: "POST",
      credentials: "include",
      headers: headers,
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        return checkResponseStatus(res);
      })
      .then((data) => {
        localStorage.setItem("userId", data._id);
        return data;
      });
  };

  const getToken = (token) => {
    return fetch(`${baseUrl}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: headers,
    }).then((res) => {
      return checkResponseStatus(res);
    });
  };

  return { registerUser, loginUser, getToken };
}

const authApi = new AuthApi();

export default authApi;

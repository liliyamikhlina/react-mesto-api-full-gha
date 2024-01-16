import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../utils/authApi";

function Login({ onLogin }) {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.email || !formValue.password) {
      return;
    }
    authApi
      .loginUser(formValue.email, formValue.password)
      .then((data) => {
        if (data.token) {
          setFormValue({ username: "", password: "" });
        }
        onLogin(formValue.email);
        navigate('/', { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="auth">
      <p className="auth__title">Вход</p>
      <form onSubmit={handleSubmit}>
        <input
          className="auth__input"
          type="email"
          name="email"
          placeholder="Email"
          minLength="2"
          maxLength="40"
          required
          value={formValue.email}
          onChange={handleChange}
        />
        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Пароль"
          required
          value={formValue.password}
          onChange={handleChange}
        />
        <button className="auth__button" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;

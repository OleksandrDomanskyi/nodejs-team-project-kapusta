import { useState } from "react";
import { initialState } from "./initialState";
import s from "./auth-form.module.scss";

export default function AuthForm({ onSubmit }) {
  const [submitType, setSubmitType] = useState(null);
  const [form, setForm] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form }, submitType);
    setForm({ ...initialState });
  };

  const { email, password } = form;

  return (
    <form className={s.form} onSubmit={handleSubmit} action="">
      <label className={s.label} htmlFor="email">
        Email:
      </label>
      <input
        required
        className={s.input}
        value={email}
        onChange={handleChange}
        name="email"
        type="email"
        id="email"
        placeholder="your@email.com"
        pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
      />
      <label className={s.label} htmlFor="password">
        Password:
      </label>
      <input
        required
        className={s.input}
        value={password}
        onChange={handleChange}
        name="password"
        type="password"
        id="password"
        placeholder="Password"
      />
      <div className={s.buttons}>
        <button
          onClick={() => setSubmitType("login")}
          type="submit"
          name="log"
          className={s.login}
          //   disabled={!isEmailValid || !isPasswordValid || data.name?.length < 1}
        >
          LOG IN
        </button>
        <button
          onClick={() => setSubmitType("signup")}
          type="submit"
          name="reg"
          className={s.reg}
          //   disabled={!isEmailValid || !isPasswordValid || data.name?.length < 1}
        >
          REGISTRATION
        </button>
      </div>
    </form>
  );
}

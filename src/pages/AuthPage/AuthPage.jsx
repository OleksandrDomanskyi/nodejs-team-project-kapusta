import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { login, signup } from "../../redux/auth/auth-operations";

import AuthForm from "../../components/AuthForm/AuthForm";
import useLogin from "../../shared/hooks/useLogin";

import title from "../../images/title.svg";
import s from "./auth-page.module.scss";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useLogin();

    useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);

  const onSubmit = (data, type) => {
    if (type === "signup") {
      return dispatch(signup(data));
    }

    if (type === "login") {
      return dispatch(login(data));
    }
  };

  return (
    <>
      <div className={s.back}>
        <section className={s.section}>
          <div className={s.container}>
            <h1 className={s.title}>
              <img className={s.image} src={title} alt="" />
              Smart Finance
            </h1>
            <div className={s.wrapper}>
              {/* <span className={s.text}>You can log in with your Google Account:</span>
                <button className={s.google}>Google</button> */}
              {/* <span className={s.registration_text}>Or log in using an email and password, after registering:</span> */}
              <AuthForm onSubmit={onSubmit} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AuthPage;

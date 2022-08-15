import { useState } from "react";

import AuthForm from "../../components/AuthForm/AuthForm";
import BgWrapper from "../../components/BgWrapper";

import title from "../../images/title.svg"
import s from "./auth-page.module.scss"
const AuthPage = () => {
const login=()=>{

};
const reg=()=>{

}
  return (
    <>
      <div className={s.back}>
        <section className={s.section}>
            
          <div className={s.container}>
            <h1 className={s.title}><img className={s.image} src={title} alt="" />Smart Finance</h1>
            <div className={s.wrapper}>
                {/* <span className={s.text}>You can log in with your Google Account:</span>
                <button className={s.google}>Google</button> */}
                {/* <span className={s.registration_text}>Or log in using an email and password, after registering:</span> */}
                <AuthForm onSubmit={login} onSubmit2={reg}/>
                
            </div>
          </div>
        </section></div>
    </>
  );
};

export default AuthPage
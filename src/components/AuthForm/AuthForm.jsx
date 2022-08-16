
import { useState, } from 'react';
import s from "./auth-form.module.scss"


export default function AuthForm({ onSubmit, onSubmit2 }) {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    
    const isEmailValid = data.email.match(/[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]+/i);
    const isPasswordValid = data.password.length >= 6;
    const handleChange = ({ target }) => {
        
        const { name, value } = target;
        
        setData(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (e.target==="log"){
        const { email, password  } = data;
        onSubmit({ email, password })}else{            
        const { email, password  } = data;
        onSubmit2({ email, password })
        }
    };
    return (
        <form className={s.form} onSubmit={handleSubmit} action="">
            <label className={s.label} htmlFor="email">
                Email:
            </label>
            <input
                className={s.input}
                value={data.email}
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
                className={s.input}
                value={data.password}
                onChange={handleChange}
                name="password"
                type="password"
                id="password"
                placeholder="Password"
            />
            <div className={s.buttons}>
                <button
                    type='submit'
                    name='log'
                    className={s.login}
                    disabled={!isEmailValid || !isPasswordValid || data.name?.length < 1}>
                    LOG IN
                </button>
                <button
                    type='submit'
                    name="reg"
                    className={s.reg}
                    disabled={!isEmailValid || !isPasswordValid || data.name?.length < 1}>
                    REGISTRATION
                </button>         
            </div>    
        </form>
    )
};


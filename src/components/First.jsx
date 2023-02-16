import React, {useState} from 'react';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";


const First = () => {
    const [form, setForm] = useState("login");

    const changeForm = () => {
        if (form === "login") {
            setForm("register");
        } else {
            setForm("login");
        }
    };

    return (
        <div>
            <p>Первая задача:</p>
            {form === "login" ? <LoginForm /> : <RegisterForm />}
            <button onClick={changeForm}>Сменить форму</button>
        </div>
    );
};

export default First;
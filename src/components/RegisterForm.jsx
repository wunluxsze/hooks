import React from 'react';

function RegisterForm(props) {
    return (
        <form>
            <h3>Регистрация</h3>
            <input type="text" placeholder="Введите имя..."/><br/><br/>
            <input type="password" placeholder="Введите пароль..."/>
        </form>
    );
}

export default RegisterForm;
import React from 'react';

function LoginForm(props) {
    return (
        <form>
            <h3>Вход</h3>
            <input type="text" placeholder="Введите имя..."/><br/><br/>
            <input type="password" placeholder="Введите пароль..."/>
        </form>
    );
}

export default LoginForm;
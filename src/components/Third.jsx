import React, {useState} from 'react';

const Third = () => {
    const [value, setValue] = useState( "");

    const saveInLocalStorage = (event) => {
        setValue(event.target.value);
        localStorage.setItem(value, event.target.value);
        if (localStorage !== null) {
            console.log('get');
        }
    };

    return (
        <div>
            <p>Третья задача: (Консоль)</p>
            <input type="text" value={value} onChange={(event) => saveInLocalStorage(event)} />
        </div>
    );
};

export default Third;

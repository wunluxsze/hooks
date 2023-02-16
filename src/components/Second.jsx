import React, {useState, useEffect} from 'react';

const Second = () => {
    const [name, setName] = useState('');

    useEffect(() => {
       document.title = name;
    }, [name]);

    return (
        <div>
            <p>Вторая задача:</p>
            <input type="text" value={name} onChange={event => setName(event.target.value)}/>
        </div>
    );
}

export default Second;
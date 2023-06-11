import React, {useState} from "react";

const Greeting = () => {
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    return(
        <div>
            <label>
                Enter your name :
                <input type="text" value={name} onChange={handleInputChange} />
            </label>
            {name && <h3>Hello, {name}!</h3>}
        </div>
    )
}
export default Greeting;
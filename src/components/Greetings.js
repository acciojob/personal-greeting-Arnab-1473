import React, {useState} from "react";

const Greeting = () => {
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        setName(e.target.value);
    };

    return(
        <div>
            <p>Enter your name :</p>
                <input type="text" value={name} onChange={handleInputChange} />           
            {
            name && 
            <h3>Hello {name}!</h3>
            }
        </div>
    )
}
export default Greeting;
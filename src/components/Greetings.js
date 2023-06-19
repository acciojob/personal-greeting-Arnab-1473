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
            <span>Hello {name}!</span>
            }

        </div>
    )
}
export default Greeting;
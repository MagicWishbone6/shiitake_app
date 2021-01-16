import React from 'react';
import Result from './Result.jsx'

let nameInput = 'Felicia'
let senderInput = 'Anonymous'

function UserInput() {
    
    const handleClick = event => {
        nameInput = document.getElementById("nameInput").value
        senderInput = document.getElementById("senderInput").value
        Result.content.toName = nameInput
        Result.content.from = senderInput
        event.preventDefault()
    }

    return (
        <div>
            <h5>User Input Component</h5>
            <label 
                htmlFor="nameInput">
                    Type Your Recipient's Name here:
            </label>
            <input 
                type="text" 
                placeholder="Recipient's Name" 
                id="nameInput"
            ></input>
            <label 
                htmlFor="senderInput">
                    Type Your Name here:
            </label>
            <input 
                type="text"
                placeholder="Your Name"
                id="senderInput"
            ></input>
            <input 
                type="submit" 
                onClick={handleClick}
            ></input>
        </div>
    );
}

export default UserInput;
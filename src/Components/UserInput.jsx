import React from 'react';

function UserInput() {
    
    const handleClick = event => {
        let nameInput = document.getElementById("nameInput").value
        let senderInput = document.getElementById("senderInput").value
        console.log(`The recipient is ${nameInput}`)
        console.log(`Your name is ${senderInput}`)
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
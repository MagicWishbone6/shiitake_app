import React from 'react';
import Messages from './Messages.jsx'
import UserInput from './UserInput.jsx'

function AppForm() {
    return (
        <form>
            <h2>AppForm Component</h2>
            <Messages />
            <UserInput />
        </form>
    );
}

export default AppForm;
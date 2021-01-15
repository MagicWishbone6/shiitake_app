import React from 'react';
import AppForm from './AppForm.jsx'
import Result from './Result.jsx'

function Home() {
    return (
        <div>
            <h2>Home Component</h2>
            <AppForm /> 
            <Result />
        </div>
    );
}

export default Home;
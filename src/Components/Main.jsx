import React from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'

function Main(props) {
    return (
        <div className="main">
            <Route exact path="/" component={Home} />
        </div>
    );
}
export default Main;
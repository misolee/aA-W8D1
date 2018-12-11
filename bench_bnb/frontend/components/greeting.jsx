import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const welcomeMessage = () => {
        return (
            <div>
                <h1>Welcome, { currentUser.username }</h1>
                <button onClick={logout}>Logout</button>
            </div>
        );
    }

    const signUpOrIn = () => {
        return(
            <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </div>
        );
    }

    return currentUser ? welcomeMessage() : signUpOrIn(); 
};

export default Greeting;
import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionUtils from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    window.login = sessionUtils.login;
    window.signup = sessionUtils.signup;
    window.logout = sessionUtils.logout;

    ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
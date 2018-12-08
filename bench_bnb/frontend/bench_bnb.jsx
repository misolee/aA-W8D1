import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionUtils from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    window.login = sessionUtils.login;
    // window.signup = sessionUtils.signup;
    // window.logout = sessionUtils.logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch; // just for testing!

    ReactDOM.render(<Root store={store} />, root);
});
import React from 'react';
import ReactDOM from 'react-dom';
import * as sessionUtils from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: window.currentUser
            },
            session: {
                id: Object.keys(window.currentUser)[0]
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});

// { [window.currentUser.id]: window.currentUser }
// window.login = sessionUtils.login;
// window.signup = sessionUtils.signup;
// window.logout = sessionUtils.logout;
// window.getState = store.getState;
// window.dispatch = store.dispatch; // just for testing!
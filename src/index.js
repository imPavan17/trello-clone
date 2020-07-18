import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore' 

const store = configureStore()

store.subscribe(() => {
    // console.log(store.getState())
})

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store = {store}>
        <App />
    </Provider>, document.getElementById('root'));
});

serviceWorker.unregister();


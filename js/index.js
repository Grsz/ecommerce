import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';


const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk)
));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
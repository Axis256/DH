import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Provider} from 'react-redux';
import store from './store'
import registerServiceWorker from './mess/registerServiceWorker';
import BrowserRouter from "react-router-dom/es/BrowserRouter";
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
        , document.getElementById('root'));
registerServiceWorker();

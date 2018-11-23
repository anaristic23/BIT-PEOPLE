import React from 'react';
import ReactDOM from 'react-dom';
import './view/index.css';
import App from './view/App';
import * as serviceWorker from './serviceWorker';
import data from "./data/user_data";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App usersData={data} />
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();


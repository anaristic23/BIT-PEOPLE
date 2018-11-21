import React from 'react';
import ReactDOM from 'react-dom';
import './view/index.css';
import App from './view/App';
import * as serviceWorker from './serviceWorker';
import data from "./data/user_data"

ReactDOM.render(<App usersData={data} />, document.getElementById('root'));


serviceWorker.unregister();

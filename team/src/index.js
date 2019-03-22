import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/main.css';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import * as serviceWorker from './serviceWorker';


const store = configureStore();


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();

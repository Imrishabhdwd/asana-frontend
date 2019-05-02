import React from 'react';
import ReactDOM from 'react-dom';
import { push as Menu } from 'react-burger-menu';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import './App.css';
import Routes from './routes/Routes'
import * as serviceWorker from './serviceWorker';
import SideBar from './components/Sidebar'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store'
ReactDOM.render(
<Provider store={store}>
    <div id="App">
    <SideBar />
    <div id="page-wrap">
    <Routes />
    </div>
    </div>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

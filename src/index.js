import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import AddTask from './AddTask'; 
import App from './App';
import Login from './Login';
//ReactDOM.render(<AddTask />, document.getElementById('root'));

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/app" component={App} />
            <Route path="/toDoListReact" component={AddTask} />
            <Redirect to="/login" />
        </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

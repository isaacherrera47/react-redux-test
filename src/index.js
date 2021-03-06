import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Results from "./components/results";
import Details from "./components/details";
import store from "./redux/store";

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/results' component={Results}/>
                <Route path='/details/:itemId' component={Details}/>
                <Redirect from='/' to='/results'/>
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

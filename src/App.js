import React from 'react';
import Form from './components/Form';
import Result from './components/Result';
import List from './components/List';
import { createStore } from 'redux';
import mainReducer from './reducers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function PrivateRoute({ children }) {
    let isSubmit = store.getState() !== undefined && 'isSubmit' in store.getState() ? store.getState().isSubmit : false;

    return (
        <Route
            render={() =>
                isSubmit ? (
                children
                ) : (
                    <Redirect to={'/'} />
                )
            }
        />
    );
}

export default function App() {
    return (
        <Router>
            <div className="container w-50">
                <Switch>
                    <PrivateRoute path="/result">
                        <Result
                            store={store}>
                        </Result>
                    </PrivateRoute>
                    <Route exact path="/list">
                        <List
                            store={store}>
                        </List>
                    </Route>
                    <Route exact path="/">
                        <Form
                            store={store}>
                        </Form>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

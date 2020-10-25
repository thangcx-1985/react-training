import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

let isSubmit = false;

function PrivateRoute({ children }) {
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
    const [user, setUser] = useState({
        name: '',
        birthday: '',
        gender: '',
        describe: '',
        role: '',
    });

    const [showResult, setShowResult] = useState(false);

    function handleChange(e) {
        e.preventDefault();
        let target = e.target,
            name = target.name,
            value = target.value;

        setUser(Object.assign(user, {
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        isSubmit = true;
        setShowResult(true);
    }

    return (
        <Router>
            <div className="container w-50">
                <Switch>
                    <PrivateRoute path="/result">
                        <Result
                            showResult={showResult}
                            user={user}>
                        </Result>
                    </PrivateRoute>
                    <Route exact path="/">
                        <Form
                            handleChange={(e) => handleChange(e)}
                            handleSubmit={(e) => handleSubmit(e)}>
                        </Form>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

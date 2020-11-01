import React from "react";
import { Link } from "react-router-dom";
import ListGroup from './ListGroup';

function Result(props) {
    let store = props.store,
        user;

    if (store.getState() !== undefined && 'arrInfor' in store.getState()) {
        user = store.getState().arrInfor[0];
    }

    return (
        <div className="mt-4">
            <ListGroup user={user} key=""></ListGroup>
            <button type="button" className="btn btn-primary mt-4 go-back"><Link to="/">Go back</Link></button>
            <button type="button" className="btn btn-primary mt-4 go-back ml-4"><Link to="/list">List user</Link></button>
        </div>
    );
}

export default Result;
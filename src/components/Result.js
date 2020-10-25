import React from "react";
import {  useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
function Result(props) {
    let history = useHistory();

    return (
        props.showResult &&
        <div className="mt-4">
            Name: <label>{props.user.name}</label>
            <br/>
            Birthday: <label>{props.user.birthday}</label>
            <br/>
            Gender: <label className="text-capitalize">{props.user.gender}</label>
            <br/>
            Describe: <label>{props.user.describe}</label>
            <br/>
            Role: <label className="text-capitalize">{props.user.role}</label>
            <br/>
            <button type="button" className="btn btn-primary mt-4 go-back" onClick={history.goBack()}><Link to="/">Go back</Link></button>
        </div>
    );
}

export default Result;
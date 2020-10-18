import React from "react";

function Result(props) {
    return (
        props.data.showResult &&
        <div className="mt-4">
            Name: <label>{props.data.name}</label>
            <br/>
            Birthday: <label>{props.data.birthday}</label>
            <br/>
            Gender: <label className="text-capitalize">{props.data.gender}</label>
            <br/>
            Describe: <label>{props.data.describe}</label>
            <br/>
            Role: <label className="text-capitalize">{props.data.role}</label>
            <br/>
        </div>
    );
}

export default Result;
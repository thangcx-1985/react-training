import React from "react";

function ListGroup(props) {
    return (
        <ul className="list-group mb-4" key={props.index}>
            <li className="list-group-item">Name: <label>{props.user.name}</label></li>
            <li className="list-group-item">Birthday: <label>{props.user.birthday}</label></li>
            <li className="list-group-item">Gender: <label className="text-capitalize">{props.user.gender}</label></li>
            <li className="list-group-item">Describe: <label>{props.user.describe}</label></li>
            <li className="list-group-item">Role: <label className="text-capitalize">{props.user.role}</label></li>
        </ul>
    );
}

export default ListGroup;
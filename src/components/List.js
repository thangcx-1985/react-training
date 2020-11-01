import React from "react";
import { Link } from "react-router-dom";
import ListGroup from './ListGroup';

function List(props) {
    let store = props.store,
        listUsers;

    if (store.getState() !== undefined && 'arrInfor' in store.getState()) {
        listUsers = store.getState().arrInfor;
    }

    return (
        <div className="mt-4">
            {(typeof listUsers === 'object') ?
                listUsers.map((user, index) => 
                    <ListGroup user={user} key={index}></ListGroup>
                )
                : <p>List is empty</p>
            }

            <button type="button" className="btn btn-primary mb-4 go-back"><Link to="/">Go back</Link></button>
        </div>
    );
}

export default List;
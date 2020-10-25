import React from "react";
import {  useHistory } from "react-router-dom";

function Form(props) {
    let history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        props.handleSubmit(e);
        history.replace('/result');
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label className="font-weight-bold" htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" id="name" aria-describedby="name" onChange={(e) => props.handleChange(e)}/>
            </div>
            <div className="form-group">
                <label className="font-weight-bold" htmlFor="birthday">Birthday</label>
                <input type="date" className="form-control" name="birthday" id="birthday" placeholder="birthday" onChange={(e) => props.handleChange(e)}/>
            </div>
            <div className="form-group mb-0">
                <label className="font-weight-bold" htmlFor="birthday">Gender</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" onChange={(e) => props.handleChange(e)}/>
                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" onChange={(e) => props.handleChange(e)}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
            </div>
            <div className="form-group">
                <label className="font-weight-bold" htmlFor="describe">Describe about yourself</label>
                <textarea className="form-control" name="describe" id="describe" rows="5" onChange={(e) => props.handleChange(e)}></textarea>
            </div>
            <label className="font-weight-bold" htmlFor="role">Role</label>
            <select className="custom-select mb-4" onChange={(e) => props.handleChange(e)} name="role">
                <option>--- Select ---</option>
                <option value="student">Student</option>
                <option value="employee">Employee</option>
                <option value="customer">Customer</option>
            </select>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}

export default Form;
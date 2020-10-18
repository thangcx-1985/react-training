import React from "react";

function Form(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label className="font-weight-bold" htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name" id="name" aria-describedby="emailHelp" onChange={props.handleChange}/>
            </div>
            <div className="form-group">
                <label className="font-weight-bold" htmlFor="birthday">Birthday</label>
                <input type="date" className="form-control" name="birthday" id="birthday" placeholder="Birthday" onChange={props.handleChange}/>
            </div>
            <div className="form-group mb-0">
                <label className="font-weight-bold" htmlFor="birthday">Gender</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" onChange={props.handleChange}/>
                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" onChange={props.handleChange}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
            </div>
            <div className="form-group">
                <label className="font-weight-bold" htmlFor="describe">Describe about yourself</label>
                <textarea className="form-control" name="describe" id="describe" rows="5" onChange={props.handleChange}></textarea>
            </div>
            <label className="font-weight-bold" htmlFor="role">Role</label>
            <select className="custom-select mb-4" onChange={props.handleChange} name="role">
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
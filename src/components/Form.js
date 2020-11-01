import React from "react";
import { onChange, onSubmit } from '../actions';
import { useHistory, Link } from "react-router-dom";

function Form(props) {
    let history = useHistory();
    let store = props.store;
    function handleChange(e) {
        let target = e.target,
            name = target.name,
            value = target.value;

        store.dispatch(onChange({
            [name]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (store.getState() !== undefined && 'tempInfor' in store.getState()) {
            store.dispatch(onSubmit(
                store.getState().tempInfor
            ));
        }
        
        history.replace('/result');
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
                <label className="font-weight-bold" htmlFor="name">Name</label>
                <input type="text" className="form-control" name="name"  id="name" required onChange={(e) => handleChange(e)}/>
            </div>
            <div className="form-group">
                <label className="font-weight-bold" htmlFor="birthday">Birthday</label>
                <input type="date" className="form-control" name="birthday"  id="birthday" placeholder="birthday" required onChange={(e) => handleChange(e)}/>
            </div>
            <div className="form-group mb-0">
                <label className="font-weight-bold" htmlFor="birthday">Gender</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender"  id="inlineRadio1" value="male" required onChange={(e) => handleChange(e)}/>
                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
            </div>
            <div className="form-check form-check-inline mb-3">
                <input className="form-check-input" type="radio" name="gender"  id="inlineRadio2" value="female" required onChange={(e) => handleChange(e)}/>
                <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
            </div>
            <div className="form-group">
                <label className="font-weight-bold" htmlFor="describe">Describe about yourself</label>
                <textarea className="form-control" name="describe"  id="describe" rows="5" required onChange={(e) => handleChange(e)}></textarea>
            </div>
            <label className="font-weight-bold" htmlFor="role">Role</label>
            <select className="custom-select mb-4" required onChange={(e) => handleChange(e)} name="role">
                <option>--- Select ---</option>
                <option value="student">Student</option>
                <option value="employee">Employee</option>
                <option value="customer">Customer</option>
            </select>
            <button type="submit" className="btn btn-primary">Submit</button>
            <br/>
            <button type="button" className="btn btn-primary go-back mt-4"><Link to="/list">List user</Link></button>
        </form>
    );
}

export default Form;
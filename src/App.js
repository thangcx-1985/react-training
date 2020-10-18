import React, { Component } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            birthday: '',
            gender: '',
            describe: '',
            role: '',
            showResult: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        localStorage.setItem('infor', this.state);
        this.setState({
            showResult: 'true',
        });
    }

    render() {
        return (
            <div className="container w-50">
                <Form
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}>
                </Form>
                <Result data={this.state}></Result>
            </div>
        );
    }
}

export default App;

import React, {Component} from 'react';
import axios from "axios";

export default class Register extends React.Component {

    constructor() {
        super();
        this.state = {username: "", password: "", email: "", res: ""};
    }

    register() {
        axios.post("http://localhost:8080/api/register", {
            login: this.state.username,
            password: this.state.password,
            email: this.state.email,
        }).then(res => this.setState({res: JSON.stringify(res, null, 2)})).catch(res => this.setState({res: JSON.stringify(res, null, 2)}))
    }

    render() {
        return <div>
            <h1>Register</h1>
            <label>Username: </label>
            <input type="text" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
            <br/>
            <br/>

            <label>Email: </label>
            <input type="email" value={this.state.email} onChange={e => this.setState({email: e.target.value})}/>
            <br/>
            <br/>

            <label>Password: </label>
            <input type="password" value={this.state.password}
                   onChange={e => this.setState({password: e.target.value})}/>
            <br/>
            <br/>
            <button onClick={this.register.bind(this)}>Register</button>

            <br/>
            <pre>{this.state.res}</pre>
        </div>
    }


}
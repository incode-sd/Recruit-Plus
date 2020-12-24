/*
This component is responsible for rendering the login form for returning users.
*/
import React, { Component } from 'react'
import authApiManager from './authApiManager'
import './auth.css'

class Login extends Component {
    state = {
        loginName: '',
        password: ''
    }

    // update email and password in state with every keystroke in input field
    handleFieldChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    // Login the user when they press the login button
    handleLogin = e => {
        e.preventDefault()

        const credentials = {
            "username": this.state.loginName,
            "password": this.state.password
        }

        authApiManager.login(credentials)
            .then(() => {
                if (this.props.isAuthenticated()) {
                    this.props.loginUser()
                    this.props.history.push("/")
                }
            })
    }


    render() {
        return (
            <React.Fragment>
                <div className="jumbotron text-center welcome-view">
                    <header className="welcome-header">
                        <h2 className="font-weight-light text-center">Application Station</h2>
                        <h6 className="font-weight-light text-center">Search Job Easily</h6>
                    </header>
                    <form
                        id="login-form"
                        onSubmit={this.handleLogin}>
                        <input
                            id="loginName"
                            type="text"
                            placeholder="email"
                            onChange={this.handleFieldChange}
                            required
                        />
                        <br />
                        <input
                            id="password"
                            type="password"
                            placeholder="password"
                            onChange={this.handleFieldChange}
                            required
                        />
                        <br />
                        <button
                            type="submit"
                            value="Submit"
                            className="btn-success">
                            Login
                    </button>
                    </form>
                </div>

            </React.Fragment>
        )
    }
}

export default Login
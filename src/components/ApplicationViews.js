/*
This component is responsible for rendering components based on the url path.
*/

import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
// AUTH
import Login from './auth/Login'
import Register from './auth/Register'
// LOGGED IN VIEWS
import ApplicationList from './applications/ApplicationList'
import ApplicationDetail from './applications/ApplicationDetail'


class ApplicationViews extends Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path="/login" render={props => {
                    return !this.props.isLoggedIn ?
                        <Login
                            isAuthenticated={this.props.isAuthenticated}
                            loginUser={this.props.loginUser}
                            {...props} />
                        :
                        <Redirect to="/" />
                }} />
                <Route exact path="/register" render={props => {
                    return !this.props.isLoggedIn ?
                        <Register
                            isAuthenticated={this.props.isAuthenticated}
                            loginUser={this.props.loginUser}
                            {...props}
                        />
                        :
                        <Redirect to="/" />
                }} />
                <Route exact path="/" render={props => {
                    return this.props.isLoggedIn ?
                        <ApplicationList
                            getLoggedInUser={this.props.getLoggedInUser}
                            {...props}
                        />
                        :
                        <Redirect to="/login" />
                }} />
                <Route exact path="/applications" render={props => {
                    return this.props.isLoggedIn ?
                        <ApplicationList
                            getLoggedInUser={this.props.getLoggedInUser}
                            {...props}
                        />
                        :
                        <Redirect to="/login" />
                }} />
                <Route exact path="/applications/:applicationId(\d+)" render={props => {
                    return this.props.isLoggedIn ?
                        <ApplicationDetail
                            applicationId={props.match.params.applicationId}
                            getLoggedInUser={this.props.getLoggedInUser}
                            {...props}
                        />
                        :
                        <Redirect to="/login" />
                }} />

            </React.Fragment>
        )
    }
}

export default ApplicationViews
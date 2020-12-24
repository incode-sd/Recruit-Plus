import React, { Component } from 'react'
// STYLES
import 'bootstrap/dist/css/bootstrap.min.css'
import './ApplicationStation.css'


class ApplicationStation extends Component {
    state = {
        isLoggedIn: false
    }

    isAuthenticated = () => Boolean(localStorage.getItem("appStationCred"))

    // updates state for isLoggedIn to true when logged in
    loginUser = () => {
        this.setState({ isLoggedIn: this.isAuthenticated() })    
    }


    // handles logout functionality
    clearUser = () => {
        localStorage.removeItem('appStationCred')
        localStorage.removeItem('appStationToken')
        this.setState({ isLoggedIn: this.isAuthenticated() })
    }


    // check for logged in user on re-render
    componentDidMount() {
        this.setState({ isLoggedIn: this.isAuthenticated() })
    }

    render() {
        return (
        )
    }
}

export default ApplicationStation
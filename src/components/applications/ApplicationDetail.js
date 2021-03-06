/*
                This component is responsible for rendering the ApplicationDetail 
                component. Application detail will allow users to edit or delete
                an application
*/

// REACT
import React, { Component } from 'react'

// DATA
import apiManager from '../../modules/apiManager'

// COMPONENTS
import EditApplicationForm from './EditApplicationForm'

// STYLES
import './ApplicationDetail.css'

class ApplicationDetail extends Component {
    appId = this.props.match.params.applicationId

    state = {
        jobTitle: '',
        companyName: '',
        status: '',
        link: '',
        jobDescription: '',
        loadingStatus: false
    }


    // get application, company, status, and update state
    getApplication = () => {
        apiManager.get(`jobs/${this.appId}`)
            .then(app => {
                this.setState({
                    jobTitle: app.title,
                    companyName: app.company.name,
                    status: app.status.status,
                    link: app.link,
                    jobDescription: app.description
                })
            })
    }

    // handle delete
    handleDeleteApp = () => {
        this.setState({ loadingStatus: true })
        let confirmation = window.confirm(
            "Are you sure you want to delete this application?"
        )
        if (confirmation) {
            apiManager.delete("jobs", this.appId)
                .then(() => {
                    this.props.history.push("/")
                })
        } else {
            this.setState({ loadingStatus: false })
        }
    }

    componentDidMount() {
        this.getApplication()
    }

    render() {
        return (
            <div className="application-details">
                <div className="application-header">
                    <h2 className="page-title"><span>{this.state.companyName.toUpperCase()}</span> <span>{this.state.jobTitle}</span></h2>
                </div>
                <div className="application-status">
                    <p>Status: {this.state.status}</p>
                </div>
                <div className="application-link">
                    {this.state.link ?
                    <p><a href={this.state.link} target="_blank" rel="noopener noreferrer">View External Job Description</a></p>
                    : null}
                </div>
                <p className="application-description">{this.state.jobDescription}</p>
                <div className="buttons">
                    <EditApplicationForm
                        getApplication={this.getApplication}
                        appId={this.appId}
                    />
                    <button
                        type="button"
                        className="btn btn-danger delete-list btn-sm"
                        onClick={() => this.handleDeleteApp()}
                        disabled={this.state.loadingStatus}
                    >
                        Delete
                        </button>
                </div>
            </div>
        )
    }
}

export default ApplicationDetail
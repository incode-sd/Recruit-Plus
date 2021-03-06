/*
               This component is responsible for rendering the ApplicationList component. 
                When a user is first logged in, they will see the ApplicationList. A
                user can see cards for their applications as well as a button to add a
                new application.
*/

// REACT
import React, { Component } from 'react'
// COMPONENTS
import ApplicationCard from './ApplicationCard'
import ApplicationForm from './ApplicationForm'
// STYLES
import './ApplicationList.css'
// DATA
import apiManager from '../../modules/apiManager'

class ApplicationList extends Component {
    state = {
        applications: []
    }


    // gets applications for user
    getApplications = () => {
        apiManager.get("jobs")
            .then(jobs => {
                this.setState({ applications: jobs })
            })
    }

    componentDidMount() {
        this.getApplications()
    }

    render() {
        return (
            <React.Fragment>
                <div className="top-of-page">
                    <h2 className="page-title">Applications</h2>
                    <div className="top-of-page-button">
                        <ApplicationForm
                            getApplications={this.getApplications}
                        />
                    </div>
                </div>
                <section className="application-list">
                    {this.state.applications.map(job =>
                        <ApplicationCard
                            key={job.id}
                            job={job}
                        />
                    )}
                </section>
            </React.Fragment>
        )
    }
}

export default ApplicationList
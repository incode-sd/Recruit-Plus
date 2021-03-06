/*
        This component is responsible for rendering the QuestionList component.
*/

// REACT
import React, { Component } from 'react'
// DATA
import apiManager from '../../modules/apiManager'
// COMPONENTS
import QuestionCard from './QuestionCard'
import QuestionForm from './QuestionForm'
// STYLES
import './QuestionList.css'

class QuestionList extends Component {
    state = {
        questions: []
    }

    // gets questions for user
    getQuestions = () => {
        apiManager.get("questions")
            .then(questions => {
                let reverseQuestions = []
                for (let i = questions.length - 1; i >= 0; i--) {
                    reverseQuestions.push(questions[i])
                }
                this.setState({ questions: reverseQuestions })
            })
    }

    componentDidMount() {
        this.getQuestions()
    }

    render() {
        return (
            <React.Fragment>
                <div className="top-of-page">
                    <h2 className="page-title">Questions</h2>
                    <div className="top-of-page-button">
                        <QuestionForm
                            getQuestions={this.getQuestions}
                        />
                    </div>
                </div>
                <section className="question-list">
                    {this.state.questions.map(question =>
                        <QuestionCard
                            key={question.id}
                            question={question}
                        />
                    )}
                </section>
            </React.Fragment>
        )
    }
}

export default QuestionList
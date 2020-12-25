/* 
                This module exports a function to create default questions
                when a new user is created.
*/

import apiManager from './apiManager'
const post = (question) => apiManager.post("questions", question)

// creates default questions in database for user
export default function createDefaultQuestions() {
    Promise.all([
        
        post({ 
            question: "Describe a difficult work situation or project and how you overcame it.",
            is_from_interviewer: true
        }),

        post({ 
            question: "How do you handle stress and pressure?",
            is_from_interviewer: true
        }),

    ])
}

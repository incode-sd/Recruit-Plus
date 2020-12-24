/*             This module contains authorization specific fetch calls to the
                database. This module leverages the power of apiManager.js.
*/


const baseUrl = "http://localhost:8000"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    
    login(credentials) { 
        return fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(response => {
                if ("valid" in response && response.valid && "token" in response) {
                    localStorage.setItem("appStationToken", response.token)
                    localStorage.setItem("appStationCred", true)
                } else {
                    alert("Username or password is incorrect.")
                }
            })
    },

    register(credentials) {
        return fetch(`${baseUrl}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(response => response.json())
            .then(response => {
                if ("token" in response) {
                    // place token in local storage and log in the user
                    localStorage.setItem("appStationToken", response.token)
                    localStorage.setItem("appStationCred", true)
                    return(response)
                } else {
                    alert("That email address is already registered.")
                }
            })

    }
}
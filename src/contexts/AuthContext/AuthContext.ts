import React from "react"

export const AuthContext = React.createContext({
    isAuthenticated: false, //default
    login: () => console.warn('Cannot access Authentication to login.'),
    logout: () => console.warn('Cannot access Authentication to logout.')
})


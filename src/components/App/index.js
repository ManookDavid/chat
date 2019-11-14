import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import './index.scss'

const withRouter = Component => props => {
    return (
        <BrowserRouter>
            <Component {...props}/>
        </BrowserRouter>
    )
}

const App = () => {
    return(
        <h1>Hello World</h1>
    )
}
export default withRouter(App)
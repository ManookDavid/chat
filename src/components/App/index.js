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
        <div>
           <h1>Hello World</h1>
        </div>
    )
}
export default withRouter(App)
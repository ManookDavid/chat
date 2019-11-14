import React from 'react'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import './index.scss'
import Login from '../Login'

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
           <Switch>
               <Route path='/' exact>
                   <Login/>
               </Route>
           </Switch>
        </div>
    )
}
export default withRouter(App)
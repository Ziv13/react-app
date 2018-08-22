import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'

import App from '../App'
import AppHome from '../pages/Home'
import AppLogin from '../pages/Login'
import AppRegister from '../pages/Register'



export default class extends Component {

    render () {
       return (
            <Router>
                <App>
                    <Switch>
                        <Route path = "/login" component = { AppLogin } />
                        <Route path = "/register" component = { AppRegister } />                        
                        <Route path = "/" component = { AppHome } />
                        
                    </Switch>
                </App>
            </Router>
       )
      
    }
}
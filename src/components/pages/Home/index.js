import React, { Component } from 'react'
import './index.scss'
import HomeBanner from './HomeBanner'
class Home extends Component {

    render() {
        return (
            <div className ="app-home">
                this is home
                <HomeBanner/>
            </div>
        )
    }
}
    export default Home
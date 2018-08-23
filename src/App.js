import React, { Component } from 'react';
import { withRouter, Link } from  'react-router-dom'
import connect from './modules/connect'

class App extends Component {

  componentWillReceiveProps (props){
    //当路由切换的时候
    let {pathname} = props.location
    if ( pathname !== this.props.location.pathname ){
        this.checkLogin(props)
        
    }
  }

  componentWillMount () {
    //当直接进入某个路由的时候判断是否登录
    this.checkLogin(this.props)
  }

  checkLogin (props) {//登录判断函数
    let {commons, history} = this.props 
    if (props.location.pathname !== '/login' ){
      if ( !commons.user_state ){
        history.replace('/login')
      }
    }
  }



  render() {
    return (
      <div className="App">
        <Link to = "/login">登录</Link>
        {this.props.children}
      </div>
    );
  }
}

export default connect(withRouter(App), 'commons')

import React, { Component } from 'react';
import { withRouter } from  'react-router-dom'
import connect from './modules/connect'
import SpinLoading from './components/SpinLoading'
import { Button,Spin,Icon } from 'antd';
const antIcon = <Icon type="meh-o" style={{ fontSize: 24, height: 20 }} spin />;

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
        {this.props.children}
        <SpinLoading loading={true} />
        <Button type="primary">Primary</Button>
        <Spin indicator={antIcon} />
      </div>
     
      
    )
  }
}

export default connect(withRouter(App), 'commons')

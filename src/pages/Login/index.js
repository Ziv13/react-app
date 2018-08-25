import React, { Component } from 'react'
import connect from '../../modules/connect'
import './index.scss'
class Login extends Component {
    constructor (props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        console.log(this.props)
    }
    handleSubmit (e) {
        e.preventDefault()
        
        let username = this.username.value 
        let password = this.password.value
       
        this.props.commons_actions.login({
            username,password,
            success: () => {
                this.props.history.replace('/')
            }
        })
    }

    render() {
        return (
            <div className ="app-login">
                <div className="login">
                        <div className="box png">
                            <div className="logo png"></div>
                            <div className="input" >
                                <form onSubmit = { this.handleSubmit } className="log">
                                    <div className="name">
                                        <label>用户名</label>
                                        <input ref = { el => this.username = el } type="text"  placeholder="用户名" required />
                                    </div>
                                    <div className="pwd"  >
                                        <label>密　码</label>
                                        <input ref ={ el => this.password = el }  type="password"  placeholder="密码"  required/>
                                        <input type="submit" className="submit"  value="登录" />
                                    </div>
                                   
                                </form>
                            </div>
                        </div>
                        <div className="footer"></div>
                    </div>

                    <div className="bottom">
                    <p>适用浏览器：360、FireFox、Chrome、Safari、Opera、傲游、搜狗、世界之窗. 不支持IE8及以下浏览器。</p>
                    <p>More Templates <a >模板之家</a> - Collect from <a>网页模板</a></p>
                    </div>
            </div>
        )
    }
}
    export default connect(Login, 'commons')
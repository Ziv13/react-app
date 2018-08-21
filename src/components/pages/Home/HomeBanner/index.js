
import React, { Component } from 'react'
import './index.scss'
import Swiper from 'swiper/dist/js/swiper.js'
// https://m.maizuo.com/v4/api/billboard/home?__t=1533886411865


//无状态组件，本质是一个函数，用于某些不需要自己的状态，只是用来显示数据的地方
const SlideItem = (props) => {
    let { data } = props
    return (
        <div className="swiper-slide">
            <img width="100%" src={data.imageUrl} alt=""/>
        </div>
    )

}

class HomeBanner extends Component {
    constructor (props) {
        super(props)
        this.state = {
            billboards: []
        }
        
    }
    getBillboards () {
        this.$http.get('/mz/v4/api/billboard/home', {
            params: { __t: Date.now() }
        }).then(res => {
            console.log(res.data.data.billboards)
            this.setState({ billboards: res.data.data.billboards })
        })
    }
    componentDidUpdate () {
        if (!this.swiper) {
            this.swiper = new Swiper(this.el, {
                pagination: { el: '.swiper-pagination' }
            })
        }      
    }
    componentDidMount () {
        this.getBillboards()
        
    }
    renderSlideItems () {
        let { billboards } = this.state
        
        return billboards.forEach(item => (<SlideItem key = {item.id} data = {item}
             />))
    }
    render () {
        return (
            <div ref = {el => this.el = el} className="swiper-container">
                <div className="swiper-wrapper">
                    { this.renderSlideItems() }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }

}



export default HomeBanner
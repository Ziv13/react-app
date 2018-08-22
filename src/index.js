import React from 'react';
import ReactDOM from 'react-dom';

//全局引入swiper样式
import 'swiper/dist/css/swiper.min.css'

import './modules/config'

import './stylesheets/main.scss'

//全局配置
import './modules/config'

//全局路由
import Router from './router'

import store from './store'

import { Provider } from 'react-redux'


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store = {store} >
        <Router/>
    </Provider>
, document.getElementById('root'));

registerServiceWorker();

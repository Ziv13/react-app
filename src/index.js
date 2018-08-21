import React from 'react';
import ReactDOM from 'react-dom';

//全局引入swiper样式
import 'swiper/dist/css/swiper.min.css'

import './modules/config'

import App from './App';

import './stylesheets/main.scss'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

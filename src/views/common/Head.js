import  React, {Component } from 'react';
import add from '../../css/Address.module.css';
import { isMethod } from '@babel/types';
import * as api from '../../api/address';
import axios from 'axios';
class Head extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let tuser=localStorage.getItem('user');
        return(
            <div className={add.headWrap}>
                <div className={add.header}>
                    <div className={add.logo}>
                        <img src={"http://i1.mbscss.com/img/moonbasa/2014/02/25/logo.jpg"}/>
                    </div>
                    <div className={add.practice}>
                        <span>9年品质保证</span>|<span>7天无条件退换货</span>|
                    </div>
                    <div className={add.right}>
                    <div className={add.helpmsg}>
                        <span style={{color: '#e8e8e8'}}>|</span>
                        <a className={add.help}>帮助中心</a>
                        <a target="_blank" className={add.weixin} style={{cursor: 'pointer'}}>微信</a>
                        <a className={add.mobile} target="_blank">手机版<img src={"http://i2.mbscss.com/img/moonbasa/2014/02/25/download.jpg"}/></a>
                    </div>
                    <div className={add.lefth}>
                        <ul>
                            <li>您好,{tuser}</li>
                            <li style={{color: '#e8e8e8'}}>|</li>
                            <li>我的梦芭莎</li>
                            <li style={{color: '#e8e8e8'}}>|</li>
                            <li>退出登录</li>
                        </ul>
                    </div>
                    <div className={add.step}>
                        <ul>
                            <li>我的购物车</li>
                            <li className={add.liname}>填写订单信息</li>
                            <li>订单提交成功</li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Head;